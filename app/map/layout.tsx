import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'GTA 6 Interactive Map & Leonida Cartography | Vice City Zones | GTA 6 DESK',
  description: 'Explore the interactive map of the State of Leonida, Vice City districts, enterable building locations, transit routes, and Kelly County swamplands.',
  alternates: {
    canonical: 'https://gta6desk.com/map',
  },
  openGraph: {
    title: 'GTA 6 Interactive Map & Cartography Explorer — GTA 6 DESK',
    description: 'High-resolution interactive map of GTA 6 Vice City, districts, and telemetry.',
    url: 'https://gta6desk.com/map',
    type: 'website',
  },
};

export default function MapLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
