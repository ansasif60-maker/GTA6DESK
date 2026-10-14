import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'GTA 6 Characters & Cast List | Lucia, Jason & Factions | GTA 6 DESK',
  description: 'Comprehensive profiles of GTA 6 protagonists Lucia and Jason, confirmed voice actors, criminal syndicates, and Leonida underworld character dossiers.',
  alternates: {
    canonical: 'https://gta6desk.com/characters',
  },
  openGraph: {
    title: 'GTA 6 Characters & Cast Profiles — GTA 6 DESK',
    description: 'Protagonist profiles, actor investigations, and syndicate connections in Grand Theft Auto VI.',
    url: 'https://gta6desk.com/characters',
    type: 'website',
  },
};

export default function CharactersLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
