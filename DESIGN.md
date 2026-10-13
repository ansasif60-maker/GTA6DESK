---
name: GTA 6 Desk
description: Vice City Intelligence Terminal & Institutional Yield Engine
colors:
  bg-base: "#06090F"
  bg-darker: "#04060A"
  bg-surface: "#0B111E"
  bg-elevated: "#111A2E"
  bg-panel: "#080D17"
  bg-header: "#070B13"
  accent-rose: "#D91656"
  accent-cyan: "#00F0FF"
  accent-amber: "#FFB800"
  accent-green: "#10B981"
  accent-red: "#EF4444"
  text-primary: "#F8FAFC"
  text-secondary: "#CBD5E1"
  text-muted: "#94A3B8"
  text-dim: "#718096"
typography:
  display:
    fontFamily: "Chivo, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: "clamp(2.35rem, 4.2vw, 3.25rem)"
    fontWeight: 900
    lineHeight: 1.35
  headline:
    fontFamily: "Chivo, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: "clamp(1.75rem, 3vw, 2.35rem)"
    fontWeight: 800
    lineHeight: 1.35
  title:
    fontFamily: "Chivo, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: "clamp(1.35rem, 2vw, 1.65rem)"
    fontWeight: 700
    lineHeight: 1.35
  subheading:
    fontFamily: "Chivo, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: "1.15rem"
    fontWeight: 700
    lineHeight: 1.35
  body:
    fontFamily: "Public Sans, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
  body-sm:
    fontFamily: "Public Sans, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: "0.95rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Share Tech Mono, Consolas, monospace"
    fontSize: "0.85rem"
    fontWeight: 500
    lineHeight: 1.4
  label-sm:
    fontFamily: "Share Tech Mono, Consolas, monospace"
    fontSize: "0.8125rem"
    fontWeight: 500
    lineHeight: 1.4
rounded:
  sm: "4px"
  md: "8px"
  lg: "12px"
spacing:
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "36px"
  "2xl": "52px"
components:
  button-primary:
    backgroundColor: "{colors.accent-rose}"
    textColor: "#FFFFFF"
    rounded: "{rounded.sm}"
    padding: "10px 22px"
  button-cyan:
    backgroundColor: "{colors.accent-cyan}"
    textColor: "{colors.bg-base}"
    rounded: "{rounded.sm}"
    padding: "10px 22px"
  card-surface:
    backgroundColor: "{colors.bg-surface}"
    rounded: "{rounded.md}"
    padding: "24px"
---

# Design System: GTA 6 Desk

## Overview

**Creative North Star: "The Vice City Intelligence Terminal"**

GTA 6 Desk fuses the institutional density of a Bloomberg financial workstation with the nocturnal neon vitality of Vice City. It replaces the loud, ad-cluttered, rumor-mill aesthetic of conventional gaming wikis with a high-trust, data-dense operations desk built for Take-Two Interactive investors, technical analysts, and GTA VI completionists.

The visual language inherits the tactical viewfinder HUD discipline (dealt via Impeccable seed 97340090): crisp corner brackets, tabular telemetry readouts, real-time live tickers, and fixed-dimension zero-CLS layout reservations.

**Key Characteristics:**
- High-contrast dark mode grounded in deep obsidian and midnight (`#06090F`, `#0B111E`).
- Strategic signal accents: Vice City sunset rose (`#D91656`), electric cyan (`#00F0FF`), and palm gold (`#FFB800`).
- Characterful typography pairing aerodynamic display sans (**Chivo**), readable body text (**Public Sans**), and precise monospace telemetry (**Share Tech Mono**).
- Zero Cumulative Layout Shift (CLS) with hardcoded dimensions on all programmatic ad slots.

## Colors

A nocturnal palette where deep dark grounds allow precision cyan and magenta telemetry accents to guide attention without visual noise or gratuitous decoration.

- **Primary Ground (`#06090F`):** Deep obsidian foundation.
- **Surface Layer (`#0B111E`):** Distinct structural card background with crisp 1px borders.
- **Elevated Layer (`#111A2E`):** Telemetry chips, badge containers, and code blocks.
- **Vice Rose (`#D91656`):** High-priority callouts, pre-order badges, and negative delta signals (tested to exceed 4.5:1 contrast against white text).
- **Electric Cyan (`#00F0FF`):** Active markers, interactive toggles, primary CTA buttons, and verified data telemetry.
- **Terminal Amber (`#FFB800`):** Guidance targets, EAV property values, and financial milestones.
- **Matrix Emerald (`#10B981`):** Positive stock ticks and system status verifications.

## Typography

Typography prioritizes rapid scanability, strong hierarchical contrast steps (>= 1.25x ratio between adjacent heading tiers), and tabular numeral stability.

- **Display & Headlines (Chivo):** Heavy, angular, confident character evoking high-performance aerodynamics.
- **Body & Longform (Public Sans):** Neutral, highly legible humanist sans with generous line-height (1.65) and 65-75ch measure.
- **Telemetry & Financial Data (Share Tech Mono):** Monospaced, tabular-numeral precision for live prices, coordinates, and EAV data triples.

## Layout

- **Container:** Maximum width 1440px with responsive clamp padding (`clamp(16px, 3vw, 32px)`).
- **Grid System:** 12-column CSS Grid with 24px default gutters, collapsing to 1-2 columns on tablet and mobile viewports.
- **Rhythm:** Generous vertical separation between sections with more space above headings (52px) than below (16px).

## Elevation & Depth

GTA 6 Desk strictly adheres to clean structural elevation rather than fuzzy colored chromatic halos or ungrounded glows.
- Depth is communicated through tonal layer shifting (`#06090F` base -> `#0B111E` surface -> `#111A2E` elevated elements).
- Crisp 1px borders in low-opacity whites and subtle cyan tints delineate interactive zones.

## Shapes

- Corner radii are tight and disciplined: 4px for buttons, badges, and chips; 8px for cards and viewports.
- Tactical corner brackets (`::before`, `::after` on `.hud-bracket`) frame critical data consoles.

## Components

- **Live GTA 6 Countdown Engine:** Real-time multi-target countdown clock (Target Launch Nov 19, 2026 / FY27 Holiday / Elapsed Since Trailer 1) with millisecond telemetry, .ics calendar export, and synched header status indicators.
- **4K Trailer Theater & Scene Breakdown:** Embedded 4K YouTube player with Cinema Theater mode toggle, interactive frame-by-frame scene seek timeline, and live investigative dossier inspector.
- **Fact vs. Rumor Radar:** Filterable intelligence matrix classifying verified official Rockstar/Take-Two disclosures, plausible production leaks, and debunked community rumors.
- **Community Protagonist Poll:** Interactive real-time opinion engine for protagonist preferences with animated visual progress bars and localStorage persistence.
- **Breaking Intelligence Ticker:** Continuous ambient newsfeed marquee delivering real-time corporate and trailer milestones.
- **First-Year Revenue ROI Engine:** Range sliders with live calculation of gross receipts, net bookings, and operating margins.
- **Wall Street Market Ticker:** Intraday price display with delta percentage and canvas-rendered sparkline.
- **Leonida Cartography Viewport:** High-resolution satellite reconnaissance canvas with interactive coordinate pins and metadata drawer.
- **Relational Armory & Garage Fleet:** Comparative item cards with stat meters and ballistic penetration matrices.
- **Semantic Newsroom:** 40-article searchable directory with EAV inspector badges and token-chunk grounding dossiers.
- **Zero-CLS Ad Slots:** Fixed dimension wrappers (728x90, 300x250) guaranteeing zero layout shifts during programmatic bidding.

## Do's and Don'ts

### Do
- Use tabular numerals (`font-variant-numeric: tabular-nums`) for all monetary values, percentages, and coordinates.
- Maintain at least 4.5:1 contrast on all body copy and 3:1 on large display text.
- Preserve explicit dimensions on media and ad containers to guarantee zero CLS.
- Anchor every article in its Entity-Attribute-Value (EAV) specification.

### Don't
- Do not use gradient text or chromatic glowing shadows.
- Do not add kickers or eyebrows above headings; let headings lead directly.
- Do not use generic system fonts or overused templates.
- Do not animate layout properties (`width`, `height`, `padding`); use `transform` and `opacity` instead.
- Do not allow unverified rumors to masquerade as verified SEC or Rockstar Newswire intelligence.
