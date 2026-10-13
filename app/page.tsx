import React from 'react';
import DeskMarketTicker from './components/DeskMarketTicker';
import RoiCalculator from './components/RoiCalculator';
import AdContainer from './components/AdContainer';

export default function HomePage() {
  return (
    <main>
      {/* Top Telemetry & Status Bar */}
      <div className="telemetry-bar">
        <div className="container telemetry-inner">
          <div className="telemetry-item">
            <span>SYS:</span>
            <span className="telemetry-val">NOMINAL</span>
            <span style={{ color: 'var(--border-default)', margin: '0 4px' }}>|</span>
            <span>SECTOR:</span>
            <span className="telemetry-val">LEONIDA 04 · LAT 25.7617° N | LON 80.1918° W</span>
          </div>

          <div className="telemetry-item">
            <div className="osd-rec">
              <div className="osd-rec-dot" />
              <span>REC</span>
              <span>00:24:19:12</span>
            </div>
          </div>

          <div className="telemetry-item">
            <span>ENGINE:</span>
            <span className="telemetry-val">RAGE 9 ACTIVE</span>
            <span style={{ color: 'var(--border-default)', margin: '0 4px' }}>|</span>
            <span>SEC EDGAR:</span>
            <span className="telemetry-val">CIK 0000946581</span>
          </div>
        </div>
      </div>

      {/* Primary Site Header */}
      <header className="site-header">
        <div className="container nav-inner">
          <div className="brand-wrapper">
            <a href="#hero" className="brand-logo">
              <span>GTA 6 DESK</span>
              <span className="brand-badge">TERMINAL</span>
            </a>
            <span className="brand-sub">INSTITUTIONAL INTELLIGENCE</span>
          </div>

          <nav aria-label="Main Navigation">
            <ul className="nav-links">
              <li><a href="#hero" className="nav-link active">Desk</a></li>
              <li><a href="#financial" className="nav-link">Financial & SEC</a></li>
              <li><a href="#cartography" className="nav-link">Leonida Map</a></li>
              <li><a href="#database" className="nav-link">Armory & Fleet</a></li>
              <li><a href="#newsroom" className="nav-link">Semantic News</a></li>
              <li><a href="#hardware" className="nav-link">Hardware</a></li>
            </ul>
          </nav>

          <DeskMarketTicker />
        </div>
      </header>

      {/* Hero Operations Deck */}
      <section className="hero-deck" id="hero">
        <div className="container">
          <div className="grid-desk">
            <div className="hero-content-col">
              <div className="hero-status-row">
                <span className="badge-verified">VERIFIED SEC & ROCKSTAR TELEMETRY</span>
                <span className="badge-tag">FALL 2025 RELEASE WINDOW</span>
                <span className="badge-tag">PS5 · XBOX SERIES X|S · PC</span>
              </div>

              <h1 className="hero-title">Grand Theft Auto VI Intelligence Terminal</h1>
              <p className="hero-lead">
                The authoritative Bloomberg-grade intelligence portal engineered for Take-Two Interactive investors, technical analysts, and GTA VI completionists. Real-time Wall Street filings, relational Leonida cartography, and zero Cumulative Layout Shift (CLS).
              </p>

              <div className="hero-actions">
                <a href="#cartography" className="btn btn-cyan">Explore Leonida Map</a>
                <a href="#newsroom" className="btn btn-ghost">Query 40-Article Graph</a>
              </div>
            </div>

            <div className="hero-calc-col">
              <RoiCalculator />
            </div>
          </div>
        </div>
      </section>

      {/* Programmatic Zero-CLS Ad Unit */}
      <div className="container">
        <AdContainer slotId="div-gpt-ad-leaderboard" format="leaderboard" />
      </div>
    </main>
  );
}
