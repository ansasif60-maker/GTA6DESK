/**
 * GTA 6 DESK - WALL STREET FINANCIAL TICKER & SEC INTELLIGENCE
 */

class MarketTickerEngine {
  constructor() {
    this.symbol = 'TTWO';
    this.exchange = 'NASDAQ';
    this.basePrice = 158.42;
    this.currentPrice = 158.42;
    this.openPrice = 154.80;
    this.dayHigh = 161.20;
    this.dayLow = 154.10;
    this.volume = '3.84M';
    this.marketCap = '$27.42B';
    this.history = [154.8, 155.2, 156.0, 155.8, 157.1, 156.9, 158.0, 157.6, 158.42];

    this.headerPriceEl = document.getElementById('header-ticker-price');
    this.headerDeltaEl = document.getElementById('header-ticker-delta');
    this.deskPriceEl = document.getElementById('desk-ticker-price');
    this.deskDeltaEl = document.getElementById('desk-ticker-delta');
    this.canvasEl = document.getElementById('ticker-sparkline');

    this.init();
  }

  init() {
    this.updateDisplay();
    this.drawSparkline();

    // Simulate subtle real-time market fluctuations every 3.5 seconds
    setInterval(() => {
      this.tick();
    }, 3500);
  }

  tick() {
    // Generate realistic micro-tick (-0.45 to +0.55)
    const delta = (Math.random() * 0.95 - 0.42);
    this.currentPrice = Math.max(140, Number((this.currentPrice + delta).toFixed(2)));

    if (this.currentPrice > this.dayHigh) this.dayHigh = this.currentPrice;
    if (this.currentPrice < this.dayLow) this.dayLow = this.currentPrice;

    this.history.push(this.currentPrice);
    if (this.history.length > 25) this.history.shift();

    this.updateDisplay(delta >= 0);
    this.drawSparkline();
  }

  updateDisplay(isPositiveTick = true) {
    const change = this.currentPrice - this.openPrice;
    const changePct = ((change / this.openPrice) * 100).toFixed(2);
    const sign = change >= 0 ? '+' : '';
    const isUp = change >= 0;

    const priceText = `$${this.currentPrice.toFixed(2)}`;
    const deltaText = `${sign}${change.toFixed(2)} (${sign}${changePct}%)`;

    if (this.headerPriceEl) {
      this.headerPriceEl.textContent = priceText;
    }
    if (this.headerDeltaEl) {
      this.headerDeltaEl.textContent = deltaText;
      this.headerDeltaEl.className = `ticker-delta ${isUp ? 'pos' : 'neg'}`;
    }

    if (this.deskPriceEl) {
      this.deskPriceEl.textContent = priceText;
    }
    if (this.deskDeltaEl) {
      this.deskDeltaEl.textContent = deltaText;
      this.deskDeltaEl.className = `stat-delta num ${isUp ? 'pos' : 'neg'}`;
    }

    const highEl = document.getElementById('desk-day-high');
    const lowEl = document.getElementById('desk-day-low');
    if (highEl) highEl.textContent = `$${this.dayHigh.toFixed(2)}`;
    if (lowEl) lowEl.textContent = `$${this.dayLow.toFixed(2)}`;
  }

  drawSparkline() {
    if (!this.canvasEl) return;
    const ctx = this.canvasEl.getContext('2d');
    const w = this.canvasEl.width = this.canvasEl.offsetWidth * (window.devicePixelRatio || 1);
    const h = this.canvasEl.height = this.canvasEl.offsetHeight * (window.devicePixelRatio || 1);

    ctx.clearRect(0, 0, w, h);

    if (this.history.length < 2) return;

    const min = Math.min(...this.history) - 0.5;
    const max = Math.max(...this.history) + 0.5;
    const range = max - min || 1;

    const step = w / (this.history.length - 1);

    // Gradient fill under the sparkline
    const gradient = ctx.createLinearGradient(0, 0, 0, h);
    gradient.addColorStop(0, 'rgba(0, 240, 255, 0.35)');
    gradient.addColorStop(1, 'rgba(0, 240, 255, 0.0)');

    ctx.beginPath();
    this.history.forEach((val, i) => {
      const x = i * step;
      const y = h - ((val - min) / range) * (h - 16) - 8;
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    });

    // Fill path
    ctx.lineTo(w, h);
    ctx.lineTo(0, h);
    ctx.closePath();
    ctx.fillStyle = gradient;
    ctx.fill();

    // Stroke line
    ctx.beginPath();
    this.history.forEach((val, i) => {
      const x = i * step;
      const y = h - ((val - min) / range) * (h - 16) - 8;
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    });
    ctx.strokeStyle = '#00F0FF';
    ctx.lineWidth = 2 * (window.devicePixelRatio || 1);
    ctx.stroke();
  }
}

window.MarketTickerEngine = MarketTickerEngine;
