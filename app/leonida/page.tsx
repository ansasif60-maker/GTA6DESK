import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { MAP_ZONES } from '@/lib/data';

export const metadata: Metadata = {
  title: 'State of Leonida Overview & Geography | Vice City & Beyond | GTA 6 DESK',
  description: 'Authoritative regional dossier on the State of Leonida in Grand Theft Auto VI. Vice City districts, Kelly County swamplands, Leonard County, and Port Gellhorn.',
  alternates: {
    canonical: 'https://gta6desk.com/leonida',
  },
  openGraph: {
    title: 'State of Leonida Geography & District Guide — GTA 6 DESK',
    description: 'Explore the vast geography of Leonida in GTA 6: Vice City metropolis, Everglades swamplands, and island waterways.',
    url: 'https://gta6desk.com/leonida',
  },
};

export default function LeonidaPage() {
  const regions = [
    {
      name: 'Vice City Metropolitan Core',
      badge: 'METROPOLIS',
      badgeClass: 'news',
      tagline: 'Neon Nights, Waterfront Condos & High-End Luxury',
      image: '/assets/leonida_map_hero.jpg',
      description: 'The economic and cultural heart of Leonida. Featuring Ocean Drive, Starfish Island mansions, Little Haiti, and the downtown corporate skyline modeled with seamless interior transitions.',
      landmarks: ['Ocean Beach', 'Starfish Island', 'Vice City International Airport', 'Downtown Financial Center'],
      interiors: '70%+ Enterable Venues'
    },
    {
      name: 'Kelly County & The Grassrivers',
      badge: 'SWAMPLANDS',
      badgeClass: 'lore',
      tagline: 'Deformable Mud, Cypress Swamps & Predatory Fauna',
      image: '/assets/wildlife_everglades_reserve.jpg',
      description: 'The untamed backcountry of Leonida inspired by the Florida Everglades. Home to airboat channels, alligator breeding reserves, Thrillbilly mud tracks, and rural contraband routes.',
      landmarks: ['Everglades Wildlife Reserve', 'Kelly County Mud Drag', 'Cypress Airboat Docks', 'Alligator Alley Highway'],
      interiors: 'Rustic Shanties & Fishing Lodges'
    },
    {
      name: 'Port Gellhorn & Industrial Coast',
      badge: 'COMMERCE',
      badgeClass: 'financial',
      tagline: 'Cargo Shipping, Strip Malls & Syndicate Warehouses',
      image: '/assets/mission_convenience_heist.jpg',
      description: 'A sprawling secondary port city featuring freight logistics, industrial shipping canals, highway truck stops, and convenience stores ripe for synchronized Bonnie & Clyde robberies.',
      landmarks: ['Port Gellhorn Docks', 'Industrial Freight Yard', 'Trailer Parks', 'Commercial Highway Strip'],
      interiors: 'Depots, Diners & Storage Yards'
    },
    {
      name: 'The Leonida Keys & Waterways',
      badge: 'ISLANDS',
      badgeClass: 'tech',
      tagline: 'Overseas Highway, Coral Reefs & Speedboat Patrols',
      image: '/assets/exotic_car_garage.jpg',
      description: 'An expansive archipelago connected by elevated oceanic bridges. Packed with marina yacht clubs, deep-sea fishing grounds, Coast Guard checkpoints, and private getaway coves.',
      landmarks: ['Overseas Causeway', 'Pelican Key Marina', 'Sunken Reef Dives', 'Naval Patrol Sector'],
      interiors: 'Yacht Clubs & Boat Houses'
    }
  ];

  return (
    <>
      <Header />

      <main style={{ minHeight: '85vh', paddingBottom: '72px', background: 'var(--bg-base)' }}>
        {/* Header Hero */}
        <section style={{
          padding: '52px 0 36px',
          background: 'radial-gradient(ellipse at 50% -20%, rgba(255, 0, 122, 0.2) 0%, rgba(0, 240, 255, 0.08) 50%, transparent 80%), var(--bg-base)',
          borderBottom: '1px solid var(--border-subtle)'
        }}>
          <div className="container">
            <div style={{ maxWidth: '840px' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                <span className="badge-category news">WORLD CARTOGRAPHY</span>
                <span style={{ fontSize: '0.85rem', color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)' }}>
                  ~2.5x SCALE OF GTA V LOS SANTOS
                </span>
              </div>
              <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', fontWeight: 900, margin: '0 0 14px', lineHeight: 1.18 }}>
                The State of Leonida
              </h1>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.7, margin: '0 0 24px' }}>
                Grand Theft Auto VI takes place across the diverse, sun-soaked State of Leonida—home to the neon-drenched streets of Vice City and the vast, untamed swamplands of Kelly County.
              </p>
              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                <Link href="/map" className="btn btn-primary" style={{ padding: '10px 22px', fontSize: '0.9rem' }}>
                  Interactive Tactical Map →
                </Link>
                <Link href="/news" className="btn btn-ghost" style={{ padding: '10px 20px', fontSize: '0.9rem' }}>
                  Read Cartography Intelligence →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Regional Breakdown Grid */}
        <section style={{ padding: '48px 0' }}>
          <div className="container">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px', flexWrap: 'wrap', gap: '12px' }}>
              <div>
                <span className="badge-category lore" style={{ fontSize: '0.72rem' }}>PRIMARY TERRITORIES</span>
                <h2 style={{ fontSize: '1.8rem', fontWeight: 900, margin: '6px 0 0', color: 'var(--text-primary)' }}>
                  Confirmed Geographic Sectors
                </h2>
              </div>
              <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                Cross-referenced with Rockstar Games Trailer 1 and official disclosures.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '28px' }}>
              {regions.map((reg) => (
                <article
                  key={reg.name}
                  style={{
                    background: 'var(--bg-surface)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-lg)',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    boxShadow: 'var(--shadow-sm)'
                  }}
                >
                  <div style={{ height: '220px', position: 'relative', overflow: 'hidden' }}>
                    <img
                      src={reg.image}
                      alt={reg.name}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                    <div style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to top, rgba(3, 5, 8, 0.9) 0%, transparent 60%)'
                    }} />
                    <span className={`badge-category ${reg.badgeClass}`} style={{ position: 'absolute', top: '16px', left: '16px', fontSize: '0.72rem' }}>
                      {reg.badge}
                    </span>
                    <span style={{
                      position: 'absolute',
                      bottom: '14px',
                      left: '16px',
                      color: 'var(--accent-cyan)',
                      fontSize: '0.78rem',
                      fontFamily: 'var(--font-mono)'
                    }}>
                      {reg.interiors}
                    </span>
                  </div>

                  <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
                    <div>
                      <h3 style={{ fontSize: '1.35rem', fontWeight: 800, margin: '0 0 6px', color: 'var(--text-primary)' }}>
                        {reg.name}
                      </h3>
                      <div style={{ fontSize: '0.85rem', color: 'var(--accent-amber)', fontWeight: 600, marginBottom: '12px' }}>
                        {reg.tagline}
                      </div>
                      <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: '16px' }}>
                        {reg.description}
                      </p>
                    </div>

                    <div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', marginBottom: '8px' }}>
                        IDENTIFIED KEY LANDMARKS:
                      </div>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
                        {reg.landmarks.map((l) => (
                          <span
                            key={l}
                            style={{
                              fontSize: '0.76rem',
                              background: 'var(--bg-elevated)',
                              border: '1px solid var(--border-subtle)',
                              padding: '3px 8px',
                              borderRadius: '4px',
                              color: 'var(--text-secondary)'
                            }}
                          >
                            {l}
                          </span>
                        ))}
                      </div>

                      <Link
                        href="/map"
                        className="btn btn-ghost"
                        style={{
                          width: '100%',
                          textAlign: 'center',
                          justifyContent: 'center',
                          fontSize: '0.84rem',
                          color: 'var(--accent-cyan)'
                        }}
                      >
                        Inspect On Tactical Map →
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Map Zone Grid */}
        <section style={{ padding: '32px 0 16px' }}>
          <div className="container">
            <h2 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '18px', color: 'var(--text-primary)' }}>
              All Verified Leonida Municipal Zones ({MAP_ZONES.length})
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px' }}>
              {MAP_ZONES.map((zone) => (
                <div
                  key={zone.id}
                  style={{
                    background: 'var(--bg-surface)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-md)',
                    padding: '18px'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                    <span className="badge-category lore" style={{ fontSize: '0.68rem' }}>{zone.district}</span>
                    <span style={{ fontSize: '0.72rem', color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)' }}>
                      ZONE #{zone.id.toUpperCase()}
                    </span>
                  </div>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, margin: '0 0 6px' }}>{zone.name}</h3>
                  <p style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', lineHeight: 1.5, margin: '0 0 10px' }}>
                    {zone.lore}
                  </p>
                  <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                    Transit: {zone.transit} · Security: {zone.securityLevel}
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
