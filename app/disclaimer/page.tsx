import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Legal Disclaimer & Trademark Notices — GTA 6 DESK',
  description: 'Legal disclaimer, trademark disclosures, and financial non-solicitation notices.',
};

export default function DisclaimerPage() {
  return (
    <>
      <Header />

      <main style={{ minHeight: '85vh', paddingBottom: '64px' }}>
        <section style={{ padding: '48px 0 32px', background: 'var(--bg-base)', borderBottom: '1px solid var(--border-subtle)' }}>
          <div className="container">
            <div style={{ maxWidth: '780px' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                <span className="badge-category tech">LEGAL NOTICE</span>
              </div>
              <h1 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', fontWeight: 800, margin: '0 0 12px', lineHeight: 1.2 }}>
                Legal Disclaimer & Disclosures
              </h1>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                Official trademark notices, non-affiliation statements, and financial non-advisory disclaimers.
              </p>
            </div>
          </div>
        </section>

        <section style={{ padding: '48px 0' }}>
          <div className="container" style={{ maxWidth: '820px' }}>
            <div style={{ background: 'var(--bg-surface)', padding: '36px', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-subtle)', boxShadow: 'var(--shadow-sm)' }}>
              <h2 style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: '12px' }}>Non-Affiliation Notice</h2>
              <p style={{ fontSize: '0.98rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '20px' }}>
                GTA 6 DESK is an independent journalistic website and is not associated, affiliated, endorsed, or sponsored by Rockstar Games, Take-Two Interactive Software, Inc., Sony Interactive Entertainment, or Microsoft Corporation.
              </p>

              <h2 style={{ fontSize: '1.3rem', fontWeight: 800, marginTop: '28px', marginBottom: '12px' }}>Trademark Ownership</h2>
              <p style={{ fontSize: '0.98rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '20px' }}>
                &quot;Grand Theft Auto&quot;, &quot;GTA VI&quot;, &quot;Vice City&quot;, &quot;Leonida&quot;, &quot;Rockstar Games&quot;, and associated logos and character imagery are trademarks or registered trademarks of Take-Two Interactive Software, Inc. in the U.S. and other jurisdictions. All trademarks referenced herein are the property of their respective owners and used under fair use journalistic doctrines.
              </p>

              <h2 style={{ fontSize: '1.3rem', fontWeight: 800, marginTop: '28px', marginBottom: '12px' }}>Financial Non-Advisory Notice</h2>
              <p style={{ fontSize: '0.98rem', color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>
                Take-Two Interactive (NASDAQ: TTWO) financial telemetry, SEC Form 10-K/10-Q references, and revenue projection calculations provided on this site are for journalistic and educational commentary only. They do not constitute investment advice, a recommendation to buy or sell securities, or an endorsement of any commercial equity.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
