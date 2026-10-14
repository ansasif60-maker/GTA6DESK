'use client';

import React from 'react';
import Link from 'next/link';
import Header from './components/Header';
import Footer from './components/Footer';
import Countdown from './components/Countdown';
import TrailerTheater from './components/TrailerTheater';

export default function HomePage() {
  const visualFeatures = [
    {
      title: 'State of Leonida',
      subtitle: 'Vice City, Port Gellhorn & The Keys',
      badge: 'THE WORLD',
      badgeClass: 'news',
      image: '/assets/leonida_map_hero.jpg',
      link: '/map',
      cta: 'Explore Map →'
    },
    {
      title: 'Lucia & Jason',
      subtitle: 'Vice City Dual Protagonists & Syndicate',
      badge: 'CHARACTERS',
      badgeClass: 'tech',
      image: '/assets/lucia_character_portrait.jpg',
      link: '/characters',
      cta: 'View Dossiers →'
    },
    {
      title: 'Exotics & Speedboats',
      subtitle: 'Next-Gen Handling Physics & Fleet',
      badge: 'VEHICLES',
      badgeClass: 'lore',
      image: '/assets/exotic_car_garage.jpg',
      link: '/categories',
      cta: 'Browse Fleet →'
    },
    {
      title: 'Weapons & Ballistics',
      subtitle: 'Tactical Loadouts & Trunk Stowage',
      badge: 'ARMORY',
      badgeClass: 'lore',
      image: '/assets/tactical_armory_bench.jpg',
      link: '/weapons',
      cta: 'Inspect Arsenal →'
    },
    {
      title: 'Grassrivers & Swamplands',
      subtitle: 'Kelly County & Living Ecosystem AI',
      badge: 'WILDLIFE',
      badgeClass: 'news',
      image: '/assets/wildlife_everglades_reserve.jpg',
      link: '/leonida',
      cta: 'Explore Wetlands →'
    },
    {
      title: 'Campaign & Heists',
      subtitle: 'Dual-Operative Coordinated Robberies',
      badge: 'OPERATIONS',
      badgeClass: 'financial',
      image: '/assets/mission_convenience_heist.jpg',
      link: '/missions',
      cta: 'Mission Briefings →'
    }
  ];

  const featuredDispatches = [
    {
      id: 1,
      title: 'GTA 6 Official Release Window & Timeline Master Matrix',
      tag: 'RELEASE WINDOW',
      image: '/assets/social_media_vice_city.jpg'
    },
    {
      id: 8,
      title: "Lucia's Narrative Arc: From Inmate to Vice City Syndicate",
      tag: 'CHARACTER LORE',
      image: '/assets/mission_bank_vault.jpg'
    },
    {
      id: 15,
      title: 'Vice City Map Geography & 2.5x Scale Cartography',
      tag: 'CARTOGRAPHY',
      image: '/assets/radio_soundtrack_studio.jpg'
    }
  ];

  return (
    <>
      <Header />

      <main style={{ minHeight: '80vh', paddingBottom: 'var(--space-3xl)', background: 'var(--bg-base)' }}>
        {/* Minimalist Rockstar-Style Hero */}
        <section style={{
          position: 'relative',
          padding: '56px 0 36px',
          background: 'radial-gradient(ellipse at 50% -20%, rgba(255, 0, 122, 0.22) 0%, rgba(0, 240, 255, 0.08) 45%, transparent 75%), var(--bg-base)',
          borderBottom: '1px solid var(--border-subtle)',
          textAlign: 'center'
        }}>
          <div className="container" style={{ maxWidth: '900px' }}>
            {/* Rockstar Release Window & Platform Pill */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              background: 'rgba(255, 0, 122, 0.08)',
              border: '1px solid rgba(255, 0, 122, 0.35)',
              padding: '6px 16px',
              borderRadius: '24px',
              marginBottom: '18px'
            }}>
              <span style={{ fontSize: '0.78rem', fontWeight: 800, color: 'var(--accent-rose)', letterSpacing: '0.08em' }}>
                COMING FALL 2025
              </span>
              <span style={{ color: 'var(--border-default)', fontSize: '0.8rem' }}>|</span>
              <span style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', fontWeight: 600 }}>
                PlayStation 5 · Xbox Series X|S
              </span>
            </div>

            {/* Main Headline */}
            <h1 style={{
              fontSize: 'clamp(2.4rem, 5vw, 4.2rem)',
              fontWeight: 900,
              lineHeight: 1.1,
              letterSpacing: '-0.03em',
              margin: '0 0 14px',
              background: 'linear-gradient(180deg, #FFFFFF 0%, #E2E8F0 60%, #94A3B8 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              GRAND THEFT AUTO VI
            </h1>

            <p style={{
              fontSize: 'clamp(1rem, 1.8vw, 1.25rem)',
              color: 'var(--accent-cyan)',
              fontFamily: 'var(--font-mono)',
              textTransform: 'uppercase',
              letterSpacing: '0.12em',
              margin: '0 0 12px',
              fontWeight: 700
            }}>
              Vice City &middot; State of Leonida
            </p>

            <p style={{
              fontSize: '1rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.6,
              maxWidth: '680px',
              margin: '0 auto 28px',
              fontWeight: 500
            }}>
              The premier independent reference journal and database for Grand Theft Auto VI—fact-checked news, verified weapons ballistics, character profiles, interactive Leonida cartography, and Take-Two Interactive financial telemetry.
            </p>

            {/* Quick Hero Actions */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap', marginBottom: '36px' }}>
              <a
                href="#trailer-theater"
                className="btn btn-primary"
                style={{
                  padding: '10px 24px',
                  fontSize: '0.92rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontWeight: 800
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
                <span>Watch Trailer 1</span>
              </a>

              <Link
                href="/map"
                className="btn btn-ghost"
                style={{
                  padding: '10px 20px',
                  fontSize: '0.92rem',
                  fontWeight: 700,
                  borderColor: 'var(--border-default)'
                }}
              >
                Explore Leonida Map →
              </Link>
            </div>

            {/* Countdown Component */}
            <Countdown />
          </div>
        </section>

        {/* Clean, Clutter-Free Official Trailer */}
        <TrailerTheater />

        {/* Visual Showcase Gallery ("More Pics, Less Text") */}
        <section style={{ padding: '48px 0 32px' }}>
          <div className="container">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '28px', flexWrap: 'wrap', gap: '12px' }}>
              <div>
                <span className="badge-category news" style={{ fontSize: '0.72rem', letterSpacing: '0.06em' }}>
                  THE WORLD OF GTA VI
                </span>
                <h2 style={{ fontSize: 'clamp(1.7rem, 3vw, 2.4rem)', fontWeight: 900, margin: '8px 0 0', color: 'var(--text-primary)' }}>
                  Visual Showcase &amp; Intelligence
                </h2>
              </div>
              <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                CONFIRMED ROCKSTAR GAMES ASSETS
              </p>
            </div>

            {/* Visual Image Cards Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '24px'
            }}>
              {visualFeatures.map((feat) => (
                <Link
                  key={feat.title}
                  href={feat.link}
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  <div
                    style={{
                      position: 'relative',
                      borderRadius: 'var(--radius-lg)',
                      overflow: 'hidden',
                      background: 'var(--bg-surface)',
                      border: '1px solid var(--border-subtle)',
                      aspectRatio: '16 / 10',
                      boxShadow: 'var(--shadow-sm)',
                      transition: 'transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-4px)';
                      e.currentTarget.style.borderColor = 'rgba(0, 240, 255, 0.45)';
                      e.currentTarget.style.boxShadow = '0 16px 36px rgba(0, 0, 0, 0.6), 0 0 20px rgba(0, 240, 255, 0.15)';
                      const img = e.currentTarget.querySelector('img');
                      if (img) img.style.transform = 'scale(1.06)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.borderColor = 'var(--border-subtle)';
                      e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
                      const img = e.currentTarget.querySelector('img');
                      if (img) img.style.transform = 'scale(1)';
                    }}
                  >
                    {/* Background Visual Asset */}
                    <img
                      src={feat.image}
                      alt={feat.title}
                      style={{
                        position: 'absolute',
                        inset: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.5s ease'
                      }}
                    />

                    {/* Gradient Overlay for Instant Readability */}
                    <div style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to top, rgba(3, 5, 8, 0.95) 0%, rgba(3, 5, 8, 0.55) 50%, rgba(3, 5, 8, 0.1) 100%)'
                    }} />

                    {/* Top Badge */}
                    <div style={{ position: 'absolute', top: '16px', left: '18px' }}>
                      <span className={`badge-category ${feat.badgeClass}`} style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.04em' }}>
                        {feat.badge}
                      </span>
                    </div>

                    {/* Bottom Content (Punchy & Minimalist) */}
                    <div style={{ position: 'absolute', bottom: '18px', left: '18px', right: '18px' }}>
                      <h3 style={{
                        fontSize: '1.3rem',
                        fontWeight: 900,
                        color: 'var(--text-primary)',
                        margin: '0 0 4px',
                        lineHeight: 1.25
                      }}>
                        {feat.title}
                      </h3>
                      <p style={{
                        fontSize: '0.84rem',
                        color: 'var(--text-secondary)',
                        margin: '0 0 10px',
                        lineHeight: 1.4
                      }}>
                        {feat.subtitle}
                      </p>
                      <span style={{
                        fontSize: '0.78rem',
                        fontWeight: 700,
                        color: 'var(--accent-cyan)',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px'
                      }}>
                        {feat.cta}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Minimalist Featured Intelligence (Image-Backed Cards) */}
        <section style={{ padding: '36px 0 24px' }}>
          <div className="container">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', flexWrap: 'wrap', gap: '12px' }}>
              <div>
                <span className="badge-category news" style={{ fontSize: '0.72rem' }}>EDITORIAL INTEL</span>
                <h2 style={{ fontSize: '1.6rem', fontWeight: 900, margin: '6px 0 0', color: 'var(--text-primary)' }}>
                  Featured Verified Dispatches
                </h2>
              </div>

              <Link href="/news" className="btn btn-ghost" style={{ fontSize: '0.85rem' }}>
                All 40 Dossiers →
              </Link>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
              {featuredDispatches.map((item) => (
                <Link
                  key={item.id}
                  href={`/news/${item.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  <div
                    style={{
                      background: 'var(--bg-surface)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: 'var(--radius-lg)',
                      overflow: 'hidden',
                      display: 'flex',
                      flexDirection: 'column',
                      height: '100%',
                      transition: 'border-color 0.2s ease, transform 0.2s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'var(--accent-rose)';
                      e.currentTarget.style.transform = 'translateY(-3px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'var(--border-subtle)';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    <div style={{ height: '160px', position: 'relative', overflow: 'hidden' }}>
                      <img
                        src={item.image}
                        alt={item.title}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                      <span style={{
                        position: 'absolute',
                        top: '12px',
                        left: '12px',
                        background: 'rgba(3, 5, 8, 0.75)',
                        backdropFilter: 'blur(4px)',
                        padding: '3px 8px',
                        borderRadius: '4px',
                        fontSize: '0.68rem',
                        fontWeight: 700,
                        color: 'var(--accent-cyan)',
                        fontFamily: 'var(--font-mono)'
                      }}>
                        NODE #{item.id} · {item.tag}
                      </span>
                    </div>

                    <div style={{ padding: '18px', display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
                      <h3 style={{
                        fontSize: '1.05rem',
                        fontWeight: 800,
                        color: 'var(--text-primary)',
                        lineHeight: 1.35,
                        margin: '0 0 14px'
                      }}>
                        {item.title}
                      </h3>

                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        paddingTop: '12px',
                        borderTop: '1px solid var(--border-subtle)'
                      }}>
                        <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                          READ IN NEW TAB ↗
                        </span>
                        <span style={{
                          fontSize: '0.8rem',
                          fontWeight: 700,
                          color: 'var(--accent-cyan)'
                        }}>
                          Read Analysis →
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Clean Minimalist Hub Links */}
        <section style={{ padding: '24px 0 16px' }}>
          <div className="container">
            <div style={{
              background: 'var(--bg-surface)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-lg)',
              padding: '24px',
              display: 'flex',
              justifyContent: 'space-around',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '16px'
            }}>
              <Link href="/map" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-primary)', textDecoration: 'none', fontWeight: 700, fontSize: '0.9rem' }}>
                <span style={{ color: 'var(--accent-cyan)' }}>🗺️</span> Leonida Map
              </Link>
              <Link href="/characters" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-primary)', textDecoration: 'none', fontWeight: 700, fontSize: '0.9rem' }}>
                <span style={{ color: 'var(--accent-rose)' }}>👥</span> Characters
              </Link>
              <Link href="/weapons" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-primary)', textDecoration: 'none', fontWeight: 700, fontSize: '0.9rem' }}>
                <span style={{ color: 'var(--accent-amber)' }}>🔫</span> Weapons
              </Link>
              <Link href="/missions" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-primary)', textDecoration: 'none', fontWeight: 700, fontSize: '0.9rem' }}>
                <span style={{ color: 'var(--accent-green)' }}>🎯</span> Missions
              </Link>
              <Link href="/financial" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-primary)', textDecoration: 'none', fontWeight: 700, fontSize: '0.9rem' }}>
                <span style={{ color: 'var(--accent-cyan)' }}>📊</span> Financial Desk
              </Link>
              <Link href="/news" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-primary)', textDecoration: 'none', fontWeight: 700, fontSize: '0.9rem' }}>
                <span style={{ color: 'var(--accent-rose)' }}>📰</span> Newsroom
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
