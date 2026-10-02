# Gallery And Animation Audit

## Gallery Totals

- Quad 1 Hour: 10 photos added, 14 gallery photos total.
- Quad 2 Hours: 10 photos added, 14 gallery photos total.
- Quad + Camel: 9 photos added, 13 gallery photos total.
- Camel Ride, Hot Air Balloon and Paragliding: no quad photos added.

## Final Quad 1 Hour Gallery

1. `/images/tours/quad-1hour-gallery-1.jpg`
2. `/images/tours/quad-1hour-gallery-2.jpg`
3. `/images/tours/quad-1hour-gallery-3.jpg`
4. `/images/tours/quad-1hour-gallery-4.jpg`
5. `/images/tours/tour-extra-images/quad-1hour/quad-1hour-extra-01.jpeg`
6. `/images/tours/tour-extra-images/quad-1hour/quad-1hour-extra-02.jpeg`
7. `/images/tours/tour-extra-images/quad-1hour/quad-1hour-extra-03.jpeg`
8. `/images/tours/tour-extra-images/quad-1hour/quad-1hour-extra-04.jpeg`
9. `/images/tours/tour-extra-images/quad-1hour/quad-1hour-extra-05.jpeg`
10. `/images/tours/tour-extra-images/quad-1hour/quad-1hour-extra-06.jpeg`
11. `/images/tours/tour-extra-images/quad-1hour/quad-1hour-extra-07.jpeg`
12. `/images/tours/tour-extra-images/quad-1hour/quad-1hour-extra-08.jpeg`
13. `/images/tours/tour-extra-images/quad-1hour/quad-1hour-extra-09.jpeg`
14. `/images/tours/tour-extra-images/quad-1hour/quad-1hour-extra-10.jpeg`

## Final Quad 2 Hours Gallery

1. `/images/tours/quad-2hours-main.jpg`
2. `/images/tours/quad-2hours-gallery-1.jpg`
3. `/images/tours/quad-2hours-gallery-2.jpg`
4. `/images/tours/quad-2hours-gallery-3.jpg`
5. `/images/tours/tour-extra-images/quad-2hours/quad-2hours-extra-01.jpeg`
6. `/images/tours/tour-extra-images/quad-2hours/quad-2hours-extra-02.jpeg`
7. `/images/tours/tour-extra-images/quad-2hours/quad-2hours-extra-03.jpeg`
8. `/images/tours/tour-extra-images/quad-2hours/quad-2hours-extra-04.jpeg`
9. `/images/tours/tour-extra-images/quad-2hours/quad-2hours-extra-05.jpeg`
10. `/images/tours/tour-extra-images/quad-2hours/quad-2hours-extra-06.jpeg`
11. `/images/tours/tour-extra-images/quad-2hours/quad-2hours-extra-07.jpeg`
12. `/images/tours/tour-extra-images/quad-2hours/quad-2hours-extra-08.jpeg`
13. `/images/tours/tour-extra-images/quad-2hours/quad-2hours-extra-09.jpeg`
14. `/images/tours/tour-extra-images/quad-2hours/quad-2hours-extra-10.jpeg`

## Final Quad + Camel Gallery

1. `/images/tours/quad-camel-main.jpg`
2. `/images/tours/quad-camel-gallery-2.jpg`
3. `/images/tours/quad-camel-gallery-3.jpg`
4. `/images/tours/quad-camel-gallery-4.jpg`
5. `/images/tours/tour-extra-images/quad-camel/quad-camel-extra-01.jpeg`
6. `/images/tours/tour-extra-images/quad-camel/quad-camel-extra-02.jpeg`
7. `/images/tours/tour-extra-images/quad-camel/quad-camel-extra-03.jpeg`
8. `/images/tours/tour-extra-images/quad-camel/quad-camel-extra-04.jpeg`
9. `/images/tours/tour-extra-images/quad-camel/quad-camel-extra-05.jpeg`
10. `/images/tours/tour-extra-images/quad-camel/quad-camel-extra-06.jpeg`
11. `/images/tours/tour-extra-images/quad-camel/quad-camel-extra-07.jpeg`
12. `/images/tours/tour-extra-images/quad-camel/quad-camel-extra-08.jpeg`
13. `/images/tours/tour-extra-images/quad-camel/quad-camel-extra-09.jpeg`

## Gallery Implementation

- The existing first four photos remain the initial gallery on every Tour Detail page.
- The native Astro/JavaScript lightbox uses one on-demand image element instead of rendering every full-resolution photo.
- Controls include previous, next, close, image count, Escape, ArrowLeft, ArrowRight, backdrop close and mobile swipe.
- The dialog returns focus to its trigger and uses native modal focus containment.
- The three mapped quad galleries are the only galleries that reference `/tour-extra-images/`.

## Animation System

No animation library was added. The existing `MotionObserver.astro` was upgraded so one IntersectionObserver now handles both reveal elements and the statistics counter trigger.

Animated areas include:

- Homepage and page heroes
- Section labels, headings and grouped body content
- Tour cards and deal cards
- Tour galleries and the lightbox
- Statistics and counters
- Contact information and map content
- Related tours and FAQs
- Approved review cards and form feedback
- Footer columns and social controls
- Existing one-time WhatsApp attention animation

Performance precautions:

- Transform and opacity are used for reveal and lightbox motion.
- Reveal animations run once and observed elements are immediately unobserved.
- Reduced-motion users receive visible content and final counter values without animation.
- Hero images remain high priority; below-the-fold images use lazy loading and asynchronous decoding.
- Extra gallery images are not requested until selected in the lightbox.
- No preload list, parallax, recurring animation or new JavaScript dependency was added.

## Files Modified For This Work

- `src/data/tours.ts`
- `src/components/TourGallery.astro`
- `src/components/MotionObserver.astro`
- `src/components/StatsSection.astro`
- `src/components/TourReviewForm.astro`
- `src/components/DealTourCard.astro`
- `src/components/ToursListingCard.astro`
- `src/components/SiteFooter.astro`
- `src/components/SiteHeader.astro`
- `src/components/ContactHero.astro`
- `src/components/ToursHero.astro`
- `src/components/TourDetailHero.astro`
- `src/components/ReviewCard.astro`
- `src/components/RelatedTours.astro`
- `src/components/TourCard.astro`
- `src/pages/index.astro`
- `public/images/tours/tour-extra-images/`

Footer links added:

- Instagram: `https://www.instagram.com/atlas_quad_palmeraie?utm_source=qr&igsh=MXV2ZnMwMGdrbXQ4aw==`
- Facebook: `https://www.facebook.com/share/1JqPmPaaei/`
