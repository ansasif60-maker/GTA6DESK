/**
 * GTA 6 DESK - ENTERPRISE PROGRAMMATIC YIELD ENGINE & FLOOR PRICING TELEMETRY
 * Built in accordance with Section 4 of the Flagship Blueprint.
 */

class ProgrammaticYieldHud {
  constructor() {
    this.basePrice = 1.50; // Base Floor Price
    this.geoMultiplier = 1.80; // US / CA / UK (Tier 1)
    this.deviceMultiplier = 1.30; // Desktop
    this.contentMultiplier = 2.20; // Financial Desk & Hardware Benchmarks ($54+ RPM tier)
    this.viewabilityMultiplier = 1.40; // >80% historical viewability

    this.floorPriceEl = document.getElementById('hud-floor-price');
    this.targetRpmEl = document.getElementById('hud-target-rpm');

    this.init();
  }

  init() {
    this.calculateFloor();
    this.bindGeoSelector();
  }

  calculateFloor() {
    const floor = this.basePrice * this.geoMultiplier * this.deviceMultiplier * this.contentMultiplier * this.viewabilityMultiplier;
    const estimatedRpm = floor * 9.85; // Modeled programmatic yield density

    if (this.floorPriceEl) {
      this.floorPriceEl.textContent = `$${floor.toFixed(2)}`;
    }
    if (this.targetRpmEl) {
      this.targetRpmEl.textContent = `$${estimatedRpm.toFixed(2)}`;
    }
  }

  bindGeoSelector() {
    const geoSelect = document.getElementById('hud-geo-select');
    if (geoSelect) {
      geoSelect.addEventListener('change', (e) => {
        this.geoMultiplier = Number(e.target.value);
        this.calculateFloor();
      });
    }

    const contentSelect = document.getElementById('hud-content-select');
    if (contentSelect) {
      contentSelect.addEventListener('change', (e) => {
        this.contentMultiplier = Number(e.target.value);
        this.calculateFloor();
      });
    }
  }
}

window.ProgrammaticYieldHud = ProgrammaticYieldHud;
