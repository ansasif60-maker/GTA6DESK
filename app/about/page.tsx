import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: 'About GTA 6 DESK — Editorial Mission & Standards',
  description: 'The editorial ethos, methodology, and investigative standards behind GTA 6 DESK.',
};

export default function AboutPage() {
  return (
    <>
      <Header />

      <main style={{ minHeight: '85vh', paddingBottom: '64px' }}>
        <section style={{ padding: '48px 0 32px', background: 'var(--bg-base)', borderBottom: '1px solid var(--border-subtle)' }}>
          <div className="container">
            <div style={{ maxWidth: '780px' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                <span className="badge-category news">EDITORIAL CHARTER</span>
              </div>
              <h1 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', fontWeight: 800, margin: '0 0 12px', lineHeight: 1.2 }}>
                About GTA 6 DESK
              </h1>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                An independent gaming intelligence journal dedicated to authoritative analysis, verified news, and Take-Two Interactive commercial coverage.
              </p>
            </div>
          </div>
        </section>

        <section style={{ padding: '48px 0' }}>
          <div className="container" style={{ maxWidth: '820px' }}>
            <div style={{ background: 'var(--bg-surface)', padding: '36px', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-subtle)', boxShadow: 'var(--shadow-sm)' }}>
              <h2 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '16px' }}>Our Editorial Philosophy</h2>
              <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '20px' }}>
                In an era dominated by clickbait rumors, AI hallucinated leaks, and social media speculation, GTA 6 DESK was founded to deliver rigorous, verified, and calm journalism. We cross-reference every report with official Rockstar Games press communications, patent filings, and Take-Two Interactive SEC Form 10-K and 10-Q documents.
              </p>

              <h2 style={{ fontSize: '1.4rem', fontWeight: 800, marginTop: '32px', marginBottom: '16px' }}>Independent Verification Standards</h2>
              <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '20px' }}>
                Our research team separates data into distinct tiers:
              </p>
              <ul style={{ paddingLeft: '20px', color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '0.98rem' }}>
                <li><strong>Officially Confirmed:</strong> Rockstar Games press releases, official trailers, and Take-Two Interactive SEC filings.</li>
                <li><strong>Investigative Intelligence:</strong> Confirmed voice actor disclosures, publicly registered trademarks, and verified development records.</li>
                <li><strong>Analysis & Projections:</strong> Clearly labeled financial models, cartographic telemetry, and historical franchise comparisons.</li>
              </ul>

              <h2 style={{ fontSize: '1.4rem', fontWeight: 800, marginTop: '32px', marginBottom: '16px' }}>Legal Independence</h2>
              <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>
                GTA 6 DESK is an independent publication. Grand Theft Auto, GTA, Rockstar Games, and Take-Two Interactive are registered trademarks of Take-Two Interactive Software, Inc. GTA 6 DESK is not affiliated with, endorsed by, or sponsored by Rockstar Games or Take-Two Interactive.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
