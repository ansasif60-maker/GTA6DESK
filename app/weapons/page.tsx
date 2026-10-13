'use client';

import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { WEAPONS } from '@/lib/data';

export default function WeaponsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Assault Rifles', 'Sidearms', 'Shotguns', 'Heavy Ordnance'];

  const filteredWeapons = WEAPONS.filter((w) => {
    const matchesCategory = selectedCategory === 'All' || w.category === selectedCategory;
    const matchesSearch =
      w.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      w.realWorldCounterpart.toLowerCase().includes(searchQuery.toLowerCase()) ||
      w.caliber.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
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
                <span className="badge-category lore">BALLISTICS & INVENTORY</span>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                  Confirmed Armory Dataset
                </span>
              </div>
              <h1 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', fontWeight: 800, margin: '0 0 12px', lineHeight: 1.2 }}>
                Tactical Weapons & Armory
              </h1>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                Comprehensive ballistic catalog for Grand Theft Auto VI. Features real-world weapon counterparts, muzzle calibers, penetration ratings, and trunk stowage inventory mechanics.
              </p>
            </div>

            {/* Filter and Search Bar */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', alignItems: 'center', justifyContent: 'space-between', marginTop: '32px' }}>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`btn ${selectedCategory === cat ? 'btn-primary' : 'btn-ghost'}`}
                    style={{ fontSize: '0.85rem', padding: '6px 14px' }}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              <div style={{ minWidth: '260px' }}>
                <input
                  type="text"
                  placeholder="Search weapon, caliber, counterpart..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '8px 14px',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--border-default)',
                    background: '#FFFFFF',
                    fontSize: '0.88rem',
                    fontFamily: 'var(--font-body)',
                    color: 'var(--text-primary)',
                    outline: 'none'
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Weapons Grid */}
        <section style={{ padding: '40px 0' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))', gap: '24px' }}>
              {filteredWeapons.map((w) => (
                <div key={w.id} className="weapon-card" style={{ background: '#FFFFFF' }}>
                  <div className="weapon-image-wrap">
                    <img src={w.image} alt={w.name} className="weapon-card-img" />
                    <span className="weapon-class-badge">{w.category}</span>
                    <span className="weapon-real-model-tag">{w.caliber}</span>
                  </div>
                  <div className="weapon-card-body">
                    <div style={{ marginBottom: '8px' }}>
                      <h3 className="weapon-title" style={{ fontSize: '1.25rem', marginBottom: '4px' }}>{w.name}</h3>
                      <div style={{ fontSize: '0.82rem', color: 'var(--accent-rose)', fontWeight: 600 }}>
                        Real Counterpart: {w.realWorldCounterpart}
                      </div>
                    </div>

                    <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.55, marginBottom: '16px' }}>
                      {w.lore}
                    </p>

                    <div style={{ background: 'var(--bg-elevated)', padding: '12px', borderRadius: 'var(--radius-sm)', marginBottom: '16px', fontSize: '0.82rem' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                        <span style={{ color: 'var(--text-muted)' }}>Inventory Mode:</span>
                        <strong style={{ color: 'var(--text-primary)' }}>{w.inventoryMode}</strong>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                        <span style={{ color: 'var(--text-muted)' }}>Fire Rate:</span>
                        <strong style={{ color: 'var(--text-primary)' }}>{w.fireRate}</strong>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <span style={{ color: 'var(--text-muted)' }}>Drywall Pen.:</span>
                        <strong style={{ color: 'var(--text-primary)' }}>{w.penetration.drywall}</strong>
                      </div>
                    </div>

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
                      <div className="weapon-stat-row">
                        <span className="weapon-stat-name">Range</span>
                        <div className="weapon-stat-track">
                          <div className="weapon-stat-fill" style={{ width: `${w.range}%`, background: 'var(--accent-amber)' }} />
                        </div>
                        <span className="weapon-stat-val">{w.range}</span>
                      </div>
                      <div className="weapon-stat-row">
                        <span className="weapon-stat-name">Handling</span>
                        <div className="weapon-stat-track">
                          <div className="weapon-stat-fill" style={{ width: `${w.handling}%`, background: 'var(--accent-green)' }} />
                        </div>
                        <span className="weapon-stat-val">{w.handling}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredWeapons.length === 0 && (
              <div style={{ textAlign: 'center', padding: '48px 0', color: 'var(--text-muted)' }}>
                No weapons found matching your criteria.
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
