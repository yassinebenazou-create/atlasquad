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
  seoTitle: string;
  metaDescription: string;
  overviewHeading: string;
  contentSections: Array<{
    heading: string;
    paragraphs: string[];
  }>;
  faqs: Array<{
    question: string;
    answer: string;
  }>;
  relatedSlugs: string[];
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
  origin: 'https://atlasquad.com',
  logo: '/images/logo.png',
  heroImage: '/images/hero/hero-quad-sunset.jpg',
  aboutImage: '/images/marrakech-sunset.jpg',
};

const extraTourGallery = {
  quad1Hour: Array.from(
    { length: 10 },
    (_, index) => `/images/tours/tour-extra-images/quad-1hour/quad-1hour-extra-${String(index + 1).padStart(2, '0')}.jpeg`,
  ),
  quad2Hours: Array.from(
    { length: 10 },
    (_, index) => `/images/tours/tour-extra-images/quad-2hours/quad-2hours-extra-${String(index + 1).padStart(2, '0')}.jpeg`,
  ),
  quadCamel: Array.from(
    { length: 9 },
    (_, index) => `/images/tours/tour-extra-images/quad-camel/quad-camel-extra-${String(index + 1).padStart(2, '0')}.jpeg`,
  ),
};

const extraTourGalleryAlts = {
  quad1Hour: [
    'Rider on a quad bike across a dry Palmeraie trail',
    'Helmeted rider leading a quad bike group',
    'Quad rider following a dusty Marrakech trail',
    'Rider in a blue shirt on a quad bike trail',
    'Young rider driving a quad bike in the Palmeraie',
    'Quad rider travelling along a gravel track',
    'Rider smiling during a Marrakech quad outing',
    'Quad bike rider waving during the tour',
    'Helmeted rider followed by a quad bike group',
    'Rider approaching along an open Palmeraie track',
  ],
  quad2Hours: [
    'Quad tour group at sunset among palm trees',
    'Two riders celebrating beside parked quad bikes',
    'Group seated on quad bikes at sunset',
    'Quad tour group with raised arms under the sunset sky',
    'Rider leading a two-hour quad group along a palm trail',
    'Pair riding a quad bike through a dusty track',
    'Quad rider travelling between Palmeraie palms',
    'Large quad tour group gathered in the Marrakech countryside',
    'Rider waving during a two-hour quad tour',
    'Quad riders following a sandy Palmeraie route',
  ],
  quadCamel: [
    'Helmeted quad rider leading a group on a tree-lined trail',
    'Quad tour group posing beside their bikes',
    'Two travelers beside quad bikes in an open landscape',
    'Travelers posing on a parked quad bike',
    'Riders approaching on quad bikes in the Palmeraie',
    'Quad rider celebrating with raised arms',
    'Rider in a pink top leading a quad bike group',
    'Rider in a yellow top on a quad bike trail',
    'Rider travelling alone on a gravel quad route',
  ],
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
    image: '/images/tours/quad-2hours-main.jpg',
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
      ...extraTourGallery.quad1Hour,
    ],
    galleryAlts: [
      'Quad bike group riding through Marrakech Palmeraie',
      'Quad riders following a palm grove trail',
      'Guided quad bike activity in Marrakech',
      'Quad bike group crossing the Palmeraie landscape',
      ...extraTourGalleryAlts.quad1Hour,
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
    seoTitle: '1 Hour Quad Bike Marrakech Palmeraie | Atlas Quad',
    metaDescription:
      'Explore Marrakech Palmeraie on a 1-hour quad bike activity with a professional guide, safety equipment and transport listed as included.',
    overviewHeading: '1-hour quad biking in Marrakech Palmeraie',
    contentSections: [
      {
        heading: 'A guided Marrakech quad experience',
        paragraphs: [
          'This one-hour quad bike activity follows palm-grove paths, desert tracks and open landscapes in Marrakech Palmeraie. A professional guide leads the outing after a safety orientation.',
          'The activity is listed for all levels, including beginners and experienced riders. A quad bike, helmet and goggles are included in the tour information.',
        ],
      },
      {
        heading: 'Planning your 1-hour quad activity',
        paragraphs: [
          'Hotel pickup and drop-off, transportation by air-conditioned minibus and comprehensive insurance are listed as included.',
          'Choose a date and guest count in the enquiry panel to contact Atlas Quad Palmeraie on WhatsApp. The activity is confirmed only after the team replies.',
        ],
      },
    ],
    faqs: [
      {
        question: 'How long is the quad bike activity in Marrakech Palmeraie?',
        answer: 'The quad biking portion of this activity lasts 1 hour.',
      },
      {
        question: 'Is this Marrakech quad activity suitable for beginners?',
        answer: 'Yes. The tour is listed for all levels, and the experience information says it is suitable for beginners and experienced riders.',
      },
      {
        question: 'What is included with the 1-hour quad bike activity?',
        answer:
          'The listed inclusions are hotel pickup and drop-off, air-conditioned minibus transport, a professional guide, safety orientation, use of a quad bike, helmet and goggles, 1-hour quad biking and comprehensive insurance.',
      },
      {
        question: 'How do I check availability for this quad tour?',
        answer:
          'Select a date and guest count in the enquiry panel. This opens WhatsApp so the Atlas Quad Palmeraie team can confirm current availability and practical details.',
      },
    ],
    relatedSlugs: [
      'palm-grove-2-hours-quad-bike-tour',
      'quad-bike-camel-ride-marrakech-palmeraie',
      'camel-ride-palm-grove-marrakech',
    ],
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
      ...extraTourGallery.quadCamel,
    ],
    galleryAlts: [
      'Quad bike and camel ride in Marrakech Palmeraie',
      'Quad bike and camel tour at sunset in Marrakech',
      'Quad bike and camel experience in Marrakech Palmeraie',
      'Quad riders exploring Marrakech Palmeraie trails',
      ...extraTourGalleryAlts.quadCamel,
    ],
    imageAlt: 'Quad bike and camel ride in Marrakech Palmeraie',
    seoTitle: 'Quad & Camel Ride Marrakech | Atlas Quad Palmeraie',
    metaDescription:
      'Combine quad biking and a camel ride in a 2-hour Marrakech Palmeraie experience for couples and groups. Contact Atlas Quad for current details.',
    overviewHeading: 'Quad and camel ride in Marrakech Palmeraie',
    contentSections: [
      {
        heading: 'Two Marrakech activities in one experience',
        paragraphs: [
          'This two-hour Palmeraie experience combines quad biking with a camel ride. It is an option for visitors who want to try both activities during one Marrakech outing.',
          'The tour is listed for couples and groups and takes place in Marrakech Palmeraie.',
        ],
      },
      {
        heading: 'Plan your quad and camel tour',
        paragraphs: [
          'Contact Atlas Quad Palmeraie for the current schedule, exact route details and price. The date and guests form sends an availability enquiry through WhatsApp.',
          'An enquiry does not confirm the activity. Wait for the team to reply with the current arrangements before your visit.',
        ],
      },
    ],
    faqs: [
      {
        question: 'What activities are included in this Marrakech experience?',
        answer: 'This experience combines quad biking and a camel ride in Marrakech Palmeraie.',
      },
      {
        question: 'How long is the quad and camel ride experience?',
        answer: 'The combined experience is listed as 2 hours.',
      },
      {
        question: 'Who is the quad and camel experience for?',
        answer: 'The tour is listed for couples and groups.',
      },
      {
        question: 'How can I confirm the schedule and price?',
        answer:
          'Send an enquiry through the date and guests panel or contact Atlas Quad Palmeraie directly. The team will confirm the current schedule, route details and price.',
      },
    ],
    relatedSlugs: [
      '1-hour-quad-bike-marrakech-palmeraie',
      'camel-ride-palm-grove-marrakech',
      'palm-grove-2-hours-quad-bike-tour',
    ],
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
    seoTitle: 'Hot Air Balloon Marrakech | Atlas Quad Palmeraie',
    metaDescription:
      'Discover a sunrise hot air balloon experience near Marrakech with Atlas Mountains views and transport listed. Ask Atlas Quad for current details.',
    overviewHeading: 'Sunrise hot air balloon experience in Marrakech',
    contentSections: [
      {
        heading: 'See Marrakech from a hot air balloon',
        paragraphs: [
          'This Marrakech activity is presented as a sunrise hot air balloon experience with views toward the Atlas Mountains. The flight duration is listed as 20 minutes.',
          'Transport is listed with the experience. Confirm the current transfer arrangements and operating details directly with Atlas Quad Palmeraie.',
        ],
      },
      {
        heading: 'Check current balloon flight details',
        paragraphs: [
          'Balloon operations depend on current arrangements, so contact the team for timing, availability and price before planning your visit.',
          'The date and guests form opens a WhatsApp enquiry. Your place is confirmed only after the team replies.',
        ],
      },
    ],
    faqs: [
      {
        question: 'When does the Marrakech hot air balloon experience take place?',
        answer: 'The experience is listed as a sunrise hot air balloon activity near Marrakech.',
      },
      {
        question: 'How long is the balloon flight?',
        answer: 'The flight duration is listed as 20 minutes.',
      },
      {
        question: 'Is transport included with this activity?',
        answer: 'Transport is listed with this hot air balloon experience. Confirm the current arrangements with the team before booking.',
      },
      {
        question: 'How do I check hot air balloon availability?',
        answer:
          'Use the date and guests panel to send a WhatsApp enquiry. Atlas Quad Palmeraie will confirm the current timing, availability and price.',
      },
    ],
    relatedSlugs: [
      '20-minute-paragliding-transport-marrakech',
      '1-hour-quad-bike-marrakech-palmeraie',
      'camel-ride-palm-grove-marrakech',
    ],
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
    seoTitle: 'Camel Ride Marrakech Palmeraie | Atlas Quad',
    metaDescription:
      'Take a 1-hour camel ride through the palm grove of Marrakech Palmeraie. Contact Atlas Quad for current departure times, price and details.',
    overviewHeading: 'Camel ride through Marrakech Palmeraie',
    contentSections: [
      {
        heading: 'A one-hour Marrakech camel experience',
        paragraphs: [
          'This one-hour camel ride takes place in the palm grove area of Marrakech Palmeraie. It offers a different way to experience the setting shown throughout the tour gallery.',
          'The activity is listed for all levels. Contact Atlas Quad Palmeraie for current departure times and practical details.',
        ],
      },
      {
        heading: 'Plan your camel ride in the Palmeraie',
        paragraphs: [
          'Use the enquiry panel to choose a date and guest count, then continue to WhatsApp to ask about current availability and price.',
          'The enquiry is not an automatic reservation. The activity is confirmed only after the team replies.',
        ],
      },
    ],
    faqs: [
      {
        question: 'How long is the camel ride in Marrakech Palmeraie?',
        answer: 'The camel ride is listed as a 1-hour activity.',
      },
      {
        question: 'Where does the camel ride take place?',
        answer: 'The activity takes place in the palm grove area of Marrakech Palmeraie.',
      },
      {
        question: 'Who is the Marrakech camel ride suitable for?',
        answer: 'The camel ride is listed for all levels.',
      },
      {
        question: 'How can I check departure times and price?',
        answer:
          'Send a WhatsApp enquiry through the date and guests panel or contact Atlas Quad Palmeraie directly for current departure times, price and practical details.',
      },
    ],
    relatedSlugs: [
      'quad-bike-camel-ride-marrakech-palmeraie',
      '1-hour-quad-bike-marrakech-palmeraie',
      'palm-grove-2-hours-quad-bike-tour',
    ],
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
    cardImage: '/images/tours/quad-2hours-main.jpg',
    gallery: [
      '/images/tours/quad-2hours-main.jpg',
      '/images/tours/quad-2hours-gallery-1.jpg',
      '/images/tours/quad-2hours-gallery-2.jpg',
      '/images/tours/quad-2hours-gallery-3.jpg',
      ...extraTourGallery.quad2Hours,
    ],
    galleryAlts: [
      'Quad biking in Marrakech Palmeraie',
      'Group quad bike tour in Marrakech palm grove',
      'Quad riders exploring Marrakech Palmeraie trails',
      'Sunset quad bike tour in Marrakech Palmeraie',
      ...extraTourGalleryAlts.quad2Hours,
    ],
    imageAlt: 'Quad biking in Marrakech Palmeraie',
    seoTitle: '2 Hour Quad Tour Marrakech | Atlas Quad Palmeraie',
    metaDescription:
      'Explore Marrakech Palmeraie on a longer 2-hour quad bike tour. Contact Atlas Quad to confirm the current route, requirements and price.',
    overviewHeading: '2-hour quad tour in Marrakech Palmeraie',
    contentSections: [
      {
        heading: 'A longer Palmeraie quad bike outing',
        paragraphs: [
          'This two-hour quad bike tour is the longer quad option listed by Atlas Quad Palmeraie. The outing follows the palm grove area of Marrakech and is listed for all levels.',
          'Choose this tour when you want more riding time than the one-hour quad activity.',
        ],
      },
      {
        heading: 'Check the route and current requirements',
        paragraphs: [
          'Contact Atlas Quad Palmeraie to confirm the current route, rider requirements and price for your preferred date.',
          'The date and guests panel sends a WhatsApp availability enquiry. Wait for a reply from the team before treating the activity as confirmed.',
        ],
      },
    ],
    faqs: [
      {
        question: 'How long is this Marrakech quad tour?',
        answer: 'This quad bike tour is listed as a 2-hour activity.',
      },
      {
        question: 'Where does the quad tour take place?',
        answer: 'The tour takes place in the palm grove area of Marrakech Palmeraie.',
      },
      {
        question: 'Is the 2-hour quad tour suitable for beginners?',
        answer: 'The tour is listed for all levels. Contact the team to confirm current rider requirements.',
      },
      {
        question: 'How do I confirm the route and price?',
        answer:
          'Contact Atlas Quad Palmeraie through the WhatsApp enquiry panel to confirm the current route, requirements, availability and price.',
      },
    ],
    relatedSlugs: [
      '1-hour-quad-bike-marrakech-palmeraie',
      'quad-bike-camel-ride-marrakech-palmeraie',
      'camel-ride-palm-grove-marrakech',
    ],
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
    seoTitle: 'Paragliding Marrakech | Atlas Quad Palmeraie',
    metaDescription:
      'Explore a 20-minute paragliding activity near Marrakech with transport listed. Contact Atlas Quad for current provider, weather and availability details.',
    overviewHeading: 'Paragliding experience near Marrakech',
    contentSections: [
      {
        heading: 'A 20-minute Marrakech paragliding activity',
        paragraphs: [
          'This paragliding activity is listed with a 20-minute duration and transport. The tour imagery shows tandem paragliding over the landscape near Marrakech and the Atlas Mountains.',
          'Contact Atlas Quad Palmeraie to confirm the current provider and transport arrangements for your preferred date.',
        ],
      },
      {
        heading: 'Confirm weather and availability',
        paragraphs: [
          'Current weather conditions can affect the activity, so ask the team to confirm availability and price before making plans.',
          'The booking panel sends a WhatsApp enquiry with your preferred date and guest count. It does not automatically confirm a reservation.',
        ],
      },
    ],
    faqs: [
      {
        question: 'How long is the paragliding activity near Marrakech?',
        answer: 'The paragliding activity is listed as 20 minutes.',
      },
      {
        question: 'Is transport included with the paragliding experience?',
        answer: 'Transport is listed with this activity. Confirm the current arrangements with Atlas Quad Palmeraie.',
      },
      {
        question: 'What should I confirm before the activity?',
        answer: 'Ask the team to confirm the current provider, transport, weather conditions, availability and price.',
      },
      {
        question: 'How do I request a paragliding date?',
        answer:
          'Choose a date and guest count in the enquiry panel to contact Atlas Quad Palmeraie on WhatsApp. The activity is confirmed only after the team replies.',
      },
    ],
    relatedSlugs: [
      'hot-air-balloon-marrakech-sunrise-atlas-view',
      '1-hour-quad-bike-marrakech-palmeraie',
      'quad-bike-camel-ride-marrakech-palmeraie',
    ],
  },
];

export function getTourBySlug(slug: string) {
  return tours.find((tour) => tour.slug === slug);
}
