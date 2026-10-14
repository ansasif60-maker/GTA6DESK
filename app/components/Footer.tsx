import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand-col">
            <Link href="/" className="brand-logo" style={{ marginBottom: '16px', display: 'inline-flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
              <img
                src="/assets/gta6desk_logo.png"
                alt="GTA 6 DESK Logo"
                width={48}
                height={48}
                style={{
                  borderRadius: '10px',
                  border: '1px solid rgba(0, 240, 255, 0.45)',
                  boxShadow: '0 0 16px rgba(0, 240, 255, 0.3)',
                  objectFit: 'cover'
                }}
              />
              <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.15 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{
                    fontSize: '1.35rem',
                    fontWeight: 900,
                    letterSpacing: '0.04em',
                    background: 'var(--gradient-vi)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}>
                    GTA 6 DESK
                  </span>
                  <span className="brand-badge">JOURNAL</span>
                </div>
                <span style={{
                  fontSize: '0.68rem',
                  color: 'var(--text-muted)',
                  fontFamily: 'var(--font-mono)',
                  letterSpacing: '0.06em',
                  fontWeight: 600
                }}>
                  FLAGSHIP INTELLIGENCE TERMINAL
                </span>
              </div>
            </Link>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6, maxWidth: '380px' }}>
              Independent editorial journal dedicated to Grand Theft Auto VI news, technical analysis, and Take-Two Interactive (NASDAQ: TTWO) corporate intelligence.
            </p>
          </div>

          <div>
            <h4 className="footer-col-title">Intelligence Hubs</h4>
            <ul className="footer-links">
              <li><Link href="/weapons">Weapons & Armory</Link></li>
              <li><Link href="/characters">Characters & Cast</Link></li>
              <li><Link href="/missions">Missions & Heists</Link></li>
              <li><Link href="/map">Interactive Map</Link></li>
              <li><Link href="/leonida">State of Leonida</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="footer-col-title">Analysis & Data</h4>
            <ul className="footer-links">
              <li><Link href="/financial">Financial & SEC Filings</Link></li>
              <li><Link href="/news">Verified Newsroom</Link></li>
              <li><Link href="/database">Relational Databases</Link></li>
              <li><Link href="/guides">Strategy Guides</Link></li>
              <li><Link href="/categories">Topic Directory</Link></li>
              <li><Link href="/roi-calculator">ROI Calculator</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="footer-col-title">Editorial & Legal</h4>
            <ul className="footer-links">
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/contact">Contact Desk</Link></li>
              <li><Link href="/privacy-policy">Privacy Policy</Link></li>
              <li><Link href="/terms-of-service">Terms of Service</Link></li>
              <li><Link href="/disclaimer">Legal Disclaimer</Link></li>
            </ul>
          </div>
        </div>

        <div className="legal-notice-box">
          <p style={{ margin: 0 }}>
            GTA 6 Desk is an independent editorial publication. Grand Theft Auto, GTA VI, Rockstar Games, and Take-Two Interactive are trademarks or registered trademarks of Take-Two Interactive Software, Inc. This publication is not endorsed, sponsored, or affiliated with Rockstar Games or Take-Two Interactive.
          </p>
        </div>
      </div>
    </footer>
  );
}
