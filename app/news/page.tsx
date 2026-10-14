'use client';

import React, { useState, useEffect } from 'react';
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
  const [activeArticle, setActiveArticle] = useState<Article | null>(null);

  // Check URL query parameters for ?article=ID or ?id=ID to auto-open modal from homepage links
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const articleId = params.get('article') || params.get('id');
      if (articleId) {
        const found = ARTICLES.find((a) => a.id === Number(articleId));
        if (found) {
          setActiveArticle(found);
        }
      }
    }
  }, []);

  // Keyboard escape listener to close article dossier
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveArticle(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
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
                        onClick={() => setActiveArticle(a)}
                        style={{
                          fontSize: '1.2rem',
                          fontWeight: 800,
                          color: 'var(--text-primary)',
                          marginBottom: '12px',
                          lineHeight: 1.35,
                          height: '3.3rem',
                          display: '-webkit-box',
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          cursor: 'pointer',
                          transition: 'color 0.2s ease'
                        }}
                        title={a.title}
                        onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-rose)')}
                        onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
                      >
                        {a.title}
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
                      <button
                        type="button"
                        onClick={() => setActiveArticle(a)}
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
                          whiteSpace: 'nowrap'
                        }}
                      >
                        Read Analysis →
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Interactive Full Article Dossier Modal */}
        {activeArticle && (
          <div
            onClick={() => setActiveArticle(null)}
            style={{
              position: 'fixed',
              inset: 0,
              backgroundColor: 'rgba(3, 5, 8, 0.88)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              zIndex: 9999,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '20px'
            }}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              style={{
                backgroundColor: 'var(--bg-surface)',
                border: '1px solid rgba(0, 240, 255, 0.35)',
                borderRadius: 'var(--radius-lg)',
                maxWidth: '820px',
                width: '100%',
                maxHeight: '88vh',
                overflowY: 'auto',
                boxShadow: '0 24px 70px rgba(0, 0, 0, 0.85), 0 0 30px rgba(0, 240, 255, 0.15)',
                padding: '36px',
                position: 'relative'
              }}
            >
              {/* Top Accent Gradient Bar */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '4px',
                background: 'var(--gradient-vi)'
              }} />

              {/* Close Button */}
              <button
                type="button"
                onClick={() => setActiveArticle(null)}
                aria-label="Close Dossier"
                style={{
                  position: 'absolute',
                  top: '18px',
                  right: '20px',
                  background: 'var(--bg-elevated)',
                  border: '1px solid var(--border-default)',
                  borderRadius: '50%',
                  width: '36px',
                  height: '36px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-primary)',
                  fontSize: '1.1rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--accent-rose)';
                  e.currentTarget.style.color = 'var(--accent-rose)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-default)';
                  e.currentTarget.style.color = 'var(--text-primary)';
                }}
              >
                ✕
              </button>

              {/* Meta Header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '14px' }}>
                <span className="badge-category news" style={{ fontSize: '0.75rem' }}>
                  {activeArticle.clusterName}
                </span>
                <span style={{
                  fontSize: '0.72rem',
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--accent-cyan)',
                  background: 'rgba(0, 240, 255, 0.08)',
                  padding: '2px 8px',
                  borderRadius: '4px',
                  border: '1px solid rgba(0, 240, 255, 0.25)'
                }}>
                  NODE #{activeArticle.id}
                </span>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                  #{activeArticle.targetKeyword.replace(/\s+/g, '_')}
                </span>
              </div>

              {/* Article Title */}
              <h2 style={{
                fontSize: 'clamp(1.5rem, 2.5vw, 2.1rem)',
                fontWeight: 900,
                color: 'var(--text-primary)',
                lineHeight: 1.25,
                margin: '0 0 16px'
              }}>
                {activeArticle.title}
              </h2>

              {/* Editorial Byline */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                fontSize: '0.82rem',
                color: 'var(--text-muted)',
                paddingBottom: '16px',
                marginBottom: '20px',
                borderBottom: '1px solid var(--border-subtle)',
                flexWrap: 'wrap'
              }}>
                <span>By <strong>GTA 6 DESK Intelligence Staff</strong></span>
                <span>•</span>
                <span>Official Verification: Rockstar Newswire & SEC Form 10-Q</span>
                <span>•</span>
                <span style={{ color: 'var(--accent-cyan)' }}>Wikidata: {activeArticle.wikidata || 'Q115688534'}</span>
              </div>

              {/* Semantic EAV Triple (If Available) */}
              {activeArticle.eav && (
                <div style={{
                  background: 'var(--bg-base)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-md)',
                  padding: '16px 20px',
                  marginBottom: '24px'
                }}>
                  <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', marginBottom: '8px', letterSpacing: '0.05em' }}>
                    SEMANTIC ENTITY-ATTRIBUTE-VALUE TRIPLE:
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px', fontSize: '0.85rem' }}>
                    <div>
                      <span style={{ color: 'var(--text-muted)', display: 'block', fontSize: '0.72rem' }}>CENTRAL ENTITY:</span>
                      <strong style={{ color: 'var(--accent-cyan)' }}>{activeArticle.eav.entity}</strong>
                    </div>
                    <div>
                      <span style={{ color: 'var(--text-muted)', display: 'block', fontSize: '0.72rem' }}>VERIFIED ATTRIBUTE:</span>
                      <strong style={{ color: 'var(--text-primary)' }}>{activeArticle.eav.attribute}</strong>
                    </div>
                    <div>
                      <span style={{ color: 'var(--text-muted)', display: 'block', fontSize: '0.72rem' }}>CANONICAL VALUE:</span>
                      <strong style={{ color: 'var(--accent-amber)' }}>{activeArticle.eav.value}</strong>
                    </div>
                  </div>
                </div>
              )}

              {/* Lead Paragraph */}
              <div style={{
                fontSize: '1.08rem',
                fontWeight: 600,
                color: 'var(--text-primary)',
                lineHeight: 1.7,
                marginBottom: '24px',
                borderLeft: '3px solid var(--accent-rose)',
                paddingLeft: '16px',
                background: 'rgba(255, 0, 122, 0.04)',
                padding: '16px 20px',
                borderRadius: '0 var(--radius-sm) var(--radius-sm) 0'
              }}>
                {activeArticle.leadParagraph}
              </div>

              {/* In-Depth Investigation Analysis */}
              <div style={{ marginBottom: '28px' }}>
                <h3 style={{ fontSize: '1rem', color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '12px' }}>
                  IN-DEPTH INVESTIGATION & TECHNICAL ANALYSIS
                </h3>
                <div style={{
                  background: 'var(--bg-elevated)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-md)',
                  padding: '24px',
                  fontSize: '0.98rem',
                  lineHeight: 1.8,
                  color: 'var(--text-secondary)'
                }}>
                  {activeArticle.tokenChunk || activeArticle.leadParagraph}
                </div>
              </div>

              {/* Modal Footer Actions */}
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingTop: '20px',
                borderTop: '1px solid var(--border-subtle)',
                flexWrap: 'wrap',
                gap: '12px'
              }}>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                  PRESS ESC OR CLICK OUTSIDE TO CLOSE
                </div>

                <div style={{ display: 'flex', gap: '10px' }}>
                  <button
                    type="button"
                    onClick={() => setActiveArticle(null)}
                    className="btn btn-primary"
                    style={{ padding: '8px 20px', fontSize: '0.88rem' }}
                  >
                    Close Dossier
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </>
  );
}
