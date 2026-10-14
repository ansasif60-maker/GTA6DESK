import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Gameplay Guides & Strategies — GTA 6 DESK',
  description: 'Tactical gameplay guides, robbery mechanics, police evasion strategies, and duffel bag cash management in GTA VI.',
};

export default function GuidesPage() {
  const guides = [
    {
      id: 'guide-trunk-inventory',
      category: 'Inventory & Gear',
      title: 'Mastering the Physical Trunk Inventory System',
      description: 'Unlike previous franchise entries, weapon carry capacity is strictly bounded. Learn how to strategically kit your getaway vehicle trunk with heavy longarms, duffel bags, and medical supplies.',
      difficulty: 'Essential'
    },
    {
      id: 'guide-police-evasion',
      category: 'Pursuit Tactics',
      title: 'Breaking 5-Star Wanted Telemetry & Roadblocks',
      description: 'Deep dive into VCPD automated license plate recognition, spike strips, air support infrared cameras, and off-road swamp evasion routes through Grassrivers.',
      difficulty: 'Advanced'
    },
    {
      id: 'guide-lucia-jason-swap',
      category: 'Combat Mechanics',
      title: 'Synchronized Dual-Protagonist Switch Combat',
      description: 'How to leverage Lucia CQB suppression while commanding Jason flank maneuvers during coordinated bank depository and armored car heists.',
      difficulty: 'Intermediate'
    },
    {
      id: 'guide-safe-cracking',
      category: 'Heist Techniques',
      title: 'Vault Thermite Drilling & Mechanical Safe Cracking',
      description: 'Haptic feedback cues, temperature management to prevent drill burnout, and silent alarm bypass protocols.',
      difficulty: 'Advanced'
    }
  ];

  return (
    <>
      <Header />

      <main style={{ minHeight: '85vh', paddingBottom: '64px' }}>
        {/* Page Header */}
        <section style={{ padding: '48px 0 32px', background: 'var(--bg-base)', borderBottom: '1px solid var(--border-subtle)' }}>
          <div className="container">
            <div style={{ maxWidth: '780px' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                <span className="badge-category lore">STRATEGY DOSSIER</span>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                  Tactics & Game Mechanics
                </span>
              </div>
              <h1 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', fontWeight: 800, margin: '0 0 12px', lineHeight: 1.2 }}>
                Gameplay Strategy Guides
              </h1>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                In-depth tactical breakdowns covering next-generation mechanics: trunk inventory stowage, law enforcement AI countermeasures, and heist execution.
              </p>
            </div>
          </div>
        </section>

        {/* Guides Grid */}
        <section style={{ padding: '40px 0' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '24px' }}>
              {guides.map((g) => (
                <div
                  key={g.id}
                  style={{
                    background: 'var(--bg-surface)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-lg)',
                    padding: '28px',
                    boxShadow: 'var(--shadow-xs)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                      <span className="badge-category tech" style={{ fontSize: '0.75rem' }}>{g.category}</span>
                      <span style={{ fontSize: '0.8rem', color: 'var(--accent-amber)', fontWeight: 700 }}>{g.difficulty}</span>
                    </div>

                    <h2 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '10px', lineHeight: 1.35 }}>
                      {g.title}
                    </h2>

                    <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '20px' }}>
                      {g.description}
                    </p>
                  </div>

                  <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '16px' }}>
                    <button className="btn btn-ghost" style={{ padding: '6px 12px', fontSize: '0.85rem' }}>
                      Read Strategy Guide →
                    </button>
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
