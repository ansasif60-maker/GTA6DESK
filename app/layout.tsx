import type { Metadata } from 'next';
import React from 'react';
import '../css/design-system.css';
import '../css/components.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://gta6desk.com'),
  title: {
    default: 'GTA 6 Desk — Flagship Intelligence Terminal & Programmatic Yield Engine',
    template: '%s | GTA 6 Desk'
  },
  description: 'Authoritative Grand Theft Auto VI intelligence terminal featuring real-time Take-Two (TTWO) financial analytics, First-Year Revenue ROI Calculator, interactive Leonida cartography, relational weapons & vehicle databases, and 40-article semantic knowledge graph.',
  alternates: {
    canonical: 'https://gta6desk.com/',
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/icon.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: ['/favicon.ico'],
  },
  manifest: '/manifest.json',
  openGraph: {
    title: 'GTA 6 Desk — Flagship Intelligence Terminal',
    description: 'The Business, Strategy & Game Intelligence Journal for Grand Theft Auto VI and Take-Two Interactive (NASDAQ: TTWO).',
    url: 'https://gta6desk.com',
    siteName: 'GTA 6 Desk',
    images: [
      {
        url: '/assets/gta6desk_logo.png',
        width: 1024,
        height: 1024,
        alt: 'GTA 6 DESK Official Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GTA 6 Desk — Grand Theft Auto VI Intelligence Journal',
    description: 'Authoritative Grand Theft Auto VI intelligence terminal featuring real-time Take-Two financial analytics and interactive Leonida map.',
    images: ['/assets/gta6desk_logo.png'],
    creator: '@gta6desk',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLdOrg = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'GTA 6 Desk',
    alternateName: 'GTA6DESK',
    url: 'https://gta6desk.com',
    logo: {
      '@type': 'ImageObject',
      url: 'https://gta6desk.com/assets/gta6desk_logo.png',
      width: 1024,
      height: 1024,
    },
    image: 'https://gta6desk.com/assets/gta6desk_logo.png',
    description: 'The Business, News & Strategy Journal of Grand Theft Auto VI',
  };

  const jsonLdWebSite = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'GTA 6 Desk',
    alternateName: 'GTA6DESK',
    url: 'https://gta6desk.com',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://gta6desk.com/database?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
    publisher: {
      '@type': 'Organization',
      name: 'GTA 6 Desk',
      logo: {
        '@type': 'ImageObject',
        url: 'https://gta6desk.com/assets/gta6desk_logo.png',
      },
    },
  };

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrg) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebSite) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
