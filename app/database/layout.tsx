import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'GTA 6 Relational Intelligence Database | Search Entities | GTA 6 DESK',
  description: 'Relational database explorer for Grand Theft Auto VI: searchable entities, vehicles, weapons, districts, music tracks, and verified gameplay systems.',
  alternates: {
    canonical: 'https://gta6desk.com/database',
  },
  openGraph: {
    title: 'GTA 6 Relational Intelligence Database — GTA 6 DESK',
    description: 'Searchable database explorer indexing GTA 6 entities, weapons, locations, and vehicles.',
    url: 'https://gta6desk.com/database',
    type: 'website',
  },
};

export default function DatabaseLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
