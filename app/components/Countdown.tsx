'use client';

import React, { useState, useEffect } from 'react';

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: '000',
    hours: '00',
    minutes: '00',
    seconds: '00',
  });

  useEffect(() => {
    // Target: November 19, 2026 (Fall target)
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
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="countdown-console" id="countdown">
      <div className="countdown-header-row">
        <div>
          <span className="live-beacon">
            <span className="pulse-dot" />
            <span>CONFIRMED WINDOW</span>
          </span>
          <h2 style={{ fontSize: '1.35rem', fontWeight: 800, margin: '8px 0 0', color: 'var(--text-primary)' }}>
            Grand Theft Auto VI Release Countdown
          </h2>
        </div>
        <div style={{ fontSize: '0.88rem', color: 'var(--text-muted)', fontWeight: 600 }}>
          Target: PlayStation 5 & Xbox Series X|S
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
          Officially scheduled for <strong>Fall 2025/2026</strong> per Take-Two Interactive SEC filings.
        </span>
        <a
          href="https://www.youtube.com/watch?v=QdBZY2fkU-0"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
          style={{ padding: '6px 16px', fontSize: '0.85rem' }}
        >
          Watch Trailer 1 →
        </a>
      </div>
    </div>
  );
}
