import type { Metadata } from 'next';
import React from 'react';
import '../css/design-system.css';
import '../css/components.css';

export const metadata: Metadata = {
  title: 'GTA 6 Desk — Flagship Intelligence Terminal & Programmatic Yield Engine',
  description: 'Authoritative Grand Theft Auto VI intelligence terminal featuring real-time Take-Two (TTWO) financial analytics, First-Year Revenue ROI Calculator, interactive Leonida cartography, relational weapons & vehicle databases, and 40-article semantic knowledge graph.',
  alternates: {
    canonical: 'https://gta6desk.com/',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
