import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'GTA 6 News & Verified Analysis | Official Dispatches | GTA 6 DESK',
  description: 'Authoritative Grand Theft Auto VI news and technical analysis. Fact-checked reporting from official Rockstar Games communications and Take-Two SEC filings.',
  alternates: {
    canonical: 'https://gta6desk.com/news',
  },
  openGraph: {
    title: 'GTA 6 News & Verified Analysis — GTA 6 DESK',
    description: 'Fact-checked journalism and technical reporting for Grand Theft Auto VI.',
    url: 'https://gta6desk.com/news',
    type: 'website',
  },
};

export default function NewsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
