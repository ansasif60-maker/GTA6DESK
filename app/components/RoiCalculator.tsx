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
    <div style={{ padding: '20px', border: '1px solid rgba(255, 255, 255, 0.14)', borderRadius: '8px', backgroundColor: '#0B111E' }}>
      <h3 style={{ marginTop: 0, fontSize: '1.15rem', fontWeight: 'bold', color: '#F8FAFC' }}>
        GTA VI First-Year Revenue Projection Engine
      </h3>

      <div style={{ display: 'grid', gap: '14px', marginTop: '16px' }}>
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: '#94A3B8', marginBottom: '4px' }}>
            <span>Projected Year-1 Unit Sales (Millions):</span>
            <span style={{ fontFamily: 'monospace', color: '#00F0FF', fontWeight: 'bold' }}>{unitSalesMillions}M</span>
          </div>
          <input
            type="range"
            min="15"
            max="75"
            value={unitSalesMillions}
            onChange={(e) => setUnitSalesMillions(Number(e.target.value))}
            style={{ width: '100%', accentColor: '#00F0FF' }}
          />
        </div>

        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: '#94A3B8', marginBottom: '4px' }}>
            <span>Average Retail Price ($ USD):</span>
            <span style={{ fontFamily: 'monospace', color: '#00F0FF', fontWeight: 'bold' }}>${avgPrice}</span>
          </div>
          <input
            type="range"
            min="60"
            max="100"
            step="5"
            value={avgPrice}
            onChange={(e) => setAvgPrice(Number(e.target.value))}
            style={{ width: '100%', accentColor: '#00F0FF' }}
          />
        </div>

        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: '#94A3B8', marginBottom: '4px' }}>
            <span>Operating Margin Target:</span>
            <span style={{ fontFamily: 'monospace', color: '#FF2A85', fontWeight: 'bold' }}>{takeTwoMargin}%</span>
          </div>
          <input
            type="range"
            min="25"
            max="60"
            value={takeTwoMargin}
            onChange={(e) => setTakeTwoMargin(Number(e.target.value))}
            style={{ width: '100%', accentColor: '#FF2A85' }}
          />
        </div>

        <div style={{ padding: '12px', backgroundColor: '#06090F', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '4px' }}>
          <div style={{ fontSize: '0.7rem', color: '#64748B', fontFamily: 'monospace' }}>GROSS RETAIL REVENUE</div>
          <div style={{ fontSize: '1.3rem', fontWeight: 'bold', color: '#00F0FF', fontFamily: 'monospace' }}>
            ${(grossRevenue / 1000000000).toFixed(2)} Billion
          </div>

          <div style={{ fontSize: '0.7rem', color: '#64748B', fontFamily: 'monospace', marginTop: '8px' }}>TOTAL NET BOOKINGS (WITH LIVE SERVICE)</div>
          <div style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#FF2A85', fontFamily: 'monospace' }}>
            ${(totalNetBookings / 1000000000).toFixed(2)} Billion
          </div>

          <div style={{ fontSize: '0.7rem', color: '#64748B', fontFamily: 'monospace', marginTop: '8px' }}>ESTIMATED OPERATING PROFIT CONTRIBUTION</div>
          <div style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#FFB800', fontFamily: 'monospace' }}>
            ${(estimatedProfit / 1000000000).toFixed(2)} Billion
          </div>
        </div>
      </div>
    </div>
  );
}
