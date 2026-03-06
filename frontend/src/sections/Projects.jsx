// ============================================================
//  Projects — Project cards grid
//
//  Uses TiltCard for 3D hover effect on each card.
//  All projects render in a uniform 2-column grid.
//
//  To add/edit projects: update PROJECTS in data/constants.js
//  Card color theme = project.clayClass
// ============================================================

import { useState } from 'react';
import TiltCard from '../components/TiltCard.jsx';
import SectionLabel from '../components/SectionLabel.jsx';
import { PROJECTS } from '../data/constants.js';

// ── Single project card ──────────────────────────────────────
function ProjectCard({ p, idx }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <TiltCard className={`reveal d${(idx % 4) + 1} ${p.clayClass} group transition-all duration-500`}>
      <div className="p-5 sm:p-7">

        {/* Large ghost number in background */}
        <div className="font-display text-5xl mb-3 leading-none"
          style={{ color: `${p.accent}12`, WebkitTextStroke: `1px ${p.accent}20` }}>
          {p.num}
        </div>

        {/* Header row: type/name/period on left, emoji on right */}
        <div className="flex items-start justify-between mb-4">
          <div>
            <div className="font-mono text-xs uppercase tracking-widest mb-2" style={{ color: p.accent }}>{p.type}</div>
            <h3 className="font-display text-3xl" style={{ color: '#e2e8f4', letterSpacing: '.03em' }}>{p.name}</h3>
            <div className="font-mono text-xs mt-1" style={{ color: 'rgba(255,255,255,0.2)' }}>{p.period}</div>
          </div>
          <div className="text-3xl">{p.emoji}</div>
        </div>

        {/* Short description */}
        <p className="text-sm leading-relaxed mb-4" style={{ color: '#64748b', fontWeight: 300 }}>{p.desc}</p>

        {/* Expanded tech detail — shown on "Read More" */}
        {expanded && (
          <p className="text-sm leading-relaxed mb-4 animate-slide-up"
            style={{ color: '#94a3b8', fontWeight: 300, borderLeft: `2px solid ${p.accent}50`, paddingLeft: 12 }}>
            {p.detail}
          </p>
        )}

        {/* Tech tag pills */}
        <div className="flex flex-wrap gap-2 mb-5">
          {p.tags.map((t) => (
            <span key={t} className="clay-tag font-mono text-xs px-2.5 py-1"
              style={{ background: `${p.accent}10`, border: `1px solid ${p.accent}18`, color: '#94a3b8' }}>
              {t}
            </span>
          ))}
        </div>

        {/* Bottom row: Read More toggle + GitHub link */}
        <div className="flex items-center justify-between">
          <button data-hover onClick={() => setExpanded((e) => !e)}
            className="font-mono text-xs uppercase tracking-widest transition-colors duration-200"
            style={{ color: expanded ? p.accent : 'rgba(255,255,255,0.2)', cursor: 'pointer', background: 'none', border: 'none' }}>
            {expanded ? '↑ Show Less' : '↓ Read More'}
          </button>

          {/* GitHub link — add github: 'https://...' to a project in constants.js to show this */}
          {p.github && (
            <a href={p.github} target="_blank" rel="noreferrer" data-hover
              className="font-mono text-xs uppercase tracking-widest transition-colors duration-200"
              style={{ color: 'rgba(255,255,255,0.2)', textDecoration: 'none' }}
              onMouseEnter={(e) => (e.target.style.color = p.accent)}
              onMouseLeave={(e) => (e.target.style.color = 'rgba(255,255,255,0.2)')}>
              GitHub ↗
            </a>
          )}
        </div>

      </div>
    </TiltCard>
  );
}

// ── Section wrapper ───────────────────────────────────────────
export default function Projects() {
  return (
    <section id="projects" style={{ background: 'rgba(0,0,0,0.25)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '80px 20px' }} className="md:py-40">

        <SectionLabel num="02" label="Selected Work" />

        <h2 className="reveal d2 font-display mb-12 sm:mb-16"
          style={{ fontSize: 'clamp(44px,7vw,96px)', lineHeight: 0.9, color: '#e2e8f4' }}>
          PROJECTS<br />
          <span style={{ WebkitTextStroke: '1px rgba(0,212,255,0.3)', color: 'transparent' }}>&amp; BUILDS</span>
        </h2>

        {/* Uniform 2-column grid — loops over all projects automatically */}
        <div className="grid lg:grid-cols-2 gap-5">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.num} p={p} idx={i} />
          ))}
        </div>

      </div>
    </section>
  );
}