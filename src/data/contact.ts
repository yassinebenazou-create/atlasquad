export type GoogleBusinessConfig = {
  name: string;
  mapsUrl: string;
  latitude: number;
  longitude: number;
  embedUrl: string;
  rating: number | null;
  reviewCount: number | null;
};

export const googleBusiness: GoogleBusinessConfig = {
  name: 'Atlas Quad Palmeraie',
  mapsUrl: 'https://maps.app.goo.gl/hrLLrGYxVwLUqsm17',
  latitude: 31.679361,
  longitude: -7.9669782,
  embedUrl: 'https://www.google.com/maps?q=31.679361,-7.9669782&z=14&output=embed',
  rating: null,
  reviewCount: null,
};

export const contactPage = {
  location: ['Palmeraie, Marrakech', 'Morocco'],
  openingHours: ['Every day', '8:00 AM - 7:00 PM'],
};
