/**
 * GTA 6 DESK - RELATIONAL ARMORY & VEHICLE FLEET DATABASE
 * Full comparative specs, filters, and penetration metrics.
 */

class DatabaseExplorerEngine {
  constructor() {
    this.currentTab = 'armory'; // 'armory' or 'vehicles'
    this.weapons = window.GTA6_DATA ? window.GTA6_DATA.weapons : [];
    this.vehicles = window.GTA6_DATA ? window.GTA6_DATA.vehicles : [];
    this.activeFilter = 'all';

    this.gridEl = document.getElementById('catalog-cards-grid');
    this.tabArmoryBtn = document.getElementById('tab-btn-armory');
    this.tabVehiclesBtn = document.getElementById('tab-btn-vehicles');
    this.subfiltersEl = document.getElementById('catalog-subfilters');

    this.init();
  }

  init() {
    if (this.tabArmoryBtn) {
      this.tabArmoryBtn.addEventListener('click', () => {
        this.switchTab('armory');
      });
    }

    if (this.tabVehiclesBtn) {
      this.tabVehiclesBtn.addEventListener('click', () => {
        this.switchTab('vehicles');
      });
    }

    this.renderSubfilters();
    this.renderCatalog();
  }

  switchTab(tab) {
    this.currentTab = tab;
    this.activeFilter = 'all';

    if (this.tabArmoryBtn) this.tabArmoryBtn.classList.toggle('active', tab === 'armory');
    if (this.tabVehiclesBtn) this.tabVehiclesBtn.classList.toggle('active', tab === 'vehicles');

    this.renderSubfilters();
    this.renderCatalog();
  }

  renderSubfilters() {
    if (!this.subfiltersEl) return;
    this.subfiltersEl.innerHTML = '';

    const categories = this.currentTab === 'armory'
      ? ['all', 'Assault Rifles', 'Sidearms', 'Shotguns', 'Heavy Ordnance']
      : ['all', 'Supercars & Exotics', 'Muscle', 'Marine & Yachts'];

    categories.forEach(cat => {
      const pill = document.createElement('button');
      pill.className = `filter-pill ${this.activeFilter === cat ? 'active' : ''}`;
      pill.textContent = cat === 'all' ? 'All Assets' : cat;

      pill.addEventListener('click', () => {
        this.activeFilter = cat;
        this.renderSubfilters();
        this.renderCatalog();
      });

      this.subfiltersEl.appendChild(pill);
    });
  }

  renderCatalog() {
    if (!this.gridEl) return;
    this.gridEl.innerHTML = '';

    if (this.currentTab === 'armory') {
      const list = this.activeFilter === 'all'
        ? this.weapons
        : this.weapons.filter(w => w.category === this.activeFilter);

      list.forEach(w => {
        const card = document.createElement('div');
        card.className = 'catalog-card hud-bracket';

        card.innerHTML = `
          ${w.image ? `
          <div class="weapon-image-wrap" style="position: relative; width: 100%; height: 180px; overflow: hidden; border-radius: var(--radius-sm); margin-bottom: 12px; background: #070B14; border: 1px solid rgba(255,255,255,0.06);">
            <img src="${w.image}" alt="${w.name}" style="width: 100%; height: 100%; object-fit: cover;">
            <span style="position: absolute; bottom: 8px; right: 8px; font-family: var(--font-mono); font-size: 0.72rem; background: rgba(6, 9, 15, 0.85); border: 1px solid var(--border-subtle); padding: 2px 6px; border-radius: 2px; color: var(--accent-cyan);">${w.realWorldCounterpart || 'Tactical Spec'}</span>
          </div>` : ''}

          <div class="catalog-card-header">
            <div>
              <span class="item-class-badge">${w.category}</span>
              <h3 class="item-title" style="margin-top: 4px;">${w.name}</h3>
              <span class="item-subtitle">${w.caliber} · ${w.fireRate}</span>
            </div>
          </div>

          <p style="font-size: 0.825rem; color: var(--text-secondary); margin-bottom: 8px;">${w.lore}</p>

          <div style="font-family: var(--font-mono); font-size: 0.85rem; color: var(--text-amber); background: rgba(255, 184, 0, 0.08); padding: 4px 8px; border-radius: 2px; margin-bottom: 10px;">
            Inventory Mode: ${w.inventoryMode}
          </div>

          <div class="stat-meters-list">
            <div class="stat-meter-row">
              <span class="stat-meter-name">Damage</span>
              <div class="stat-meter-bar"><div class="stat-meter-fill" style="width: ${w.damage}%; background: var(--accent-rose);"></div></div>
              <span class="stat-meter-val num">${w.damage}</span>
            </div>
            <div class="stat-meter-row">
              <span class="stat-meter-name">Accuracy</span>
              <div class="stat-meter-bar"><div class="stat-meter-fill" style="width: ${w.accuracy}%; background: var(--accent-cyan);"></div></div>
              <span class="stat-meter-val num">${w.accuracy}</span>
            </div>
            <div class="stat-meter-row">
              <span class="stat-meter-name">Effective Range</span>
              <div class="stat-meter-bar"><div class="stat-meter-fill" style="width: ${w.range}%; background: var(--accent-amber);"></div></div>
              <span class="stat-meter-val num">${w.range}</span>
            </div>
            <div class="stat-meter-row">
              <span class="stat-meter-name">Handling</span>
              <div class="stat-meter-bar"><div class="stat-meter-fill" style="width: ${w.handling}%; background: var(--accent-green);"></div></div>
              <span class="stat-meter-val num">${w.handling}</span>
            </div>
          </div>

          <div class="pen-matrix-grid">
            <div class="pen-cell">
              <span class="pen-label">DRYWALL</span>
              <span class="pen-value">${w.penetration.drywall}</span>
            </div>
            <div class="pen-cell">
              <span class="pen-label">SHEET METAL</span>
              <span class="pen-value">${w.penetration.sheetMetal}</span>
            </div>
            <div class="pen-cell">
              <span class="pen-label">AUTO GLASS</span>
              <span class="pen-value">${w.penetration.glass}</span>
            </div>
          </div>
        `;

        this.gridEl.appendChild(card);
      });
    } else {
      // Vehicles
      const list = this.activeFilter === 'all'
        ? this.vehicles
        : this.vehicles.filter(v => v.class === this.activeFilter);

      list.forEach(v => {
        const card = document.createElement('div');
        card.className = 'catalog-card hud-bracket';

        card.innerHTML = `
          <div class="catalog-card-header">
            <div>
              <span class="item-class-badge" style="background: rgba(255, 42, 133, 0.1); color: var(--text-rose); border-color: rgba(255, 42, 133, 0.3);">${v.class}</span>
              <h3 class="item-title" style="margin-top: 4px;">${v.name}</h3>
              <span class="item-subtitle">${v.drivetrain}</span>
            </div>
          </div>

          <div style="font-family: var(--font-mono); font-size: 0.85rem; color: var(--text-cyan); background: rgba(0, 240, 255, 0.08); padding: 4px 8px; border-radius: 2px; margin-bottom: 8px;">
            Real-World Basis: ${v.realWorldCounterpart}
          </div>

          <p style="font-size: 0.825rem; color: var(--text-secondary); margin-bottom: 12px;">${v.lore}</p>

          <div class="stat-meters-list">
            <div class="stat-meter-row">
              <span class="stat-meter-name">Top Speed</span>
              <span class="stat-meter-val num" style="color: var(--accent-cyan); width: auto; font-weight: 700;">${v.topSpeed}</span>
            </div>
            <div class="stat-meter-row">
              <span class="stat-meter-name">0-60 MPH</span>
              <span class="stat-meter-val num" style="color: var(--accent-rose); width: auto; font-weight: 700;">${v.zeroToSixty}</span>
            </div>
            <div class="stat-meter-row">
              <span class="stat-meter-name">Handling Rating</span>
              <div class="stat-meter-bar"><div class="stat-meter-fill" style="width: ${v.handling}%; background: var(--accent-amber);"></div></div>
              <span class="stat-meter-val num">${v.handling}</span>
            </div>
          </div>

          <div style="margin-top: auto; padding: 8px; background: #080D17; border-radius: var(--radius-sm); font-family: var(--font-mono); font-size: 0.68rem; display: flex; justify-content: space-between;">
            <span style="color: var(--text-dim);">Chassis Integrity:</span>
            <span style="color: var(--text-green); font-weight: 600;">${v.deformableBody}</span>
          </div>
        `;

        this.gridEl.appendChild(card);
      });
    }
  }
}

window.DatabaseExplorerEngine = DatabaseExplorerEngine;
