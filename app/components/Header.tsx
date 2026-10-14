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
            <img
              src="/assets/gta6desk_logo.png"
              alt="GTA 6 DESK"
              width={42}
              height={42}
              style={{
                borderRadius: '9px',
                border: '1px solid rgba(0, 240, 255, 0.45)',
                boxShadow: '0 0 14px rgba(0, 240, 255, 0.35)',
                display: 'block',
                objectFit: 'cover'
              }}
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
