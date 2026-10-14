'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ARTICLES, Article } from '@/lib/data';

const CLUSTERS = [
  { id: 'All', label: 'All 40 Articles' },
  { id: 'Release Window & Institutional Governance', label: '1. Release & Governance' },
  { id: 'Trailers, Narrative Arc & Characters', label: '2. Characters & Lore' },
  { id: 'Cartography & World Engine', label: '3. Cartography & Map' },
  { id: 'Armory & Ballistics', label: '4. Armory & Ballistics' },
  { id: 'Vehicle Fleet & Handling Physics', label: '5. Vehicles & Physics' },
  { id: 'Hardware, Engine Tech & Benchmarks', label: '6. Hardware & Benchmarks' }
];

function getClusterBadgeLabel(clusterName: string): string {
  if (!clusterName) return 'INTELLIGENCE';
  if (clusterName.includes('Release')) return 'RELEASE & GOVERNANCE';
  if (clusterName.includes('Narrative') || clusterName.includes('Characters')) return 'CHARACTERS & LORE';
  if (clusterName.includes('Cartography')) return 'CARTOGRAPHY & MAP';
  if (clusterName.includes('Armory')) return 'ARMORY & BALLISTICS';
  if (clusterName.includes('Vehicle')) return 'VEHICLES & FLEET';
  if (clusterName.includes('Hardware')) return 'HARDWARE & BENCHMARKS';
  return clusterName.toUpperCase();
}

export default function NewsPage() {
  const [selectedCluster, setSelectedCluster] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Backward compatibility redirect for ?article=ID or ?id=ID
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const articleId = params.get('article') || params.get('id');
      if (articleId) {
        window.location.href = `/news/${articleId}`;
      }
    }
  }, []);

  const filteredArticles = ARTICLES.filter((a) => {
    const matchesCluster = selectedCluster === 'All' || a.clusterName === selectedCluster;
    const q = searchQuery.toLowerCase().trim();
    if (!q) return matchesCluster;

    const matchesQuery =
      a.title.toLowerCase().includes(q) ||
      a.leadParagraph.toLowerCase().includes(q) ||
      a.targetKeyword.toLowerCase().includes(q) ||
      (a.tokenChunk && a.tokenChunk.toLowerCase().includes(q)) ||
      (a.eav && (
        a.eav.entity.toLowerCase().includes(q) ||
        a.eav.attribute.toLowerCase().includes(q) ||
        a.eav.value.toLowerCase().includes(q)
      ));

    return matchesCluster && matchesQuery;
  });

  return (
    <>
      <Header />

      <main style={{ minHeight: '85vh', paddingBottom: '64px' }}>
        {/* Page Header */}
        <section style={{ padding: '48px 0 32px', background: 'var(--bg-base)', borderBottom: '1px solid var(--border-subtle)' }}>
          <div className="container">
            <div style={{ maxWidth: '820px' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                <span className="badge-category news">EDITORIAL DISPATCH</span>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                  Verified Gaming Journalism
                </span>
                <span style={{ fontSize: '0.85rem', color: 'var(--accent-cyan)', fontWeight: 600 }}>
                  · 40-Article Semantic Knowledge Base
                </span>
              </div>
              <h1 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', fontWeight: 900, margin: '0 0 12px', lineHeight: 1.2 }}>
                Verified Newsroom & Investigations
              </h1>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                Calm, rigorous gaming journalism distinguishing confirmed Rockstar Games announcements and Take-Two SEC filings from speculative social media leaks. Click <strong>Read Analysis →</strong> on any article to inspect the full intelligence dossier.
              </p>
            </div>

            {/* Real-Time Keyword Filter */}
            <div style={{ marginTop: '24px', maxWidth: '640px' }}>
              <div style={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                background: 'var(--bg-surface)',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--border-subtle)',
                padding: '4px 12px'
              }}>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Filter articles by keyword (e.g. Release, Lucia, PS5 Pro, Map, TTWO)..."
                  style={{
                    width: '100%',
                    background: 'transparent',
                    border: 'none',
                    outline: 'none',
                    color: 'var(--text-primary)',
                    fontSize: '0.92rem',
                    fontFamily: 'var(--font-body)',
                    padding: '8px 0'
                  }}
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', fontSize: '0.9rem' }}
                  >
                    ✕
                  </button>
                )}
              </div>
            </div>

            {/* Clusters Filter */}
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '20px' }}>
              {CLUSTERS.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setSelectedCluster(c.id)}
                  className={`btn ${selectedCluster === c.id ? 'btn-primary' : 'btn-ghost'}`}
                  style={{ fontSize: '0.82rem', padding: '6px 14px' }}
                >
                  {c.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* News Grid */}
        <section style={{ padding: '40px 0' }}>
          <div className="container">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                DISPLAYING <strong style={{ color: 'var(--accent-cyan)' }}>{filteredArticles.length}</strong> OF {ARTICLES.length} CORE INTEL NODES
              </span>
            </div>

            {filteredArticles.length === 0 ? (
              <div style={{
                textAlign: 'center',
                padding: '60px 20px',
                background: 'var(--bg-surface)',
                borderRadius: 'var(--radius-lg)',
                border: '1px dashed var(--border-default)',
                maxWidth: '600px',
                margin: '0 auto'
              }}>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '16px' }}>
                  No semantic articles matched your search query.
                </p>
                <button
                  type="button"
                  onClick={() => { setSearchQuery(''); setSelectedCluster('All'); }}
                  className="btn btn-ghost"
                >
                  Reset Search Filters
                </button>
              </div>
            ) : (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))', gap: '24px' }}>
                {filteredArticles.map((a) => (
                  <article
                    key={a.id}
                    style={{
                      background: 'var(--bg-surface)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: 'var(--radius-lg)',
                      padding: '24px',
                      boxShadow: 'var(--shadow-xs)',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      overflow: 'hidden',
                      height: '100%',
                      transition: 'border-color 0.2s ease, transform 0.2s ease'
                    }}
                  >
                    <div>
                      {/* Symmetrical Yellow Badge & Node ID Row */}
                      <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        minHeight: '28px',
                        marginBottom: '14px',
                        gap: '8px'
                      }}>
                        <span className="badge-category lore" style={{
                          fontSize: '0.72rem',
                          fontWeight: 700,
                          letterSpacing: '0.04em',
                          textTransform: 'uppercase',
                          whiteSpace: 'nowrap',
                          lineHeight: 1
                        }}>
                          {getClusterBadgeLabel(a.clusterName)}
                        </span>
                        <span style={{
                          fontSize: '0.75rem',
                          color: 'var(--text-muted)',
                          fontFamily: 'var(--font-mono)',
                          flexShrink: 0
                        }}>
                          NODE #{a.id}
                        </span>
                      </div>

                      {/* Symmetrical Headline (Exact 2 lines uniform height across all cards) */}
                      <h2
                        style={{
                          fontSize: '1.2rem',
                          fontWeight: 800,
                          marginBottom: '12px',
                          lineHeight: 1.35,
                          height: '3.3rem',
                          display: '-webkit-box',
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis'
                        }}
                        title={a.title}
                      >
                        <Link
                          href={`/news/${a.id}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            color: 'var(--text-primary)',
                            textDecoration: 'none',
                            transition: 'color 0.2s ease'
                          }}
                          onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-rose)')}
                          onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
                        >
                          {a.title}
                        </Link>
                      </h2>

                      {/* Symmetrical Lead Paragraph (Exact 3 lines uniform height across all cards) */}
                      <p style={{
                        fontSize: '0.9rem',
                        color: 'var(--text-secondary)',
                        lineHeight: 1.6,
                        height: '4.5rem',
                        display: '-webkit-box',
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        marginBottom: '16px'
                      }}>
                        {a.leadParagraph}
                      </p>
                    </div>

                    {/* Symmetrical Card Footer: Hashtag + Button securely inside the box */}
                    <div style={{
                      borderTop: '1px solid var(--border-subtle)',
                      paddingTop: '14px',
                      marginTop: 'auto',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      gap: '12px'
                    }}>
                      <span
                        style={{
                          fontSize: '0.75rem',
                          color: 'var(--text-muted)',
                          fontFamily: 'var(--font-mono)',
                          flex: '1 1 auto',
                          minWidth: 0,
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap'
                        }}
                        title={`#${a.targetKeyword.replace(/\s+/g, '_')}`}
                      >
                        #{a.targetKeyword.replace(/\s+/g, '_')}
                      </span>
                      <Link
                        href={`/news/${a.id}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-ghost"
                        style={{
                          flexShrink: 0,
                          padding: '6px 12px',
                          fontSize: '0.8rem',
                          fontWeight: 700,
                          color: 'var(--accent-cyan)',
                          borderColor: 'rgba(0, 240, 255, 0.35)',
                          background: 'rgba(0, 240, 255, 0.06)',
                          cursor: 'pointer',
                          whiteSpace: 'nowrap',
                          textDecoration: 'none',
                          display: 'inline-flex',
                          alignItems: 'center'
                        }}
                      >
                        Read Analysis →
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
