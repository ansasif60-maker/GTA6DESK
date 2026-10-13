# GTA 6 Desk (gta6desk.com)

> **Vice City Intelligence Terminal & Institutional Yield Engine**  
> Authoritative Grand Theft Auto VI editorial intelligence journal and high-frequency data terminal.

---

## ⚡ Overview

**GTA 6 Desk** is a dual-architecture web platform combining:
1. **Next.js 15 App Router** edge deployment for high-performance programmatic rendering, instant static regeneration (ISR), and dynamic API routes (`/feed.xml`, `/sitemap.xml`, `/robots.txt`).
2. **Multi-Page Static Semantic HTML5 Suite** engineered for 100% crawlable Answer Engine Optimization (AEO), Generative Engine Optimization (GEO), and zero Cumulative Layout Shift (CLS).

Built to deliver Bloomberg-grade analytics for Take-Two Interactive (`NASDAQ: TTWO`) investors alongside deep gameplay registries, interactive cartography, and community intelligence for Grand Theft Auto VI.

---

## 🚀 Key Features & Modules

- **📊 TTWO Institutional Financial Desk**: Real-time Take-Two Interactive financial tracking, SEC EDGAR integration references, historical Net Bookings analysis, and financial projections.
- **🧮 First-Year Revenue ROI Calculator**: Interactive quantitative modeling tool calculating unit sales, ASP, physical vs. digital margins, platform cuts, and net publisher bookings.
- **🗺️ Interactive Leonida Cartography**: Dynamic coordinates engine with sector filtering (Vice City, Vice Beaches, Leonard County, Port Gellhorn, Ambrosia, Keys).
- **🔫 Armory & Vehicle Fleet Database**: Relational weapons and vehicles inventory with damage, range, fire rate, handling, and customization stats.
- **⏱️ Live Launch Countdown Engine**: Precision countdown console synchronizing release windows with `.ics` calendar generation.
- **🎬 Official 4K Trailer Theater**: Responsive 16:9 cinematic viewer with interactive frame-by-frame telemetry, breakdown intel, and theater mode.
- **⚖️ Fact vs. Rumor Radar**: Filterable intelligence matrix cleanly separating verified disclosures (SEC filings, Rockstar Newswire) from leaks and debunked speculation.
- **📜 Legal & Compliance Suite**: Production-grade compliance pages including About, Contact, Terms of Service, Privacy Policy (IAB TCF 2.2 compliant), and Disclaimer.

---

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router, React 19, TypeScript)
- **Static Core**: Semantic HTML5, Vanilla JavaScript (ES6+ modular modules)
- **Styling**: Vanilla CSS Design System (`design-system.css`, `components.css`) featuring modern CSS custom properties, glassmorphism, responsive telemetry HUD, and Vice City color palette (`#D91656` Rose, `#00F0FF` Cyan, `#06090F` Dark Base).
- **Validation**: Zod schema validation
- **Zero-CLS**: Fixed aspect-ratio ad reservation containers

---

## 📦 Getting Started

### Prerequisites

- **Node.js**: v20+ or v22+ LTS
- **Git**

### Installation

```bash
# Clone the repository
git clone https://github.com/ansasif60-maker/GTA6DESK.git
cd GTA6DESK

# Install dependencies
npm install
```

### Running Locally

#### Option 1: Next.js Production Build (Recommended)
```bash
npm run build
npm run start
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

#### Option 2: Next.js Development Server
```bash
npm run dev
```

#### Option 3: Lightweight Static HTTP Server (PowerShell)
```powershell
powershell -ExecutionPolicy Bypass -File server.ps1
```
Open [http://localhost:8080](http://localhost:8080) in your browser.

---

## 📁 Repository Structure

```text
GTA6DESK/
├── app/                        # Next.js 15 App Router
│   ├── components/             # React UI components (ROI Calculator, Ticker, Ads)
│   ├── feed.xml/               # RSS 2.0 dynamic feed endpoint
│   ├── layout.tsx              # Root HTML/Metadata layout
│   ├── page.tsx                # Terminal home page
│   ├── robots.ts               # Dynamic robots.txt
│   └── sitemap.ts              # Dynamic sitemap index
├── assets/                     # High-resolution optimized visual assets
├── css/                        # Design system & component stylesheets
│   ├── design-system.css       # Design tokens, color palette, typography
│   └── components.css          # HUD, cards, modals, grids, telemetry
├── js/                         # Modular JavaScript application engines
│   ├── app.js                  # Main terminal controller
│   ├── community-radar.js      # Rumor vs. fact verification engine
│   ├── data.js                 # Structured relational databases
│   ├── database-explorer.js    # Weapons & vehicles filtering
│   ├── gta-countdown.js        # Multi-target release countdown
│   ├── map-explorer.js         # Sector cartography interactive viewer
│   ├── roi-calculator.js       # Financial projection mathematical model
│   └── trailer-theater.js      # Frame-by-frame trailer player
├── lib/                        # Shared utility types and Zod schemas
├── public/                     # Static assets served at edge root
├── index.html                  # Static Terminal flagship portal
├── financial.html              # Take-Two financial intelligence desk
├── roi-calculator.html         # First-Year revenue calculator
├── weapons.html                # Armory database portal
├── map.html                    # Interactive Leonida map explorer
├── characters.html             # Protagonist & cast dossier
├── missions.html               # Campaign & mission breakdown
├── news.html                   # Verified newsroom & articles
├── guides.html                 # Complete completionist guide
├── about.html                  # Editorial mission & team
├── contact.html                # Editorial contact form & inquiries
├── disclaimer.html             # Fair use & trademark disclaimer
├── privacy-policy.html         # GDPR / CCPA / IAB TCF 2.2 privacy policy
├── terms-of-service.html       # Terms of service
├── package.json                # Project dependencies and build scripts
├── server.ps1                  # Native PowerShell static HTTP server
└── README.md                   # Project documentation
```

---

## 📄 License & Disclaimer

GTA 6 Desk is an independent journalistic and financial intelligence platform. Grand Theft Auto, GTA VI, Rockstar Games, and Take-Two Interactive are registered trademarks of Take-Two Interactive Software, Inc. All trademarks and registered trademarks are property of their respective owners. Content used under journalistic Fair Use provisions.
