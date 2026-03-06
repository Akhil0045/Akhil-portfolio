// ============================================================
//  GLOBAL STYLES — All CSS lives here
//
//  To modify:
//  • Card look      → search ".clay {"
//  • Button scale   → search ".clay-btn-primary"  (simple scale hover)
//  • Inputs         → search ".clay-input"
//  • Animations     → search "@keyframes"
//  • Mobile fixes   → search "@media (hover:none)"
// ============================================================

const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Mono:ital,wght@0,300;0,400;0,500;1,300&family=Outfit:wght@300;400;500;600;700;900&display=swap');

    /* ── Reset ── */
    *, *::before, *::after { box-sizing:border-box; margin:0; padding:0; }
    html { scroll-behavior:smooth; font-size:16px; }

    /* ── Body background ── */
    body {
      background: #0a0a18;
      /* Subtle ambient glows in two corners */
      background-image:
        radial-gradient(ellipse 80% 50% at 20% 10%, rgba(0,212,255,0.04) 0%, transparent 60%),
        radial-gradient(ellipse 60% 40% at 80% 80%, rgba(168,85,247,0.04) 0%, transparent 60%);
      color: #e2e8f4;
      font-family: 'Outfit', sans-serif;
      overflow-x: hidden;
      cursor: none; /* replaced by custom cursor */
      min-height: 100vh;
    }
    ::-webkit-scrollbar { width: 3px; }
    ::-webkit-scrollbar-track { background: #0a0a18; }
    ::-webkit-scrollbar-thumb { background: rgba(0,212,255,0.25); border-radius: 99px; }

    /* ── Custom cursor — JS lives in Cursor.jsx ── */
    #cursor-dot {
      width: 8px; height: 8px; background: #00d4ff; border-radius: 50%;
      position: fixed; top: 0; left: 0; pointer-events: none; z-index: 9999;
      transform: translate(-50%,-50%);
      transition: width .2s, height .2s, background .2s;
      box-shadow: 0 0 10px rgba(0,212,255,0.8);
    }
    #cursor-ring {
      width: 38px; height: 38px; border: 1.5px solid rgba(0,212,255,0.45); border-radius: 50%;
      position: fixed; top: 0; left: 0; pointer-events: none; z-index: 9998;
      transform: translate(-50%,-50%);
      transition: width .35s cubic-bezier(.16,1,.3,1), height .35s, border-color .3s;
    }
    /* Cursor scales up slightly on hover — stays cyan, no color change */
    body.cursor-hover #cursor-dot  { width: 10px; height: 10px; }
    body.cursor-hover #cursor-ring { width: 50px; height: 50px; }

    /* ── Font shorthand classes ── */
    .font-display { font-family: 'Bebas Neue', sans-serif; letter-spacing: 0.02em; }
    .font-mono    { font-family: 'DM Mono', monospace; }

    /* ════════════════════════════════════════════════════
       CLAYMORPHISM CARD SYSTEM
       Each surface uses a 4-layer box-shadow:
         1. Large outer drop shadow    → depth
         2. Soft colored bounce light  → ambient
         3. Top-left inset highlight   → raised edge
         4. Bottom-right inner shadow  → grounded edge
       ════════════════════════════════════════════════════ */

    /* Base dark clay (no color tint) */
    .clay {
      border-radius: 24px;
      background: linear-gradient(145deg, #141428 0%, #0d0d1e 100%);
      box-shadow:
        8px 8px 24px rgba(0,0,0,.55),
        -3px -3px 10px rgba(255,255,255,.025),
        inset 1px 1px 0 rgba(255,255,255,.07),
        inset -1px -1px 0 rgba(0,0,0,.25);
      border: 1px solid rgba(255,255,255,.06);
    }
    .clay:hover {
      box-shadow:
        12px 12px 32px rgba(0,0,0,.65),
        -4px -4px 14px rgba(255,255,255,.03),
        inset 1px 1px 0 rgba(255,255,255,.09),
        inset -1px -1px 0 rgba(0,0,0,.3);
    }

    /* Cyan — Hero stats, AnonSphere, About card, Contact form, Languages skill */
    .clay-cyan {
      border-radius: 24px;
      background: linear-gradient(145deg, rgba(0,212,255,.11) 0%, rgba(0,80,140,.06) 100%);
      box-shadow:
        8px 8px 28px rgba(0,0,0,.55),
        -3px -3px 12px rgba(0,212,255,.06),
        inset 1px 1px 0 rgba(0,212,255,.15),
        inset -1px -1px 0 rgba(0,0,0,.25);
      border: 1px solid rgba(0,212,255,.12);
    }
    .clay-cyan:hover {
      box-shadow:
        10px 10px 36px rgba(0,212,255,.18),
        -4px -4px 14px rgba(0,212,255,.08),
        inset 1px 1px 0 rgba(0,212,255,.2),
        inset -1px -1px 0 rgba(0,0,0,.3);
    }

    /* Purple — Quick Show project, Frontend skill, GitHub link */
    .clay-purple {
      border-radius: 24px;
      background: linear-gradient(145deg, rgba(168,85,247,.11) 0%, rgba(80,30,140,.06) 100%);
      box-shadow:
        8px 8px 28px rgba(0,0,0,.55),
        -3px -3px 12px rgba(168,85,247,.06),
        inset 1px 1px 0 rgba(168,85,247,.15),
        inset -1px -1px 0 rgba(0,0,0,.25);
      border: 1px solid rgba(168,85,247,.12);
    }
    .clay-purple:hover {
      box-shadow:
        10px 10px 36px rgba(168,85,247,.18),
        -4px -4px 14px rgba(168,85,247,.08),
        inset 1px 1px 0 rgba(168,85,247,.2),
        inset -1px -1px 0 rgba(0,0,0,.3);
    }

    /* Orange — ZeroTrace project, Backend skill */
    .clay-orange {
      border-radius: 24px;
      background: linear-gradient(145deg, rgba(255,107,53,.11) 0%, rgba(160,50,0,.06) 100%);
      box-shadow:
        8px 8px 28px rgba(0,0,0,.55),
        -3px -3px 12px rgba(255,107,53,.06),
        inset 1px 1px 0 rgba(255,107,53,.15),
        inset -1px -1px 0 rgba(0,0,0,.25);
      border: 1px solid rgba(255,107,53,.12);
    }
    .clay-orange:hover {
      box-shadow:
        10px 10px 36px rgba(255,107,53,.18),
        -4px -4px 14px rgba(255,107,53,.08),
        inset 1px 1px 0 rgba(255,107,53,.2),
        inset -1px -1px 0 rgba(0,0,0,.3);
    }

    /* Green — 3D Quiz project, Blockchain skill, LinkedIn link */
    .clay-green {
      border-radius: 24px;
      background: linear-gradient(145deg, rgba(52,211,153,.11) 0%, rgba(10,100,70,.06) 100%);
      box-shadow:
        8px 8px 28px rgba(0,0,0,.55),
        -3px -3px 12px rgba(52,211,153,.06),
        inset 1px 1px 0 rgba(52,211,153,.15),
        inset -1px -1px 0 rgba(0,0,0,.25);
      border: 1px solid rgba(52,211,153,.12);
    }
    .clay-green:hover {
      box-shadow:
        10px 10px 36px rgba(52,211,153,.18),
        -4px -4px 14px rgba(52,211,153,.08),
        inset 1px 1px 0 rgba(52,211,153,.2),
        inset -1px -1px 0 rgba(0,0,0,.3);
    }

    /* Yellow — Safe Shore project, LeetCode tracker, Security skill */
    .clay-yellow {
      border-radius: 24px;
      background: linear-gradient(145deg, rgba(255,161,22,.11) 0%, rgba(160,90,0,.06) 100%);
      box-shadow:
        8px 8px 28px rgba(0,0,0,.55),
        -3px -3px 12px rgba(255,161,22,.06),
        inset 1px 1px 0 rgba(255,161,22,.15),
        inset -1px -1px 0 rgba(0,0,0,.25);
      border: 1px solid rgba(255,161,22,.12);
    }
    .clay-yellow:hover {
      box-shadow:
        10px 10px 36px rgba(255,161,22,.18),
        -4px -4px 14px rgba(255,161,22,.08),
        inset 1px 1px 0 rgba(255,161,22,.2),
        inset -1px -1px 0 rgba(0,0,0,.3);
    }

    /* Pink — AR/Game skill */
    .clay-pink {
      border-radius: 24px;
      background: linear-gradient(145deg, rgba(244,114,182,.11) 0%, rgba(130,30,80,.06) 100%);
      box-shadow:
        8px 8px 28px rgba(0,0,0,.55),
        -3px -3px 12px rgba(244,114,182,.06),
        inset 1px 1px 0 rgba(244,114,182,.15),
        inset -1px -1px 0 rgba(0,0,0,.25);
      border: 1px solid rgba(244,114,182,.12);
    }

    /* Blue — Tools skill */
    .clay-blue {
      border-radius: 24px;
      background: linear-gradient(145deg, rgba(96,165,250,.11) 0%, rgba(30,60,140,.06) 100%);
      box-shadow:
        8px 8px 28px rgba(0,0,0,.55),
        -3px -3px 12px rgba(96,165,250,.06),
        inset 1px 1px 0 rgba(96,165,250,.15),
        inset -1px -1px 0 rgba(0,0,0,.25);
      border: 1px solid rgba(96,165,250,.12);
    }

    /* ── BUTTONS ─────────────────────────────────────────────
       Simple scale-up on hover — clean, no magnetic tracking.
       Primary = solid cyan  |  Ghost = transparent + border   */

    .clay-btn-primary {
      border-radius: 16px;
      background: linear-gradient(145deg, #00e5ff 0%, #00a8cc 100%);
      box-shadow:
        5px 5px 16px rgba(0,212,255,.35),
        -3px -3px 8px rgba(255,255,255,.15),
        inset 1px 1px 0 rgba(255,255,255,.35),
        inset -1px -2px 0 rgba(0,0,0,.15);
      border: none;
      color: #030a10;
      font-weight: 700;
      cursor: pointer;
      /* Smooth spring-like scale animation */
      transition: transform .2s cubic-bezier(.34,1.56,.64,1), box-shadow .2s;
    }
    /* Hover: button grows — simple and satisfying */
    .clay-btn-primary:hover {
      transform: scale(1.06);
      box-shadow:
        8px 8px 28px rgba(0,212,255,.5),
        -3px -3px 10px rgba(255,255,255,.2),
        inset 1px 1px 0 rgba(255,255,255,.4),
        inset -1px -2px 0 rgba(0,0,0,.15);
    }
    /* Active: shrinks slightly — feels like a real press */
    .clay-btn-primary:active {
      transform: scale(0.97);
      box-shadow: 3px 3px 10px rgba(0,212,255,.25), inset 2px 2px 4px rgba(0,0,0,.2);
    }

    .clay-btn-ghost {
      border-radius: 16px;
      background: linear-gradient(145deg, rgba(0,212,255,.08) 0%, rgba(0,100,160,.04) 100%);
      box-shadow:
        5px 5px 14px rgba(0,0,0,.4),
        -2px -2px 6px rgba(255,255,255,.03),
        inset 1px 1px 0 rgba(0,212,255,.15),
        inset -1px -1px 0 rgba(0,0,0,.2);
      border: 1px solid rgba(0,212,255,.2);
      color: #00d4ff;
      cursor: pointer;
      transition: transform .2s cubic-bezier(.34,1.56,.64,1), box-shadow .2s;
    }
    /* Hover: same scale-up as primary */
    .clay-btn-ghost:hover {
      transform: scale(1.06);
      box-shadow:
        8px 8px 20px rgba(0,212,255,.2),
        -3px -3px 8px rgba(255,255,255,.04),
        inset 1px 1px 0 rgba(0,212,255,.25),
        inset -1px -1px 0 rgba(0,0,0,.25);
    }
    .clay-btn-ghost:active { transform: scale(0.97); }

    /* ── Small tag pills (on project cards) ── */
    .clay-tag {
      border-radius: 100px;
      box-shadow:
        3px 3px 8px rgba(0,0,0,.4),
        inset 1px 1px 0 rgba(255,255,255,.06),
        inset -1px -1px 0 rgba(0,0,0,.2);
    }

    /* ── Form inputs — sunken / "pressed in" look ── */
    .clay-input {
      border-radius: 14px;
      background: linear-gradient(145deg, rgba(8,8,20,.9) 0%, rgba(5,5,15,.95) 100%);
      box-shadow:
        inset 3px 3px 8px rgba(0,0,0,.5),
        inset -1px -1px 0 rgba(255,255,255,.04),
        0 1px 0 rgba(255,255,255,.03);
      border: 1px solid rgba(255,255,255,.07);
      color: #e2e8f4;
      transition: box-shadow .2s, border-color .2s;
    }
    .clay-input:focus {
      outline: none;
      border-color: rgba(0,212,255,.3);
      box-shadow:
        inset 3px 3px 8px rgba(0,0,0,.5),
        inset -1px -1px 0 rgba(255,255,255,.04),
        0 0 0 3px rgba(0,212,255,.08);
    }

    /* ── Chatbot floating window ── */
    .clay-chatbot {
      border-radius: 28px;
      background: linear-gradient(160deg, #111124 0%, #0a0a1c 100%);
      box-shadow:
        16px 16px 48px rgba(0,0,0,.7),
        -6px -6px 20px rgba(255,255,255,.025),
        inset 1px 1px 0 rgba(255,255,255,.06),
        inset -1px -1px 0 rgba(0,0,0,.3),
        0 0 0 1px rgba(0,212,255,.06);
      border: 1px solid rgba(0,212,255,.1);
    }

    /* ── Scroll reveal — add .reveal to any element ──────────
       When the element enters the viewport it becomes visible.
       Add .d1-.d6 to stagger multiple items in a group.       */
    .reveal       { opacity:0; transform:translateY(40px);  transition:opacity .8s cubic-bezier(.16,1,.3,1), transform .8s cubic-bezier(.16,1,.3,1); }
    .reveal-left  { opacity:0; transform:translateX(-40px); transition:opacity .8s cubic-bezier(.16,1,.3,1), transform .8s cubic-bezier(.16,1,.3,1); }
    .reveal-right { opacity:0; transform:translateX(40px);  transition:opacity .8s cubic-bezier(.16,1,.3,1), transform .8s cubic-bezier(.16,1,.3,1); }
    .reveal.visible, .reveal-left.visible, .reveal-right.visible { opacity:1; transform:none; }
    .d1{transition-delay:.1s} .d2{transition-delay:.2s} .d3{transition-delay:.3s}
    .d4{transition-delay:.4s} .d5{transition-delay:.5s} .d6{transition-delay:.6s}

    /* ── Keyframe animations ── */
    @keyframes float       { 0%,100%{transform:translateY(0)}      50%{transform:translateY(-18px)} }
    @keyframes float-badge { 0%,100%{transform:translateY(0)}      50%{transform:translateY(-8px)} }
    @keyframes pulse-ring  { 0%{transform:scale(1);opacity:.7}     100%{transform:scale(2.2);opacity:0} }
    @keyframes slide-up    { from{opacity:0;transform:translateY(14px)} to{opacity:1;transform:none} }
    @keyframes ticker      { from{transform:translateX(0)}          to{transform:translateX(-50%)} }
    @keyframes spin-slow   { from{transform:rotate(0deg)}           to{transform:rotate(360deg)} }
    @keyframes menu-slide  { from{opacity:0;transform:translateY(-8px)} to{opacity:1;transform:none} }

    .animate-float       { animation: float 6s ease-in-out infinite; }
    .animate-float-badge { animation: float-badge 3s ease-in-out infinite; }
    .animate-slide-up    { animation: slide-up .4s ease forwards; }
    .animate-ticker      { animation: ticker 28s linear infinite; }
    .animate-spin-slow   { animation: spin-slow 22s linear infinite; }
    .mobile-menu         { animation: menu-slide .25s cubic-bezier(.16,1,.3,1) forwards; }

    /* 3D tilt card (used on project cards) */
    .tilt-card { transform-style: preserve-3d; transition: transform .15s ease-out, box-shadow .3s ease; }

    /* Animated underline for nav links */
    .nav-link::after {
      content:''; display:block; height:2px;
      background: linear-gradient(90deg,#00d4ff,#a855f7);
      border-radius:99px; transform:scaleX(0);
      transition: transform .3s cubic-bezier(.16,1,.3,1);
      transform-origin: left; margin-top:3px;
    }
    .nav-link.active::after, .nav-link:hover::after { transform: scaleX(1); }

    /* Chatbot message slide-in */
    .chat-in { animation: slide-up .3s ease forwards; }
    .chat-scroll::-webkit-scrollbar { width: 3px; }
    .chat-scroll::-webkit-scrollbar-thumb { background: rgba(0,212,255,.2); border-radius:99px; }

    ::selection { background: rgba(0,212,255,.2); color: #00d4ff; }
    section, main { overflow-x: hidden; max-width: 100vw; }

    /* ── Mobile / touch overrides ── */
    @media (hover:none),(pointer:coarse) {
      body { cursor: auto !important; }
      #cursor-dot, #cursor-ring { display: none !important; }
      a, button { cursor: pointer !important; }
      input, textarea, select { cursor: text !important; }
      .tilt-card { transform: none !important; }
      /* No scale on touch since there's no hover state */
      .clay-btn-primary:hover, .clay-btn-ghost:hover { transform: none; }
    }
    @media (max-width:480px) {
      .hero-text { font-size: clamp(54px,17vw,90px) !important; }
    }
  `}</style>
);

export default GlobalStyles;
