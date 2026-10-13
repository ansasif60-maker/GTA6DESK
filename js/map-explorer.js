/**
 * GTA 6 DESK - INTERACTIVE LEONIDA CARTOGRAPHY EXPLORER
 * Handles interactive SVG marker placement, filter toggles, coordinates HUD, and detail drawers.
 */

class LeonidaMapExplorer {
  constructor() {
    this.zones = window.GTA6_DATA ? window.GTA6_DATA.mapZones : [];
    this.activeFilter = 'all';
    this.activeMarkerId = null;

    this.viewportEl = document.getElementById('map-viewport');
    this.markersContainer = document.getElementById('map-markers-container');
    this.drawerEl = document.getElementById('map-detail-drawer');
    this.coordHudEl = document.getElementById('hud-live-coords');

    this.init();
  }

  init() {
    this.renderMarkers();
    this.bindFilters();
    this.bindHoverCoordinates();
  }

  bindFilters() {
    const filterBtns = document.querySelectorAll('.layer-btn');
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.activeFilter = btn.getAttribute('data-filter') || 'all';
        this.renderMarkers();
      });
    });
  }

  bindHoverCoordinates() {
    if (!this.viewportEl || !this.coordHudEl) return;

    this.viewportEl.addEventListener('mousemove', (e) => {
      const rect = this.viewportEl.getBoundingClientRect();
      const xPct = ((e.clientX - rect.left) / rect.width) * 100;
      const yPct = ((e.clientY - rect.top) / rect.height) * 100;

      // Convert to realistic Leonida fictional latitude/longitude
      const lat = (25.5000 + (100 - yPct) * 0.007).toFixed(4);
      const lon = (80.1000 + xPct * 0.009).toFixed(4);

      this.coordHudEl.textContent = `LAT ${lat}° N | LON ${lon}° W [SECTOR ${Math.floor(xPct / 25) + 1}-${Math.floor(yPct / 25) + 1}]`;
    });
  }

  renderMarkers() {
    if (!this.markersContainer) return;
    this.markersContainer.innerHTML = '';

    const filtered = this.activeFilter === 'all' 
      ? this.zones 
      : this.zones.filter(z => z.color === this.activeFilter || z.district.toLowerCase().includes(this.activeFilter));

    filtered.forEach(zone => {
      const marker = document.createElement('div');
      marker.className = 'map-marker';
      marker.style.left = `${zone.x}%`;
      marker.style.top = `${zone.y}%`;
      marker.setAttribute('data-id', zone.id);

      marker.innerHTML = `
        <div class="marker-ping ${zone.color}">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <circle cx="12" cy="12" r="4"></circle>
            <path d="M12 2v4M12 18v4M2 12h4M18 12h4"></path>
          </svg>
        </div>
        <span class="marker-label">${zone.name.split('&')[0]}</span>
      `;

      marker.addEventListener('click', (e) => {
        e.stopPropagation();
        this.openDrawer(zone);
      });

      this.markersContainer.appendChild(marker);
    });
  }

  openDrawer(zone) {
    if (!this.drawerEl) return;
    this.activeMarkerId = zone.id;

    this.drawerEl.innerHTML = `
      <button class="drawer-close" id="btn-close-drawer" aria-label="Close details">✕</button>
      <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px;">
        <span class="sec-badge ${zone.color === 'rose' ? 'form-8k' : 'form-10q'}">${zone.district}</span>
        <span style="font-family: var(--font-mono); font-size: 0.7rem; color: var(--text-dim);">${zone.securityLevel}</span>
      </div>
      <h3 style="margin-top: 0; font-size: 1.15rem; color: var(--text-primary);">${zone.name}</h3>
      <p style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 12px; line-height: 1.5;">${zone.lore}</p>
      
      <div style="background: #06090F; border: 1px solid var(--border-subtle); padding: 8px 12px; border-radius: var(--radius-sm); font-family: var(--font-mono); font-size: 0.75rem; display: flex; flex-direction: column; gap: 4px;">
        <div style="display: flex; justify-content: space-between;">
          <span style="color: var(--text-dim);">Accessible Interiors:</span>
          <span style="color: var(--text-cyan); font-weight: 600;">${zone.enterableStructures}</span>
        </div>
        <div style="display: flex; justify-content: space-between;">
          <span style="color: var(--text-dim);">Public Transit:</span>
          <span style="color: var(--text-amber);">${zone.transit}</span>
        </div>
      </div>
    `;

    this.drawerEl.style.display = 'block';

    const closeBtn = document.getElementById('btn-close-drawer');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        this.closeDrawer();
      });
    }
  }

  closeDrawer() {
    if (this.drawerEl) {
      this.drawerEl.style.display = 'none';
      this.activeMarkerId = null;
    }
  }
}

window.LeonidaMapExplorer = LeonidaMapExplorer;
