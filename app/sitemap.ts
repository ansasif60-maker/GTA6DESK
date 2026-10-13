import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://gta6desk.com';
  
  // Static Core Nodes
  const routes = [
    '',
    '/news',
    '/database/vehicles',
    '/database/weapons',
    '/database/map',
    '/tools/roi-calculator',
    '/tools/market-ticker',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'hourly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  // Dynamic Content Ingestion Simulation (40 Articles from Launch Map)
  const articles = Array.from({ length: 40 }).map((_, i) => ({
    url: `${baseUrl}/news/article-${i + 1}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'daily' as const,
    priority: 0.7,
  }));

  return [...routes, ...articles];
}
