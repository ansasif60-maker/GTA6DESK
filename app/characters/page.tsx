'use client';

import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { CHARACTERS } from '@/lib/data';

export default function CharactersPage() {
  const [selectedFaction, setSelectedFaction] = useState<string>('All');

  const factions = ['All', 'Protagonists', 'State Officials', 'Syndicates & Smugglers'];

  const filteredCharacters = CHARACTERS.filter((c) => {
    if (selectedFaction === 'All') return true;
    if (selectedFaction === 'Protagonists') return c.role.includes('Protagonist');
    if (selectedFaction === 'State Officials') return c.status.includes('State') || c.faction.includes('Corrections');
    if (selectedFaction === 'Syndicates & Smugglers') return c.faction.includes('Cartel') || c.faction.includes('Smugglers');
    return true;
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
                <span className="badge-category tech">LEONIDA UNDERWORLD DOSSIERS</span>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                  Confirmed Protagonists & Cast
                </span>
              </div>
              <h1 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', fontWeight: 800, margin: '0 0 12px', lineHeight: 1.2 }}>
                Characters & Protagonists
              </h1>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                In-depth investigative dossiers on Lucia, Jason, and the underworld syndicates shaping Vice City and the broader State of Leonida.
              </p>
            </div>

            {/* Faction Filter */}
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '28px' }}>
              {factions.map((f) => (
                <button
                  key={f}
                  onClick={() => setSelectedFaction(f)}
                  className={`btn ${selectedFaction === f ? 'btn-primary' : 'btn-ghost'}`}
                  style={{ fontSize: '0.85rem', padding: '6px 14px' }}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Characters Grid */}
        <section style={{ padding: '40px 0' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(380px, 1fr))', gap: '28px' }}>
              {filteredCharacters.map((c) => (
                <div key={c.id} className="character-card" style={{ background: '#FFFFFF' }}>
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

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', marginBottom: '14px', fontSize: '0.84rem' }}>
                      <div style={{ color: 'var(--accent-rose)', fontWeight: 600 }}>
                        Faction: {c.faction}
                      </div>
                      <div style={{ color: 'var(--text-muted)' }}>
                        Origin: {c.origin}
                      </div>
                      <div style={{ color: 'var(--accent-cyan)', fontWeight: 600 }}>
                        Specialty: {c.specialty}
                      </div>
                    </div>

                    <p className="character-bio-text" style={{ fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '16px' }}>
                      {c.bio}
                    </p>

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
      </main>

      <Footer />
    </>
  );
}
