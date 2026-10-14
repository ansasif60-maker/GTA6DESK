import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { MISSIONS } from '@/lib/data';

export const metadata = {
  title: 'Missions & Story Walkthroughs — GTA 6 DESK',
  description: 'Chronological mission guide, heist payouts, gold medal requirements, and tactical execution guides for Grand Theft Auto VI.',
};

export default function MissionsPage() {
  return (
    <>
      <Header />

      <main style={{ minHeight: '85vh', paddingBottom: '64px' }}>
        {/* Page Header */}
        <section style={{ padding: '48px 0 32px', background: 'var(--bg-base)', borderBottom: '1px solid var(--border-subtle)' }}>
          <div className="container">
            <div style={{ maxWidth: '780px' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                <span className="badge-category news">STORY CAMPAIGN & HEISTS</span>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                  Confirmed Mission Intelligence
                </span>
              </div>
              <h1 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', fontWeight: 800, margin: '0 0 12px', lineHeight: 1.2 }}>
                Missions & Heist Walkthroughs
              </h1>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                Chronological walkthrough of confirmed campaign operations, synchronized dual-character scores, cash payouts, and gold medal challenge objectives.
              </p>
            </div>
          </div>
        </section>

        {/* Missions List */}
        <section style={{ padding: '40px 0' }}>
          <div className="container">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              {MISSIONS.map((m) => (
                <div
                  key={m.id}
                  style={{
                    background: 'var(--bg-surface)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-lg)',
                    padding: '28px',
                    boxShadow: 'var(--shadow-sm)',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '28px'
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                      <span className="badge-category lore" style={{ fontSize: '0.75rem' }}>{m.district}</span>
                      <span style={{ fontSize: '0.82rem', color: 'var(--accent-amber)', fontWeight: 700 }}>
                        {m.difficulty}
                      </span>
                    </div>

                    <h2 style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '8px' }}>
                      {m.title}
                    </h2>

                    <div style={{ display: 'flex', gap: '16px', fontSize: '0.88rem', marginBottom: '16px' }}>
                      <div>
                        <span style={{ color: 'var(--text-muted)' }}>Protagonists: </span>
                        <strong>{m.protagonists}</strong>
                      </div>
                      <div>
                        <span style={{ color: 'var(--text-muted)' }}>Estimated Payout: </span>
                        <strong style={{ color: 'var(--accent-green)' }}>{m.payout}</strong>
                      </div>
                    </div>

                    <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '16px' }}>
                      {m.summary}
                    </p>

                    <div style={{ background: 'var(--bg-elevated)', padding: '14px', borderRadius: 'var(--radius-sm)' }}>
                      <strong style={{ fontSize: '0.85rem', color: 'var(--text-primary)', display: 'block', marginBottom: '4px' }}>
                        Tactical Execution:
                      </strong>
                      <span style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                        {m.tactics}
                      </span>
                    </div>
                  </div>

                  <div style={{ background: 'var(--bg-base)', padding: '24px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
                    <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ color: 'var(--accent-amber)' }}>★</span> 100% Gold Medal Objectives
                    </h3>

                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                      {m.goldMedal.map((req, idx) => (
                        <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                          <span style={{
                            width: '20px',
                            height: '20px',
                            borderRadius: '50%',
                            background: 'var(--accent-amber-tint)',
                            border: '1px solid var(--accent-amber-border)',
                            color: 'var(--accent-amber)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '0.75rem',
                            fontWeight: 700,
                            flexShrink: 0,
                            marginTop: '2px'
                          }}>
                            {idx + 1}
                          </span>
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
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
