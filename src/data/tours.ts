export type Tour = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  overview: string;
  duration: string;
  location: string;
  activityTypes: string[];
  audience: string;
  priceLabel: string;
  heroImage: string;
  cardImage: string;
  gallery: string[];
  galleryAlts?: string[];
  imageAlt: string;
  included?: string[];
  excluded?: string[];
};

export type FeaturedDeal = {
  title: string;
  image: string;
  imageAlt: string;
  duration: string;
  audience: string;
  price: string;
  href: string;
  badge?: string;
};

export type TourListingItem = {
  slug: string;
  title: string;
  image: string;
  imageAlt: string;
  duration: string;
  audience: string;
  price: number;
  priceLabel: string;
  rating: number;
  destination: 'La palmeraie' | 'Marrakesh';
  activities: Array<'Quad Bike' | 'Camel Ride' | 'Hot Air Balloon' | 'Paragliding'>;
};

export const contact = {
  phone: '+212 698-701781',
  phoneHref: 'tel:+212698701781',
  email: 'kechm225@gmail.com',
  emailHref: 'mailto:kechm225@gmail.com',
  whatsappHref: 'https://wa.me/212698701781',
};

export const site = {
  name: 'Atlas Quad Palmeraie',
  origin: 'https://atlasquadpalmeraie.com',
  logo: '/images/logo.png',
  heroImage: '/images/hero-palmeraie-quad.png',
  aboutImage: '/images/marrakech-sunset.jpg',
};

export const featuredDeals: FeaturedDeal[] = [
  {
    title: '1 Hour Quad Bike Activity in Marrakech Palmeraie',
    image: '/images/tours/quad-palmeraie.jpg',
    imageAlt: 'Quad bike activity among the palm groves of Marrakech Palmeraie',
    duration: '1 Hour',
    audience: 'All Levels',
    price: '€15.00',
    href: '/tours/1-hour-quad-bike-marrakech-palmeraie/',
    badge: 'Best Seller',
  },
  {
    title: 'Quad Bike & Camel Ride in Marrakech Palmeraie',
    image: '/images/tours/quad-camel-main.jpg',
    imageAlt: 'Quad bike and camel ride activity in Marrakech Palmeraie',
    duration: '2 Hours',
    audience: 'Couples & Groups',
    price: '€25.00',
    href: '/tours/quad-bike-camel-ride-marrakech-palmeraie/',
  },
  {
    title: 'Hot Air Balloon Experience in Marrakech',
    image: '/images/tours/hot-air-balloon-marrakech.jpg',
    imageAlt: 'Hot air balloon flight over Marrakech at sunrise',
    duration: '3 Hours',
    audience: 'Includes Transport',
    price: '€70.00',
    href: '/tours/hot-air-balloon-marrakech-sunrise-atlas-view/',
  },
];

export const tourListings: TourListingItem[] = [
  {
    slug: '1-hour-quad-bike-marrakech-palmeraie',
    title: '1 Hour Quad Bike Activity in Marrakech Palmeraie',
    image: '/images/tours/quad-palmeraie.jpg',
    imageAlt: 'Quad bike riders crossing the palm grove trails of Marrakech Palmeraie',
    duration: '1 Hour',
    audience: 'All Levels',
    price: 15,
    priceLabel: '\u20AC15.00',
    rating: 5,
    destination: 'La palmeraie',
    activities: ['Quad Bike'],
  },
  {
    slug: 'quad-bike-camel-ride-marrakech-palmeraie',
    title: 'Marrakech: 2-Hour Quad Bike & Camel Ride in Palmeraie',
    image: '/images/tours/quad-camel-main.jpg',
    imageAlt: 'Quad bike riders and camels in Marrakech Palmeraie',
    duration: '2 Hours',
    audience: 'Couples & Groups',
    price: 25,
    priceLabel: '\u20AC25.00',
    rating: 5,
    destination: 'La palmeraie',
    activities: ['Quad Bike', 'Camel Ride'],
  },
  {
    slug: 'hot-air-balloon-marrakech-sunrise-atlas-view',
    title: 'Hot Air Balloon Marrakech - Sunrise Flight & Atlas Mountains view',
    image: '/images/tours/hot-air-balloon-marrakech.jpg',
    imageAlt: 'Hot air balloon flight over Marrakech at sunrise',
    duration: '20 Minutes',
    audience: 'Includes Transport',
    price: 140,
    priceLabel: '\u20AC140.00',
    rating: 5,
    destination: 'Marrakesh',
    activities: ['Hot Air Balloon'],
  },
  {
    slug: 'camel-ride-palm-grove-marrakech',
    title: 'Marrakech : 1-Hour Camel Ride Through the Palm Grove',
    image: '/images/tours/camel-ride-main.jpg',
    imageAlt: 'Camel riders travelling through the Marrakech palm grove at sunset',
    duration: '1 Hour',
    audience: 'All Levels',
    price: 15,
    priceLabel: '\u20AC15.00',
    rating: 5,
    destination: 'La palmeraie',
    activities: ['Camel Ride'],
  },
  {
    slug: 'palm-grove-2-hours-quad-bike-tour',
    title: 'Marrakech: Palm Grove 2 Hours Quad Bike Tour',
    image: '/images/tours/paragliding.jpg',
    imageAlt: 'A group riding quad bikes through Marrakech Palmeraie',
    duration: '2 Hours',
    audience: 'All Levels',
    price: 25,
    priceLabel: '\u20AC25.00',
    rating: 5,
    destination: 'La palmeraie',
    activities: ['Quad Bike'],
  },
  {
    slug: '20-minute-paragliding-transport-marrakech',
    title: '20 Minute Paragliding + Transport',
    image: '/images/tours/paragliding-main.jpg',
    imageAlt: 'Tandem paragliding flight above the landscape near Marrakech',
    duration: '20 Minutes',
    audience: 'Includes Transport',
    price: 70,
    priceLabel: '\u20AC70.00',
    rating: 5,
    destination: 'Marrakesh',
    activities: ['Paragliding'],
  },
];

export const tours: Tour[] = [
  {
    slug: '1-hour-quad-bike-marrakech-palmeraie',
    title: '1 Hour Quad Bike Activity in Marrakech Palmeraie',
    shortTitle: '1 Hour Quad Bike Activity',
    description: 'Ride through palm groves, desert trails and discover the natural beauty of Marrakech with Atlas Quad Palmeraie.',
    overview:
      'Experience an exciting 1-hour quad bike adventure in the Marrakech Palmeraie. After a brief safety orientation, follow your professional guide through stunning palm groves, desert tracks and open landscapes. This activity is suitable for beginners and experienced riders, offering a fun and memorable way to explore the natural beauty just outside Marrakech.',
    duration: '1 hour',
    location: 'Marrakech Palmeraie',
    activityTypes: ['Quad Bike'],
    audience: 'All levels',
    priceLabel: '\u20AC15.00',
    heroImage: '/images/tours/quad-1hour-hero.jpg',
    cardImage: '/images/tours/quad-palmeraie.jpg',
    gallery: [
      '/images/tours/quad-1hour-gallery-1.jpg',
      '/images/tours/quad-1hour-gallery-2.jpg',
      '/images/tours/quad-1hour-gallery-3.jpg',
      '/images/tours/quad-1hour-gallery-4.jpg',
    ],
    imageAlt: 'Quad bikes riding through palm groves in Marrakech Palmeraie',
    included: [
      'Hotel pickup and drop-off',
      'Transportation by air-conditioned minibus',
      'Professional guide',
      'Safety orientation',
      'Use of quad bike, helmet and goggles',
      '1-hour quad biking',
      'Comprehensive insurance',
    ],
    excluded: ['Food and drinks'],
  },
  {
    slug: 'quad-bike-camel-ride-marrakech-palmeraie',
    title: 'Quad Bike & Camel Ride in Marrakech Palmeraie',
    shortTitle: 'Quad Bike & Camel Ride',
    description: 'Combine a quad bike outing with a camel ride experience in Marrakech Palmeraie.',
    overview:
      'A combined Palmeraie experience for visitors who want both quad biking and a camel ride. Contact the team directly for the latest schedule, exact route details and price.',
    duration: '2 hours',
    location: 'Marrakech Palmeraie',
    activityTypes: ['Quad Bike', 'Camel Ride'],
    audience: 'Couples & groups',
    priceLabel: 'Contact for price',
    heroImage: '/images/tours/quad-camel-main.jpg',
    cardImage: '/images/tours/quad-camel-main.jpg',
    gallery: [
      '/images/tours/quad-camel-main.jpg',
      '/images/tours/quad-camel-gallery-2.jpg',
      '/images/tours/quad-camel-gallery-3.jpg',
      '/images/tours/quad-camel-gallery-4.jpg',
    ],
    galleryAlts: [
      'Quad bike and camel ride in Marrakech Palmeraie',
      'Quad bike and camel tour at sunset in Marrakech',
      'Quad bike and camel experience in Marrakech Palmeraie',
      'Quad riders exploring Marrakech Palmeraie trails',
    ],
    imageAlt: 'Quad bike and camel ride in Marrakech Palmeraie',
  },
  {
    slug: 'hot-air-balloon-marrakech-sunrise-atlas-view',
    title: 'Hot Air Balloon Marrakech - Sunrise Flight & Atlas Mountains View',
    shortTitle: 'Hot Air Balloon Marrakech',
    description: 'A sunrise hot air balloon experience near Marrakech with Atlas Mountains views.',
    overview:
      'A sunrise balloon experience listed by Atlas Quad Palmeraie. Confirm operating details, transfer arrangements, timing and current price directly before booking.',
    duration: '20 minutes',
    location: 'Marrakech',
    activityTypes: ['Hot Air Balloon'],
    audience: 'Includes transport',
    priceLabel: 'Contact for price',
    heroImage: '/images/tours/hot-air-balloon-marrakech.jpg',
    cardImage: '/images/tours/hot-air-balloon-marrakech.jpg',
    gallery: [
      '/images/tours/hot-air-balloon-marrakech.jpg',
      '/images/tours/hot-air-balloon-gallery-1.jpg',
      '/images/tours/hot-air-balloon-gallery-2.jpg',
      '/images/tours/hot-air-balloon-gallery-3.jpg',
    ],
    galleryAlts: [
      'Hot air balloon flight over Marrakech at sunrise',
      'Hot air balloons flying over Marrakech and Atlas Mountains',
      'Sunrise hot air balloon experience in Marrakech',
      'Hot air balloon view over Marrakech landscape',
    ],
    imageAlt: 'Hot air balloon flight over Marrakech at sunrise',
  },
  {
    slug: 'camel-ride-palm-grove-marrakech',
    title: 'Marrakech: 1-Hour Camel Ride Through the Palm Grove',
    shortTitle: '1-Hour Camel Ride',
    description: 'A camel ride through the palm grove area near Marrakech.',
    overview:
      'Spend time in the palm grove area on a camel ride experience. Contact Atlas Quad Palmeraie for current departure times, price and practical details.',
    duration: '1 hour',
    location: 'Marrakech Palmeraie',
    activityTypes: ['Camel Ride'],
    audience: 'All levels',
    priceLabel: 'Contact for price',
    heroImage: '/images/tours/camel-ride-main.jpg',
    cardImage: '/images/tours/camel-ride-main.jpg',
    gallery: [
      '/images/tours/camel-ride-main.jpg',
      '/images/tours/camel-ride-gallery-1.jpg',
      '/images/tours/camel-ride-gallery-2.jpg',
      '/images/tours/camel-ride-gallery-3.jpg',
    ],
    galleryAlts: [
      'Camel ride through Marrakech Palmeraie',
      'Camel caravan in the Marrakech palm grove',
      'Travelers riding camels in Marrakech Palmeraie',
      'Sunset camel ride in Marrakech palm grove',
    ],
    imageAlt: 'Camel ride through Marrakech Palmeraie',
  },
  {
    slug: 'palm-grove-2-hours-quad-bike-tour',
    title: 'Marrakech: Palm Grove 2 Hours Quad Bike Tour',
    shortTitle: 'Palm Grove 2 Hours Quad Bike Tour',
    description: 'A longer quad bike tour route through the palm grove area of Marrakech.',
    overview:
      'A longer guided quad bike outing through the Marrakech palm grove. Contact Atlas Quad Palmeraie to confirm the route, requirements and price.',
    duration: '2 hours',
    location: 'Marrakech Palmeraie',
    activityTypes: ['Quad Bike'],
    audience: 'All levels',
    priceLabel: 'Contact for price',
    heroImage: '/images/tours/quad-2hours-main.jpg',
    cardImage: '/images/tours/paragliding.jpg',
    gallery: [
      '/images/tours/quad-2hours-main.jpg',
      '/images/tours/quad-2hours-gallery-1.jpg',
      '/images/tours/quad-2hours-gallery-2.jpg',
      '/images/tours/quad-2hours-gallery-3.jpg',
    ],
    galleryAlts: [
      'Quad biking in Marrakech Palmeraie',
      'Group quad bike tour in Marrakech palm grove',
      'Quad riders exploring Marrakech Palmeraie trails',
      'Sunset quad bike tour in Marrakech Palmeraie',
    ],
    imageAlt: 'Quad biking in Marrakech Palmeraie',
  },
  {
    slug: '20-minute-paragliding-transport-marrakech',
    title: '20 Minute Paragliding + Transport',
    shortTitle: '20 Minute Paragliding',
    description: 'A paragliding activity with transport listed by Atlas Quad Palmeraie.',
    overview:
      'A paragliding activity listed by Atlas Quad Palmeraie. Contact the team to confirm the current provider, transport, weather conditions, availability and price.',
    duration: '20 minutes',
    location: 'Marrakech',
    activityTypes: ['Paragliding'],
    audience: 'Includes transport',
    priceLabel: 'Contact for price',
    heroImage: '/images/tours/paragliding-main.jpg',
    cardImage: '/images/tours/paragliding-main.jpg',
    gallery: [
      '/images/tours/paragliding-main.jpg',
      '/images/tours/paragliding-gallery-1.jpg',
      '/images/tours/paragliding-gallery-2.jpg',
      '/images/tours/paragliding-gallery-3.jpg',
    ],
    galleryAlts: [
      'Paragliding over Marrakech landscape',
      'Tandem paragliding experience near Marrakech',
      'Paragliding above Marrakech and Atlas Mountains',
      'Sunset paragliding flight near Marrakech',
    ],
    imageAlt: 'Paragliding over Marrakech landscape',
  },
];

export function getTourBySlug(slug: string) {
  return tours.find((tour) => tour.slug === slug);
}
