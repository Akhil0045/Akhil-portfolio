// ============================================================
//  Nav — Fixed top navigation bar
//
//  Features:
//   • Transparent at top → frosted glass on scroll
//   • Active section highlight (prop passed from App.jsx)
//   • Mobile hamburger menu with slide-down animation
//   • Body scroll locked when mobile menu is open
//
//  To add a nav item: add the section ID to the links array
//  To change the logo: edit the <a href="#home"> block
// ============================================================

import { useState, useEffect } from 'react';

export default function Nav({ active }) {
  const [scrolled, setScrolled] = useState(false);
  const [open,     setOpen]     = useState(false);

  // Turn on frosted glass background after scrolling 60px
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', h);
    return () => window.removeEventListener('scroll', h);
  }, []);

  // Auto-close mobile menu on desktop resize
  useEffect(() => {
    const h = () => { if (window.innerWidth >= 768) setOpen(false); };
    window.addEventListener('resize', h);
    return () => window.removeEventListener('resize', h);
  }, []);

  // Lock body scroll while mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  // ↓ Add / remove section IDs here to update the nav
  const links = ['home', 'about', 'projects', 'skills', 'contact'];

  const navBg = scrolled || open ? {
    background: 'linear-gradient(180deg,rgba(14,14,28,0.94) 0%,rgba(10,10,22,0.9) 100%)',
    backdropFilter: 'blur(28px)',
    boxShadow: '0 8px 32px rgba(0,0,0,0.4),0 1px 0 rgba(255,255,255,0.05)',
  } : {};

  return (
    <>
      <nav className="fixed top-0 w-full z-50 transition-all duration-500" style={navBg}>
        <div className="mx-auto flex justify-between items-center" style={{ maxWidth: 1280, padding: '0 20px', height: 64 }}>

          {/* ── Logo ── */}
          <a href="#home" data-hover className="font-display text-2xl"
            style={{ color: '#00d4ff', letterSpacing: '.1em', textDecoration: 'none' }}>
            AK<span style={{ color: 'rgba(0,212,255,0.3)' }}>.</span>
          </a>

          {/* ── Desktop links ── */}
          <div className="hidden md:flex items-center gap-8 lg:gap-10">
            {links.map((l) => (
              <a key={l} href={`#${l}`} data-hover
                className={`nav-link font-mono text-xs uppercase tracking-widest transition-colors duration-200 ${active === l ? 'active' : ''}`}
                style={{ color: active === l ? '#e2e8f4' : '#55606e', textDecoration: 'none' }}>
                {l}
              </a>
            ))}

            {/* Hire Me button — simple scale hover */}
            <a href="mailto:akhil87901@gmail.com" data-hover
              className="clay-btn-ghost font-mono text-xs uppercase tracking-widest px-5 py-2.5"
              style={{ textDecoration: 'none', fontSize: 11 }}>
              Hire Me
            </a>
          </div>

          {/* ── Mobile hamburger ── */}
          <button data-hover onClick={() => setOpen((o) => !o)} aria-label="Toggle menu"
            className="md:hidden flex flex-col justify-center gap-1.5 w-10 h-10 items-center"
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
            {/* Three bars animate into × when open */}
            <span className="block h-px transition-all duration-300 origin-center"
              style={{ width: 22, background: '#00d4ff', transform: open ? 'rotate(45deg) translate(1px,3.5px)' : 'none' }} />
            <span className="block h-px transition-all duration-300"
              style={{ width: 16, background: '#00d4ff', opacity: open ? 0 : 1 }} />
            <span className="block h-px transition-all duration-300 origin-center"
              style={{ width: 22, background: '#00d4ff', transform: open ? 'rotate(-45deg) translate(1px,-3.5px)' : 'none' }} />
          </button>
        </div>

        {/* ── Mobile dropdown ── */}
        {open && (
          <div className="mobile-menu md:hidden"
            style={{ padding: '8px 0 24px', borderTop: '1px solid rgba(0,212,255,0.07)', background: 'linear-gradient(180deg,rgba(12,12,26,0.98) 0%,rgba(8,8,20,0.99) 100%)' }}>
            {links.map((l, i) => (
              <a key={l} href={`#${l}`} onClick={() => setOpen(false)}
                className="flex items-center gap-4 font-mono text-sm uppercase tracking-widest transition-all duration-200"
                style={{ padding: '14px 24px', color: active === l ? '#00d4ff' : '#94a3b8', textDecoration: 'none', borderLeft: active === l ? '2px solid #00d4ff' : '2px solid transparent' }}>
                <span className="font-mono text-xs" style={{ color: 'rgba(0,212,255,0.3)' }}>0{i + 1}</span>
                {l}
                {active === l && <span className="ml-auto w-1.5 h-1.5 rounded-full" style={{ background: '#00d4ff', boxShadow: '0 0 6px #00d4ff' }} />}
              </a>
            ))}
            <div style={{ padding: '12px 24px 0' }}>
              <a href="mailto:akhil87901@gmail.com" onClick={() => setOpen(false)}
                className="clay-btn-ghost flex items-center justify-center font-mono text-sm uppercase tracking-widest py-3.5"
                style={{ textDecoration: 'none' }}>
                Hire Me ✉
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Dark overlay behind mobile menu */}
      {open && (
        <div className="fixed inset-0 z-40 md:hidden"
          style={{ background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)' }}
          onClick={() => setOpen(false)} />
      )}
    </>
  );
}
