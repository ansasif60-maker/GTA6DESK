import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/*?*sort=',
          '/*?*filter=',
          '/*?*search=',
        ],
      },
      {
        userAgent: ['GPTBot', 'ChatGPT-User', 'ClaudeBot', 'Anthropic-AI', 'PerplexityBot', 'Bytespider'],
        allow: '/',
        disallow: ['/api/', '/admin/'],
      },
    ],
    sitemap: 'https://gta6desk.com/sitemap.xml',
    host: 'https://gta6desk.com',
  };
}
