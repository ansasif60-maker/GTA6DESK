import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'GTA 6 Weapons & Arsenal Database | Ballistics & Attachments | GTA 6 DESK',
  description: 'Complete catalog of confirmed GTA 6 weapons, sidearms, carbines, and heavy ballistics. Real-world counterparts, damage metrics, and vehicle trunk stowage mechanics.',
  alternates: {
    canonical: 'https://gta6desk.com/weapons',
  },
  openGraph: {
    title: 'GTA 6 Weapons & Ballistics Catalog — GTA 6 DESK',
    description: 'Confirmed firearms, real-world counterparts, penetration stats, and physical inventory system.',
    url: 'https://gta6desk.com/weapons',
    type: 'website',
  },
};

export default function WeaponsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
