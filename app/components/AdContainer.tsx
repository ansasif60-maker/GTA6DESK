'use client';

import React, { useEffect } from 'react';

interface AdContainerProps {
  slotId: string;
  format: 'leaderboard' | 'rectangle' | 'skyscraper' | 'mobile-banner';
}

const AD_DIMENSIONS = {
  leaderboard: { width: 728, height: 90 },
  rectangle: { width: 300, height: 250 },
  skyscraper: { width: 160, height: 600 },
  'mobile-banner': { width: 320, height: 50 },
};

export default function AdContainer({ slotId, format }: AdContainerProps) {
  const { width, height } = AD_DIMENSIONS[format];

  useEffect(() => {
    try {
      if (typeof window !== 'undefined' && (window as any).googletag) {
        const googletag = (window as any).googletag;
        googletag.cmd.push(() => {
          googletag.display(slotId);
        });
      }
    } catch (e) {
      console.error('Ad Loading Exception', e);
    }
  }, [slotId]);

  return (
    <div
      aria-label="Advertisement Container"
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        paddingTop: '12px',
        paddingBottom: '12px',
      }}
    >
      <div
        style={{
          width: `${width}px`,
          height: `${height}px`,
          minWidth: `${width}px`,
          minHeight: `${height}px`,
          backgroundColor: '#090E18',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          position: 'relative',
        }}
      >
        <span
          style={{
            position: 'absolute',
            top: '2px',
            right: '4px',
            fontSize: '9px',
            color: '#64748B',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            fontFamily: 'monospace',
          }}
        >
          ADVERTISEMENT
        </span>
        <div id={slotId} style={{ width: '100%', height: '100%' }} />
      </div>
    </div>
  );
}
