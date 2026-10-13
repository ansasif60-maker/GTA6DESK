'use client';

import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ARTICLES } from '@/lib/data';

export default function NewsPage() {
  const [selectedCluster, setSelectedCluster] = useState<string>('All');
  const clusters = ['All', 'Release Window', 'Financial & SEC', 'Characters', 'Cartography'];

  const filteredArticles = ARTICLES.filter((a) => {
    return selectedCluster === 'All' || a.clusterName === selectedCluster;
  });

  return (
    <>
      <Header />

      <main style={{ minHeight: '85vh', paddingBottom: '64px' }}>
        {/* Page Header */}
        <section style={{ padding: '48px 0 32px', background: 'var(--bg-base)', borderBottom: '1px solid var(--border-subtle)' }}>
          <div className="container">
            <div style={{ maxWidth: '780px' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                <span className="badge-category news">EDITORIAL DISPATCH</span>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                  Verified Gaming Journalism
                </span>
              </div>
              <h1 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', fontWeight: 800, margin: '0 0 12px', lineHeight: 1.2 }}>
                Verified Newsroom & Investigations
              </h1>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                Calm, rigorous gaming journalism distinguishing confirmed Rockstar Games announcements and Take-Two SEC filings from speculative social media leaks.
              </p>
            </div>

            {/* Clusters Filter */}
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '28px' }}>
              {clusters.map((c) => (
                <button
                  key={c}
                  onClick={() => setSelectedCluster(c)}
                  className={`btn ${selectedCluster === c ? 'btn-primary' : 'btn-ghost'}`}
                  style={{ fontSize: '0.85rem', padding: '6px 14px' }}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* News Grid */}
        <section style={{ padding: '40px 0' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))', gap: '24px' }}>
              {filteredArticles.map((a) => (
                <article
                  key={a.id}
                  style={{
                    background: '#FFFFFF',
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
                      <span className="badge-category lore" style={{ fontSize: '0.75rem' }}>{a.clusterName}</span>
                      <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>4 Min Read</span>
                    </div>

                    <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '12px', lineHeight: 1.35 }}>
                      {a.title}
                    </h2>

                    <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '20px' }}>
                      {a.leadParagraph}
                    </p>
                  </div>

                  <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '14px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                      #{a.targetKeyword.replace(/\s+/g, '_')}
                    </span>
                    <button className="btn btn-ghost" style={{ padding: '4px 10px', fontSize: '0.82rem' }}>
                      Read Analysis →
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
