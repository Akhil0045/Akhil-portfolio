// // ============================================================
// //  Skills — Skill cards grid + LeetCode tracker + Leadership
// //
// //  Layout:
// //   Top:    8 skill category cards (2×4 on desktop)
// //   Bottom: LeetCode live stats | Leadership timeline
// //
// //  To edit skills: update SKILLS_DATA in data/constants.js
// //  To edit leadership: update LEADERSHIP in data/constants.js
// //  LeetCode data is fetched live from your backend proxy.
// // ============================================================

// import { useState, useEffect } from 'react';
// import SectionLabel from '../components/SectionLabel.jsx';
// import { SKILLS_DATA, LEADERSHIP, CERTIFICATIONS } from '../data/constants.js';

// // ── Circular progress ring for LeetCode difficulties ─────────
// function CircleProgress({ solved, total, color, label, size = 84 }) {
//   const pct = total > 0 ? solved / total : 0;
//   const r = (size - 10) / 2;
//   const circ = 2 * Math.PI * r;
//   const offset = circ * (1 - pct);

//   return (
//     <div className="flex flex-col items-center gap-2">
//       <div className="relative clay" style={{ width: size, height: size, borderRadius: '50%', padding: 0 }}>
//         <svg width={size} height={size} style={{ transform: 'rotate(-90deg)' }}>
//           <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="rgba(0,0,0,0.4)" strokeWidth={5} />
//           <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke={color} strokeWidth={5}
//             strokeDasharray={circ} strokeDashoffset={offset}
//             style={{ transition: 'stroke-dashoffset 1.2s cubic-bezier(.16,1,.3,1)', strokeLinecap: 'round', filter: `drop-shadow(0 0 4px ${color}80)` }} />
//         </svg>
//         <div className="absolute inset-0 flex flex-col items-center justify-center">
//           <span className="font-display text-xl leading-none" style={{ color }}>{solved}</span>
//           <span className="font-mono leading-none" style={{ color: '#2d3748', fontSize: 9 }}>/{total}</span>
//         </div>
//       </div>
//       <span className="font-mono text-xs uppercase tracking-widest" style={{ color: '#4a5568' }}>{label}</span>
//     </div>
//   );
// }

// // ── LeetCode live stats panel ─────────────────────────────────
// // Fetches from your local backend → http://localhost:5000/api/leetcode
// // If backend is offline, shows a "start backend" error state.
// function LeetCodeTracker() {
//   const [data, setData] = useState(null);
//   const [status, setStatus] = useState('loading'); // 'loading' | 'success' | 'error'
//   const LC = '#ffa116';

//   useEffect(() => {
//     fetch('http://localhost:5000/api/leetcode', { signal: AbortSignal.timeout(12000) })
//       .then((r) => { if (!r.ok) throw new Error(); return r.json(); })
//       .then((j) => {
//         if (j.error) throw new Error();
//         setData({
//           totalSolved: j.totalSolved,
//           easySolved: j.easySolved,
//           mediumSolved: j.mediumSolved,
//           hardSolved: j.hardSolved,
//           totalEasy: j.totalEasy,
//           totalMedium: j.totalMedium,
//           totalHard: j.totalHard,
//           totalQuestions: j.totalAll,
//           ranking: j.ranking,
//           stale: j.stale ?? false,
//         });
//         setStatus('success');
//       })
//       .catch(() => setStatus('error'));
//   }, []);

//   return (
//     <div className="reveal">
//       <div className="font-mono text-xs uppercase tracking-widest mb-6" style={{ color: 'rgba(0,212,255,0.35)' }}>── LeetCode</div>

//       <div className="clay-yellow overflow-hidden">
//         {/* Header row */}
//         <div className="flex items-center justify-between px-5 py-4" style={{ borderBottom: '1px solid rgba(255,161,22,0.1)' }}>
//           <div className="flex items-center gap-3">
//             <div className="flex items-center justify-center"
//               style={{ width: 34, height: 34, borderRadius: 12, background: 'rgba(255,161,22,0.12)', border: '1px solid rgba(255,161,22,0.2)', boxShadow: 'inset 1px 1px 0 rgba(255,255,255,0.1)' }}>
//               <svg width="14" height="14" viewBox="0 0 24 24" fill={LC}>
//                 <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
//               </svg>
//             </div>
//             <div>
//               <div className="font-semibold text-sm" style={{ color: '#e2e8f4' }}>LeetCode Stats</div>
//               <a href="https://leetcode.com/akhil0045-" target="_blank" rel="noreferrer" data-hover
//                 className="font-mono text-xs" style={{ color: 'rgba(255,161,22,0.5)', textDecoration: 'none' }}>
//                 @akhil0045 ↗
//               </a>
//             </div>
//           </div>
//           {/* Right side: loading dots / rank / error */}
//           {status === 'loading' && (
//             <div className="flex gap-1">
//               {[0, 1, 2].map((i) => (
//                 <div key={i} className="w-1.5 h-1.5 rounded-full"
//                   style={{ background: LC, animation: `float 1s ease-in-out ${i * 0.15}s infinite` }} />
//               ))}
//             </div>
//           )}
//           {status === 'success' && data?.ranking && (
//             <div className="text-right">
//               <div className="font-display text-xl" style={{ color: LC }}>#{data.ranking.toLocaleString()}</div>
//               <div className="font-mono text-xs" style={{ color: data.stale ? '#fbbf24' : 'rgba(255,161,22,0.4)' }}>
//                 {data.stale ? '⚠ cached' : 'Global Rank'}
//               </div>
//             </div>
//           )}
//           {status === 'error' && (
//             <div className="font-mono text-xs" style={{ color: '#ef4444' }}>⚠ Start backend</div>
//           )}
//         </div>

//         {/* Loading spinner */}
//         {status === 'loading' && (
//           <div className="p-10 flex items-center justify-center flex-col gap-4">
//             <div className="w-10 h-10 rounded-full border-2 animate-spin"
//               style={{ borderColor: `${LC}30`, borderTopColor: LC }} />
//             <span className="font-mono text-xs" style={{ color: '#4a5568' }}>Fetching live stats...</span>
//           </div>
//         )}

//         {/* Error state */}
//         {status === 'error' && (
//           <div className="p-8 text-center">
//             <div className="text-3xl mb-3">⚡</div>
//             <div className="font-mono text-xs mb-2" style={{ color: '#4a5568' }}>Run backend to load stats</div>
//             <a href="https://leetcode.com/akhil0045-" target="_blank" rel="noreferrer" data-hover
//               className="font-mono text-xs" style={{ color: LC, textDecoration: 'underline' }}>
//               View profile directly →
//             </a>
//           </div>
//         )}

//         {/* Success state */}
//         {status === 'success' && data && (
//           <div className="p-5">
//             {/* Total solved banner */}
//             <div className="flex items-center gap-5 mb-5 p-4"
//               style={{ borderRadius: 16, background: 'rgba(255,161,22,0.06)', border: '1px solid rgba(255,161,22,0.1)', boxShadow: 'inset 2px 2px 6px rgba(0,0,0,0.3)' }}>
//               <div>
//                 <div className="font-display text-4xl leading-none" style={{ color: LC }}>{data.totalSolved}</div>
//                 <div className="font-mono text-xs mt-1" style={{ color: 'rgba(255,161,22,0.4)' }}>
//                   / {data.totalQuestions || '—'} Solved
//                 </div>
//               </div>
//               <div className="flex-1 h-px" style={{ background: 'rgba(255,255,255,0.05)' }} />
//             </div>

//             {/* Circular difficulty rings */}
//             <div className="flex justify-around mb-5">
//               <CircleProgress solved={data.easySolved || 0} total={data.totalEasy || 870} color="#34d399" label="Easy" size={84} />
//               <CircleProgress solved={data.mediumSolved || 0} total={data.totalMedium || 1832} color={LC} label="Medium" size={84} />
//               <CircleProgress solved={data.hardSolved || 0} total={data.totalHard || 797} color="#ef4444" label="Hard" size={84} />
//             </div>

//             {/* Linear progress bars */}
//             <div className="space-y-3">
//               {[
//                 { label: 'Easy', solved: data.easySolved || 0, total: data.totalEasy || 870, c: '#34d399' },
//                 { label: 'Medium', solved: data.mediumSolved || 0, total: data.totalMedium || 1832, c: LC },
//                 { label: 'Hard', solved: data.hardSolved || 0, total: data.totalHard || 797, c: '#ef4444' },
//               ].map((d) => (
//                 <div key={d.label}>
//                   <div className="flex justify-between mb-1.5">
//                     <span className="font-mono text-xs" style={{ color: d.c }}>{d.label}</span>
//                     <span className="font-mono text-xs" style={{ color: 'rgba(255,255,255,0.15)' }}>{d.solved} / {d.total}</span>
//                   </div>
//                   <div className="h-2 rounded-full" style={{ background: 'rgba(0,0,0,0.35)', boxShadow: 'inset 2px 2px 4px rgba(0,0,0,0.4)', borderRadius: 99 }}>
//                     <div className="h-full rounded-full"
//                       style={{ width: `${Math.min((d.solved / d.total) * 100, 100)}%`, background: d.c, boxShadow: `0 0 8px ${d.c}60`, transition: 'width 1.2s cubic-bezier(.16,1,.3,1)', borderRadius: 99 }} />
//                   </div>
//                 </div>
//               ))}
//             </div>

//             <a href="https://leetcode.com/akhil0045-" target="_blank" rel="noreferrer" data-hover
//               className="flex items-center justify-center gap-2 mt-5 py-3 clay-tag font-mono text-xs uppercase tracking-widest"
//               style={{ background: 'rgba(255,161,22,0.07)', border: '1px solid rgba(255,161,22,0.15)', color: LC, textDecoration: 'none', borderRadius: 14 }}>
//               View Full Profile on LeetCode ↗
//             </a>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// // ── Section wrapper ───────────────────────────────────────────
// export default function Skills() {
//   return (
//     <section id="skills">
//       <div style={{ maxWidth: 1280, margin: '0 auto', padding: '80px 20px' }} className="md:py-40">

//         <SectionLabel num="03" label="Expertise" />

//         <h2 className="reveal d2 font-display mb-12 sm:mb-16"
//           style={{ fontSize: 'clamp(44px,7vw,96px)', lineHeight: 0.9, color: '#e2e8f4' }}>
//           SKILLS &amp;<br />
//           <span style={{ WebkitTextStroke: '1px rgba(0,212,255,0.3)', color: 'transparent' }}>TECHNOLOGIES</span>
//         </h2>

//         {/* Skill category cards grid — data from SKILLS_DATA */}
//         <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
//           {SKILLS_DATA.map((s, i) => (
//             <div key={s.cat} className={`reveal d${(i % 4) + 1} ${s.clayClass} p-5 cursor-default`}>
//               <div className="flex items-center gap-3 mb-4">
//                 <span className="text-lg">{s.icon}</span>
//                 <span className="font-mono text-xs uppercase tracking-widest" style={{ color: s.color }}>{s.cat}</span>
//               </div>
//               <div className="flex flex-wrap gap-1.5">
//                 {s.items.map((item) => (
//                   <span key={item} className="clay-tag text-xs px-2.5 py-1"
//                     style={{ background: `${s.color}09`, border: `1px solid ${s.color}16`, color: '#94a3b8' }}>
//                     {item}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Bottom row: LeetCode tracker + Leadership timeline */}
//         <div className="grid lg:grid-cols-2 gap-12">
//           <LeetCodeTracker />

//           {/* Leadership timeline — data from LEADERSHIP in constants.js */}
//           {/* Leadership + Certifications timeline */}
//          {/* Leadership + Certifications timeline */}
//           <div>
//             <div className="reveal font-mono text-xs uppercase tracking-widest mb-6"
//               style={{ color: 'rgba(0,212,255,0.35)' }}>── Leadership & Certifications</div>

//             <div className="relative pl-8" style={{ borderLeft: '1px solid rgba(0,212,255,0.12)' }}>

//               {/* Leadership entries */}
//               {LEADERSHIP.map((l, i) => (
//                 <div key={l.role} className={`reveal d${i + 1} relative mb-6`}>
//                   {/* Circle dot on timeline */}
//                   <div className="absolute w-3 h-3 rounded-full"
//                     style={{ left: -33, top: 6, background: l.color, boxShadow: `0 0 10px ${l.color}80` }} />
//                   <div className="clay p-5">
//                     <div className="font-mono text-xs mb-0.5" style={{ color: l.color }}>{l.period}</div>
//                     <div className="font-semibold mb-0.5" style={{ color: '#e2e8f4' }}>{l.role}</div>
//                     <div className="font-mono text-xs mb-3" style={{ color: 'rgba(255,255,255,0.2)' }}>{l.org}</div>
//                     <ul className="space-y-1">
//                       {l.points.map(pt => (
//                         <li key={pt} className="text-xs flex gap-2" style={{ color: '#64748b' }}>
//                           <span style={{ color: l.color }}>›</span>{pt}
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 </div>
//               ))}

//               {/* Certifications label */}
//               <div className="reveal relative mb-5">
//                 <div className="absolute w-3 h-3 rounded-full"
//                   style={{ left: -33, top: 4, background: 'rgba(0,212,255,0.3)', border: '1px solid rgba(0,212,255,0.5)' }} />
//                 <span className="font-mono text-xs uppercase tracking-widest"
//                   style={{ color: 'rgba(0,212,255,0.4)' }}>Certifications</span>
//               </div>

//               {/* Certification entries */}
//               {CERTIFICATIONS.map((cert, i) => (
//                 <div key={cert.name} className={`reveal d${i + 1} relative mb-4 last:mb-0`}>
//                   {/* Diamond dot on timeline */}
//                   <div className="absolute w-2.5 h-2.5"
//                     style={{ left: -31, top: 8, background: cert.color, boxShadow: `0 0 8px ${cert.color}80`, transform: 'rotate(45deg)' }} />
//                   <div className="clay p-4 flex items-center gap-3">
//                     <span className="text-lg flex-shrink-0">{cert.icon}</span>
//                     <div className="min-w-0 flex-1">
//                       <div className="text-sm font-semibold leading-tight" style={{ color: '#e2e8f4' }}>{cert.name}</div>
//                       <div className="font-mono text-xs mt-0.5" style={{ color: cert.color }}>{cert.issuer}</div>
//                     </div>
//                     <div className="flex-shrink-0 font-mono text-xs px-2 py-1"
//                       style={{ background: `${cert.color}12`, border: `1px solid ${cert.color}30`, borderRadius: 8, color: cert.color }}>
//                       {cert.year}
//                     </div>
//                   </div>
//                 </div>
//               ))}

//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }


// //  <div>
// //             <div className="reveal font-mono text-xs uppercase tracking-widest mb-6"
// //               style={{ color: 'rgba(0,212,255,0.35)' }}>── Leadership</div>

// //             <div className="relative pl-6" style={{ borderLeft: '1px solid rgba(0,212,255,0.12)' }}>
// //               {LEADERSHIP.map((l, i) => (
// //                 <div key={l.role} className={`reveal d${i + 1} relative mb-7 last:mb-0`}>
// //                   {/* Timeline dot */}
// //                   <div className="absolute -left-7 top-1.5 w-3 h-3 rounded-full"
// //                     style={{ background: l.color, boxShadow: `0 0 10px ${l.color}80` }} />
// //                   <div className="clay p-5">
// //                     <div className="font-mono text-xs mb-0.5" style={{ color: l.color }}>{l.period}</div>
// //                     <div className="font-semibold mb-0.5" style={{ color: '#e2e8f4' }}>{l.role}</div>
// //                     <div className="font-mono text-xs mb-3" style={{ color: 'rgba(255,255,255,0.2)' }}>{l.org}</div>
// //                     <ul className="space-y-1">
// //                       {l.points.map((pt) => (
// //                         <li key={pt} className="text-xs flex gap-2" style={{ color: '#64748b' }}>
// //                           <span style={{ color: l.color }}>›</span>{pt}
// //                         </li>
// //                       ))}
// //                     </ul>
// //                   </div>
// //                 </div>
// //               ))}
// //             </div>
// //           </div>

import { useState, useEffect } from 'react';
import SectionLabel from '../components/SectionLabel.jsx';
import { SKILLS_DATA, LEADERSHIP, CERTIFICATIONS } from '../data/constants.js';

// ── Circular progress ring ────────────────────────────────────
function CircleProgress({ solved, total, color, label, size = 84 }) {
  const r = (size - 10) / 2;
  const circ = 2 * Math.PI * r;
  const offset = circ * (1 - (total > 0 ? solved / total : 0));
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative clay" style={{ width: size, height: size, borderRadius: '50%', padding: 0 }}>
        <svg width={size} height={size} style={{ transform: 'rotate(-90deg)' }}>
          <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="rgba(0,0,0,0.4)" strokeWidth={5} />
          <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke={color} strokeWidth={5}
            strokeDasharray={circ} strokeDashoffset={offset}
            style={{ transition: 'stroke-dashoffset 1.2s cubic-bezier(.16,1,.3,1)', strokeLinecap: 'round', filter: `drop-shadow(0 0 4px ${color}80)` }} />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="font-display text-xl leading-none" style={{ color }}>{solved}</span>
          <span className="font-mono leading-none" style={{ color: '#2d3748', fontSize: 9 }}>/{total}</span>
        </div>
      </div>
      <span className="font-mono text-xs uppercase tracking-widest" style={{ color: '#4a5568' }}>{label}</span>
    </div>
  );
}

// ── LeetCode tracker ──────────────────────────────────────────
function LeetCodeTracker() {
  const [data, setData] = useState(null);
  const [status, setStatus] = useState('loading');
  const LC = '#ffa116';

  useEffect(() => {
    const API_BASE_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000';
    fetch(`${API_BASE_URL}/api/leetcode`, { signal: AbortSignal.timeout(12000) })
      .then(r => { if (!r.ok) throw new Error(); return r.json(); })
      .then(j => {
        if (j.error) throw new Error();
        setData({
          totalSolved: j.totalSolved,
          easySolved: j.easySolved,
          mediumSolved: j.mediumSolved,
          hardSolved: j.hardSolved,
          totalEasy: j.totalEasy,
          totalMedium: j.totalMedium,
          totalHard: j.totalHard,
          totalQuestions: j.totalAll,
          ranking: j.ranking,
          stale: j.stale ?? false,
        });
        setStatus('success');
      })
      .catch(() => setStatus('error'));
  }, []);

  return (
    <div className="clay-yellow overflow-hidden h-full">

      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4"
        style={{ borderBottom: '1px solid rgba(255,161,22,0.1)' }}>
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center"
            style={{ width: 34, height: 34, borderRadius: 12, background: 'rgba(255,161,22,0.12)', border: '1px solid rgba(255,161,22,0.2)' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill={LC}>
              <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
            </svg>
          </div>
          <div>
            <div className="font-semibold text-sm" style={{ color: '#e2e8f4' }}>LeetCode Stats</div>
            <a href="https://leetcode.com/akhil0045-" target="_blank" rel="noreferrer"
              className="font-mono text-xs" style={{ color: 'rgba(255,161,22,0.5)', textDecoration: 'none' }}>
              @akhil0045- ↗
            </a>
          </div>
        </div>
        {status === 'loading' && (
          <div className="flex gap-1">
            {[0, 1, 2].map(i => <div key={i} className="w-1.5 h-1.5 rounded-full" style={{ background: LC, animation: `float 1s ease-in-out ${i * .15}s infinite` }} />)}
          </div>
        )}
        {status === 'success' && data?.ranking && (
          <div className="text-right">
            <div className="font-display text-xl" style={{ color: LC }}>#{data.ranking.toLocaleString()}</div>
            <div className="font-mono text-xs" style={{ color: data.stale ? '#fbbf24' : 'rgba(255,161,22,0.4)' }}>
              {data.stale ? '⚠ cached' : 'Global Rank'}
            </div>
          </div>
        )}
        {status === 'error' && <div className="font-mono text-xs" style={{ color: '#ef4444' }}>⚠ Start backend</div>}
      </div>

      {/* Loading */}
      {status === 'loading' && (
        <div className="p-10 flex flex-col items-center gap-4">
          <div className="w-10 h-10 rounded-full border-2 animate-spin"
            style={{ borderColor: `${LC}30`, borderTopColor: LC }} />
          <span className="font-mono text-xs" style={{ color: '#4a5568' }}>Fetching live stats...</span>
        </div>
      )}

      {/* Error */}
      {status === 'error' && (
        <div className="p-8 text-center">
          <div className="text-3xl mb-3">⚡</div>
          <div className="font-mono text-xs mb-2" style={{ color: '#4a5568' }}>Run backend to load stats</div>
          <a href="https://leetcode.com/akhil0045-" target="_blank" rel="noreferrer"
            className="font-mono text-xs" style={{ color: LC, textDecoration: 'underline' }}>
            View profile directly →
          </a>
        </div>
      )}

      {/* Success */}
      {status === 'success' && data && (
        <div className="p-5">
          <div className="flex items-center gap-4 mb-5 p-4"
            style={{ borderRadius: 16, background: 'rgba(255,161,22,0.06)', border: '1px solid rgba(255,161,22,0.1)' }}>
            <div>
              <div className="font-display text-4xl leading-none" style={{ color: LC }}>{data.totalSolved}</div>
              <div className="font-mono text-xs mt-1" style={{ color: 'rgba(255,161,22,0.4)' }}>
                / {data.totalQuestions || '—'} Solved
              </div>
            </div>
          </div>
          <div className="flex justify-around mb-5">
            <CircleProgress solved={data.easySolved || 0} total={data.totalEasy || 870} color="#34d399" label="Easy" size={84} />
            <CircleProgress solved={data.mediumSolved || 0} total={data.totalMedium || 1832} color={LC} label="Medium" size={84} />
            <CircleProgress solved={data.hardSolved || 0} total={data.totalHard || 797} color="#ef4444" label="Hard" size={84} />
          </div>
          <div className="space-y-3 mb-5">
            {[
              { label: 'Easy', solved: data.easySolved || 0, total: data.totalEasy || 870, c: '#34d399' },
              { label: 'Medium', solved: data.mediumSolved || 0, total: data.totalMedium || 1832, c: LC },
              { label: 'Hard', solved: data.hardSolved || 0, total: data.totalHard || 797, c: '#ef4444' },
            ].map(d => (
              <div key={d.label}>
                <div className="flex justify-between mb-1.5">
                  <span className="font-mono text-xs" style={{ color: d.c }}>{d.label}</span>
                  <span className="font-mono text-xs" style={{ color: 'rgba(255,255,255,0.15)' }}>{d.solved} / {d.total}</span>
                </div>
                <div className="h-2 rounded-full" style={{ background: 'rgba(0,0,0,0.35)' }}>
                  <div className="h-full rounded-full"
                    style={{ width: `${Math.min((d.solved / d.total) * 100, 100)}%`, background: d.c, boxShadow: `0 0 8px ${d.c}60`, transition: 'width 1.2s cubic-bezier(.16,1,.3,1)', borderRadius: 99 }} />
                </div>
              </div>
            ))}
          </div>
          <a href="https://leetcode.com/akhil0045-" target="_blank" rel="noreferrer"
            className="flex items-center justify-center gap-2 py-3 font-mono text-xs uppercase tracking-widest"
            style={{ background: 'rgba(255,161,22,0.07)', border: '1px solid rgba(255,161,22,0.15)', color: LC, textDecoration: 'none', borderRadius: 14 }}>
            View Full Profile on LeetCode ↗
          </a>
        </div>
      )}
    </div>
  );
}

// ── Main section ──────────────────────────────────────────────
export default function Skills() {
  return (
    <section id="skills">
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '80px 20px' }} className="md:py-40">

        <SectionLabel num="03" label="Expertise" />

        <h2 className="reveal d2 font-display mb-12 sm:mb-16"
          style={{ fontSize: 'clamp(44px,7vw,96px)', lineHeight: 0.9, color: '#e2e8f4' }}>
          SKILLS &amp;<br />
          <span style={{ WebkitTextStroke: '1px rgba(0,212,255,0.3)', color: 'transparent' }}>TECHNOLOGIES</span>
        </h2>

        {/* Skills grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {SKILLS_DATA.map((s, i) => (
            <div key={s.cat} className={`reveal d${(i % 4) + 1} ${s.clayClass} p-5 cursor-default`}>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-lg">{s.icon}</span>
                <span className="font-mono text-xs uppercase tracking-widest" style={{ color: s.color }}>{s.cat}</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {s.items.map(item => (
                  <span key={item} className="clay-tag text-xs px-2.5 py-1"
                    style={{ background: `${s.color}09`, border: `1px solid ${s.color}16`, color: '#94a3b8' }}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* ── Bottom two columns ── */}
        <div className="grid lg:grid-cols-2 gap-12 items-stretch">

          {/* LEFT — LeetCode */}
          <div className="reveal flex flex-col justify-end">
            <div className="font-mono text-xs uppercase tracking-widest mb-4"
              style={{ color: 'rgba(0,212,255,0.35)' }}>── LeetCode</div>
            <LeetCodeTracker />
          </div>

          {/* RIGHT — Leadership + Certifications */}
          <div className="reveal">
            <div className="font-mono text-xs uppercase tracking-widest mb-4"
              style={{ color: 'rgba(0,212,255,0.35)' }}>── Leadership & Certifications</div>

            {/* Timeline */}
            <div className="relative" style={{ paddingLeft: 28, borderLeft: '1px solid rgba(0,212,255,0.12)' }}>

              {/* Leadership */}
              {LEADERSHIP.map((l, i) => (
                <div key={l.role} className={`reveal d${i + 1} relative mb-5`}>
                  <div className="absolute w-3 h-3 rounded-full"
                    style={{ left: -34, top: 6, background: l.color, boxShadow: `0 0 10px ${l.color}80` }} />
                  <div className="clay p-4">
                    <div className="font-mono text-xs mb-0.5" style={{ color: l.color }}>{l.period}</div>
                    <div className="font-semibold text-sm mb-0.5" style={{ color: '#e2e8f4' }}>{l.role}</div>
                    <div className="font-mono text-xs mb-2" style={{ color: 'rgba(255,255,255,0.2)' }}>{l.org}</div>
                    <ul className="space-y-1">
                      {l.points.map(pt => (
                        <li key={pt} className="text-xs flex gap-2" style={{ color: '#64748b' }}>
                          <span style={{ color: l.color }}>›</span>{pt}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}

              {/* Certifications label node */}
              <div className="relative mb-4">
                <div className="absolute w-2 h-2 rounded-full"
                  style={{ left: -33, top: 3, background: 'rgba(0,212,255,0.4)', border: '1px solid rgba(0,212,255,0.6)' }} />
                <span className="font-mono text-xs uppercase tracking-widest"
                  style={{ color: 'rgba(0,212,255,0.35)' }}>Certifications</span>
              </div>

              {/* Cert entries */}
              {CERTIFICATIONS.map((cert, i) => (
                <div key={cert.name} className={`reveal d${i + 1} relative mb-3 last:mb-0`}>
                  <div className="absolute w-2.5 h-2.5"
                    style={{ left: -32, top: 10, background: cert.color, boxShadow: `0 0 6px ${cert.color}80`, transform: 'rotate(45deg)' }} />
                  <div className="clay p-3 flex items-center gap-3">
                    <span className="text-base flex-shrink-0">{cert.icon}</span>
                    <div className="min-w-0 flex-1">
                      <div className="text-sm font-semibold leading-tight" style={{ color: '#e2e8f4' }}>{cert.name}</div>
                      <div className="font-mono text-xs mt-0.5" style={{ color: cert.color }}>{cert.issuer}</div>
                    </div>
                    <div className="flex-shrink-0 flex items-center gap-2">
                      <div className="font-mono text-xs px-2 py-1"
                        style={{ background: `${cert.color}12`, border: `1px solid ${cert.color}30`, borderRadius: 8, color: cert.color }}>
                        {cert.year}
                      </div>
                      {/* Verify link — paste your Drive link in constants.js */}
                      {cert.link && (
                        <a href={cert.link} target="_blank" rel="noreferrer"
                          className="font-mono text-xs px-2 py-1 transition-all duration-200"
                          style={{ background: `${cert.color}15`, border: `1px solid ${cert.color}40`, borderRadius: 8, color: cert.color, textDecoration: 'none' }}
                          onMouseEnter={e => e.currentTarget.style.background = `${cert.color}30`}
                          onMouseLeave={e => e.currentTarget.style.background = `${cert.color}15`}>
                          Verify ↗
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}