'use client';

import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { MAP_ZONES } from '@/lib/data';

export default function MapPage() {
  const [activeZone, setActiveZone] = useState<string>(MAP_ZONES[0].id);

  const currentZone = MAP_ZONES.find((z) => z.id === activeZone) || MAP_ZONES[0];

  return (
    <>
      <Header />

      <main style={{ minHeight: '85vh', paddingBottom: '64px' }}>
        {/* Page Header */}
        <section style={{ padding: '48px 0 32px', background: 'var(--bg-base)', borderBottom: '1px solid var(--border-subtle)' }}>
          <div className="container">
            <div style={{ maxWidth: '780px' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                <span className="badge-category financial">LEONIDA CARTOGRAPHY</span>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                  2.5x Scale of Los Santos
                </span>
              </div>
              <h1 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', fontWeight: 800, margin: '0 0 12px', lineHeight: 1.2 }}>
                State of Leonida Map & Districts
              </h1>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                High-fidelity geographic telemetry spanning the neon streets of Vice City, the Port Gellhorn industrial corridor, and the untamed Grassrivers wetlands.
              </p>
            </div>
          </div>
        </section>

        {/* Interactive Map Layout */}
        <section style={{ padding: '40px 0' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
              {/* Zone Selector List */}
              <div>
                <h2 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '16px', color: 'var(--text-primary)' }}>
                  Confirmed Geographic Districts
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {MAP_ZONES.map((zone) => {
                    const isSelected = zone.id === activeZone;
                    return (
                      <button
                        key={zone.id}
                        onClick={() => setActiveZone(zone.id)}
                        style={{
                          textAlign: 'left',
                          background: isSelected ? 'var(--accent-cyan-tint)' : '#FFFFFF',
                          border: `1px solid ${isSelected ? 'var(--accent-cyan)' : 'var(--border-subtle)'}`,
                          borderRadius: 'var(--radius-md)',
                          padding: '16px',
                          cursor: 'pointer',
                          transition: 'all 0.2s ease',
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center'
                        }}
                      >
                        <div>
                          <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase' }}>
                            {zone.district}
                          </div>
                          <div style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-primary)', marginTop: '2px' }}>
                            {zone.name}
                          </div>
                        </div>
                        <span style={{
                          width: '12px',
                          height: '12px',
                          borderRadius: '50%',
                          background: isSelected ? 'var(--accent-cyan)' : 'var(--border-default)',
                          flexShrink: 0
                        }} />
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Active Zone Detail Card */}
              <div style={{
                background: '#FFFFFF',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-lg)',
                padding: '32px',
                boxShadow: 'var(--shadow-sm)'
              }}>
                <div style={{ display: 'inline-block', marginBottom: '8px' }}>
                  <span className="badge-category news">{currentZone.district}</span>
                </div>

                <h3 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '12px' }}>
                  {currentZone.name}
                </h3>

                <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: '24px' }}>
                  {currentZone.lore}
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '24px' }}>
                  <div style={{ background: 'var(--bg-elevated)', padding: '16px', borderRadius: 'var(--radius-sm)' }}>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600 }}>SECURITY PATROL</div>
                    <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)', marginTop: '4px' }}>
                      {currentZone.securityLevel}
                    </div>
                  </div>

                  <div style={{ background: 'var(--bg-elevated)', padding: '16px', borderRadius: 'var(--radius-sm)' }}>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600 }}>ENTERABLE STRUCTURES</div>
                    <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)', marginTop: '4px' }}>
                      {currentZone.enterableStructures}
                    </div>
                  </div>

                  <div style={{ background: 'var(--bg-elevated)', padding: '16px', borderRadius: 'var(--radius-sm)', gridColumn: '1 / -1' }}>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600 }}>TRANSIT & ACCESS</div>
                    <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)', marginTop: '4px' }}>
                      {currentZone.transit}
                    </div>
                  </div>
                </div>

                <div style={{
                  padding: '20px',
                  borderRadius: 'var(--radius-md)',
                  background: 'var(--bg-base)',
                  border: '1px dashed var(--border-default)',
                  textAlign: 'center',
                  fontSize: '0.9rem',
                  color: 'var(--text-muted)'
                }}>
                  Cartographic coordinates: <strong>X: {currentZone.x}°, Y: {currentZone.y}°</strong> · Verified through Rockstar Games Trailer 1 and official leak telemetry.
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
