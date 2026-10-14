import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Terms of Service — GTA 6 DESK Access Guidelines',
  description: 'Terms and conditions governing access to GTA 6 DESK intelligence publications and educational tools.',
  alternates: {
    canonical: 'https://gta6desk.com/terms-of-service',
  },
  openGraph: {
    title: 'Terms of Service — GTA 6 DESK',
    description: 'Terms and conditions governing access to GTA 6 DESK intelligence publications and educational tools.',
    url: 'https://gta6desk.com/terms-of-service',
  },
};

export default function TermsOfServicePage() {
  return (
    <>
      <Header />

      <main style={{ minHeight: '85vh', paddingBottom: '64px' }}>
        <section style={{ padding: '48px 0 32px', background: 'var(--bg-base)', borderBottom: '1px solid var(--border-subtle)' }}>
          <div className="container">
            <div style={{ maxWidth: '780px' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                <span className="badge-category tech">LEGAL TERMS</span>
              </div>
              <h1 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', fontWeight: 800, margin: '0 0 12px', lineHeight: 1.2 }}>
                Terms of Service
              </h1>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                Guidelines governing reader access, intellectual property, and community conduct on GTA 6 DESK.
              </p>
            </div>
          </div>
        </section>

        <section style={{ padding: '48px 0' }}>
          <div className="container" style={{ maxWidth: '820px' }}>
            <div style={{ background: 'var(--bg-surface)', padding: '36px', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-subtle)', boxShadow: 'var(--shadow-sm)' }}>
              <h2 style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: '12px' }}>1. Acceptance of Terms</h2>
              <p style={{ fontSize: '0.98rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '20px' }}>
                By accessing GTA 6 DESK, you agree to comply with and be bound by these Terms of Service. If you disagree with any part of these terms, you should discontinue use immediately.
              </p>

              <h2 style={{ fontSize: '1.3rem', fontWeight: 800, marginTop: '28px', marginBottom: '12px' }}>2. Informational & Analytical Nature</h2>
              <p style={{ fontSize: '0.98rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '20px' }}>
                All content, financial models, ROI calculators, and guides are provided strictly for educational and journalistic entertainment purposes. Nothing on this website constitutes financial or investment advice.
              </p>

              <h2 style={{ fontSize: '1.3rem', fontWeight: 800, marginTop: '28px', marginBottom: '12px' }}>3. Intellectual Property Rights</h2>
              <p style={{ fontSize: '0.98rem', color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>
                Original written editorial content, code architectures, and custom interface designs are the intellectual property of GTA 6 DESK. All Grand Theft Auto VI trademarks remain the property of Take-Two Interactive Software, Inc.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
