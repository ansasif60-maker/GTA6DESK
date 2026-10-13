import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://gta6desk.com';
  
  const routes = [
    '',
    '/categories',
    '/weapons',
    '/characters',
    '/missions',
    '/database',
    '/map',
    '/guides',
    '/financial',
    '/news',
    '/leonida',
    '/roi-calculator',
    '/article-lucia-jason',
    '/article-release-window',
    '/article-take-two-earnings',
    '/about',
    '/contact',
    '/privacy-policy',
    '/terms-of-service',
    '/disclaimer',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'daily' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  return routes;
}
