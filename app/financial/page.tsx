import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import RoiCalculator from '../components/RoiCalculator';

export const metadata = {
  title: 'Take-Two (TTWO) GTA 6 Financial Intelligence & SEC Filings | GTA 6 DESK',
  description: 'Wall Street analysis, SEC Form 10-K/10-Q filing breakdowns, FY26 Net Bookings guidance, and GTA VI First-Year revenue projections.',
  alternates: {
    canonical: 'https://gta6desk.com/financial',
  },
  openGraph: {
    title: 'Take-Two Interactive (TTWO) GTA 6 Guidance & SEC Filings — GTA 6 DESK',
    description: 'Wall Street analysis, SEC Form 10-K/10-Q filing breakdowns, and GTA VI Net Bookings targets.',
    url: 'https://gta6desk.com/financial',
  },
};

export default function FinancialPage() {
  return (
    <>
      <Header />

      <main style={{ minHeight: '85vh', paddingBottom: '64px' }}>
        {/* Page Header */}
        <section style={{ padding: '48px 0 32px', background: 'var(--bg-base)', borderBottom: '1px solid var(--border-subtle)' }}>
          <div className="container">
            <div style={{ maxWidth: '820px' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                <span className="badge-category financial">EQUITY RESEARCH & SEC FILINGS</span>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                  NASDAQ: TTWO · CIK 0000946581
                </span>
              </div>
              <h1 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', fontWeight: 800, margin: '0 0 12px', lineHeight: 1.2 }}>
                Take-Two Interactive Financial Intelligence
              </h1>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                Rigorous financial modeling, management earnings call transcripts, and SEC filing telemetry analyzing the commercial trajectory of Grand Theft Auto VI.
              </p>
            </div>
          </div>
        </section>

        {/* Financial Content & Calculator */}
        <section style={{ padding: '40px 0' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '32px', alignItems: 'start' }}>
              {/* Financial Analysis Columns */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div style={{ background: 'var(--bg-surface)', padding: '28px', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-subtle)', boxShadow: 'var(--shadow-sm)' }}>
                  <h2 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '14px' }}>
                    The FY26-FY27 $8.0B+ Net Bookings Inflection
                  </h2>
                  <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: '14px' }}>
                    Take-Two Interactive management (CEO Strauss Zelnick and CFO Lainie Goldstein) established clear multi-year Net Bookings benchmarks during consecutive quarterly earnings presentations. Management reiterated target Net Bookings exceeding $8.0 Billion for the launch window, representing a historic record for interactive entertainment.
                  </p>
                  <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.65, margin: 0 }}>
                    GTA V generated $1.0 Billion in retail sales within its first three calendar days (September 2013). Adjusted for digital margin expansion, platform install bases across PS5 and Xbox Series X|S, and modern $70 ASP pricing tiers, GTA VI is positioned to establish unprecedented day-one operating cash flows.
                  </p>
                </div>

                <div style={{ background: 'var(--bg-surface)', padding: '28px', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-subtle)', boxShadow: 'var(--shadow-sm)' }}>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '16px' }}>
                    Key Financial Performance Indicators (KPIs)
                  </h3>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '16px' }}>
                    <div style={{ background: 'var(--bg-elevated)', padding: '16px', borderRadius: 'var(--radius-sm)' }}>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600 }}>TICKER SYMBOL</div>
                      <div style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--text-primary)', marginTop: '4px' }}>NASDAQ: TTWO</div>
                    </div>

                    <div style={{ background: 'var(--bg-elevated)', padding: '16px', borderRadius: 'var(--radius-sm)' }}>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600 }}>RELEASE HORIZON</div>
                      <div style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--accent-rose)', marginTop: '4px' }}>November 19, 2026</div>
                    </div>

                    <div style={{ background: 'var(--bg-elevated)', padding: '16px', borderRadius: 'var(--radius-sm)' }}>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600 }}>TARGET NET BOOKINGS</div>
                      <div style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--accent-cyan)', marginTop: '4px' }}>$8.0B+ FY Horizon</div>
                    </div>

                    <div style={{ background: 'var(--bg-elevated)', padding: '16px', borderRadius: 'var(--radius-sm)' }}>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600 }}>PRIMARY PLATFORMS</div>
                      <div style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--accent-green)', marginTop: '4px' }}>PS5 · Series X|S</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Interactive Calculator */}
              <div>
                <RoiCalculator />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
