/**
 * GTA 6 DESK - MASTER ORCHESTRATOR & APPLICATION ENTRY
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Real-Time Tape Counter (Viewfinder Discipline)
  initTapeCounter();

  // 2. Initialize Market Ticker Engine
  if (window.MarketTickerEngine) {
    window.marketTicker = new window.MarketTickerEngine();
  }

  // 3. Initialize Institutional ROI Calculator
  if (window.RoiCalculatorEngine) {
    window.roiCalculator = new window.RoiCalculatorEngine();
  }

  // 4. Initialize Interactive Map Explorer
  if (window.LeonidaMapExplorer) {
    window.mapExplorer = new window.LeonidaMapExplorer();
  }

  // 5. Initialize Relational Database Explorer
  if (window.DatabaseExplorerEngine) {
    window.dbExplorer = new window.DatabaseExplorerEngine();
  }

  // 6. Initialize Semantic Newsroom & 40-Article Graph
  if (window.SemanticNewsroomEngine) {
    window.newsroomEngine = new window.SemanticNewsroomEngine();
  }

  // 7. Initialize Programmatic Yield HUD
  if (window.ProgrammaticYieldHud) {
    window.yieldHud = new window.ProgrammaticYieldHud();
  }

  // 8. Render SEC Filings in Financial Desk
  renderSecFilings();

  // 9. Bind Global Keyboard Shortcuts
  bindKeyboardShortcuts();

  // 10. Hardware Benchmarking Mode Toggles
  bindBenchmarkToggles();
});

/**
 * Live OSD Tape Counter
 */
function initTapeCounter() {
  const counterEl = document.getElementById('osd-tape-counter');
  if (!counterEl) return;

  let hours = 0;
  let minutes = 24;
  let seconds = 19;
  let frames = 12;

  setInterval(() => {
    frames += 2;
    if (frames >= 30) {
      frames = 0;
      seconds++;
      if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
          minutes = 0;
          hours++;
        }
      }
    }

    const pad = (n) => String(n).padStart(2, '0');
    counterEl.textContent = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}:${pad(frames)}`;
  }, 66); // ~30 fps tick
}

/**
 * Render SEC EDGAR Filings
 */
function renderSecFilings() {
  const listEl = document.getElementById('sec-filings-list');
  if (!listEl || !window.GTA6_DATA) return;

  listEl.innerHTML = '';
  window.GTA6_DATA.secFilings.forEach(item => {
    const row = document.createElement('div');
    row.className = 'sec-filing-item';

    const is8k = item.form.includes('8-K');
    row.innerHTML = `
      <div class="sec-filing-top">
        <span class="sec-badge ${is8k ? 'form-8k' : 'form-10q'}">SEC ${item.form}</span>
        <span class="sec-filing-date">${item.date}</span>
      </div>
      <div class="sec-filing-title">${item.title}</div>
      <div style="font-size: 0.75rem; color: var(--text-dim); line-height: 1.4;">${item.summary}</div>
      <div style="font-family: var(--font-mono); font-size: 0.65rem; color: var(--text-cyan); margin-top: 2px;">
        CIK 0000946581 · ${item.accessionNumber}
      </div>
    `;

    listEl.appendChild(row);
  });
}

/**
 * Global Keyboard Shortcuts
 */
function bindKeyboardShortcuts() {
  document.addEventListener('keydown', (e) => {
    // Press '/' to focus search input
    if (e.key === '/' && document.activeElement.tagName !== 'INPUT') {
      e.preventDefault();
      const search = document.getElementById('articles-search-input');
      if (search) {
        search.scrollIntoView({ behavior: 'smooth', block: 'center' });
        search.focus();
      }
    }
  });
}

/**
 * Interactive Hardware Benchmark Mode Toggles
 */
function bindBenchmarkToggles() {
  const upscalerSelect = document.getElementById('benchmark-upscaler-select');
  const upscalerResultEl = document.getElementById('benchmark-upscaler-result');

  if (upscalerSelect && upscalerResultEl) {
    upscalerSelect.addEventListener('change', (e) => {
      const val = e.target.value;
      if (val === 'dlss35') {
        upscalerResultEl.textContent = '108 FPS (4K Ultra + Ray Reconstruction & Frame Gen)';
        upscalerResultEl.style.color = 'var(--accent-cyan)';
      } else if (val === 'fsr3') {
        upscalerResultEl.textContent = '94 FPS (4K Ultra + FSR Fluid Motion Frames)';
        upscalerResultEl.style.color = 'var(--accent-rose)';
      } else {
        upscalerResultEl.textContent = '58 FPS (Native 4K Raster + Hardware RT Base)';
        upscalerResultEl.style.color = 'var(--accent-amber)';
      }
    });
  }
}
