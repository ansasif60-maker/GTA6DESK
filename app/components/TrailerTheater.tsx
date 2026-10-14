'use client';

import React, { useState, useRef } from 'react';

export interface SceneIntel {
  time: number;
  timeLabel: string;
  title: string;
}

export const TRAILER_SCENES: SceneIntel[] = [
  { time: 5, timeLabel: '0:05', title: 'Leonida Prison' },
  { time: 23, timeLabel: '0:23', title: 'Ocean Beach' },
  { time: 37, timeLabel: '0:37', title: 'Vice City Nightlife' },
  { time: 46, timeLabel: '0:46', title: 'Swamplands & Mud Club' },
  { time: 54, timeLabel: '0:54', title: 'The Heist' },
  { time: 75, timeLabel: '1:15', title: 'Viral Clips & Police' },
];

export default function TrailerTheater() {
  const [currentSceneIndex, setCurrentSceneIndex] = useState(0);
  const [videoSrc, setVideoSrc] = useState(
    'https://www.youtube-nocookie.com/embed/QdBZY2fkU-0?enablejsapi=1&rel=0&modestbranding=1&playsinline=1'
  );
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const handleSelectScene = (index: number) => {
    setCurrentSceneIndex(index);
    const targetScene = TRAILER_SCENES[index];

    if (iframeRef.current && iframeRef.current.contentWindow) {
      iframeRef.current.contentWindow.postMessage(
        JSON.stringify({
          event: 'command',
          func: 'seekTo',
          args: [targetScene.time, true],
        }),
        '*'
      );
    } else {
      setVideoSrc(
        `https://www.youtube-nocookie.com/embed/QdBZY2fkU-0?enablejsapi=1&autoplay=1&start=${targetScene.time}&rel=0&modestbranding=1&playsinline=1`
      );
    }
  };

  return (
    <section className="trailer-theater-section" id="trailer-theater" style={{ padding: '40px 0 20px' }}>
      <div className="container">
        {/* Minimalist Header */}
        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
            <span className="badge-category news" style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.06em' }}>
              OFFICIAL TRAILER 1
            </span>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
              4K 60FPS
            </span>
          </div>
          <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.3rem)', fontWeight: 900, margin: '0 0 6px', color: 'var(--text-primary)' }}>
            Grand Theft Auto VI — Official Reveal
          </h2>
          <p style={{ margin: 0, fontSize: '0.92rem', color: 'var(--text-secondary)' }}>
            Captured in-engine on PlayStation 5. Select a scene bookmark below to jump directly to that moment.
          </p>
        </div>

        {/* Clean Video Player Frame */}
        <div style={{
          maxWidth: '1000px',
          margin: '0 auto',
          background: 'var(--bg-surface)',
          borderRadius: 'var(--radius-lg)',
          overflow: 'hidden',
          border: '1px solid var(--border-subtle)',
          boxShadow: '0 20px 50px rgba(0, 0, 0, 0.7), 0 0 25px rgba(255, 0, 122, 0.15)'
        }}>
          <div className="video-frame-container">
            <iframe
              ref={iframeRef}
              id="gta6-trailer-iframe"
              src={videoSrc}
              title="Rockstar Games — Grand Theft Auto VI Trailer 1 (Official 4K)"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>

          {/* Minimalist Scene Bookmark Track */}
          <div style={{
            background: 'var(--bg-elevated)',
            borderTop: '1px solid var(--border-subtle)',
            padding: '12px 18px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            overflowX: 'auto',
            scrollbarWidth: 'none'
          }}>
            <span style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              color: 'var(--accent-cyan)',
              fontWeight: 700,
              flexShrink: 0,
              letterSpacing: '0.05em'
            }}>
              SCENE JUMPS:
            </span>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'nowrap' }}>
              {TRAILER_SCENES.map((scene, idx) => (
                <button
                  key={scene.timeLabel}
                  type="button"
                  onClick={() => handleSelectScene(idx)}
                  className="btn btn-ghost"
                  style={{
                    padding: '5px 12px',
                    fontSize: '0.78rem',
                    fontWeight: 600,
                    borderRadius: '20px',
                    whiteSpace: 'nowrap',
                    borderColor: idx === currentSceneIndex ? 'var(--accent-cyan)' : 'var(--border-subtle)',
                    background: idx === currentSceneIndex ? 'rgba(0, 240, 255, 0.12)' : 'transparent',
                    color: idx === currentSceneIndex ? 'var(--accent-cyan)' : 'var(--text-secondary)',
                    transition: 'all 0.2s ease',
                    cursor: 'pointer'
                  }}
                >
                  <span style={{ fontFamily: 'var(--font-mono)', marginRight: '6px', opacity: 0.8 }}>
                    {scene.timeLabel}
                  </span>
                  <span>{scene.title}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
