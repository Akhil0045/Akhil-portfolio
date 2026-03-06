// ============================================================
//  About — Bio, profile card, and info grid
//
//  Left column:  text bio + 4-cell info grid (clay cards)
//  Right column: stacked profile card with skill bars
//                + floating LeetCode badge
//
//  To edit bio text: update the <p> paragraphs below
//  To edit info grid: update the array in the .map() call
//  To change skill bars: edit the array inside the card
// ============================================================

import SectionLabel from '../components/SectionLabel.jsx';

export default function About() {
  return (
    <section id="about">
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '80px 20px' }} className="md:py-40">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── Left: Text content ── */}
          <div>
            <SectionLabel num="01" label="About Me" />

            <h2 className="reveal d2 font-display mb-8"
              style={{ fontSize: 'clamp(44px,6vw,78px)', lineHeight: 0.95, color: '#e2e8f4' }}>
              CRAFTING DIGITAL<br />
              <span style={{ WebkitTextStroke: '1px rgba(0,212,255,0.4)', color: 'transparent' }}>EXPERIENCES</span>
            </h2>

            {/* ↓ Edit bio paragraphs here */}
            {/* <p className="reveal d3 text-lg leading-relaxed mb-5" style={{ color: '#94a3b8', fontWeight: 300 }}>
              Passionate CSE student at the intersection of{' '}
              <span style={{ color: '#00d4ff', fontWeight: 500 }}>full-stack engineering</span>,{' '}
              <span style={{ color: '#a855f7', fontWeight: 500 }}>AR/VR development</span>, and{' '}
              <span style={{ color: '#ff6b35', fontWeight: 500 }}>emerging tech</span>.
              From end-to-end encrypted chat apps to blockchain-verified data destruction systems.
            </p>
            <p className="reveal d4 text-base leading-relaxed mb-10" style={{ color: '#64748b', fontWeight: 300 }}>
              Active competitive programmer on LeetCode, grinding DSA daily. Leading two technical
              clubs at KIET — mentoring in AR/VR development and organizing  competitions.
            </p> */}
  <p className="reveal d3 text-lg leading-relaxed mb-5" style={{ color: '#94a3b8', fontWeight: 300 }}>
  I'm a Computer Science student who enjoys building real-world applications,
  mainly focusing on <span style={{ color: '#00d4ff', fontWeight: 500 }}>full-stack web development</span>.
  I also explore <span style={{ color: '#a855f7', fontWeight: 500 }}>AR/VR and game development</span>
  through projects while continuing to learn new technologies.
</p>

<p className="reveal d4 text-base leading-relaxed mb-10" style={{ color: '#64748b', fontWeight: 300 }}>
  I regularly practice data structures and algorithms to improve my problem-solving skills.
  I am also an <span style={{ color: '#ff9900', fontWeight: 500 }}>AWS Certified Cloud Practitioner</span>
  and actively contribute to technical communities at KIET, mentoring students in AR/VR
  development and helping organize coding competitions.
</p>

            {/* Info grid — 4 clay tiles */}
            <div className="reveal d5 grid grid-cols-2 gap-3">
              {[
                ['Location',   'Delhi NCR, India'],
                ['Degree',     'B.Tech CSE'],
                ['CGPA',       '8.04 / 10'],
                ['Graduation', 'July 2027'],
              ].map(([key, val]) => (
                <div key={key} className="clay p-4 transition-all duration-300">
                  <div className="font-mono text-xs uppercase tracking-widest mb-1"
                    style={{ color: 'rgba(0,212,255,0.5)' }}>{key}</div>
                  <div className="text-sm font-semibold" style={{ color: '#e2e8f4' }}>{val}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: Stacked profile card ── */}
          <div className="reveal-right d2 relative flex justify-center mt-12 lg:mt-0">
            {/* Ambient glow behind card */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-64 h-64 rounded-full blur-3xl" style={{ background: 'radial-gradient(circle,rgba(0,212,255,0.06),transparent)', opacity: 0.8 }} />
            </div>

            <div className="relative" style={{ width: 'min(290px,100%)' }}>
              {/* Decorative back cards (rotated) */}
              <div className="absolute inset-0" style={{ borderRadius: 24, background: 'rgba(0,212,255,0.04)', border: '1px solid rgba(0,212,255,0.08)', transform: 'rotate(6deg) translate(10px,10px)', boxShadow: '6px 6px 20px rgba(0,0,0,0.4)' }} />
              <div className="absolute inset-0" style={{ borderRadius: 24, background: 'rgba(168,85,247,0.04)', border: '1px solid rgba(168,85,247,0.08)', transform: 'rotate(-4deg) translate(-8px,5px)', boxShadow: '6px 6px 20px rgba(0,0,0,0.4)' }} />

              {/* Main card */}
              <div className="relative clay-cyan p-6 sm:p-8">
                <div className="text-5xl mb-5 text-center">👨‍💻</div>
                <div className="text-center mb-6">
                  <div className="font-display text-xl mb-1" style={{ color: '#e2e8f4', letterSpacing: '.06em' }}>AKHIL KUMAR</div>
                  <div className="font-mono text-xs uppercase tracking-widest" style={{ color: '#00d4ff' }}>
                    Developer &amp; Security Enthusiast
                  </div>
                </div>

                {/* Skill bars — edit label, width %, and color */}
                <div className="space-y-3">
                  {[
                    { label: 'Full Stack Dev',   w: 90, c: '#00d4ff' },
                    // { label: 'Cybersecurity',    w: 80, c: '#ff6b35' },
                    // { label: 'Blockchain/Web3',  w: 70, c: '#a855f7' },
                    { label: 'AR/VR Dev',        w: 65, c: '#34d399' },
                  ].map((s) => (
                    <div key={s.label}>
                      <div className="flex justify-between mb-1">
                        <span className="font-mono text-xs" style={{ color: '#64748b' }}>{s.label}</span>
                        <span className="font-mono text-xs" style={{ color: s.c }}>{s.w}%</span>
                      </div>
                      <div className="h-1.5 rounded-full" style={{ background: 'rgba(0,0,0,0.3)', boxShadow: 'inset 1px 1px 3px rgba(0,0,0,0.4)' }}>
                        <div className="h-full rounded-full" style={{ width: `${s.w}%`, background: s.c, boxShadow: `0 0 8px ${s.c}60`, transition: 'width 1.2s cubic-bezier(.16,1,.3,1)' }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* LeetCode floating badge */}
              <div className="absolute -bottom-4 -right-2 sm:-right-4 animate-float-badge"
                style={{ borderRadius: 16, background: 'linear-gradient(135deg,rgba(255,161,22,0.15) 0%,rgba(160,90,0,0.08) 100%)', border: '1px solid rgba(255,161,22,0.2)', padding: '10px 14px', boxShadow: '4px 4px 14px rgba(0,0,0,0.4),-2px -2px 6px rgba(255,161,22,0.05),inset 1px 1px 0 rgba(255,161,22,0.15)', backdropFilter: 'blur(12px)' }}>
                <div className="flex items-center gap-2 font-mono text-xs" style={{ color: '#ffa116' }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
                  </svg>
                  akhil0045
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
