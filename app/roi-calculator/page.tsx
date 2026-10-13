import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import RoiCalculator from '../components/RoiCalculator';

export const metadata = {
  title: 'GTA VI First-Year Revenue ROI Calculator — GTA 6 DESK',
  description: 'Interactive commercial revenue simulator and operating profit forecast engine for Grand Theft Auto VI.',
};

export default function RoiCalculatorPage() {
  return (
    <>
      <Header />

      <main style={{ minHeight: '85vh', paddingBottom: '64px' }}>
        <section style={{ padding: '48px 0 32px', background: 'var(--bg-base)', borderBottom: '1px solid var(--border-subtle)' }}>
          <div className="container">
            <div style={{ maxWidth: '780px' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                <span className="badge-category financial">FINANCIAL MODELING</span>
              </div>
              <h1 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', fontWeight: 800, margin: '0 0 12px', lineHeight: 1.2 }}>
                First-Year Revenue ROI Calculator
              </h1>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                Interactive simulator to model retail unit sales, platform margin splits, average selling price (ASP), and live service recurring net bookings.
              </p>
            </div>
          </div>
        </section>

        <section style={{ padding: '48px 0' }}>
          <div className="container" style={{ maxWidth: '860px' }}>
            <RoiCalculator />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
