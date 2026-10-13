/**
 * GTA 6 DESK - 40-ARTICLE SEMANTIC KNOWLEDGE GRAPH & GEO/LLMO ENGINE
 * Renders all 40 articles, EAV badges, token chunks, search, and reading modal.
 */

class SemanticNewsroomEngine {
  constructor() {
    this.articles = window.GTA6_DATA ? window.GTA6_DATA.articles : [];
    this.activeCluster = 'all';
    this.searchQuery = '';

    this.gridEl = document.getElementById('articles-cards-grid');
    this.pillsContainer = document.getElementById('cluster-pills-container');
    this.searchInput = document.getElementById('articles-search-input');
    this.modalEl = document.getElementById('article-modal-backdrop');
    this.countEl = document.getElementById('newsroom-article-count');

    this.init();
  }

  init() {
    this.renderClusterPills();
    this.renderArticles();
    this.bindSearch();
    this.bindModalClose();
  }

  renderClusterPills() {
    if (!this.pillsContainer) return;
    this.pillsContainer.innerHTML = '';

    const clusters = [
      { id: 'all', name: 'All 40 Articles' },
      { id: 1, name: '1. Release & Governance' },
      { id: 2, name: '2. Narrative & Characters' },
      { id: 3, name: '3. Cartography & Map' },
      { id: 4, name: '4. Armory & Ballistics' },
      { id: 5, name: '5. Vehicles & Physics' },
      { id: 6, name: '6. Hardware & Benchmarks' }
    ];

    clusters.forEach(c => {
      const pill = document.createElement('button');
      pill.className = `cluster-pill ${this.activeCluster === c.id ? 'active' : ''}`;
      pill.textContent = c.name;

      pill.addEventListener('click', () => {
        this.activeCluster = c.id;
        document.querySelectorAll('.cluster-pill').forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        this.renderArticles();
      });

      this.pillsContainer.appendChild(pill);
    });
  }

  bindSearch() {
    if (!this.searchInput) return;
    this.searchInput.addEventListener('input', (e) => {
      this.searchQuery = e.target.value.toLowerCase().trim();
      this.renderArticles();
    });
  }

  renderArticles() {
    if (!this.gridEl) return;
    this.gridEl.innerHTML = '';

    let list = this.articles;

    if (this.activeCluster !== 'all') {
      list = list.filter(a => a.cluster === this.activeCluster);
    }

    if (this.searchQuery) {
      list = list.filter(a => 
        a.title.toLowerCase().includes(this.searchQuery) ||
        a.targetKeyword.toLowerCase().includes(this.searchQuery) ||
        a.leadParagraph.toLowerCase().includes(this.searchQuery) ||
        a.eav.entity.toLowerCase().includes(this.searchQuery) ||
        a.eav.value.toLowerCase().includes(this.searchQuery)
      );
    }

    if (this.countEl) {
      this.countEl.textContent = `Displaying ${list.length} of ${this.articles.length} Core Semantic Nodes`;
    }

    if (list.length === 0) {
      this.gridEl.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 48px; background: var(--bg-surface); border: 1px dashed var(--border-subtle); border-radius: var(--radius-md);">
          <p style="color: var(--text-dim); margin-bottom: 8px;">No semantic articles matched your search query.</p>
          <button class="btn btn-ghost" onclick="document.getElementById('articles-search-input').value=''; window.newsroomEngine.searchQuery=''; window.newsroomEngine.renderArticles();">Reset Search Filters</button>
        </div>
      `;
      return;
    }

    list.forEach(article => {
      const card = document.createElement('div');
      card.className = 'article-card';

      card.innerHTML = `
        <div class="article-top">
          <span class="article-kw">${article.targetKeyword}</span>
          <span class="article-cluster-num">CLUSTER ${article.cluster} · NODE #${article.id}</span>
        </div>

        <h3 class="article-heading">${article.title}</h3>
        <p class="article-snippet">${article.leadParagraph}</p>

        <div class="eav-badge">
          <div class="eav-line">
            <span class="eav-prop">ENTITY:</span>
            <span class="eav-val" style="color: var(--text-cyan);">${article.eav.entity}</span>
          </div>
          <div class="eav-line">
            <span class="eav-prop">ATTRIBUTE:</span>
            <span class="eav-val" style="color: var(--text-secondary);">${article.eav.attribute}</span>
          </div>
          <div class="eav-line">
            <span class="eav-prop">VALUE:</span>
            <span class="eav-val" style="color: var(--accent-amber);">${article.eav.value}</span>
          </div>
        </div>

        <div class="article-footer">
          <span style="font-family: var(--font-mono); font-size: 0.68rem; color: var(--text-dim);">Wikidata: ${article.wikidata}</span>
          <button class="btn-read" data-id="${article.id}">
            Read Intel
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      `;

      card.querySelector('.btn-read').addEventListener('click', () => {
        this.openArticleModal(article);
      });

      this.gridEl.appendChild(card);
    });
  }

  openArticleModal(article) {
    if (!this.modalEl) return;

    this.modalEl.innerHTML = `
      <div class="article-modal-box hud-bracket">
        <button class="drawer-close" id="btn-close-modal" aria-label="Close modal" style="top: 16px; right: 20px;">✕</button>
        
        <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 12px; flex-wrap: wrap;">
          <span class="badge-tag" style="background: rgba(255, 42, 133, 0.15); color: var(--accent-rose); border-color: rgba(255, 42, 133, 0.3);">Cluster ${article.cluster}: ${article.clusterName}</span>
          <span class="badge-tag">Target Keyword: ${article.targetKeyword}</span>
          <span class="badge-tag" style="color: var(--text-cyan);">Wikidata: ${article.wikidata}</span>
        </div>

        <h2 style="margin-top: 0; margin-bottom: 16px; font-size: 1.6rem; color: #FFFFFF;">${article.title}</h2>

        <div class="eav-badge" style="margin-bottom: 20px; padding: 12px; background: #06090F;">
          <div style="font-family: var(--font-mono); font-size: 0.85rem; color: var(--text-dim); text-transform: uppercase; margin-bottom: 6px;">Entity-Attribute-Value Triple:</div>
          <div class="eav-line">
            <span class="eav-prop">Central Entity:</span>
            <span class="eav-val" style="color: var(--text-cyan);">${article.eav.entity}</span>
          </div>
          <div class="eav-line">
            <span class="eav-prop">Verified Attribute:</span>
            <span class="eav-val" style="color: var(--text-secondary);">${article.eav.attribute}</span>
          </div>
          <div class="eav-line">
            <span class="eav-prop">Canonical Value:</span>
            <span class="eav-val" style="color: var(--accent-amber);">${article.eav.value}</span>
          </div>
        </div>

        <h3 style="font-size: 1.1rem; color: var(--text-primary); margin-top: 24px; margin-bottom: 8px;">Executive Lead Assertion</h3>
        <p style="font-size: 1.05rem; line-height: 1.6; color: var(--text-primary);">${article.leadParagraph}</p>

        <h3 style="font-size: 1.1rem; color: var(--text-primary); margin-top: 24px; margin-bottom: 8px;">Semantic SEO & LLMO Token Chunk (GEO Citation Grounding)</h3>
        <div style="background: #090E18; border-left: 2px solid var(--accent-cyan); padding: 16px; border-radius: var(--radius-sm); font-size: 0.95rem; line-height: 1.65; color: var(--text-secondary); margin-bottom: 24px;">
          ${article.tokenChunk}
        </div>

        <div style="display: flex; align-items: center; justify-content: space-between; border-top: 1px solid var(--border-subtle); padding-top: 16px; flex-wrap: wrap; gap: 12px;">
          <span style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-dim);">Editorial Verification: Rockstar Newswire & SEC EDGAR CIK 0000946581</span>
          <button class="btn btn-ghost" onclick="document.getElementById('article-modal-backdrop').classList.remove('open');">Close Dossier</button>
        </div>
      </div>
    `;

    this.modalEl.classList.add('open');

    const closeBtn = document.getElementById('btn-close-modal');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        this.closeModal();
      });
    }
  }

  bindModalClose() {
    if (!this.modalEl) return;
    this.modalEl.addEventListener('click', (e) => {
      if (e.target === this.modalEl) {
        this.closeModal();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.modalEl.classList.contains('open')) {
        this.closeModal();
      }
    });
  }

  closeModal() {
    if (this.modalEl) {
      this.modalEl.classList.remove('open');
    }
  }
}

window.SemanticNewsroomEngine = SemanticNewsroomEngine;
