'use client';

import React, { useState } from 'react';

export default function RoiCalculator() {
  const [unitSalesMillions, setUnitSalesMillions] = useState(38);
  const [avgPrice, setAvgPrice] = useState(70);
  const [takeTwoMargin, setTakeTwoMargin] = useState(45);
  const [liveServiceAddonPct, setLiveServiceAddonPct] = useState(25);

  const grossRevenue = unitSalesMillions * 1000000 * avgPrice;
  const liveServiceRevenue = grossRevenue * (liveServiceAddonPct / 100);
  const totalNetBookings = grossRevenue + liveServiceRevenue;
  const estimatedProfit = (grossRevenue * (takeTwoMargin / 100)) + (liveServiceRevenue * 0.70);

  return (
    <div style={{ padding: '28px', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)', backgroundColor: 'var(--bg-surface)', boxShadow: 'var(--shadow-sm)' }}>
      <div style={{ marginBottom: '20px' }}>
        <span className="badge-category financial" style={{ fontSize: '0.75rem' }}>INTERACTIVE MODEL</span>
        <h3 style={{ margin: '6px 0 0', fontSize: '1.35rem', fontWeight: 800, color: 'var(--text-primary)' }}>
          Take-Two Year-1 Revenue Projection Engine
        </h3>
        <p style={{ margin: '4px 0 0', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
          Adjust unit volume, average selling price (ASP), and recurring net bookings to model fiscal impact.
        </p>
      </div>

      <div style={{ display: 'grid', gap: '20px' }}>
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '6px' }}>
            <span>Projected Year-1 Unit Sales (Millions):</span>
            <strong style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent-rose)' }}>{unitSalesMillions}M Units</strong>
          </div>
          <input
            type="range"
            min="15"
            max="75"
            value={unitSalesMillions}
            onChange={(e) => setUnitSalesMillions(Number(e.target.value))}
            style={{ width: '100%', accentColor: 'var(--accent-rose)', cursor: 'pointer' }}
          />
        </div>

        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '6px' }}>
            <span>Average Retail Price ($ USD):</span>
            <strong style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent-cyan)' }}>${avgPrice}</strong>
          </div>
          <input
            type="range"
            min="60"
            max="100"
            step="5"
            value={avgPrice}
            onChange={(e) => setAvgPrice(Number(e.target.value))}
            style={{ width: '100%', accentColor: 'var(--accent-cyan)', cursor: 'pointer' }}
          />
        </div>

        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '6px' }}>
            <span>Operating Margin Target:</span>
            <strong style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent-amber)' }}>{takeTwoMargin}%</strong>
          </div>
          <input
            type="range"
            min="25"
            max="60"
            value={takeTwoMargin}
            onChange={(e) => setTakeTwoMargin(Number(e.target.value))}
            style={{ width: '100%', accentColor: 'var(--accent-amber)', cursor: 'pointer' }}
          />
        </div>

        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '6px' }}>
            <span>Live Service / GTA Online Addon (% of Gross):</span>
            <strong style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent-green)' }}>{liveServiceAddonPct}%</strong>
          </div>
          <input
            type="range"
            min="10"
            max="50"
            value={liveServiceAddonPct}
            onChange={(e) => setLiveServiceAddonPct(Number(e.target.value))}
            style={{ width: '100%', accentColor: 'var(--accent-green)', cursor: 'pointer' }}
          />
        </div>

        <div style={{ padding: '20px', backgroundColor: 'var(--bg-base)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
          <div>
            <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase' }}>Gross Box Revenue</div>
            <div style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--text-primary)', fontFamily: 'var(--font-mono)', marginTop: '2px' }}>
              ${(grossRevenue / 1000000000).toFixed(2)}B
            </div>
          </div>

          <div>
            <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase' }}>Total Net Bookings</div>
            <div style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--accent-rose)', fontFamily: 'var(--font-mono)', marginTop: '2px' }}>
              ${(totalNetBookings / 1000000000).toFixed(2)}B
            </div>
          </div>

          <div>
            <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase' }}>Operating Profit</div>
            <div style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--accent-green)', fontFamily: 'var(--font-mono)', marginTop: '2px' }}>
              ${(estimatedProfit / 1000000000).toFixed(2)}B
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
