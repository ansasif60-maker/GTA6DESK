import React from 'react';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="site-header">
      <div className="container nav-inner">
        <div className="brand-wrapper">
          <Link href="/" className="brand-logo">
            <span>GTA 6 DESK</span>
            <span className="brand-badge">JOURNAL</span>
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
          <Link href="#countdown" className="btn btn-primary" style={{ padding: '8px 16px', fontSize: '0.85rem' }}>
            Countdown
          </Link>
        </div>
      </div>
    </header>
  );
}
