import React from 'react';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="site-header">
      <div className="container nav-inner">
        <div className="brand-wrapper">
          <Link
            href="/"
            className="brand-logo"
            aria-label="GTA 6 DESK Home"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              textDecoration: 'none',
              transition: 'transform 0.2s ease, filter 0.2s ease'
            }}
          >
            {/* Desktop & Tablet Header Logo: The second image (Horizontal Retro Vice City Banner) */}
            <img
              src="/assets/gta6desk_header_logo.png"
              alt="GTA 6 DESK"
              className="header-logo-desktop"
              style={{
                filter: 'drop-shadow(0 2px 10px rgba(0, 0, 0, 0.6))',
                transition: 'transform 0.2s ease'
              }}
            />

            {/* Small Mobile Layout Logo: The first image (Simplified Text-Only Version) */}
            <img
              src="/assets/gta6desk_mobile_logo.png"
              alt="GTA 6 DESK"
              className="header-logo-mobile"
            />
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
