import React from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { CATEGORIES } from '@/lib/data';

export const metadata = {
  title: 'GTA 6 Coverage Directory & Topic Hubs | GTA 6 DESK',
  description: 'Explore the complete directory of Grand Theft Auto VI coverage hubs, tactical weapons, character profiles, Leonida map zones, and Take-Two financial filings.',
  alternates: {
    canonical: 'https://gta6desk.com/categories',
  },
  openGraph: {
    title: 'GTA 6 Topic Directory & Hubs — GTA 6 DESK',
    description: 'Explore all Grand Theft Auto VI coverage hubs, databases, and analysis desks.',
    url: 'https://gta6desk.com/categories',
  },
};

export default function CategoriesPage() {
  return (
    <>
      <Header />

      <main style={{ minHeight: '85vh', paddingBottom: '64px' }}>
        <section style={{ padding: '48px 0 32px', background: 'var(--bg-base)', borderBottom: '1px solid var(--border-subtle)' }}>
          <div className="container">
            <div style={{ maxWidth: '780px' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                <span className="badge-category news">TOPIC DIRECTORY</span>
              </div>
              <h1 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', fontWeight: 800, margin: '0 0 12px', lineHeight: 1.2 }}>
                Intelligence Categories & Hubs
              </h1>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                Structured taxonomies covering gameplay guides, weapons ballistic telemetry, cast profiles, and Wall Street earnings reports.
              </p>
            </div>
          </div>
        </section>

        <section style={{ padding: '48px 0' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))', gap: '24px' }}>
              {CATEGORIES.map((cat) => (
                <div
                  key={cat.id}
                  style={{
                    background: 'var(--bg-surface)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-lg)',
                    padding: '24px',
                    boxShadow: 'var(--shadow-xs)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                      <span className="badge-category lore" style={{ fontSize: '0.75rem' }}>{cat.group}</span>
                      <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>{cat.monthlyViews} Views</span>
                    </div>

                    <h2 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '8px' }}>
                      {cat.name}
                    </h2>

                    <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '20px' }}>
                      {cat.description}
                    </p>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
                      {cat.tags.map((t, idx) => (
                        <span
                          key={idx}
                          style={{
                            fontSize: '0.75rem',
                            padding: '3px 8px',
                            background: 'var(--bg-elevated)',
                            borderRadius: 'var(--radius-sm)',
                            color: 'var(--text-muted)',
                            fontWeight: 600
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link href={cat.link} className="btn btn-ghost" style={{ justifyContent: 'center' }}>
                    Open Hub →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
