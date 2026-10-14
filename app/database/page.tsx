'use client';

import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface DatabaseItem {
  id: string;
  category: string;
  name: string;
  realWorldCounterpart?: string;
  details: string;
  specs: { [key: string]: string };
}

const DATABASE_ITEMS: DatabaseItem[] = [
  {
    id: 'veh_bravado_gauntlet',
    category: 'Vehicles',
    name: 'Bravado Gauntlet Hellfire SVR',
    realWorldCounterpart: 'Dodge Challenger SRT Demon 170',
    details: 'Supercharged 6.2L V8 muscle car featured as Lucia and Jason getaway vehicle in Trailer 1. Features launch control and custom tire smoke physics.',
    specs: { 'Top Speed': '148 MPH', 'Drivetrain': 'RWD', 'Armor Class': 'Standard', 'Capacity': '4 Passengers' }
  },
  {
    id: 'veh_grotti_cheetah',
    category: 'Vehicles',
    name: 'Grotti Cheetah Classic Custom',
    realWorldCounterpart: 'Ferrari Testarossa / 512 TR',
    details: 'Iconic 1980s Miami-style mid-engine supercar parked on Ocean Drive. High aerodynamic downforce with pop-up headlight mechanics.',
    specs: { 'Top Speed': '165 MPH', 'Drivetrain': 'RWD Mid-Engine', 'Armor Class': 'Lightweight Composite', 'Capacity': '2 Passengers' }
  },
  {
    id: 'veh_declasse_tulip',
    category: 'Vehicles',
    name: 'Declasse Tulip 4-Door Muscle',
    realWorldCounterpart: '1972 Chevrolet Chevelle Malibu',
    details: 'Retro Vice City sedan driven by local syndicates. Heavy curb weight makes it resilient in high-speed police pitting maneuvers.',
    specs: { 'Top Speed': '122 MPH', 'Drivetrain': 'RWD', 'Armor Class': 'Reinforced Steel', 'Capacity': '4 Passengers' }
  },
  {
    id: 'veh_albany_cavalcade',
    category: 'Vehicles',
    name: 'Albany Cavalcade XL Luxury SUV',
    realWorldCounterpart: 'Cadillac Escalade-V',
    details: 'Full-size flagship luxury SUV favored by Vice City celebrity influencers and high-ranking drug cartel financiers.',
    specs: { 'Top Speed': '132 MPH', 'Drivetrain': 'AWD', 'Armor Class': 'Available Armored Plating', 'Capacity': '6 Passengers' }
  },
  {
    id: 'cop_vcpd_cruiser',
    category: 'Police Intelligence',
    name: 'VCPD Interceptor Cruiser (Star 1-2)',
    realWorldCounterpart: 'Ford Police Interceptor Sedan (Taurus)',
    details: 'Standard patrol response equipped with automated license plate readers, dashcams, and PIT pursuit tactics.',
    specs: { 'Tactics': 'Flank & Pit Maneuver', 'Weapons': 'Service 9mm Pistol, Pump Shotgun in Trunk', 'Response Time': '45 - 90 Seconds' }
  },
  {
    id: 'cop_swat_bearcat',
    category: 'Police Intelligence',
    name: 'Leonida Tactical SWAT BearCat (Star 4-5)',
    realWorldCounterpart: 'Lenco BearCat G3 Armored Rescue',
    details: 'Heavy tactical assault vehicle equipped with gun ports, ram bumper, and armored sniper rooftop teams deployed during major heists.',
    specs: { 'Tactics': 'Roadblock Breaching & Tactical Standoff', 'Armor': '50-Cal & Explosive Resitant', 'Response Time': '2 - 3 Minutes' }
  },
  {
    id: 'game_trunk_inventory',
    category: 'Game Mechanics',
    name: 'Vehicle Trunk Weapon Stowage System',
    details: 'Unlike GTA V weapon wheel holding unlimited arms, GTA VI restricts characters to 2 concealed sidearms and 1 slung rifle. Heavy weaponry (RPGs, sniper rifles) must be stowed in vehicle trunks.',
    specs: { 'Type': 'Core Realism Mechanic', 'Limit': '1 Long Rifle on Sling, 2 Sidearms Holstered', 'Vehicle Stash': 'Expanded Trunk Duffel' }
  },
  {
    id: 'game_dialogue_wheel',
    category: 'Game Mechanics',
    name: 'Contextual NPC Dialogue System',
    details: 'Dynamic interaction button prompts (Greet, Antagonize, Rob, Question) allowing non-lethal robbery outcomes and situational NPC intimidation.',
    specs: { 'Type': 'Social AI Engine', 'NPC Memory': 'Persistent Witness Memory', 'Reputation': 'District Police Alert Level' }
  }
];

export default function DatabasePage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const categories = ['All', 'Vehicles', 'Police Intelligence', 'Game Mechanics'];

  // Check URL search parameters on mount (for site search queries from Google Sitelinks or internal links)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const q = params.get('q');
      if (q) {
        setSearchQuery(q);
      }
    }
  }, []);

  const filteredItems = DATABASE_ITEMS.filter((item) => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const query = searchQuery.toLowerCase().trim();
    if (!query) return matchesCategory;

    const matchesQuery =
      item.name.toLowerCase().includes(query) ||
      (item.realWorldCounterpart && item.realWorldCounterpart.toLowerCase().includes(query)) ||
      item.category.toLowerCase().includes(query) ||
      item.details.toLowerCase().includes(query) ||
      Object.entries(item.specs).some(([k, v]) =>
        k.toLowerCase().includes(query) || v.toLowerCase().includes(query)
      );

    return matchesCategory && matchesQuery;
  });

  return (
    <>
      <Header />

      <main style={{ minHeight: '85vh', paddingBottom: '64px' }}>
        {/* Page Header */}
        <section style={{ padding: '48px 0 32px', background: 'var(--bg-base)', borderBottom: '1px solid var(--border-subtle)' }}>
          <div className="container">
            <div style={{ maxWidth: '820px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                <img
                  src="/assets/gta6desk_logo.png"
                  alt="GTA 6 DESK Logo"
                  width={56}
                  height={56}
                  style={{
                    borderRadius: '12px',
                    border: '1px solid rgba(0, 240, 255, 0.45)',
                    boxShadow: '0 0 16px rgba(0, 240, 255, 0.35)',
                    flexShrink: 0
                  }}
                />
                <div>
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                    <span className="badge-category news">RELATIONAL INTELLIGENCE</span>
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                      Vehicles, AI Mechanics & Laws
                    </span>
                  </div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)', fontWeight: 700 }}>
                    GTA6DESK // MASTER RELATIONAL SEARCH
                  </div>
                </div>
              </div>

              <h1 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', fontWeight: 800, margin: '0 0 12px', lineHeight: 1.2 }}>
                Grand Theft Auto VI Intelligence Database
              </h1>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                Relational search index cataloging verified vehicle rosters, law enforcement tactical AI, and next-generation inventory mechanics.
              </p>
            </div>

            {/* Interactive Search Bar with Logo Integration */}
            <div style={{ marginTop: '28px', maxWidth: '780px' }}>
              <div style={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                background: 'var(--bg-surface)',
                borderRadius: 'var(--radius-md)',
                border: '1px solid rgba(0, 240, 255, 0.3)',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.4), 0 0 12px rgba(0, 240, 255, 0.1)',
                padding: '4px 8px 4px 14px'
              }}>
                <img
                  src="/assets/gta6desk_logo.png"
                  alt="Search Icon"
                  width={24}
                  height={24}
                  style={{ borderRadius: '4px', marginRight: '10px', flexShrink: 0 }}
                />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search intelligence database (e.g. Demon, SWAT, Trunk, Cheetah)..."
                  style={{
                    width: '100%',
                    background: 'transparent',
                    border: 'none',
                    outline: 'none',
                    color: 'var(--text-primary)',
                    fontSize: '0.95rem',
                    fontFamily: 'var(--font-body)',
                    padding: '10px 0'
                  }}
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: 'var(--text-muted)',
                      cursor: 'pointer',
                      padding: '8px',
                      fontSize: '1rem',
                      lineHeight: 1
                    }}
                    title="Clear Search"
                  >
                    ✕
                  </button>
                )}
              </div>
            </div>

            {/* Filter buttons & Results Telemetry */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px', marginTop: '20px' }}>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {categories.map((c) => (
                  <button
                    key={c}
                    onClick={() => setSelectedCategory(c)}
                    className={`btn ${selectedCategory === c ? 'btn-primary' : 'btn-ghost'}`}
                    style={{ fontSize: '0.85rem', padding: '6px 14px' }}
                  >
                    {c}
                  </button>
                ))}
              </div>

              <div style={{ fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                INDEXED: <strong style={{ color: 'var(--accent-cyan)' }}>{filteredItems.length}</strong> RECORDS
              </div>
            </div>
          </div>
        </section>

        {/* Database Search Results Grid */}
        <section style={{ padding: '40px 0' }}>
          <div className="container">
            {filteredItems.length === 0 ? (
              <div style={{
                textAlign: 'center',
                padding: '64px 20px',
                background: 'var(--bg-surface)',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--border-subtle)',
                maxWidth: '640px',
                margin: '0 auto'
              }}>
                <img
                  src="/assets/gta6desk_logo.png"
                  alt="GTA 6 DESK Logo"
                  width={64}
                  height={64}
                  style={{ borderRadius: '14px', marginBottom: '16px', opacity: 0.8 }}
                />
                <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '8px' }}>
                  No Intelligence Records Found
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '20px' }}>
                  No database entries matched &ldquo;{searchQuery}&rdquo;. Try searching for &ldquo;Demon&rdquo;, &ldquo;SWAT&rdquo;, &ldquo;Trunk&rdquo;, or reset the category filter.
                </p>
                <button
                  type="button"
                  onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
                  className="btn btn-primary"
                  style={{ padding: '8px 20px' }}
                >
                  Reset Search Filters
                </button>
              </div>
            ) : (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))', gap: '24px' }}>
                {filteredItems.map((item) => (
                  <div
                    key={item.id}
                    style={{
                      background: 'var(--bg-surface)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: 'var(--radius-lg)',
                      padding: '24px',
                      boxShadow: 'var(--shadow-xs)',
                      position: 'relative',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between'
                    }}
                  >
                    <div>
                      {/* Card Header with Verified Logo Badge */}
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                        <span className="badge-category tech" style={{ fontSize: '0.75rem' }}>{item.category}</span>
                        <div style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px',
                          background: 'rgba(0, 240, 255, 0.08)',
                          border: '1px solid rgba(0, 240, 255, 0.25)',
                          padding: '3px 8px',
                          borderRadius: '4px'
                        }}>
                          <img
                            src="/assets/gta6desk_logo.png"
                            alt="Verified"
                            width={14}
                            height={14}
                            style={{ borderRadius: '3px' }}
                          />
                          <span style={{ fontSize: '0.68rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-cyan)', fontWeight: 700 }}>
                            GTA6DESK VERIFIED
                          </span>
                        </div>
                      </div>

                      <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '4px' }}>
                        {item.name}
                      </h3>

                      {item.realWorldCounterpart && (
                        <div style={{ fontSize: '0.82rem', color: 'var(--accent-cyan)', fontWeight: 600, marginBottom: '12px' }}>
                          Real Counterpart: {item.realWorldCounterpart}
                        </div>
                      )}

                      <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '20px' }}>
                        {item.details}
                      </p>
                    </div>

                    <div style={{ background: 'var(--bg-base)', padding: '14px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)' }}>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px', fontSize: '0.82rem' }}>
                        {Object.entries(item.specs).map(([k, v]) => (
                          <div key={k}>
                            <span style={{ color: 'var(--text-muted)', display: 'block', fontSize: '0.75rem' }}>{k}</span>
                            <strong style={{ color: 'var(--text-primary)' }}>{v}</strong>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
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
