import React from 'react';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="site-header">
      <div className="container nav-inner">
        <div className="brand-wrapper">
          <Link href="/" className="brand-logo" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
            <img
              src="/assets/gta6desk_logo.png"
              alt="GTA 6 DESK Logo"
              width={38}
              height={38}
              style={{
                borderRadius: '8px',
                border: '1px solid rgba(0, 240, 255, 0.45)',
                boxShadow: '0 0 12px rgba(0, 240, 255, 0.35)',
                display: 'block',
                objectFit: 'cover'
              }}
            />
            <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.15 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{
                  fontSize: '1.15rem',
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
                fontSize: '0.62rem',
                color: 'var(--text-muted)',
                fontFamily: 'var(--font-mono)',
                letterSpacing: '0.06em',
                fontWeight: 600
              }}>
                INTELLIGENCE NETWORK
              </span>
            </div>
          </Link>
        </div>

        <nav aria-label="Main Navigation">
          <ul className="nav-links">
            <li><Link href="/" className="nav-link">Home</Link></li>
            <li><Link href="/weapons" className="nav-link">Weapons</Link></li>
            <li><Link href="/characters" className="nav-link">Characters</Link></li>
            <li><Link href="/missions" className="nav-link">Missions</Link></li>
            <li><Link href="/map" className="nav-link">Map</Link></li>
            <li><Link href="/database" className="nav-link">Database</Link></li>
            <li><Link href="/financial" className="nav-link">Financial</Link></li>
            <li><Link href="/news" className="nav-link">News</Link></li>
          </ul>
        </nav>

        <div className="header-actions">
          <Link href="/#countdown" className="btn btn-primary" style={{ padding: '8px 16px', fontSize: '0.85rem' }}>
            Countdown
          </Link>
        </div>
      </div>
    </header>
  );
}
