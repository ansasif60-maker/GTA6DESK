/**
 * GTA 6 DESK - TRAILER THEATER & SCENE BREAKDOWN ENGINE
 * Interactive 4K YouTube Trailer Theater with frame-by-frame scene selector,
 * direct player timestamp seeking, and theater mode toggle.
 */

(function () {
  'use strict';

  const SCENE_BREAKDOWNS = [
    {
      time: 5,
      timeLabel: '0:05',
      title: 'Leonida State Prison',
      subtitle: 'Lucia’s Opening Interrogation',
      category: 'CHARACTER INTEL',
      summary: 'Lucia in inmate uniform during a correctional counseling session. Her iconic line "Bad luck, I guess" sets the grounded tone for GTA 6’s narrative.',
      tags: ['Lucia Protagonist', 'Correctional Facility', 'Subsurface Scattering'],
      telemetry: 'Location: Leonida State Penitentiary · Camera: 35mm Prime Equivalent · Lighting: Fluorescent Correctional Interior'
    },
    {
      time: 23,
      timeLabel: '0:23',
      title: 'Ocean Beach & Starfish Island',
      subtitle: 'Modern Vice City Waterfront',
      category: 'WORLD CARTOGRAPHY',
      summary: 'A breathtaking coastal flyover showcasing pristine turquoise waves, custom speedboats, bikini-clad crowds with individual AI routines, and classic Cheetah supercars.',
      tags: ['Ocean Drive', 'Volumetric Water Physics', 'Crowd Density AI'],
      telemetry: 'Location: Ocean Beach Boulevard · Engine: RAGE 9 Global Illumination · Vehicles: Grotti Cheetah Classic, Pegassi Speedboat'
    },
    {
      time: 37,
      timeLabel: '0:37',
      title: 'Vice City Nightlife & VIP Lounges',
      subtitle: 'Nocturnal Social Hierarchy',
      category: 'INTERIOR FIDELITY',
      summary: 'High-end rooftop pool clubs and enterable neon lounges. Illustrates seamless transition between open-world streets and multi-story indoor venues without loading pauses.',
      tags: ['Enterable Interiors', 'Cloth Simulation', 'Dynamic Audio Occlusion'],
      telemetry: 'Location: Downtown Vice City · Shading: Hardware Ray-Traced Reflections · Audio: Spatial Nightclub Acoustics'
    },
    {
      time: 46,
      timeLabel: '0:46',
      title: 'Thrillbilly Mud Club & Swamplands',
      subtitle: 'Rural Leonida Subcultures',
      category: 'VEHICLES & ENVIRONMENT',
      summary: 'Kelly County mud drag strips, lifted 4x4 monster trucks, and airboats cruising through alligator-infested cypress swamps. Highlights the vast cultural contrast from downtown Vice.',
      tags: ['Kelly County', 'Deformable Terrain', 'Wildlife AI (Alligators)'],
      telemetry: 'Location: Grassrivers & Mud Club · Physics: Real-Time Mud Deformation · Flora: Cypress Everglades Ecosystem'
    },
    {
      time: 54,
      timeLabel: '0:54',
      title: 'Lucia & Jason Bonnie & Clyde Heist',
      subtitle: 'Tactical Dual-Operative Hold-Up',
      category: 'GAMEPLAY MECHANICS',
      summary: 'Lucia and Jason storming a convenience store brandishing handguns with bandana disguises. The pivotal exchange—"Trust?" / "Trust"—cements their dynamic partner loyalty.',
      tags: ['Bonnie & Clyde', 'Ditch-The-Duffel', 'Partner Command Wheel'],
      telemetry: 'Location: Port Gellhorn Convenience · Weapons: 9mm Semi-Auto · Mechanics: Synchronized Operative AI'
    },
    {
      time: 75,
      timeLabel: '1:15',
      title: 'Viral Social Media & Police Bodycam',
      subtitle: 'Leonida’s Satirical Social Ecosystem',
      category: 'NARRATIVE SATIRE',
      summary: 'In-game TikTok/Instagram parody live feeds, eccentric viral personalities, and high-tension Vice-Dale County police cruiser dashcams responding to a highway rollover.',
      tags: ['Social Parody Network', 'Police Telemetry', 'Viral NPC Behavior'],
      telemetry: 'Network: Leonida Clips App · Faction: Vice-Dale Police Department · Assets: Police Cruiser 2025 Fleet'
    }
  ];

  let currentSceneIndex = 0;
  let isTheaterMode = false;

  function initTrailerTheater() {
    const theaterSection = document.getElementById('gta6-trailer-theater');
    if (!theaterSection) return;

    renderSceneSelector();
    bindTheaterControls();
    updateSceneDossier(0);
  }

  function renderSceneSelector() {
    const container = document.getElementById('trailer-scenes-track');
    if (!container) return;

    container.innerHTML = '';
    SCENE_BREAKDOWNS.forEach((scene, index) => {
      const chip = document.createElement('button');
      chip.type = 'button';
      chip.className = `scene-chip ${index === currentSceneIndex ? 'active' : ''}`;
      chip.setAttribute('data-scene-index', index);
      chip.innerHTML = `
        <span class="scene-timestamp">${scene.timeLabel}</span>
        <span class="scene-chip-title">${scene.title}</span>
      `;

      chip.addEventListener('click', () => {
        selectScene(index);
      });

      container.appendChild(chip);
    });
  }

  function selectScene(index) {
    if (index < 0 || index >= SCENE_BREAKDOWNS.length) return;
    currentSceneIndex = index;

    // Update active chip state
    const chips = document.querySelectorAll('.scene-chip');
    chips.forEach((c, idx) => {
      c.classList.toggle('active', idx === currentSceneIndex);
    });

    const scene = SCENE_BREAKDOWNS[currentSceneIndex];
    updateSceneDossier(currentSceneIndex);
    seekYouTubePlayer(scene.time);
  }

  function updateSceneDossier(index) {
    const scene = SCENE_BREAKDOWNS[index];
    if (!scene) return;

    const titleEl = document.getElementById('scene-dossier-title');
    const subEl = document.getElementById('scene-dossier-sub');
    const catEl = document.getElementById('scene-dossier-category');
    const summaryEl = document.getElementById('scene-dossier-summary');
    const telemetryEl = document.getElementById('scene-dossier-telemetry');
    const tagsEl = document.getElementById('scene-dossier-tags');

    if (titleEl) titleEl.textContent = `${scene.timeLabel} — ${scene.title}`;
    if (subEl) subEl.textContent = scene.subtitle;
    if (catEl) catEl.textContent = scene.category;
    if (summaryEl) summaryEl.textContent = scene.summary;
    if (telemetryEl) telemetryEl.textContent = scene.telemetry;

    if (tagsEl) {
      tagsEl.innerHTML = scene.tags.map(tag => `<span class="badge-tag">${tag}</span>`).join(' ');
    }
  }

  function seekYouTubePlayer(seconds) {
    const iframe = document.getElementById('gta6-trailer-iframe');
    if (!iframe) return;

    // Try posting message to YouTube iframe API
    try {
      iframe.contentWindow.postMessage(
        JSON.stringify({
          event: 'command',
          func: 'seekTo',
          args: [seconds, true]
        }),
        '*'
      );
    } catch (err) {
      // Fallback: update src with start timestamp
      const baseSrc = 'https://www.youtube.com/embed/QdBZY2fkU-0?enablejsapi=1&rel=0&modestbranding=1';
      iframe.src = `${baseSrc}&start=${seconds}&autoplay=1`;
    }
  }

  function bindTheaterControls() {
    // Theater Mode Toggle
    const theaterBtn = document.getElementById('toggle-theater-mode-btn');
    const theaterWrap = document.getElementById('trailer-theater-wrapper');

    if (theaterBtn && theaterWrap) {
      theaterBtn.addEventListener('click', (e) => {
        e.preventDefault();
        isTheaterMode = !isTheaterMode;
        theaterWrap.classList.toggle('theater-mode-active', isTheaterMode);
        theaterBtn.classList.toggle('active', isTheaterMode);
        
        const label = theaterBtn.querySelector('.theater-btn-label');
        if (label) {
          label.textContent = isTheaterMode ? 'Exit Cinema View' : 'Cinema Theater Mode';
        }

        // Smooth scroll to center trailer view if enabled
        if (isTheaterMode) {
          theaterWrap.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    }

    // Prev / Next Scene Buttons
    const prevBtn = document.getElementById('scene-prev-btn');
    const nextBtn = document.getElementById('scene-next-btn');

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        const nextIdx = (currentSceneIndex - 1 + SCENE_BREAKDOWNS.length) % SCENE_BREAKDOWNS.length;
        selectScene(nextIdx);
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        const nextIdx = (currentSceneIndex + 1) % SCENE_BREAKDOWNS.length;
        selectScene(nextIdx);
      });
    }
  }

  window.Gta6TrailerTheater = {
    init: initTrailerTheater,
    getScenes: () => SCENE_BREAKDOWNS,
    selectScene: selectScene
  };

  document.addEventListener('DOMContentLoaded', initTrailerTheater);
})();
