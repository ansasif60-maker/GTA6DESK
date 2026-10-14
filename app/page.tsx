import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from './components/Header';
import Footer from './components/Footer';
import Countdown from './components/Countdown';
import TrailerTheater from './components/TrailerTheater';
import { WEAPONS, CHARACTERS, MAP_ZONES, ARTICLES } from '@/lib/data';

export default function HomePage() {
  const previewWeapons = WEAPONS.slice(0, 3);
  const previewCharacters = CHARACTERS.slice(0, 2);
  const previewArticles = ARTICLES.slice(0, 3);

  return (
    <>
      <Header />

      <main style={{ minHeight: '80vh', paddingBottom: 'var(--space-3xl)' }}>
        {/* Sleek Hero Header */}
        <section style={{ padding: '48px 0 32px', background: 'radial-gradient(ellipse at 50% -20%, rgba(255, 0, 122, 0.18) 0%, rgba(0, 240, 255, 0.05) 50%, transparent 80%), var(--bg-base)' }}>
          <div className="container">
            <div style={{ maxWidth: '820px', marginBottom: '32px' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                <span className="badge-category news">FALL 2025/2026 RELEASE</span>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                  PlayStation 5 · Xbox Series X|S
                </span>
              </div>
              <h1 style={{ fontSize: 'clamp(2.4rem, 4vw, 3.4rem)', fontWeight: 800, margin: '0 0 16px', lineHeight: 1.2 }}>
                Grand Theft Auto VI Intelligence Journal
              </h1>
              <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', lineHeight: 1.65, margin: 0 }}>
                Authoritative gaming journalism, verified Take-Two Interactive financial analysis, and comprehensive gameplay guides for Grand Theft Auto VI.
              </p>
            </div>

            {/* Countdown Component */}
            <Countdown />
          </div>
        </section>

        {/* Official Trailer 1 Theater & Interactive Breakdown */}
        <TrailerTheater />

        {/* Weapons & Armory Highlight */}
        <section className="section-wrapper">
          <div className="container">
            <div className="section-header-row">
              <div>
                <span className="badge-category lore">TACTICAL ARMORY</span>
                <h2 className="section-title" style={{ marginTop: '6px' }}>Weapons & Ballistics</h2>
                <p style={{ margin: '4px 0 0', fontSize: '0.95rem' }}>
                  Confirmed firearms, caliber data, and trunk inventory stowage mechanics.
                </p>
              </div>
              <Link href="/weapons" className="btn btn-ghost">
                View Full Armory ({WEAPONS.length} Weapons) →
              </Link>
            </div>

            <div className="weapon-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
              {previewWeapons.map((w) => (
                <div key={w.id} className="weapon-card">
                  <div className="weapon-image-wrap">
                    <img src={w.image} alt={w.name} className="weapon-card-img" />
                    <span className="weapon-class-badge">{w.category}</span>
                    <span className="weapon-real-model-tag">{w.caliber}</span>
                  </div>
                  <div className="weapon-card-body">
                    <h3 className="weapon-title" style={{ fontSize: '1.25rem' }}>{w.name}</h3>
                    <span className="weapon-caliber-sub">{w.realWorldCounterpart}</span>
                    <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginBottom: '16px' }}>
                      {w.lore}
                    </p>
                    <div className="weapon-stat-bars">
                      <div className="weapon-stat-row">
                        <span className="weapon-stat-name">Damage</span>
                        <div className="weapon-stat-track">
                          <div className="weapon-stat-fill" style={{ width: `${w.damage}%`, background: 'var(--accent-rose)' }} />
                        </div>
                        <span className="weapon-stat-val">{w.damage}</span>
                      </div>
                      <div className="weapon-stat-row">
                        <span className="weapon-stat-name">Accuracy</span>
                        <div className="weapon-stat-track">
                          <div className="weapon-stat-fill" style={{ width: `${w.accuracy}%`, background: 'var(--accent-cyan)' }} />
                        </div>
                        <span className="weapon-stat-val">{w.accuracy}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Characters Highlight */}
        <section className="section-wrapper" style={{ background: 'var(--bg-surface)' }}>
          <div className="container">
            <div className="section-header-row">
              <div>
                <span className="badge-category tech">LEONIDA UNDERWORLD</span>
                <h2 className="section-title" style={{ marginTop: '6px' }}>Characters & Cast</h2>
                <p style={{ margin: '4px 0 0', fontSize: '0.95rem' }}>
                  Protagonist profiles, actor investigations, and syndicate connections.
                </p>
              </div>
              <Link href="/characters" className="btn btn-ghost">
                View Full Cast ({CHARACTERS.length} Dossiers) →
              </Link>
            </div>

            <div className="character-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))' }}>
              {previewCharacters.map((c) => (
                <div key={c.id} className="character-card">
                  <div className="character-portrait-box">
                    <img src={c.image} alt={c.name} className="character-portrait-img" />
                    <span className="character-status-badge">{c.status}</span>
                    <span className="character-role-tag">{c.role}</span>
                  </div>
                  <div className="character-card-body">
                    <div className="character-name-row">
                      <h3 className="character-name" style={{ fontSize: '1.45rem' }}>{c.name}</h3>
                      <span className="character-actor">{c.actor}</span>
                    </div>
                    <div className="character-faction-row">{c.faction}</div>
                    <p className="character-bio-text">{c.bio}</p>
                    <div className="character-traits-wrap">
                      {c.traits.map((t, idx) => (
                        <span key={idx} className="character-trait-badge">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Map & World Highlight */}
        <section className="section-wrapper">
          <div className="container">
            <div className="section-header-row">
              <div>
                <span className="badge-category financial">WORLD CARTOGRAPHY</span>
                <h2 className="section-title" style={{ marginTop: '6px' }}>State of Leonida</h2>
                <p style={{ margin: '4px 0 0', fontSize: '0.95rem' }}>
                  Comprehensive geographic mapping modeled at ~2.5x the scale of GTA V Los Santos.
                </p>
              </div>
              <Link href="/map" className="btn btn-ghost">
                Explore Full Interactive Map →
              </Link>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
              {MAP_ZONES.slice(0, 4).map((zone) => (
                <div key={zone.id} className="spotlight-item" style={{ background: 'var(--bg-surface)', padding: '20px' }}>
                  <span className="badge-category lore" style={{ fontSize: '0.7rem' }}>{zone.district}</span>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 800, margin: '8px 0 6px', color: 'var(--text-primary)' }}>
                    {zone.name}
                  </h3>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.55, margin: 0 }}>
                    {zone.lore}
                  </p>
                  <div style={{ marginTop: '12px', fontSize: '0.78rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                    Interiors: {zone.enterableStructures}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Financial & Corporate Desk */}
        <section className="section-wrapper" style={{ background: 'var(--bg-surface)' }}>
          <div className="container">
            <div className="section-header-row">
              <div>
                <span className="badge-category financial">WALL STREET & SEC FILINGS</span>
                <h2 className="section-title" style={{ marginTop: '6px' }}>Take-Two Interactive (NASDAQ: TTWO)</h2>
                <p style={{ margin: '4px 0 0', fontSize: '0.95rem' }}>
                  Institutional guidance analysis, Net Bookings forecasts, and SEC Edgar disclosures.
                </p>
              </div>
              <Link href="/financial" className="btn btn-ghost">
                Open Financial Desk →
              </Link>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
              <div className="trailer-stat-card">
                <div className="stat-label-mono">FY2026 NET BOOKINGS TARGET</div>
                <div className="stat-value-prominent" style={{ color: 'var(--accent-cyan)' }}>$8.0B+ Target</div>
                <div className="stat-desc">Maintained in official SEC Form 8-K filings for calendar 2025/2026 launch window.</div>
              </div>

              <div className="trailer-stat-card">
                <div className="stat-label-mono">FIRST-YEAR UNITS FORECAST</div>
                <div className="stat-value-prominent" style={{ color: 'var(--accent-rose)' }}>38M - 42M Units</div>
                <div className="stat-desc">Wall Street analyst consensus modeling for PlayStation 5 and Xbox Series X|S.</div>
              </div>

              <div className="trailer-stat-card">
                <div className="stat-label-mono">TRAILER 1 ENGAGEMENT</div>
                <div className="stat-value-prominent" style={{ color: 'var(--accent-green)' }}>93M+ Views (24h)</div>
                <div className="stat-desc">Guinness World Record for most-viewed video game reveal in internet history.</div>
              </div>
            </div>
          </div>
        </section>

        {/* Latest Verified Articles */}
        <section className="section-wrapper">
          <div className="container">
            <div className="section-header-row">
              <div>
                <span className="badge-category news">EDITORIAL DESK</span>
                <h2 className="section-title" style={{ marginTop: '6px' }}>Verified Reporting & Analysis</h2>
                <p style={{ margin: '4px 0 0', fontSize: '0.95rem' }}>
                  Fact-checked journalism separating confirmed disclosures from rumors.
                </p>
              </div>
              <Link href="/news" className="btn btn-ghost">
                Read All Articles ({ARTICLES.length}) →
              </Link>
            </div>

            <div className="story-grid-three">
              {previewArticles.map((art) => (
                <div key={art.id} className="story-card">
                  <div className="story-card-body">
                    <span className="badge-category lore" style={{ fontSize: '0.7rem', width: 'fit-content' }}>
                      {art.clusterName}
                    </span>
                    <h3 className="story-title">
                      <Link href={`/news?article=${art.id}`}>{art.title}</Link>
                    </h3>
                    <p className="story-excerpt">{art.leadParagraph}</p>
                    <Link href={`/news?article=${art.id}`} style={{ fontWeight: 700, fontSize: '0.88rem', color: 'var(--accent-cyan)' }}>
                      Read Analysis →
                    </Link>
                  </div>
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
