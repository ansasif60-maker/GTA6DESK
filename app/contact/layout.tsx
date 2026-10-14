import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Contact Editorial Desk & Press Submissions | GTA 6 DESK',
  description: 'Contact the GTA 6 DESK editorial newsroom. Submit verified tips, press releases, corporate inquiries, and editorial correction requests.',
  alternates: {
    canonical: 'https://gta6desk.com/contact',
  },
  openGraph: {
    title: 'Contact Editorial Desk — GTA 6 DESK',
    description: 'Submit press inquiries and verified tips to the GTA 6 DESK editorial team.',
    url: 'https://gta6desk.com/contact',
    type: 'website',
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
