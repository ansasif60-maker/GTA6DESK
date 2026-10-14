import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Privacy Policy — GTA 6 DESK',
  description: 'Privacy Policy and data governance compliance for GTA 6 DESK readers and subscribers.',
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />

      <main style={{ minHeight: '85vh', paddingBottom: '64px' }}>
        <section style={{ padding: '48px 0 32px', background: 'var(--bg-base)', borderBottom: '1px solid var(--border-subtle)' }}>
          <div className="container">
            <div style={{ maxWidth: '780px' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                <span className="badge-category tech">LEGAL COMPLIANCE</span>
              </div>
              <h1 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', fontWeight: 800, margin: '0 0 12px', lineHeight: 1.2 }}>
                Privacy Policy
              </h1>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                Last Updated: October 2026. How GTA 6 DESK collects, stores, and respects user data.
              </p>
            </div>
          </div>
        </section>

        <section style={{ padding: '48px 0' }}>
          <div className="container" style={{ maxWidth: '820px' }}>
            <div style={{ background: 'var(--bg-surface)', padding: '36px', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-subtle)', boxShadow: 'var(--shadow-sm)' }}>
              <h2 style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: '12px' }}>1. Data Collection & Analytics</h2>
              <p style={{ fontSize: '0.98rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '20px' }}>
                GTA 6 DESK collects minimal telemetry essential to delivering high-performance content delivery and preventing bot attacks. We do not sell personal identification data to third parties.
              </p>

              <h2 style={{ fontSize: '1.3rem', fontWeight: 800, marginTop: '28px', marginBottom: '12px' }}>2. Cookies & Local Storage</h2>
              <p style={{ fontSize: '0.98rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '20px' }}>
                We use local browser storage and strictly necessary session cookies to remember user preferences (such as audio volume, filter state in the weapons catalog, and ROI calculator values).
              </p>

              <h2 style={{ fontSize: '1.3rem', fontWeight: 800, marginTop: '28px', marginBottom: '12px' }}>3. Third-Party Services & Links</h2>
              <p style={{ fontSize: '0.98rem', color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>
                Our intelligence journal may contain links to external sources such as SEC EDGAR filings, Take-Two Investor Relations, and Rockstar Games announcements. We are not responsible for the privacy policies of third-party domains.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
