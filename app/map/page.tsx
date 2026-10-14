'use client';

import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { MAP_ZONES } from '@/lib/data';

interface PinMeta {
  x: number;
  y: number;
  icon: string;
  shortLabel: string;
  color: string;
  glow: string;
}

const PIN_COORDINATES: Record<string, PinMeta> = {
  zone_downtown: {
    x: 32,
    y: 44,
    icon: '🏙️',
    shortLabel: 'Downtown VC',
    color: '#00F0FF',
    glow: 'rgba(0, 240, 255, 0.6)'
  },
  zone_ocean_drive: {
    x: 78,
    y: 52,
    icon: '🏖️',
    shortLabel: 'Ocean Drive',
    color: '#FF007A',
    glow: 'rgba(255, 0, 122, 0.6)'
  },
  zone_port_gellhorn: {
    x: 18,
    y: 36,
    icon: '⚓',
    shortLabel: 'Port Gellhorn',
    color: '#FF5A36',
    glow: 'rgba(255, 90, 54, 0.6)'
  },
  zone_grassrivers: {
    x: 40,
    y: 22,
    icon: '🐊',
    shortLabel: 'Grassrivers',
    color: '#10B981',
    glow: 'rgba(16, 185, 129, 0.6)'
  },
  zone_vice_keys: {
    x: 74,
    y: 26,
    icon: '🏝️',
    shortLabel: 'Vice Keys',
    color: '#FFA800',
    glow: 'rgba(255, 168, 0, 0.6)'
  }
};

export default function MapPage() {
  const [activeZone, setActiveZone] = useState<string>(MAP_ZONES[0].id);
  const [hoveredZone, setHoveredZone] = useState<string | null>(null);
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [isRadarMode, setIsRadarMode] = useState<boolean>(false);

  const currentZone = MAP_ZONES.find((z) => z.id === activeZone) || MAP_ZONES[0];
  const activePin = PIN_COORDINATES[currentZone.id] || PIN_COORDINATES.zone_downtown;

  const handleZoomIn = () => setZoomLevel((prev) => Math.min(prev + 0.25, 1.75));
  const handleZoomOut = () => setZoomLevel((prev) => Math.max(prev - 0.25, 1));
  const handleResetZoom = () => setZoomLevel(1);

  return (
    <>
      <Header />

      <main style={{ minHeight: '85vh', paddingBottom: '64px' }}>
        {/* Page Header */}
        <section style={{ padding: '48px 0 32px', background: 'var(--bg-base)', borderBottom: '1px solid var(--border-subtle)' }}>
          <div className="container">
            <div style={{ maxWidth: '820px' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                <span className="badge-category financial">LEONIDA CARTOGRAPHY</span>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                  2.5x Scale of Los Santos
                </span>
                <span style={{ fontSize: '0.85rem', color: 'var(--accent-cyan)', fontWeight: 600 }}>
                  · Interactive Satellite GIS
                </span>
              </div>
              <h1 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', fontWeight: 900, margin: '0 0 12px', lineHeight: 1.2 }}>
                State of Leonida Map & Districts
              </h1>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                High-fidelity geographic telemetry spanning the neon streets of Vice City, the Port Gellhorn industrial corridor, and the untamed Grassrivers wetlands. Click any location pin on the map or select a district to inspect cartographic coordinates.
              </p>
            </div>
          </div>
        </section>

        {/* Interactive Map Layout: Locations on Left, Physical Map Beside It */}
        <section style={{ padding: '40px 0' }}>
          <div className="container">
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
              gap: '32px',
              alignItems: 'start'
            }}>
              {/* Left Column: Confirmed Geographic Districts */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                  <h2 style={{ fontSize: '1.25rem', fontWeight: 800, margin: 0, color: 'var(--text-primary)' }}>
                    Confirmed Geographic Districts
                  </h2>
                  <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                    5 ZONES VERIFIED
                  </span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {MAP_ZONES.map((zone) => {
                    const isSelected = zone.id === activeZone;
                    const pin = PIN_COORDINATES[zone.id] || PIN_COORDINATES.zone_downtown;

                    return (
                      <button
                        key={zone.id}
                        onClick={() => setActiveZone(zone.id)}
                        onMouseEnter={() => setHoveredZone(zone.id)}
                        onMouseLeave={() => setHoveredZone(null)}
                        style={{
                          textAlign: 'left',
                          background: isSelected
                            ? 'linear-gradient(135deg, rgba(0, 240, 255, 0.12) 0%, rgba(14, 18, 27, 0.95) 100%)'
                            : 'var(--bg-surface)',
                          border: `1px solid ${isSelected ? pin.color : 'var(--border-subtle)'}`,
                          borderRadius: 'var(--radius-md)',
                          padding: '16px',
                          cursor: 'pointer',
                          transition: 'all 0.25s ease',
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          boxShadow: isSelected ? `0 0 16px ${pin.glow}, inset 0 0 12px rgba(0, 240, 255, 0.05)` : 'var(--shadow-xs)'
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                          <span style={{
                            width: '32px',
                            height: '32px',
                            borderRadius: '50%',
                            background: isSelected ? pin.color : 'var(--bg-elevated)',
                            color: isSelected ? '#07090E' : 'var(--text-primary)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '1rem',
                            flexShrink: 0,
                            boxShadow: isSelected ? `0 0 10px ${pin.color}` : 'none',
                            transition: 'all 0.2s ease'
                          }}>
                            {pin.icon}
                          </span>

                          <div>
                            <div style={{ fontSize: '0.75rem', color: isSelected ? pin.color : 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                              {zone.district}
                            </div>
                            <div style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--text-primary)', marginTop: '2px' }}>
                              {zone.name}
                            </div>
                            <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)', marginTop: '2px' }}>
                              COORD: X: {zone.x}° · Y: {zone.y}°
                            </div>
                          </div>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          {isSelected && (
                            <span style={{
                              fontSize: '0.7rem',
                              fontFamily: 'var(--font-mono)',
                              color: pin.color,
                              fontWeight: 700,
                              textTransform: 'uppercase'
                            }}>
                              ACTIVE
                            </span>
                          )}
                          <span style={{
                            width: '10px',
                            height: '10px',
                            borderRadius: '50%',
                            background: isSelected ? pin.color : 'var(--border-default)',
                            boxShadow: isSelected ? `0 0 8px ${pin.color}` : 'none',
                            flexShrink: 0,
                            transition: 'all 0.2s ease'
                          }} />
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Quick Map Legend & Instructions */}
                <div style={{
                  marginTop: '20px',
                  padding: '16px',
                  borderRadius: 'var(--radius-md)',
                  background: 'var(--bg-surface)',
                  border: '1px solid var(--border-subtle)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px'
                }}>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase' }}>
                    CARTOGRAPHIC INSTRUCTIONS
                  </div>
                  <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                    Click any marker directly on the physical map to target that sector. Use the zoom controls in the corner to inspect high-density Vice City corridors or switch to <strong>Tactical Radar</strong> mode.
                  </p>
                </div>
              </div>

              {/* Right Column: Physical Map + Active Zone Dossier */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                {/* Physical Interactive Satellite Map Viewport */}
                <div className={`tactical-map-container ${isRadarMode ? 'radar-mode' : ''}`}>
                  {/* Top HUD Overlay */}
                  <div className="tactical-map-hud-top">
                    <div className="tactical-map-hud-badge">
                      <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10B981', boxShadow: '0 0 6px #10B981', display: 'inline-block' }} />
                      SAT-VIEW 8.1 // LEONIDA METRO
                    </div>

                    <div className="tactical-map-hud-coords">
                      <span>TARGET:</span>
                      <strong style={{ color: activePin.color, fontFamily: 'var(--font-mono)' }}>
                        LAT: {currentZone.x}.4° N · LON: {currentZone.y}.8° W
                      </strong>
                    </div>
                  </div>

                  {/* Grid Lines Overlay */}
                  <div className="tactical-map-grid-overlay" />

                  {/* Scanner Sweep Beam Animation */}
                  <div className="tactical-map-scanner" />

                  {/* Vignette Shadow */}
                  <div className="tactical-map-vignette" />

                  {/* Map Image Layer with Smooth Zoom */}
                  <div
                    className="tactical-map-img-wrapper"
                    style={{
                      transform: `scale(${zoomLevel})`,
                      transformOrigin: `${activePin.x}% ${activePin.y}%`
                    }}
                  >
                    <img
                      src="/assets/leonida_map_hero.jpg"
                      alt="Physical Map of Leonida and Vice City"
                      className="tactical-map-img"
                    />
                  </div>

                  {/* Physical Interactive Location Markers Plotted on the Map */}
                  {MAP_ZONES.map((zone) => {
                    const isSelected = zone.id === activeZone;
                    const isHovered = zone.id === hoveredZone;
                    const pin = PIN_COORDINATES[zone.id] || PIN_COORDINATES.zone_downtown;

                    return (
                      <button
                        key={zone.id}
                        type="button"
                        onClick={() => setActiveZone(zone.id)}
                        onMouseEnter={() => setHoveredZone(zone.id)}
                        onMouseLeave={() => setHoveredZone(null)}
                        className={`tactical-map-pin ${isSelected ? 'selected' : ''}`}
                        style={{
                          left: `${pin.x}%`,
                          top: `${pin.y}%`,
                          color: pin.color
                        }}
                        title={`${zone.name} (${zone.district})`}
                      >
                        <div className="tactical-pin-beacon">
                          {/* Pulsing Radar Ring on Selected Marker */}
                          <div className="tactical-pin-pulse" style={{ color: pin.color }} />

                          {/* Pin Icon Box */}
                          <div
                            className="tactical-pin-icon-box"
                            style={{
                              borderColor: isSelected ? '#FFFFFF' : pin.color,
                              boxShadow: isSelected ? `0 0 16px ${pin.color}, 0 4px 10px rgba(0,0,0,0.8)` : `0 0 8px ${pin.color}`
                            }}
                          >
                            <span>{pin.icon}</span>
                          </div>
                        </div>

                        {/* Floating District Label Tag */}
                        <div
                          className="tactical-pin-label"
                          style={{
                            borderColor: isSelected ? pin.color : 'rgba(255, 255, 255, 0.22)',
                            background: isSelected ? pin.color : 'rgba(7, 9, 14, 0.92)',
                            color: isSelected ? '#07090E' : '#FFFFFF'
                          }}
                        >
                          {pin.shortLabel}
                        </div>
                      </button>
                    );
                  })}

                  {/* Bottom-Left Scale Bar & Compass */}
                  <div className="tactical-map-scale">
                    <span style={{ color: 'var(--accent-cyan)', fontWeight: 700 }}>▲ N</span>
                    <span style={{ color: 'var(--border-default)' }}>|</span>
                    <div className="tactical-scale-bar" />
                    <span>5 KM</span>
                  </div>

                  {/* Bottom-Right Controls: Zoom & Radar Switcher */}
                  <div className="tactical-map-controls">
                    <button
                      type="button"
                      className={`tactical-map-btn ${isRadarMode ? 'active' : ''}`}
                      onClick={() => setIsRadarMode(!isRadarMode)}
                      title="Toggle Tactical Radar View"
                    >
                      {isRadarMode ? '● RADAR HUD' : '○ SATELLITE'}
                    </button>
                    <button
                      type="button"
                      className="tactical-map-btn"
                      onClick={handleZoomIn}
                      title="Zoom In"
                    >
                      +
                    </button>
                    <button
                      type="button"
                      className="tactical-map-btn"
                      onClick={handleZoomOut}
                      title="Zoom Out"
                    >
                      -
                    </button>
                    {zoomLevel > 1 && (
                      <button
                        type="button"
                        className="tactical-map-btn"
                        onClick={handleResetZoom}
                        title="Reset Zoom"
                      >
                        RESET
                      </button>
                    )}
                  </div>
                </div>

                {/* Active Zone Detail Dossier Card (Integrated Directly Beneath Physical Map) */}
                <div style={{
                  background: 'var(--bg-surface)',
                  border: `1px solid ${activePin.color}40`,
                  borderRadius: 'var(--radius-lg)',
                  padding: '32px',
                  boxShadow: `0 8px 30px rgba(0, 0, 0, 0.4), 0 0 20px ${activePin.glow}20`,
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                  {/* Subtle Neon Top Accent Bar */}
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '3px',
                    background: `linear-gradient(90deg, ${activePin.color}, transparent)`
                  }} />

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '12px', marginBottom: '12px' }}>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                      <span className="badge-category news">{currentZone.district}</span>
                      <span style={{
                        fontSize: '0.75rem',
                        fontFamily: 'var(--font-mono)',
                        color: activePin.color,
                        background: 'var(--bg-elevated)',
                        padding: '3px 8px',
                        borderRadius: '4px',
                        border: `1px solid ${activePin.color}40`
                      }}>
                        TARGET LOCKED: {currentZone.id.replace('zone_', '').toUpperCase()}
                      </span>
                    </div>

                    <div style={{ fontSize: '0.85rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                      SECTOR #{currentZone.x} · {currentZone.y}
                    </div>
                  </div>

                  <h3 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '12px' }}>
                    {currentZone.name}
                  </h3>

                  <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: '24px' }}>
                    {currentZone.lore}
                  </p>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '24px' }}>
                    <div style={{ background: 'var(--bg-elevated)', padding: '16px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)' }}>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase' }}>
                        SECURITY PATROL
                      </div>
                      <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)', marginTop: '4px' }}>
                        {currentZone.securityLevel}
                      </div>
                    </div>

                    <div style={{ background: 'var(--bg-elevated)', padding: '16px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)' }}>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase' }}>
                        ENTERABLE STRUCTURES
                      </div>
                      <div style={{ fontSize: '0.95rem', fontWeight: 700, color: activePin.color, marginTop: '4px' }}>
                        {currentZone.enterableStructures}
                      </div>
                    </div>

                    <div style={{ background: 'var(--bg-elevated)', padding: '16px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)', gridColumn: '1 / -1' }}>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase' }}>
                        TRANSIT & ACCESS
                      </div>
                      <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)', marginTop: '4px' }}>
                        {currentZone.transit}
                      </div>
                    </div>
                  </div>

                  <div style={{
                    padding: '16px 20px',
                    borderRadius: 'var(--radius-md)',
                    background: 'var(--bg-base)',
                    border: '1px dashed var(--border-default)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '12px',
                    fontSize: '0.9rem',
                    color: 'var(--text-muted)'
                  }}>
                    <div>
                      Cartographic coordinates: <strong style={{ color: activePin.color }}>X: {currentZone.x}°, Y: {currentZone.y}°</strong> · Verified via Rockstar Trailer 1 telemetry.
                    </div>

                    <button
                      type="button"
                      onClick={() => setZoomLevel(1.5)}
                      className="btn btn-ghost"
                      style={{ padding: '6px 14px', fontSize: '0.8rem' }}
                    >
                      Focus Target on Map ⌖
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
