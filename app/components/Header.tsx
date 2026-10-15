'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Close drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Handle ESC key to close drawer
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Lock background scrolling when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const isActive = (path: string) => {
    if (path === '/') return pathname === '/';
    return pathname?.startsWith(path);
  };

  const navLinks = [
    {
      href: '/',
      label: 'Home',
      tag: 'HUB',
      desc: 'Flagship Intelligence Terminal',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          <polyline points="9 22 9 12 15 12 15 22"></polyline>
        </svg>
      )
    },
    {
      href: '/weapons',
      label: 'Weapons',
      tag: 'ARMORY',
      desc: 'Tactical Loadouts & Ballistics',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="22" y1="12" x2="18" y2="12"></line>
          <line x1="6" y1="12" x2="2" y2="12"></line>
          <line x1="12" y1="6" x2="12" y2="2"></line>
          <line x1="12" y1="22" x2="12" y2="18"></line>
        </svg>
      )
    },
    {
      href: '/characters',
      label: 'Characters',
      tag: 'LORE',
      desc: 'Lucia, Jason & Vice Syndicate',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </svg>
      )
    },
    {
      href: '/missions',
      label: 'Missions',
      tag: 'OPS',
      desc: 'Campaign Heists & Briefings',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
        </svg>
      )
    },
    {
      href: '/map',
      label: 'Interactive Map',
      tag: 'GIS',
      desc: 'Leonida Satellite Cartography',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon>
          <line x1="8" y1="2" x2="8" y2="18"></line>
          <line x1="16" y1="6" x2="16" y2="22"></line>
        </svg>
      )
    },
    {
      href: '/leonida',
      label: 'State of Leonida',
      tag: 'WORLD',
      desc: 'Vice City, Keys & Swamplands',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M8 12s1.5-2 4-2 4 2 4 2"></path>
          <line x1="12" y1="2" x2="12" y2="6"></line>
          <line x1="12" y1="18" x2="12" y2="22"></line>
        </svg>
      )
    },
    {
      href: '/database',
      label: 'Database',
      tag: 'DATA',
      desc: 'Relational Specs & Registries',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
        </svg>
      )
    },
    {
      href: '/financial',
      label: 'Financial Desk',
      tag: 'TTWO',
      desc: 'NASDAQ & SEC EDGAR Filings',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
          <polyline points="17 6 23 6 23 12"></polyline>
        </svg>
      )
    },
    {
      href: '/news',
      label: 'Newsroom',
      tag: 'NEWS',
      desc: 'Fact-Checked Rockstar Dispatches',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 20H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v1"></path>
          <path d="M18 12h4v8a2 2 0 0 1-2 2h-2"></path>
          <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
        </svg>
      )
    },
    {
      href: '/guides',
      label: 'Strategy Guides',
      tag: 'GUIDES',
      desc: 'Walkthroughs & Tactical Tips',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
        </svg>
      )
    },
    {
      href: '/roi-calculator',
      label: 'ROI Calculator',
      tag: 'MODEL',
      desc: 'Institutional Revenue Projections',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="4" y="2" width="16" height="20" rx="2"></rect>
          <line x1="8" y1="6" x2="16" y2="6"></line>
          <line x1="16" y1="14" x2="16" y2="18"></line>
          <line x1="8" y1="10" x2="8.01" y2="10"></line>
          <line x1="12" y1="10" x2="12.01" y2="10"></line>
          <line x1="16" y1="10" x2="16.01" y2="10"></line>
          <line x1="8" y1="14" x2="8.01" y2="14"></line>
          <line x1="12" y1="14" x2="12.01" y2="14"></line>
          <line x1="8" y1="18" x2="8.01" y2="18"></line>
          <line x1="12" y1="18" x2="12.01" y2="18"></line>
        </svg>
      )
    },
    {
      href: '/categories',
      label: 'Categories',
      tag: 'DIRECTORY',
      desc: 'Comprehensive Topic Index',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="7" height="7"></rect>
          <rect x="14" y="3" width="7" height="7"></rect>
          <rect x="14" y="14" width="7" height="7"></rect>
          <rect x="3" y="14" width="7" height="7"></rect>
        </svg>
      )
    }
  ];

  return (
    <>
      <header className="site-header">
        <div className="container nav-inner">
        <div className="brand-wrapper">
          <Link
            href="/"
            className="brand-logo"
            aria-label="GTA 6 DESK Home"
            onClick={() => setIsOpen(false)}
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

        {/* Desktop Primary Navigation */}
        <nav aria-label="Main Navigation">
          <ul className="nav-links">
            <li><Link href="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>Home</Link></li>
            <li><Link href="/weapons" className={`nav-link ${isActive('/weapons') ? 'active' : ''}`}>Weapons</Link></li>
            <li><Link href="/characters" className={`nav-link ${isActive('/characters') ? 'active' : ''}`}>Characters</Link></li>
            <li><Link href="/missions" className={`nav-link ${isActive('/missions') ? 'active' : ''}`}>Missions</Link></li>
            <li><Link href="/map" className={`nav-link ${isActive('/map') ? 'active' : ''}`}>Map</Link></li>
            <li><Link href="/database" className={`nav-link ${isActive('/database') ? 'active' : ''}`}>Database</Link></li>
            <li><Link href="/financial" className={`nav-link ${isActive('/financial') ? 'active' : ''}`}>Financial</Link></li>
            <li><Link href="/news" className={`nav-link ${isActive('/news') ? 'active' : ''}`}>News</Link></li>
          </ul>
        </nav>

        {/* Header Right Actions */}
        <div className="header-actions">
          <Link
            href="/#countdown"
            className="header-countdown-btn"
            aria-label="Jump to Launch Countdown"
            onClick={() => setIsOpen(false)}
          >
            <span className="pulse-dot" style={{ width: '6px', height: '6px', flexShrink: 0 }}></span>
            <span className="countdown-label-desktop">Countdown</span>
            <span className="countdown-label-mobile">2026</span>
          </Link>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            className={`mobile-menu-toggle ${isOpen ? 'open' : ''}`}
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isOpen}
            aria-controls="mobile-nav-drawer"
            id="mobile-menu-toggle-btn"
          >
            <span className="hamburger-box">
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
            </span>
          </button>
        </div>
      </div>
    </header>

    {/* Backdrop overlay */}
      <div
        className={`mobile-nav-backdrop ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Drawer Panel */}
      <div
        id="mobile-nav-drawer"
        className={`mobile-nav-drawer ${isOpen ? 'open' : ''}`}
        role="dialog"
        aria-modal={isOpen}
        aria-label="Mobile Navigation Menu"
      >
        <div className="mobile-drawer-content">
          {/* Quick Launch Banner */}
          <Link
            href="/#countdown"
            className="mobile-drawer-countdown"
            onClick={() => setIsOpen(false)}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span className="pulse-dot" style={{ width: '8px', height: '8px', background: 'var(--accent-rose)', boxShadow: '0 0 10px var(--accent-rose)', flexShrink: 0 }}></span>
              <div>
                <div style={{ fontSize: '0.86rem', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '0.02em', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span>FALL 2026 LAUNCH</span>
                  <span className="brand-badge" style={{ fontSize: '0.62rem', padding: '1px 6px' }}>LIVE</span>
                </div>
                <div style={{ fontSize: '0.72rem', color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)', marginTop: '2px' }}>
                  PlayStation 5 · Xbox Series X|S
                </div>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--accent-rose)', fontSize: '0.78rem', fontWeight: 700, flexShrink: 0 }}>
              <span>COUNTDOWN</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </div>
          </Link>

          {/* Section: Navigation Directory */}
          <div className="mobile-nav-section-title">
            <span style={{ color: 'var(--accent-rose)' }}>//</span> NAVIGATION DIRECTORY
          </div>

          <div className="mobile-nav-list">
            {navLinks.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`mobile-nav-link ${active ? 'active' : ''}`}
                  onClick={() => setIsOpen(false)}
                >
                  <div className="mobile-nav-left">
                    <span className="mobile-nav-icon">{item.icon}</span>
                    <div>
                      <div className="mobile-nav-label">{item.label}</div>
                      <div className="mobile-nav-desc">{item.desc}</div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span className="mobile-nav-tag">{item.tag}</span>
                    <svg className="mobile-nav-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Mobile Drawer Footer */}
          <div className="mobile-drawer-footer">
            <div className="mobile-drawer-legal-links">
              <Link href="/about" onClick={() => setIsOpen(false)}>About Us</Link>
              <span>·</span>
              <Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
              <span>·</span>
              <Link href="/privacy-policy" onClick={() => setIsOpen(false)}>Privacy Policy</Link>
              <span>·</span>
              <Link href="/terms-of-service" onClick={() => setIsOpen(false)}>Terms</Link>
              <span>·</span>
              <Link href="/disclaimer" onClick={() => setIsOpen(false)}>Disclaimer</Link>
            </div>
            <div className="mobile-drawer-brand-note">
              GTA 6 DESK — VICE CITY INTELLIGENCE TERMINAL · NOT AFFILIATED WITH ROCKSTAR GAMES
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
