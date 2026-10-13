/**
 * GTA 6 DESK - INSTITUTIONAL INVESTOR REVENUE & NET BOOKINGS ROI ENGINE
 * Built per Section 6 of the Blueprint for financial modeling of GTA VI launch.
 */

class RoiCalculatorEngine {
  constructor() {
    this.unitSalesMillions = 38;
    this.avgPrice = 70;
    this.operatingMarginPct = 45;
    this.liveServicePct = 25; // GTA Online 2 additional consumer spend in year 1

    this.unitInput = document.getElementById('calc-unit-sales');
    this.priceInput = document.getElementById('calc-avg-price');
    this.marginInput = document.getElementById('calc-operating-margin');
    this.liveInput = document.getElementById('calc-live-service');

    this.unitValEl = document.getElementById('calc-unit-val');
    this.priceValEl = document.getElementById('calc-price-val');
    this.marginValEl = document.getElementById('calc-margin-val');
    this.liveValEl = document.getElementById('calc-live-val');

    this.grossRevenueEl = document.getElementById('calc-gross-revenue');
    this.netBookingsEl = document.getElementById('calc-net-bookings');
    this.operatingProfitEl = document.getElementById('calc-operating-profit');
    this.targetCoverageEl = document.getElementById('calc-target-coverage');

    this.bindEvents();
    this.calculate();
  }

  bindEvents() {
    if (this.unitInput) {
      this.unitInput.addEventListener('input', (e) => {
        this.unitSalesMillions = Number(e.target.value);
        this.calculate();
      });
    }

    if (this.priceInput) {
      this.priceInput.addEventListener('input', (e) => {
        this.avgPrice = Number(e.target.value);
        this.calculate();
      });
    }

    if (this.marginInput) {
      this.marginInput.addEventListener('input', (e) => {
        this.operatingMarginPct = Number(e.target.value);
        this.calculate();
      });
    }

    if (this.liveInput) {
      this.liveInput.addEventListener('input', (e) => {
        this.liveServicePct = Number(e.target.value);
        this.calculate();
      });
    }

    // Preset buttons
    const btnCons = document.getElementById('preset-conservative');
    const btnBase = document.getElementById('preset-base');
    const btnBull = document.getElementById('preset-bull');

    if (btnCons) {
      btnCons.addEventListener('click', () => {
        this.setPreset(25, 70, 40, 20);
      });
    }
    if (btnBase) {
      btnBase.addEventListener('click', () => {
        this.setPreset(38, 70, 45, 25);
      });
    }
    if (btnBull) {
      btnBull.addEventListener('click', () => {
        this.setPreset(55, 80, 52, 35);
      });
    }
  }

  setPreset(units, price, margin, live) {
    this.unitSalesMillions = units;
    this.avgPrice = price;
    this.operatingMarginPct = margin;
    this.liveServicePct = live;

    if (this.unitInput) this.unitInput.value = units;
    if (this.priceInput) this.priceInput.value = price;
    if (this.marginInput) this.marginInput.value = margin;
    if (this.liveInput) this.liveInput.value = live;

    this.calculate();
  }

  calculate() {
    // Labels
    if (this.unitValEl) this.unitValEl.textContent = `${this.unitSalesMillions}M Units`;
    if (this.priceValEl) this.priceValEl.textContent = `$${this.avgPrice} USD`;
    if (this.marginValEl) this.marginValEl.textContent = `${this.operatingMarginPct}%`;
    if (this.liveValEl) this.liveValEl.textContent = `+${this.liveServicePct}% Spend`;

    // Mathematical calculations
    const grossRetail = (this.unitSalesMillions * 1000000) * this.avgPrice;
    const liveServiceAddon = grossRetail * (this.liveServicePct / 100);
    const totalNetBookings = grossRetail + liveServiceAddon;
    const operatingProfit = (grossRetail * (this.operatingMarginPct / 100)) + (liveServiceAddon * 0.70);

    const grossBillion = (grossRetail / 1000000000).toFixed(2);
    const netBookingsBillion = (totalNetBookings / 1000000000).toFixed(2);
    const profitBillion = (operatingProfit / 1000000000).toFixed(2);

    // Wall Street Take-Two $8.0B Target Coverage
    const guidanceTarget = 8.0;
    const targetPct = ((totalNetBookings / 1000000000 / guidanceTarget) * 100).toFixed(0);

    if (this.grossRevenueEl) this.grossRevenueEl.textContent = `$${grossBillion}B`;
    if (this.netBookingsEl) this.netBookingsEl.textContent = `$${netBookingsBillion}B`;
    if (this.operatingProfitEl) this.operatingProfitEl.textContent = `$${profitBillion}B`;
    if (this.targetCoverageEl) this.targetCoverageEl.textContent = `${targetPct}% of $8B Guidance`;
  }
}

window.RoiCalculatorEngine = RoiCalculatorEngine;
