CREATE TABLE IF NOT EXISTS reviews (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  tour_slug TEXT NOT NULL,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  comment TEXT NOT NULL,
  rating INTEGER NOT NULL CHECK (rating BETWEEN 1 AND 5),
  location_rating INTEGER CHECK (location_rating IS NULL OR location_rating BETWEEN 1 AND 5),
  experience_rating INTEGER CHECK (experience_rating IS NULL OR experience_rating BETWEEN 1 AND 5),
  guide_rating INTEGER CHECK (guide_rating IS NULL OR guide_rating BETWEEN 1 AND 5),
  value_rating INTEGER CHECK (value_rating IS NULL OR value_rating BETWEEN 1 AND 5),
  approved INTEGER NOT NULL DEFAULT 0 CHECK (approved IN (0, 1)),
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_reviews_tour_slug
ON reviews(tour_slug);

CREATE INDEX IF NOT EXISTS idx_reviews_approved
ON reviews(approved);

CREATE INDEX IF NOT EXISTS idx_reviews_public_listing
ON reviews(tour_slug, approved, created_at DESC);
