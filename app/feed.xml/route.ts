import { NextResponse } from 'next/server';
import { ARTICLES } from '@/lib/data';

function escapeXml(unsafe: string): string {
  return unsafe.replace(/[<>&'"]/g, (c) => {
    switch (c) {
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '&': return '&amp;';
      case '\'': return '&apos;';
      case '"': return '&quot;';
      default: return c;
    }
  });
}

export async function GET() {
  const items = ARTICLES.slice(0, 25).map((article) => {
    const link = `https://gta6desk.com/news/${article.id}`;
    const pubDate = new Date('2026-10-14T08:00:00Z').toUTCString();
    return `    <item>
      <title>${escapeXml(article.title)}</title>
      <link>${link}</link>
      <guid isPermaLink="true">${link}</guid>
      <description>${escapeXml(article.leadParagraph)}</description>
      <category>${escapeXml(article.clusterName)}</category>
      <pubDate>${pubDate}</pubDate>
    </item>`;
  }).join('\n');

  const feedXml = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>GTA 6 DESK — Grand Theft Auto VI Intelligence Feed</title>
    <link>https://gta6desk.com</link>
    <description>Institutional intelligence, verified game news, weapons catalog, mission analysis, and Take-Two Interactive commercial coverage for Grand Theft Auto VI.</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="https://gta6desk.com/feed.xml" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>`;

  return new NextResponse(feedXml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 's-maxage=3600, stale-while-revalidate',
    },
  });
}
