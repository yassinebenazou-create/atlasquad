import type { APIRoute } from 'astro';
import { site, tours } from '../data/tours';

export const GET: APIRoute = () => {
  const paths = ['/', '/tours/', '/contact/', ...tours.map((tour) => `/tours/${tour.slug}/`)];
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${paths.map((path) => `\n  <url><loc>${new URL(path, site.origin)}</loc></url>`).join('')}\n</urlset>`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
