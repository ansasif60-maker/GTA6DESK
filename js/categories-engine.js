/**
 * GTA 6 DESK - TOP INTELLIGENCE CATEGORIES & HUBS ENGINE
 * Dynamically renders and filters the 12 top-view categories benchmarked
 * from the world's leading GTA and gaming authority websites.
 */

class TopCategoriesEngine {
  constructor() {
    this.categories = window.GTA6_DATA ? window.GTA6_DATA.topCategories : [];
    this.activeFilter = 'all';
    this.containerEl = document.getElementById('top-categories-grid');
    this.filterBarEl = document.getElementById('category-filter-bar');

    if (this.containerEl) {
      this.init();
    }
  }

  init() {
    this.renderFilterBar();
    this.renderCards();
  }

  renderFilterBar() {
    if (!this.filterBarEl) return;
    this.filterBarEl.innerHTML = '';

    const filterGroups = [
      { key: 'all', label: 'All Top Hubs', count: this.categories.length },
      { key: 'Databases & Fleets', label: 'Databases & Fleets', count: this.categories.filter(c => c.group === 'Databases & Fleets').length },
      { key: 'World & Exploration', label: 'World & Lore', count: this.categories.filter(c => c.group === 'World & Exploration' || c.group === 'World & Culture').length },
      { key: 'Simulation Systems', label: 'Gameplay Systems', count: this.categories.filter(c => c.group === 'Simulation Systems' || c.group === 'Combat & Mechanics').length },
      { key: 'Commercial & Launch', label: 'Launch & Finance', count: this.categories.filter(c => c.group === 'Commercial & Launch' || c.group === 'Guides & Strategy').length }
    ];

    filterGroups.forEach(group => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = `category-filter-btn ${this.activeFilter === group.key ? 'active' : ''}`;
      btn.innerHTML = `<span>${group.label}</span> <span style="font-family: var(--font-mono); font-size: 0.75rem; opacity: 0.75;">(${group.count})</span>`;

      btn.addEventListener('click', () => {
        this.activeFilter = group.key;
        this.renderFilterBar();
        this.renderCards();
      });

      this.filterBarEl.appendChild(btn);
    });
  }

  renderCards() {
    if (!this.containerEl) return;
    this.containerEl.innerHTML = '';

    let list = this.categories;
    if (this.activeFilter === 'Databases & Fleets') {
      list = this.categories.filter(c => c.group === 'Databases & Fleets');
    } else if (this.activeFilter === 'World & Exploration') {
      list = this.categories.filter(c => c.group === 'World & Exploration' || c.group === 'World & Culture');
    } else if (this.activeFilter === 'Simulation Systems') {
      list = this.categories.filter(c => c.group === 'Simulation Systems' || c.group === 'Combat & Mechanics');
    } else if (this.activeFilter === 'Commercial & Launch') {
      list = this.categories.filter(c => c.group === 'Commercial & Launch' || c.group === 'Guides & Strategy');
    }

    list.forEach(cat => {
      const card = document.createElement('a');
      card.href = cat.link;
      card.className = `category-card ${cat.badgeColor}`;

      const tagsHtml = cat.tags.map(t => `<span class="cat-tag-pill">${t}</span>`).join('');

      card.innerHTML = `
        <div class="category-card-top">
          <div class="cat-icon-wrap">
            ${cat.iconSvg}
          </div>
          <div style="display: flex; flex-direction: column; align-items: flex-end; gap: 4px;">
            <span class="cat-metric-badge ${cat.badgeColor}">${cat.trafficBadge}</span>
            <span style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-cyan); font-weight: 700;">${cat.monthlyViews}</span>
          </div>
        </div>

        <div>
          <div style="display: flex; align-items: center; margin-bottom: 4px;">
            <span class="cat-rank-num">#${String(cat.rank).padStart(2, '0')}</span>
            <h3 class="category-card-title">${cat.name}</h3>
          </div>
          <div class="category-card-tagline">${cat.tagline}</div>
        </div>

        <p class="category-card-desc">${cat.description}</p>

        <div class="cat-sources-row">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          <span>${cat.sourceBench}</span>
        </div>

        <div class="category-tags-list">
          ${tagsHtml}
        </div>

        <div class="cat-card-action">
          <span>Explore Category Hub</span>
          <span style="font-size: 1.1rem; line-height: 1;">→</span>
        </div>
      `;

      this.containerEl.appendChild(card);
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.topCategoriesEngine = new TopCategoriesEngine();
});
