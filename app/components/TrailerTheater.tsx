'use client';

import React, { useState, useRef } from 'react';

export interface SceneIntel {
  time: number;
  timeLabel: string;
  title: string;
  subtitle: string;
  category: string;
  summary: string;
  tags: string[];
  telemetry: string;
}

export const TRAILER_SCENES: SceneIntel[] = [
  {
    time: 5,
    timeLabel: '0:05',
    title: 'Leonida State Prison',
    subtitle: 'Lucia’s Opening Interrogation',
    category: 'CHARACTER INTEL',
    summary:
      'Lucia in inmate uniform during a correctional counseling session. Her iconic line "Bad luck, I guess" sets the grounded tone for GTA 6’s narrative.',
    tags: ['Lucia Protagonist', 'Correctional Facility', 'Subsurface Scattering'],
    telemetry: 'Location: Leonida State Penitentiary · Camera: 35mm Prime Equivalent · Lighting: Fluorescent Correctional Interior',
  },
  {
    time: 23,
    timeLabel: '0:23',
    title: 'Ocean Beach & Starfish Island',
    subtitle: 'Modern Vice City Waterfront',
    category: 'WORLD CARTOGRAPHY',
    summary:
      'A breathtaking coastal flyover showcasing pristine turquoise waves, custom speedboats, bikini-clad crowds with individual AI routines, and classic Cheetah supercars.',
    tags: ['Ocean Drive', 'Volumetric Water Physics', 'Crowd Density AI'],
    telemetry: 'Location: Ocean Beach Boulevard · Engine: RAGE 9 Global Illumination · Vehicles: Grotti Cheetah Classic, Pegassi Speedboat',
  },
  {
    time: 37,
    timeLabel: '0:37',
    title: 'Vice City Nightlife & VIP Lounges',
    subtitle: 'Nocturnal Social Hierarchy',
    category: 'INTERIOR FIDELITY',
    summary:
      'High-end rooftop pool clubs and enterable neon lounges. Illustrates seamless transition between open-world streets and multi-story indoor venues without loading pauses.',
    tags: ['Enterable Interiors', 'Cloth Simulation', 'Dynamic Audio Occlusion'],
    telemetry: 'Location: Downtown Vice City · Shading: Hardware Ray-Traced Reflections · Audio: Spatial Nightclub Acoustics',
  },
  {
    time: 46,
    timeLabel: '0:46',
    title: 'Thrillbilly Mud Club & Swamplands',
    subtitle: 'Rural Leonida Subcultures',
    category: 'VEHICLES & ENVIRONMENT',
    summary:
      'Kelly County mud drag strips, lifted 4x4 monster trucks, and airboats cruising through alligator-infested cypress swamps. Highlights the vast cultural contrast from downtown Vice.',
    tags: ['Kelly County', 'Deformable Terrain', 'Wildlife AI (Alligators)'],
    telemetry: 'Location: Grassrivers & Mud Club · Physics: Real-Time Mud Deformation · Flora: Cypress Everglades Ecosystem',
  },
  {
    time: 54,
    timeLabel: '0:54',
    title: 'Lucia & Jason Bonnie & Clyde Heist',
    subtitle: 'Tactical Dual-Operative Hold-Up',
    category: 'GAMEPLAY MECHANICS',
    summary:
      'Lucia and Jason storming a convenience store brandishing handguns with bandana disguises. The pivotal exchange—"Trust?" / "Trust"—cements their dynamic partner loyalty.',
    tags: ['Bonnie & Clyde', 'Ditch-The-Duffel', 'Partner Command Wheel'],
    telemetry: 'Location: Port Gellhorn Convenience · Weapons: 9mm Semi-Auto · Mechanics: Synchronized Operative AI',
  },
  {
    time: 75,
    timeLabel: '1:15',
    title: 'Viral Social Media & Police Dashcam',
    subtitle: 'Leonida’s Satirical Social Ecosystem',
    category: 'NARRATIVE SATIRE',
    summary:
      'In-game TikTok/Instagram parody live feeds, eccentric viral personalities, and high-tension Vice-Dale County police cruiser dashcams responding to a highway rollover.',
    tags: ['Social Parody Network', 'Police Telemetry', 'Viral NPC Behavior'],
    telemetry: 'Network: Leonida Clips App · Faction: Vice-Dale Police Department · Assets: Police Cruiser 2025 Fleet',
  },
];

export default function TrailerTheater() {
  const [currentSceneIndex, setCurrentSceneIndex] = useState(0);
  const [isTheaterMode, setIsTheaterMode] = useState(false);
  const [videoSrc, setVideoSrc] = useState(
    'https://www.youtube-nocookie.com/embed/QdBZY2fkU-0?enablejsapi=1&rel=0&modestbranding=1&playsinline=1'
  );
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const activeScene = TRAILER_SCENES[currentSceneIndex];

  const handleSelectScene = (index: number) => {
    setCurrentSceneIndex(index);
    const targetScene = TRAILER_SCENES[index];

    // Attempt direct postMessage to YouTube player
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
      // Fallback reload with start timestamp
      setVideoSrc(
        `https://www.youtube-nocookie.com/embed/QdBZY2fkU-0?enablejsapi=1&autoplay=1&start=${targetScene.time}&rel=0&modestbranding=1&playsinline=1`
      );
    }
  };

  const handlePrev = () => {
    const nextIdx = currentSceneIndex === 0 ? TRAILER_SCENES.length - 1 : currentSceneIndex - 1;
    handleSelectScene(nextIdx);
  };

  const handleNext = () => {
    const nextIdx = (currentSceneIndex + 1) % TRAILER_SCENES.length;
    handleSelectScene(nextIdx);
  };

  return (
    <section className="trailer-theater-section" id="trailer-theater">
      <div className="container">
        {/* Header Controls */}
        <div className="theater-header-controls">
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <span className="badge-category news">OFFICIAL YOUTUBE TRAILER</span>
              <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                Rockstar Games Official Release
              </span>
            </div>
            <h2 className="section-title">Grand Theft Auto VI Trailer 1 (4K) &amp; Scene Breakdown</h2>
            <p style={{ margin: '6px 0 0', fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
              Watch the record-shattering debut trailer directly on this site in full 4K 60FPS. Select any timestamp below to seek directly into verified scene intel.
            </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <button
              type="button"
              className={`btn ${isTheaterMode ? 'btn-primary' : 'btn-ghost'}`}
              onClick={() => setIsTheaterMode(!isTheaterMode)}
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem' }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="3" width="20" height="14" rx="2" />
                <line x1="8" y1="21" x2="16" y2="21" />
                <line x1="12" y1="17" x2="12" y2="21" />
              </svg>
              <span>{isTheaterMode ? 'Standard Mode' : 'Cinema Theater Mode'}</span>
            </button>
          </div>
        </div>

        {/* Theater Video & Timeline Wrapper */}
        <div className={`trailer-theater-wrapper ${isTheaterMode ? 'theater-mode-active' : ''}`}>
          {/* YouTube Iframe 16:9 Aspect Ratio Container */}
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

          {/* Interactive Scene Selector Timeline */}
          <div className="scenes-timeline-bar">
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-cyan)', fontWeight: 700 }}>
                SCENE INTEL:
              </span>
              <button
                type="button"
                className="btn btn-ghost"
                onClick={handlePrev}
                style={{ padding: '4px 10px', fontSize: '0.85rem' }}
                title="Previous Scene"
              >
                ←
              </button>
              <button
                type="button"
                className="btn btn-ghost"
                onClick={handleNext}
                style={{ padding: '4px 10px', fontSize: '0.85rem' }}
                title="Next Scene"
              >
                →
              </button>
            </div>

            <div className="scenes-track">
              {TRAILER_SCENES.map((scene, idx) => (
                <button
                  key={scene.timeLabel}
                  type="button"
                  className={`scene-chip ${idx === currentSceneIndex ? 'active' : ''}`}
                  onClick={() => handleSelectScene(idx)}
                >
                  <span className="scene-timestamp">{scene.timeLabel}</span>
                  <span>{scene.title}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Scene Dossier Output Details */}
          <div className="scene-dossier-box">
            <div className="dossier-grid">
              <div>
                <div className="dossier-header">
                  <span className="badge-category news">{activeScene.category}</span>
                  <span style={{ color: 'var(--text-dim)', fontSize: '0.8rem' }}>·</span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                    ROCKSTAR NEWSIRE TELEMETRY
                  </span>
                </div>
                <h3 className="dossier-title">
                  {activeScene.timeLabel} — {activeScene.title}
                </h3>
                <div className="dossier-sub">{activeScene.subtitle}</div>
                <p className="dossier-summary">{activeScene.summary}</p>
                <div className="dossier-telemetry-strip">{activeScene.telemetry}</div>
              </div>

              <div>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    color: 'var(--text-muted)',
                    textTransform: 'uppercase',
                    display: 'block',
                    marginBottom: '8px',
                    fontWeight: 600,
                  }}
                >
                  IDENTIFIED ASSETS &amp; SYSTEMS
                </span>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {activeScene.tags.map((tag, i) => (
                    <span key={i} className="badge-tag">
                      {tag}
                    </span>
                  ))}
                </div>

                <div style={{ marginTop: '18px', paddingTop: '14px', borderTop: '1px solid var(--border-subtle)' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.75rem',
                      color: 'var(--accent-amber)',
                      fontWeight: 700,
                      display: 'block',
                      marginBottom: '4px',
                    }}
                  >
                    SOUNDTRACK HOMAGE
                  </span>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0 }}>
                    Tom Petty — <em>"Love Is A Long Road"</em> (1989). A tribute to the Florida music icon and the dual-protagonist romance arc.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trailer Key Metrics Strip */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px', marginTop: '24px' }}>
          <div className="trailer-stat-card">
            <div className="stat-label-mono">RECORD FIRST-DAY AUDIENCE</div>
            <div className="stat-value-prominent" style={{ color: 'var(--accent-rose)' }}>93M+ Organic Views</div>
            <div className="stat-desc">Guinness World Record for most viewed non-music video in 24 hours in YouTube history.</div>
          </div>

          <div className="trailer-stat-card">
            <div className="stat-label-mono">ENGINE FIDELITY &amp; ASSETS</div>
            <div className="stat-value-prominent" style={{ color: 'var(--accent-cyan)' }}>RAGE 9 · 4K 60FPS</div>
            <div className="stat-desc">100% captured real-time in-engine on PlayStation 5 hardware with volumetric water &amp; ray-tracing.</div>
          </div>

          <div className="trailer-stat-card">
            <div className="stat-label-mono">GLOBAL ENGAGEMENT RATIO</div>
            <div className="stat-value-prominent" style={{ color: 'var(--text-primary)' }}>11M+ YouTube Likes</div>
            <div className="stat-desc">Achieved in under 48 hours, surpassing every prior entertainment reveal in gaming history.</div>
          </div>
        </div>
      </div>
    </section>
  );
}
