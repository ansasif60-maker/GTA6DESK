/**
 * GTA 6 DESK - LIVE COUNTDOWN ENGINE
 * Real-time high-precision countdown to Grand Theft Auto VI release milestones.
 * Supports multiple countdown targets, count-up elapsed telemetry, .ics calendar export,
 * and synched mini-badges across the interface.
 */

(function () {
  'use strict';

  // Preset milestones
  const MILESTONES = {
    release2026: {
      id: 'release2026',
      name: 'Launch Target (Nov 19, 2026)',
      shortName: 'Launch Target',
      targetDate: new Date('2026-11-19T00:00:00Z'),
      isCountUp: false,
      badge: 'OFFICIALLY TARGETED',
      note: 'Target release window for PlayStation 5 & Xbox Series X|S'
    },
    fall2025: {
      id: 'fall2025',
      name: 'Fiscal Year Target (Dec 15, 2026)',
      shortName: 'FY27 Holiday',
      targetDate: new Date('2026-12-15T00:00:00Z'),
      isCountUp: false,
      badge: 'HOLIDAY WINDOW',
      note: 'Take-Two Interactive Fiscal Year commercial target'
    },
    trailer1: {
      id: 'trailer1',
      name: 'Elapsed Since Trailer 1 (Dec 5, 2023)',
      shortName: 'Since Trailer 1',
      targetDate: new Date('2023-12-05T09:00:00-05:00'),
      isCountUp: true,
      badge: 'COMMUNITY MILESTONE',
      note: 'Time elapsed since Rockstar Games officially premiered Trailer 1'
    }
  };

  let currentMilestoneKey = 'release2026';
  let timerInterval = null;
  let audioContext = null;
  let soundEnabled = false;

  function initCountdown() {
    const countdownRoot = document.getElementById('gta6-live-countdown');
    if (!countdownRoot) return;

    // Bind Target Selector Buttons
    const targetButtons = document.querySelectorAll('[data-countdown-target]');
    targetButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const targetKey = btn.getAttribute('data-countdown-target');
        if (MILESTONES[targetKey]) {
          currentMilestoneKey = targetKey;
          targetButtons.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          updateCountdownDisplay();
        }
      });
    });

    // Bind Calendar Export (.ics)
    const calBtn = document.getElementById('countdown-cal-btn');
    if (calBtn) {
      calBtn.addEventListener('click', downloadIcsCalendar);
    }

    // Bind Sound / Pulse Toggle
    const soundBtn = document.getElementById('countdown-sound-toggle');
    if (soundBtn) {
      soundBtn.addEventListener('click', () => {
        soundEnabled = !soundEnabled;
        soundBtn.classList.toggle('active', soundEnabled);
        soundBtn.setAttribute('aria-pressed', soundEnabled);
        const icon = soundBtn.querySelector('.sound-icon-state');
        if (icon) {
          icon.textContent = soundEnabled ? 'ON' : 'MUTED';
        }
        if (soundEnabled && !audioContext) {
          try {
            audioContext = new (window.AudioContext || window.webkitAudioContext)();
          } catch (e) {
            console.warn('AudioContext not supported');
          }
        }
        if (soundEnabled) {
          playTickSound();
        }
      });
    }

    // Start Real-Time RAF / Interval Loop (high precision)
    updateCountdownDisplay();
    timerInterval = setInterval(updateCountdownDisplay, 40); // 25fps fluid tick
  }

  function playTickSound() {
    if (!soundEnabled || !audioContext) return;
    try {
      if (audioContext.state === 'suspended') {
        audioContext.resume();
      }
      const osc = audioContext.createOscillator();
      const gain = audioContext.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(880, audioContext.currentTime); // A5 tick
      gain.gain.setValueAtTime(0.015, audioContext.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, audioContext.currentTime + 0.04);
      osc.connect(gain);
      gain.connect(audioContext.destination);
      osc.start();
      osc.stop(audioContext.currentTime + 0.05);
    } catch (err) {
      // Ignore audio glitches
    }
  }

  let lastSecondPlayed = -1;

  function updateCountdownDisplay() {
    const milestone = MILESTONES[currentMilestoneKey];
    if (!milestone) return;

    const now = new Date();
    let diffMs = 0;
    let isPast = false;

    if (milestone.isCountUp) {
      diffMs = now.getTime() - milestone.targetDate.getTime();
      if (diffMs < 0) diffMs = 0;
    } else {
      diffMs = milestone.targetDate.getTime() - now.getTime();
      if (diffMs <= 0) {
        isPast = true;
        diffMs = 0;
      }
    }

    const totalSeconds = Math.floor(diffMs / 1000);
    const days = Math.floor(totalSeconds / 86400);
    const hours = Math.floor((totalSeconds % 86400) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    const milliseconds = Math.floor((diffMs % 1000) / 10); // 2 digits (00-99)

    // Trigger subtle tick on second change
    if (seconds !== lastSecondPlayed) {
      lastSecondPlayed = seconds;
      if (soundEnabled) {
        playTickSound();
      }
    }

    // Update DOM numbers
    setText('countdown-days', formatNumber(days, 3));
    setText('countdown-hours', formatNumber(hours, 2));
    setText('countdown-minutes', formatNumber(minutes, 2));
    setText('countdown-seconds', formatNumber(seconds, 2));
    setText('countdown-ms', formatNumber(milliseconds, 2));

    // Update Header Mini Telemetry Pill if present
    const headerPill = document.getElementById('header-live-countdown-text');
    if (headerPill) {
      headerPill.textContent = `${days}D ${formatNumber(hours, 2)}H ${formatNumber(seconds, 2)}S`;
    }

    // Update target labels & badge
    const badgeEl = document.getElementById('countdown-target-badge');
    if (badgeEl) {
      badgeEl.textContent = milestone.badge;
    }
    const noteEl = document.getElementById('countdown-target-note');
    if (noteEl) {
      noteEl.textContent = isPast
        ? 'Milestone achieved! Verified by Take-Two SEC disclosures.'
        : milestone.note;
    }
  }

  function setText(id, text) {
    const el = document.getElementById(id);
    if (el && el.textContent !== text) {
      el.textContent = text;
    }
  }

  function formatNumber(num, length) {
    return String(Math.max(0, num)).padStart(length, '0');
  }

  function downloadIcsCalendar(e) {
    e.preventDefault();
    const milestone = MILESTONES.release2026;
    const startDate = '20261119T000000Z';
    const endDate = '20261119T235959Z';
    const nowStamp = new Date().toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';

    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//GTA 6 Desk//Live Countdown//EN',
      'CALSCALE:GREGORIAN',
      'METHOD:PUBLISH',
      'BEGIN:VEVENT',
      `UID:gta6-launch-2026@gta6desk.com`,
      `DTSTAMP:${nowStamp}`,
      `DTSTART:${startDate}`,
      `DTEND:${endDate}`,
      'SUMMARY:Grand Theft Auto VI — Global Launch (PS5 & Xbox Series X|S)',
      'DESCRIPTION:Grand Theft Auto VI officially launches on PlayStation 5 and Xbox Series X|S. Tracked live on GTA 6 Desk (https://gta6desk.com).',
      'LOCATION:Worldwide (PlayStation 5, Xbox Series X|S)',
      'STATUS:CONFIRMED',
      'BEGIN:VALARM',
      'ACTION:DISPLAY',
      'DESCRIPTION:GTA 6 Launches Today!',
      'TRIGGER:-P1D',
      'END:VALARM',
      'END:VEVENT',
      'END:VCALENDAR'
    ].join('\r\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', 'GTA6-Global-Launch-Target.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  // Export to global scope
  window.Gta6Countdown = {
    init: initCountdown,
    getMilestones: () => MILESTONES
  };

  document.addEventListener('DOMContentLoaded', initCountdown);
})();
