interface Env {
  DB: D1Database;
}

type PublicReview = {
  id: number;
  tour_slug: string;
  name: string;
  comment: string;
  rating: number;
  location_rating: number | null;
  experience_rating: number | null;
  guide_rating: number | null;
  value_rating: number | null;
  created_at: string;
};

type ReviewSummary = {
  review_count: number;
  average_rating: number | null;
};

type JsonRecord = Record<string, unknown>;

const slugPattern = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function json(data: unknown, status = 200) {
  return Response.json(data, {
    status,
    headers: {
      'Cache-Control': 'no-store',
      'X-Content-Type-Options': 'nosniff',
    },
  });
}

function isRecord(value: unknown): value is JsonRecord {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function trimmedString(value: unknown) {
  return typeof value === 'string' ? value.trim() : '';
}

function requiredRating(value: unknown) {
  return Number.isInteger(value) && Number(value) >= 1 && Number(value) <= 5
    ? Number(value)
    : null;
}

function optionalRating(value: unknown): number | null | undefined {
  if (value === undefined || value === null || value === '') return null;
  const rating = requiredRating(value);
  return rating ?? undefined;
}

function validTourSlug(value: string) {
  return value.length <= 120 && slugPattern.test(value);
}

export const onRequestGet: PagesFunction<Env> = async ({ request, env }) => {
  const tourSlug = new URL(request.url).searchParams.get('tour')?.trim() ?? '';

  if (!validTourSlug(tourSlug)) {
    return json({ success: false, error: 'A valid tour is required.' }, 400);
  }

  try {
    const reviewsQuery = env.DB.prepare(`
      SELECT
        id,
        tour_slug,
        name,
        comment,
        rating,
        location_rating,
        experience_rating,
        guide_rating,
        value_rating,
        created_at
      FROM reviews
      WHERE tour_slug = ?
        AND approved = 1
      ORDER BY created_at DESC
      LIMIT 20
    `).bind(tourSlug);

    const summaryQuery = env.DB.prepare(`
      SELECT
        COUNT(*) AS review_count,
        AVG(rating) AS average_rating
      FROM reviews
      WHERE tour_slug = ?
        AND approved = 1
    `).bind(tourSlug);

    const [reviewResult, summaryResult] = await Promise.all([
      reviewsQuery.all<PublicReview>(),
      summaryQuery.first<ReviewSummary>(),
    ]);

    return json({
      success: true,
      reviews: reviewResult.results,
      summary: {
        count: Number(summaryResult?.review_count ?? 0),
        average: summaryResult?.average_rating === null || summaryResult?.average_rating === undefined
          ? null
          : Number(Number(summaryResult.average_rating).toFixed(1)),
      },
    });
  } catch {
    return json({ success: false, error: 'Reviews are temporarily unavailable.' }, 500);
  }
};

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  if (!request.headers.get('content-type')?.toLowerCase().includes('application/json')) {
    return json({ success: false, error: 'Please check your review details.' }, 415);
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return json({ success: false, error: 'Please check your review details.' }, 400);
  }

  if (!isRecord(body)) {
    return json({ success: false, error: 'Please check your review details.' }, 400);
  }

  const tourSlug = trimmedString(body.tourSlug);
  const name = trimmedString(body.name);
  const email = trimmedString(body.email).toLowerCase();
  const comment = trimmedString(body.comment);
  const honeypot = trimmedString(body.company);
  const rating = requiredRating(body.rating);
  const locationRating = optionalRating(body.locationRating);
  const experienceRating = optionalRating(body.experienceRating);
  const guideRating = optionalRating(body.guideRating);
  const valueRating = optionalRating(body.valueRating);

  const invalid =
    honeypot.length > 0 ||
    !validTourSlug(tourSlug) ||
    name.length < 2 ||
    name.length > 80 ||
    email.length > 254 ||
    !emailPattern.test(email) ||
    comment.length < 10 ||
    comment.length > 1500 ||
    rating === null ||
    locationRating === undefined ||
    experienceRating === undefined ||
    guideRating === undefined ||
    valueRating === undefined;

  if (invalid) {
    return json({ success: false, error: 'Please check your review details.' }, 400);
  }

  try {
    await env.DB.prepare(`
      INSERT INTO reviews (
        tour_slug,
        name,
        email,
        comment,
        rating,
        location_rating,
        experience_rating,
        guide_rating,
        value_rating,
        approved
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, 0)
    `).bind(
      tourSlug,
      name,
      email,
      comment,
      rating,
      locationRating,
      experienceRating,
      guideRating,
      valueRating,
    ).run();

    return json({
      success: true,
      message: 'Thank you! Your review was submitted and will appear after approval.',
    }, 201);
  } catch {
    return json({ success: false, error: 'We could not submit your review. Please try again.' }, 500);
  }
};
