import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { ARTICLES, Article } from '@/lib/data';

interface PageProps {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return ARTICLES.map((article) => ({
    id: article.id.toString(),
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const article = ARTICLES.find((a) => a.id === Number(id));

  if (!article) {
    return {
      title: 'Article Not Found | GTA 6 DESK',
      description: 'The requested intelligence article could not be located.',
    };
  }

  return {
    title: `${article.title} | GTA 6 DESK Verified Analysis`,
    description: article.leadParagraph,
    openGraph: {
      title: `${article.title} — GTA 6 DESK Intelligence`,
      description: article.leadParagraph,
      type: 'article',
      url: `https://gta6desk.com/news/${article.id}`,
    },
  };
}

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

export default async function ArticleDetailPage({ params }: PageProps) {
  const { id } = await params;
  const article = ARTICLES.find((a) => a.id === Number(id));

  if (!article) {
    notFound();
  }

  const prevArticle = ARTICLES.find((a) => a.id === article.id - 1);
  const nextArticle = ARTICLES.find((a) => a.id === article.id + 1);
  const relatedArticles = ARTICLES.filter(
    (a) => a.cluster === article.cluster && a.id !== article.id
  ).slice(0, 3);

  return (
    <>
      <Header />

      <main style={{ minHeight: '85vh', paddingBottom: '80px', background: 'var(--bg-base)' }}>
        {/* Top Breadcrumb & Back Bar */}
        <div style={{
          borderBottom: '1px solid var(--border-subtle)',
          background: 'rgba(11, 15, 23, 0.75)',
          backdropFilter: 'blur(8px)',
          padding: '16px 0'
        }}>
          <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
              <Link href="/" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Home</Link>
              <span>/</span>
              <Link href="/news" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>News Desk</Link>
              <span>/</span>
              <span style={{ color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)' }}>Node #{article.id}</span>
            </div>

            <Link
              href="/news"
              className="btn btn-ghost"
              style={{
                padding: '6px 14px',
                fontSize: '0.8rem',
                borderColor: 'var(--border-subtle)',
                color: 'var(--text-secondary)'
              }}
            >
              ← Back to All Articles
            </Link>
          </div>
        </div>

        {/* Article Content Container */}
        <div className="container" style={{ maxWidth: '960px', marginTop: '36px' }}>
          <article style={{
            background: 'var(--bg-surface)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-lg)',
            padding: 'clamp(20px, 4vw, 44px)',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.45)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            {/* Top Accent Gradient Line */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '3px',
              background: 'linear-gradient(90deg, var(--accent-rose), var(--accent-cyan), var(--accent-amber))'
            }} />

            {/* Meta Header */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              flexWrap: 'wrap',
              marginBottom: '18px'
            }}>
              <span className="badge-category news" style={{
                fontSize: '0.75rem',
                fontWeight: 700,
                letterSpacing: '0.04em'
              }}>
                {getClusterBadgeLabel(article.clusterName)}
              </span>

              <span style={{
                fontSize: '0.75rem',
                fontFamily: 'var(--font-mono)',
                color: 'var(--accent-cyan)',
                background: 'rgba(0, 240, 255, 0.08)',
                padding: '3px 10px',
                borderRadius: '4px',
                border: '1px solid rgba(0, 240, 255, 0.25)',
                fontWeight: 700
              }}>
                NODE #{article.id}
              </span>

              <span style={{
                fontSize: '0.78rem',
                color: 'var(--text-muted)',
                fontFamily: 'var(--font-mono)'
              }}>
                #{article.targetKeyword.replace(/\s+/g, '_')}
              </span>
            </div>

            {/* Headline */}
            <h1 style={{
              fontSize: 'clamp(1.75rem, 3.2vw, 2.5rem)',
              fontWeight: 900,
              color: 'var(--text-primary)',
              lineHeight: 1.22,
              margin: '0 0 18px',
              letterSpacing: '-0.02em'
            }}>
              {article.title}
            </h1>

            {/* Editorial Byline */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              fontSize: '0.84rem',
              color: 'var(--text-muted)',
              paddingBottom: '20px',
              marginBottom: '26px',
              borderBottom: '1px solid var(--border-subtle)',
              flexWrap: 'wrap'
            }}>
              <span>By <strong>GTA 6 DESK Intelligence Staff</strong></span>
              <span>•</span>
              <span>Official Verification: Rockstar Newswire & SEC Form 10-Q</span>
              <span>•</span>
              <span style={{ color: 'var(--accent-cyan)' }}>Wikidata: {article.wikidata || 'Q115688534'}</span>
            </div>

            {/* Semantic Entity-Attribute-Value Triple (If Available) */}
            {article.eav && (
              <div style={{
                background: 'var(--bg-base)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-md)',
                padding: '18px 22px',
                marginBottom: '28px'
              }}>
                <div style={{
                  fontSize: '0.7rem',
                  color: 'var(--text-muted)',
                  fontFamily: 'var(--font-mono)',
                  textTransform: 'uppercase',
                  marginBottom: '10px',
                  letterSpacing: '0.06em'
                }}>
                  SEMANTIC ENTITY-ATTRIBUTE-VALUE TRIPLE:
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '14px', fontSize: '0.88rem' }}>
                  <div>
                    <span style={{ color: 'var(--text-muted)', display: 'block', fontSize: '0.72rem', marginBottom: '2px' }}>CENTRAL ENTITY:</span>
                    <strong style={{ color: 'var(--accent-cyan)' }}>{article.eav.entity}</strong>
                  </div>
                  <div>
                    <span style={{ color: 'var(--text-muted)', display: 'block', fontSize: '0.72rem', marginBottom: '2px' }}>VERIFIED ATTRIBUTE:</span>
                    <strong style={{ color: 'var(--text-primary)' }}>{article.eav.attribute}</strong>
                  </div>
                  <div>
                    <span style={{ color: 'var(--text-muted)', display: 'block', fontSize: '0.72rem', marginBottom: '2px' }}>CANONICAL VALUE:</span>
                    <strong style={{ color: 'var(--accent-amber)' }}>{article.eav.value}</strong>
                  </div>
                </div>
              </div>
            )}

            {/* Lead Paragraph Callout */}
            <div style={{
              fontSize: '1.12rem',
              fontWeight: 500,
              color: 'var(--text-primary)',
              lineHeight: 1.75,
              marginBottom: '32px',
              borderLeft: '4px solid var(--accent-rose)',
              background: 'rgba(255, 0, 122, 0.04)',
              padding: '20px 24px',
              borderRadius: '0 var(--radius-md) var(--radius-md) 0'
            }}>
              {article.leadParagraph}
            </div>

            {/* In-Depth Technical Analysis Body */}
            <div style={{ marginBottom: '36px' }}>
              <h2 style={{
                fontSize: '0.92rem',
                color: 'var(--accent-cyan)',
                fontFamily: 'var(--font-mono)',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                marginBottom: '14px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <span style={{ display: 'inline-block', width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent-cyan)' }} />
                IN-DEPTH INVESTIGATION & TECHNICAL ANALYSIS
              </h2>
              <div style={{
                background: 'var(--bg-elevated)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-md)',
                padding: 'clamp(20px, 3vw, 28px)',
                fontSize: '1.02rem',
                lineHeight: 1.85,
                color: 'var(--text-secondary)'
              }}>
                {article.tokenChunk || article.leadParagraph}
              </div>
            </div>

            {/* Dossier Bottom Controls */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingTop: '24px',
              borderTop: '1px solid var(--border-subtle)',
              flexWrap: 'wrap',
              gap: '16px'
            }}>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                {prevArticle && (
                  <Link
                    href={`/news/${prevArticle.id}`}
                    className="btn btn-ghost"
                    style={{ fontSize: '0.84rem', padding: '8px 16px' }}
                  >
                    ← Previous Node #{prevArticle.id}
                  </Link>
                )}
                {nextArticle && (
                  <Link
                    href={`/news/${nextArticle.id}`}
                    className="btn btn-ghost"
                    style={{ fontSize: '0.84rem', padding: '8px 16px' }}
                  >
                    Next Node #{nextArticle.id} →
                  </Link>
                )}
              </div>

              <Link
                href="/news"
                className="btn btn-primary"
                style={{ fontSize: '0.86rem', padding: '8px 20px' }}
              >
                Browse All 40 Intel Nodes
              </Link>
            </div>
          </article>

          {/* Related Articles in Same Cluster */}
          {relatedArticles.length > 0 && (
            <section style={{ marginTop: '48px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, margin: 0, color: 'var(--text-primary)' }}>
                  Related Dossiers in {getClusterBadgeLabel(article.clusterName)}
                </h3>
                <Link href="/news" style={{ fontSize: '0.85rem', color: 'var(--accent-cyan)', textDecoration: 'none' }}>
                  View All →
                </Link>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
                {relatedArticles.map((rel) => (
                  <div
                    key={rel.id}
                    style={{
                      background: 'var(--bg-surface)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: 'var(--radius-md)',
                      padding: '20px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between'
                    }}
                  >
                    <div>
                      <div style={{ fontSize: '0.72rem', color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)', marginBottom: '8px' }}>
                        NODE #{rel.id}
                      </div>
                      <h4 style={{ fontSize: '1.05rem', fontWeight: 700, margin: '0 0 10px', lineHeight: 1.35 }}>
                        <Link href={`/news/${rel.id}`} style={{ color: 'var(--text-primary)', textDecoration: 'none' }}>
                          {rel.title}
                        </Link>
                      </h4>
                      <p style={{
                        fontSize: '0.85rem',
                        color: 'var(--text-secondary)',
                        lineHeight: 1.55,
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                        marginBottom: '14px'
                      }}>
                        {rel.leadParagraph}
                      </p>
                    </div>

                    <Link
                      href={`/news/${rel.id}`}
                      className="btn btn-ghost"
                      style={{
                        padding: '6px 12px',
                        fontSize: '0.8rem',
                        fontWeight: 700,
                        color: 'var(--accent-cyan)',
                        borderColor: 'rgba(0, 240, 255, 0.35)',
                        width: 'fit-content'
                      }}
                    >
                      Read Analysis →
                    </Link>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}
