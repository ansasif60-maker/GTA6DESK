'use client';

import React, { useState, useEffect } from 'react';

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: '000',
    hours: '00',
    minutes: '00',
    seconds: '00',
  });
  const [isTrailerModalOpen, setIsTrailerModalOpen] = useState(false);

  useEffect(() => {
    // Official GTA VI Release Date: November 19, 2026 (Fall 2026)
    const targetDate = new Date('2026-11-19T00:00:00Z').getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const d = Math.floor(difference / (1000 * 60 * 60 * 24));
        const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({
          days: String(d).padStart(3, '0'),
          hours: String(h).padStart(2, '0'),
          minutes: String(m).padStart(2, '0'),
          seconds: String(s).padStart(2, '0'),
        });
      } else {
        setTimeLeft({
          days: '000',
          hours: '00',
          minutes: '00',
          seconds: '00',
        });
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  // Handle ESC key and body scroll lock for trailer modal
  useEffect(() => {
    if (!isTrailerModalOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsTrailerModalOpen(false);
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isTrailerModalOpen]);

  const handleScrollToTheater = () => {
    setIsTrailerModalOpen(false);
    const theaterEl = document.getElementById('trailer-theater');
    if (theaterEl) {
      theaterEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className="countdown-console" id="countdown">
        <div className="countdown-header-row">
          <div>
            <div className="countdown-status-badge">
              <svg
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="badge-icon"
              >
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              <span>TARGET: NOVEMBER 19, 2026</span>
            </div>
            <h2 style={{ fontSize: '1.35rem', fontWeight: 800, margin: '8px 0 0', color: 'var(--text-primary)' }}>
              Grand Theft Auto VI Release Countdown
            </h2>
          </div>
          <div style={{ fontSize: '0.88rem', color: 'var(--text-muted)', fontWeight: 600 }}>
            Target: PlayStation 5 &amp; Xbox Series X|S
          </div>
        </div>

        <div className="countdown-grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
          <div className="countdown-digit-box">
            <span className="digit-val">{timeLeft.days}</span>
            <span className="digit-label">DAYS</span>
          </div>
          <div className="countdown-digit-box">
            <span className="digit-val">{timeLeft.hours}</span>
            <span className="digit-label">HOURS</span>
          </div>
          <div className="countdown-digit-box">
            <span className="digit-val">{timeLeft.minutes}</span>
            <span className="digit-label">MINUTES</span>
          </div>
          <div className="countdown-digit-box">
            <span className="digit-val">{timeLeft.seconds}</span>
            <span className="digit-label">SECONDS</span>
          </div>
        </div>

        <div className="countdown-footer">
          <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
            Official release date target: <strong>November 19, 2026</strong> (Fall 2026) for PlayStation 5 and Xbox Series X|S.
          </span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <button
              type="button"
              onClick={() => setIsTrailerModalOpen(true)}
              className="btn btn-primary"
              style={{
                padding: '7px 18px',
                fontSize: '0.85rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                cursor: 'pointer',
              }}
              title="Watch Official Trailer 1 right in this tab"
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
              <span>Watch Trailer 1</span>
            </button>
            <button
              type="button"
              onClick={handleScrollToTheater}
              className="btn btn-ghost"
              style={{
                padding: '7px 14px',
                fontSize: '0.85rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                cursor: 'pointer',
              }}
              title="Jump to full 4K Theater & Scene Intel"
            >
              <span>Scene Intel ↓</span>
            </button>
          </div>
        </div>
      </div>

      {/* Cinematic In-Tab YouTube Trailer Modal */}
      {isTrailerModalOpen && (
        <div
          className="trailer-modal-backdrop"
          onClick={() => setIsTrailerModalOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="GTA 6 Official Trailer 1"
        >
          <div
            className="trailer-modal-container"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="trailer-modal-header">
              <div className="trailer-modal-title-wrap">
                <span className="trailer-modal-badge">4K 60FPS</span>
                <h3 className="trailer-modal-title">
                  Rockstar Games — Grand Theft Auto VI Trailer 1
                </h3>
              </div>
              <button
                type="button"
                className="trailer-modal-close-btn"
                onClick={() => setIsTrailerModalOpen(false)}
                aria-label="Close trailer video"
              >
                <span>✕ Close</span>
                <span style={{ fontSize: '0.72rem', opacity: 0.7 }}>(Esc)</span>
              </button>
            </div>

            {/* Modal Video Frame Container */}
            <div className="trailer-modal-video-wrap">
              <iframe
                src="https://www.youtube-nocookie.com/embed/QdBZY2fkU-0?autoplay=1&enablejsapi=1&rel=0&modestbranding=1&playsinline=1"
                title="Grand Theft Auto VI Official Trailer 1"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>

            {/* Modal Footer */}
            <div className="trailer-modal-footer">
              <div className="trailer-modal-meta">
                <span>93M+ Organic Views (24h Record)</span>
                <span className="trailer-modal-meta-dot" />
                <span>Tom Petty — <em>"Love Is A Long Road"</em></span>
                <span className="trailer-modal-meta-dot" />
                <span>PlayStation 5 &amp; Xbox Series X|S</span>
              </div>
              <button
                type="button"
                className="trailer-modal-action-btn"
                onClick={handleScrollToTheater}
              >
                <span>Explore Scene-by-Scene Breakdown ↓</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
