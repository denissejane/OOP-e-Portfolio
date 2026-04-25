/* ================================================================
   script.js — e-Portfolio OOP Midterm (Redesigned)
   ================================================================ */

console.log('✨ e-Portfolio script loaded!');

/* ================================================================
   BACKGROUND CANVAS — constellation + dotted grid
   ================================================================ */
function initCanvas() {
  const canvas = document.getElementById('bg-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let W, H, nodes = [], animId;
  const NODE_COUNT = 55;
  const isDark = () => document.documentElement.getAttribute('data-theme') !== 'light';

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }

  function mkNode() {
    return {
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      r: Math.random() * 2 + 1,
      // Some nodes are orange, some blue
      type: Math.random() > 0.5 ? 'orange' : 'blue'
    };
  }

  function buildNodes() {
    nodes = Array.from({ length: NODE_COUNT }, mkNode);
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);

    const dark = isDark();
    const dotAlpha   = dark ? 0.12 : 0.07;
    const lineAlpha  = dark ? 0.09 : 0.05;
    const nodeAlpha  = dark ? 0.5  : 0.35;

    // --- Dot grid ---
    const spacing = 36;
    ctx.fillStyle = dark ? `rgba(100,130,200,${dotAlpha})` : `rgba(59,130,246,${dotAlpha})`;
    for (let x = spacing; x < W; x += spacing) {
      for (let y = spacing; y < H; y += spacing) {
        ctx.beginPath();
        ctx.arc(x, y, 1, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // --- Connection lines between close nodes ---
    const maxDist = 160;
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < maxDist) {
          const alpha = lineAlpha * (1 - dist / maxDist);
          // Mix colors if different types
          if (nodes[i].type === nodes[j].type) {
            ctx.strokeStyle = nodes[i].type === 'orange'
              ? `rgba(255,107,43,${alpha})`
              : `rgba(59,130,246,${alpha})`;
          } else {
            ctx.strokeStyle = `rgba(150,160,220,${alpha * 0.8})`;
          }
          ctx.lineWidth = 0.8;
          ctx.beginPath();
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(nodes[j].x, nodes[j].y);
          ctx.stroke();
        }
      }
    }

    // --- Node dots ---
    nodes.forEach(n => {
      const color = n.type === 'orange'
        ? `rgba(255,107,43,${nodeAlpha})`
        : `rgba(59,130,246,${nodeAlpha})`;
      ctx.beginPath();
      ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
      ctx.fillStyle = color;
      ctx.fill();

      // Move
      n.x += n.vx;
      n.y += n.vy;
      if (n.x < 0 || n.x > W) n.vx *= -1;
      if (n.y < 0 || n.y > H) n.vy *= -1;
    });

    animId = requestAnimationFrame(draw);
  }

  resize();
  buildNodes();
  draw();

  window.addEventListener('resize', () => {
    cancelAnimationFrame(animId);
    resize();
    buildNodes();
    draw();
  });
}


/* ================================================================
   THEME TOGGLE (star button)
   ================================================================ */
function initThemeToggle() {
  const toggle = document.getElementById('theme-toggle');
  const root   = document.documentElement;
  const star   = document.querySelector('.nav-star');
  if (!toggle) return;

  // Default: dark
  root.setAttribute('data-theme', 'dark');

  toggle.addEventListener('click', () => {
    const isLight = root.getAttribute('data-theme') === 'light';
    root.setAttribute('data-theme', isLight ? 'dark' : 'light');
    star.textContent = isLight ? '⭐' : '🌙';
    // Brief spin animation
    star.style.transform = 'rotate(360deg) scale(1.3)';
    setTimeout(() => { star.style.transform = ''; }, 500);
  });
}


/* ================================================================
   MAIN TAB NAVIGATION
   ================================================================ */
function switchTab(tabId) {
  document.querySelectorAll('.tab-section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));

  // Close ALL open accordions when switching tabs
  document.querySelectorAll('.accordion-item.open').forEach(i => i.classList.remove('open'));

  const section = document.getElementById('tab-' + tabId);
  if (section) section.classList.add('active');

  const btn = document.querySelector(`.nav-btn[data-tab="${tabId}"]`);
  if (btn) btn.classList.add('active');

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function initTabNav() {
  // Main nav buttons
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => switchTab(btn.getAttribute('data-tab')));
  });

  // CTA on home (About Me button)
  const cta = document.querySelector('.cta-btn');
  if (cta) {
    cta.addEventListener('click', () => switchTab(cta.getAttribute('data-tab')));
  }

  // Back buttons (on hidden pages)
  document.querySelectorAll('.back-btn').forEach(btn => {
    btn.addEventListener('click', () => switchTab(btn.getAttribute('data-tab')));
  });
}


/* ================================================================
   SUB-TAB NAVIGATION
   ================================================================ */
function switchSubTab(subtabId) {
  document.querySelectorAll('.subtab-content').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.subtab-btn').forEach(b => b.classList.remove('active'));

  // Close all open accordions when switching subtabs
  document.querySelectorAll('.accordion-item.open').forEach(i => i.classList.remove('open'));

  const panel = document.getElementById('subtab-' + subtabId);
  if (panel) panel.classList.add('active');

  const btn = document.querySelector(`.subtab-btn[data-subtab="${subtabId}"]`);
  if (btn) btn.classList.add('active');
}

function initSubTabNav() {
  document.querySelectorAll('.subtab-btn').forEach(btn => {
    btn.addEventListener('click', () => switchSubTab(btn.getAttribute('data-subtab')));
  });
}


/* ================================================================
   ACCORDION
   ================================================================ */
function toggleAccordion(item) {
  const isOpen = item.classList.contains('open');
  // Close all in same panel
  const parent = item.closest('.subtab-content');
  if (parent) parent.querySelectorAll('.accordion-item.open').forEach(i => i.classList.remove('open'));
  if (!isOpen) item.classList.add('open');
}

function initAccordion() {
  document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
      const item = header.closest('.accordion-item');
      if (item) toggleAccordion(item);
    });
  });
}


/* ================================================================
   INIT
   ================================================================ */
document.addEventListener('DOMContentLoaded', () => {
  initCanvas();
  initThemeToggle();
  initTabNav();
  initSubTabNav();
  initAccordion();

  // Default subtabs open
  switchSubTab('m-assignments');
  switchSubTab('f-assignments');

  console.log('✨ e-Portfolio loaded!');
});