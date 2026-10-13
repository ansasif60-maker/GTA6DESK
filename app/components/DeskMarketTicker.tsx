'use client';

import React from 'react';

interface TickerProps {
  symbol?: string;
  price?: string;
  change?: string;
  isPositive?: boolean;
}

export default function DeskMarketTicker({
  symbol = 'TTWO (NASDAQ)',
  price = '158.42',
  change = '+2.34%',
  isPositive = true,
}: TickerProps) {
  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        padding: '6px 12px',
        backgroundColor: '#111A2E',
        border: '1px solid rgba(0, 240, 255, 0.35)',
        borderRadius: '4px',
        fontFamily: 'monospace',
        fontSize: '12px',
      }}
    >
      <span style={{ fontWeight: 'bold', color: '#F8FAFC' }}>{symbol}</span>
      <span style={{ color: '#00F0FF', fontWeight: 'bold' }}>${price}</span>
      <span style={{ color: isPositive ? '#10B981' : '#EF4444', fontWeight: 'bold' }}>
        {change}
      </span>
    </div>
  );
}
