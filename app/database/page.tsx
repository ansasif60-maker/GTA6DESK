'use client';

import React, { useState } from 'react';
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
  const categories = ['All', 'Vehicles', 'Police Intelligence', 'Game Mechanics'];

  const filteredItems = DATABASE_ITEMS.filter((item) => {
    return selectedCategory === 'All' || item.category === selectedCategory;
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
                <span className="badge-category news">RELATIONAL INTELLIGENCE</span>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                  Vehicles, AI Mechanics & Laws
                </span>
              </div>
              <h1 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', fontWeight: 800, margin: '0 0 12px', lineHeight: 1.2 }}>
                Grand Theft Auto VI Intelligence Database
              </h1>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                Relational index cataloging verified vehicle rosters, law enforcement tactical AI, and next-generation inventory mechanics.
              </p>
            </div>

            {/* Filter buttons */}
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '28px' }}>
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
          </div>
        </section>

        {/* Database Grid */}
        <section style={{ padding: '40px 0' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))', gap: '24px' }}>
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  style={{
                    background: 'var(--bg-surface)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-lg)',
                    padding: '24px',
                    boxShadow: 'var(--shadow-xs)'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                    <span className="badge-category tech" style={{ fontSize: '0.75rem' }}>{item.category}</span>
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
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
