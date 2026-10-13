import { NextResponse } from 'next/server';

export async function GET() {
  const feedXml = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>GTA 6 Desk Intelligence Feed</title>
    <link>https://gta6desk.com</link>
    <description>Institutional intelligence, technical breakdowns, and complete game data for Grand Theft Auto VI.</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="https://gta6desk.com/feed.xml" rel="self" type="application/rss+xml" />
    <item>
      <title>Take-Two Interactive Earnings Call Breakdown: GTA VI Guidance Analysis</title>
      <link>https://gta6desk.com/news/take-two-earnings-gta-6</link>
      <description>Take-Two Interactive's fiscal guidance targets unprecedented Net Bookings growth driven by the launch of Grand Theft Auto VI.</description>
      <pubDate>${new Date().toUTCString()}</pubDate>
      <guid>https://gta6desk.com/news/take-two-earnings-gta-6</guid>
    </item>
  </channel>
</rss>`;

  return new NextResponse(feedXml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 's-maxage=3600, stale-while-revalidate',
    },
  });
}
