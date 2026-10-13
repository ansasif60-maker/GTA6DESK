'use client';

import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Header />

      <main style={{ minHeight: '85vh', paddingBottom: '64px' }}>
        <section style={{ padding: '48px 0 32px', background: 'var(--bg-base)', borderBottom: '1px solid var(--border-subtle)' }}>
          <div className="container">
            <div style={{ maxWidth: '780px' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                <span className="badge-category news">EDITORIAL INQUIRIES</span>
              </div>
              <h1 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', fontWeight: 800, margin: '0 0 12px', lineHeight: 1.2 }}>
                Contact Editorial Desk
              </h1>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                Direct inquiries, press releases, corrections, and verified tip submissions for the GTA 6 DESK editorial team.
              </p>
            </div>
          </div>
        </section>

        <section style={{ padding: '48px 0' }}>
          <div className="container" style={{ maxWidth: '680px' }}>
            <div style={{ background: '#FFFFFF', padding: '36px', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-subtle)', boxShadow: 'var(--shadow-sm)' }}>
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '32px 0' }}>
                  <div style={{ fontSize: '2.5rem', marginBottom: '12px' }}>✓</div>
                  <h2 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '8px' }}>Transmission Received</h2>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                    Thank you for contacting the GTA 6 DESK editorial staff. Our investigative reporters review incoming correspondence within 24 to 48 business hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '6px' }}>
                      Full Name / Alias
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      style={{
                        width: '100%',
                        padding: '10px 14px',
                        borderRadius: 'var(--radius-md)',
                        border: '1px solid var(--border-default)',
                        fontSize: '0.9rem',
                        fontFamily: 'var(--font-body)',
                        outline: 'none'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '6px' }}>
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="editor@example.com"
                      style={{
                        width: '100%',
                        padding: '10px 14px',
                        borderRadius: 'var(--radius-md)',
                        border: '1px solid var(--border-default)',
                        fontSize: '0.9rem',
                        fontFamily: 'var(--font-body)',
                        outline: 'none'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '6px' }}>
                      Inquiry Department
                    </label>
                    <select
                      style={{
                        width: '100%',
                        padding: '10px 14px',
                        borderRadius: 'var(--radius-md)',
                        border: '1px solid var(--border-default)',
                        fontSize: '0.9rem',
                        fontFamily: 'var(--font-body)',
                        outline: 'none',
                        background: '#FFFFFF'
                      }}
                    >
                      <option>Verified News Tip / Leak Verification</option>
                      <option>Financial & Take-Two Earnings Inquiry</option>
                      <option>Correction or Data Retraction</option>
                      <option>Advertising & Sponsorship</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '6px' }}>
                      Message / Tip Details
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Provide specific details or documentation references..."
                      style={{
                        width: '100%',
                        padding: '10px 14px',
                        borderRadius: 'var(--radius-md)',
                        border: '1px solid var(--border-default)',
                        fontSize: '0.9rem',
                        fontFamily: 'var(--font-body)',
                        outline: 'none'
                      }}
                    />
                  </div>

                  <button type="submit" className="btn btn-primary" style={{ padding: '12px 24px', fontSize: '0.95rem', fontWeight: 700 }}>
                    Submit Message →
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
