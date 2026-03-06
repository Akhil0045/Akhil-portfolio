// // ============================================================
// //  Hero — Full-screen landing section
// //
// //  Contains:
// //   • Particle canvas background
// //   • "Available" status pill
// //   • Large name heading (AKHIL KUMAR)
// //   • Typewriter cycling role text
// //   • Two CTA buttons (View Projects, Get In Touch)
// //   • Stats row (from HERO_STATS in constants.js)
// //   • Scroll indicator at the bottom
// //
// //  To change typewriter roles: edit the words={[...]} array below
// //  To change stats: edit HERO_STATS in data/constants.js
// // ============================================================

// import Typewriter     from '../components/Typewriter.jsx';
// import ParticleCanvas from '../components/ParticleCanvas.jsx';
// import { HERO_STATS } from '../data/constants.js';

// export default function Hero() {
//   return (
//     <section id="home" className="relative min-h-screen flex flex-col justify-center overflow-hidden" style={{ paddingTop: 64 }}>

//       {/* Animated particle field — background layer */}
//       <ParticleCanvas />

//       {/* Decorative spinning ring — large screens only */}
//       <div className="absolute right-16 top-1/3 hidden lg:block animate-spin-slow"
//         style={{ width: 280, height: 280, opacity: 0.5 }}>
//         <div className="w-full h-full rounded-full" style={{ border: '1px dashed rgba(0,212,255,0.1)' }} />
//       </div>
//       {/* Thin vertical gradient lines on edges — xl screens */}
//       <div className="absolute left-0 top-1/2 -translate-y-1/2 w-px h-48 hidden xl:block"
//         style={{ background: 'linear-gradient(to bottom,transparent,rgba(0,212,255,0.25),transparent)' }} />
//       <div className="absolute right-0 top-1/2 -translate-y-1/2 w-px h-48 hidden xl:block"
//         style={{ background: 'linear-gradient(to bottom,transparent,rgba(0,212,255,0.25),transparent)' }} />

//       <div className="relative z-10 w-full" style={{ maxWidth: 1280, margin: '0 auto', padding: '40px 20px 100px' }}>

//         {/* ── Availability badge ── */}
//         <div className="inline-flex items-center gap-2 mb-8 px-4 py-2"
//           style={{ borderRadius: 100, background: 'linear-gradient(135deg,rgba(0,212,255,0.1) 0%,rgba(0,100,160,0.06) 100%)', boxShadow: '4px 4px 12px rgba(0,0,0,0.4),-2px -2px 6px rgba(255,255,255,0.03),inset 1px 1px 0 rgba(0,212,255,0.2)', border: '1px solid rgba(0,212,255,0.15)' }}>
//           <span className="w-2 h-2 rounded-full flex-shrink-0"
//             style={{ background: '#34d399', boxShadow: '0 0 8px #34d399', animation: 'pulse-ring 2s ease-out infinite' }} />
//           <span className="font-mono uppercase tracking-widest" style={{ color: '#00d4ff', fontSize: 'clamp(9px,2vw,11px)' }}>
//             AVAILABLE FOR OPPORTUNITIES
//           </span>
//         </div>

//         {/* ── Large name ── */}
//         <h1 className="font-display hero-text leading-none mb-1"
//           style={{ fontSize: 'clamp(64px,13vw,168px)', lineHeight: 0.88, color: '#e2e8f4', letterSpacing: '.01em' }}>
//           AKHIL
//         </h1>
//         {/* Second line rendered as outline text */}
//         <h1 className="font-display hero-text leading-none mb-6"
//           style={{ fontSize: 'clamp(64px,13vw,168px)', lineHeight: 0.88, WebkitTextStroke: '1.5px rgba(0,212,255,0.45)', color: 'transparent', letterSpacing: '.01em' }}>
//           KUMAR
//         </h1>

//         {/* ── Typewriter role ── */}
//         <div className="flex items-center gap-3 mb-6">
//           <div className="h-px flex-shrink-0" style={{ width: 28, background: 'linear-gradient(90deg,#00d4ff,transparent)' }} />
//           {/* To change the cycling roles: edit the words array below */}
//           <Typewriter
//             className="font-mono"
//             style={{ color: '#00d4ff', fontSize: 'clamp(13px,2.5vw,18px)' }}
//             words={['Full-Stack Developer', 'Security Engineer', 'Blockchain Builder', 'AR/VR Explorer', 'LeetCode Grinder']}
//           />
//         </div>

//         {/* ── Tagline ── */}
//         <p className="mb-10 leading-relaxed"
//           style={{ color: '#94a3b8', fontWeight: 300, maxWidth: 480, fontSize: 'clamp(14px,2.5vw,17px)' }}>
//           Building secure, scalable &amp; remarkable software.<br className="hidden sm:block" />
//           B.Tech CSE @ KIET · Delhi NCR · CGPA{' '}
//           <span style={{ color: '#34d399', fontWeight: 600 }}>8.04</span>
//         </p>

//         {/* ── CTA Buttons — simple scale hover ── */}
//         <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-16">
//           <a href="#projects" data-hover
//             className="clay-btn-primary font-mono uppercase tracking-widest inline-flex items-center justify-center"
//             style={{ padding: '14px 32px', fontSize: 'clamp(11px,1.5vw,12px)', width: '100%', maxWidth: 220, textDecoration: 'none' }}>
//             View Projects →
//           </a>
//           <a href="#contact" data-hover
//             className="clay-btn-ghost font-mono uppercase tracking-widest inline-flex items-center justify-center"
//             style={{ padding: '14px 32px', fontSize: 'clamp(11px,1.5vw,12px)', width: '100%', maxWidth: 220, textDecoration: 'none' }}>
//             Get In Touch
//           </a>
//         </div>

//         {/* ── Stats row — data from HERO_STATS in constants.js ── */}
//         <div className="flex flex-wrap items-start pt-8 gap-4 sm:gap-6"
//           style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
//           {HERO_STATS.map(([val, label, color]) => (
//             <div key={label} className="clay flex-shrink-0 px-4 py-3" style={{ minWidth: 90 }}>
//               <div className="font-display leading-none mb-1"
//                 style={{ fontSize: 'clamp(20px,4vw,28px)', color }}>{val}</div>
//               <div className="font-mono uppercase tracking-widest"
//                 style={{ color: '#4a5568', fontSize: 9 }}>{label}</div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* ── Scroll indicator ── */}
//       <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2">
//         <div className="w-6 h-10 flex justify-center pt-1.5"
//           style={{ borderRadius: 99, border: '1px solid rgba(255,255,255,0.12)', boxShadow: 'inset 2px 2px 4px rgba(0,0,0,0.4)' }}>
//           <div className="w-1 h-2.5 rounded-full" style={{ background: '#00d4ff', animation: 'float 1.5s ease-in-out infinite' }} />
//         </div>
//         <span className="font-mono text-xs" style={{ color: '#2d3748', letterSpacing: '.3em' }}>SCROLL</span>
//       </div>
//     </section>
//   );
// }


// ============================================================
//  HeroScene — Three.js 3D object for the Hero section
//
//  Renders a glowing icosahedron (crystal/gem shape) with:
//   • Wireframe outer shell — slowly rotates
//   • Solid inner core with emissive glow
//   • Ring of orbiting particles around it
//   • Responds to mouse movement (subtle tilt)
//
//  To change the shape: swap IcosahedronGeometry with any
//  Three.js geometry e.g. TorusKnotGeometry, OctahedronGeometry
//
//  Requires: npm install three
// ============================================================

// import { useEffect, useRef } from 'react';
// import * as THREE from 'three';

// export default function HeroScene() {
//   const mountRef = useRef(null);
//   const mouseRef = useRef({ x: 0, y: 0 });

//   useEffect(() => {
//     const mount = mountRef.current;
//     if (!mount) return;

//     const W = mount.clientWidth;
//     const H = mount.clientHeight;

//     // ── Renderer ──────────────────────────────────────────────
//     const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
//     renderer.setSize(W, H);
//     renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
//     renderer.setClearColor(0x000000, 0);
//     mount.appendChild(renderer.domElement);

//     // ── Scene & Camera ────────────────────────────────────────
//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(60, W / H, 0.1, 100);
//     camera.position.z = 4;

//     // ── Lighting ──────────────────────────────────────────────
//     scene.add(new THREE.AmbientLight(0x00d4ff, 0.3));

//     const point1 = new THREE.PointLight(0x00d4ff, 2, 10);
//     point1.position.set(3, 3, 3);
//     scene.add(point1);

//     const point2 = new THREE.PointLight(0xa855f7, 1.5, 10);
//     point2.position.set(-3, -2, 2);
//     scene.add(point2);

//     // ── Core — solid dark icosahedron with cyan glow ──────────
//     const matCore = new THREE.MeshPhongMaterial({
//       color: 0x040d18, emissive: 0x003344,
//       specular: 0x00d4ff, shininess: 120,
//       transparent: true, opacity: 0.85,
//     });
//     const core = new THREE.Mesh(new THREE.IcosahedronGeometry(1, 1), matCore);
//     scene.add(core);

//     // ── Wireframe shell 1 — cyan, slightly larger ─────────────
//     const matWire = new THREE.MeshBasicMaterial({
//       color: 0x00d4ff, wireframe: true, transparent: true, opacity: 0.35,
//     });
//     const wire = new THREE.Mesh(new THREE.IcosahedronGeometry(1.18, 1), matWire);
//     scene.add(wire);

//     // ── Wireframe shell 2 — purple, even larger ───────────────
//     const matWire2 = new THREE.MeshBasicMaterial({
//       color: 0xa855f7, wireframe: true, transparent: true, opacity: 0.15,
//     });
//     const wire2 = new THREE.Mesh(new THREE.IcosahedronGeometry(1.38, 1), matWire2);
//     scene.add(wire2);

//     // ── Orbiting particle ring ────────────────────────────────
//     const COUNT = 80;
//     const positions = new Float32Array(COUNT * 3);
//     const angles = new Float32Array(COUNT);
//     const radii = new Float32Array(COUNT);
//     const speeds = new Float32Array(COUNT);
//     const tilts = new Float32Array(COUNT);

//     for (let i = 0; i < COUNT; i++) {
//       angles[i] = Math.random() * Math.PI * 2;
//       radii[i] = 1.6 + Math.random() * 0.8;
//       speeds[i] = 0.003 + Math.random() * 0.004;
//       tilts[i] = (Math.random() - 0.5) * 0.6;
//       positions[i * 3] = Math.cos(angles[i]) * radii[i];
//       positions[i * 3 + 1] = tilts[i];
//       positions[i * 3 + 2] = Math.sin(angles[i]) * radii[i];
//     }

//     const particleGeo = new THREE.BufferGeometry();
//     particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));

//     const particleMat = new THREE.PointsMaterial({
//       color: 0x00d4ff, size: 0.04,
//       transparent: true, opacity: 0.7, sizeAttenuation: true,
//     });
//     const particles = new THREE.Points(particleGeo, particleMat);
//     scene.add(particles);

//     // ── Mouse tilt ────────────────────────────────────────────
//     const onMouseMove = (e) => {
//       mouseRef.current = {
//         x: (e.clientX / window.innerWidth - 0.5) * 2,
//         y: (e.clientY / window.innerHeight - 0.5) * 2,
//       };
//     };
//     window.addEventListener('mousemove', onMouseMove);

//     // ── Resize ────────────────────────────────────────────────
//     const onResize = () => {
//       const w = mount.clientWidth;
//       const h = mount.clientHeight;
//       renderer.setSize(w, h);
//       camera.aspect = w / h;
//       camera.updateProjectionMatrix();
//     };
//     window.addEventListener('resize', onResize);

//     // ── Animation loop ────────────────────────────────────────
//     let frameId;
//     const clock = new THREE.Clock();

//     const animate = () => {
//       frameId = requestAnimationFrame(animate);
//       const t = clock.getElapsedTime();

//       core.rotation.x = t * 0.18;
//       core.rotation.y = t * 0.24;
//       wire.rotation.x = t * 0.12;
//       wire.rotation.y = t * 0.20;
//       wire2.rotation.x = -t * 0.08;
//       wire2.rotation.y = -t * 0.14;

//       // Smooth mouse tilt
//       const tx = mouseRef.current.y * 0.25;
//       core.rotation.x += (tx - core.rotation.x) * 0.02;
//       wire.rotation.x += (tx - wire.rotation.x) * 0.02;
//       wire2.rotation.x += (tx - wire2.rotation.x) * 0.02;

//       // Update particle orbit positions
//       const pos = particleGeo.attributes.position.array;
//       for (let i = 0; i < COUNT; i++) {
//         angles[i] += speeds[i];
//         pos[i * 3] = Math.cos(angles[i]) * radii[i];
//         pos[i * 3 + 1] = tilts[i] + Math.sin(t * 0.5 + i) * 0.08;
//         pos[i * 3 + 2] = Math.sin(angles[i]) * radii[i];
//       }
//       particleGeo.attributes.position.needsUpdate = true;

//       // Pulse glow
//       matCore.emissiveIntensity = 0.5 + Math.sin(t * 1.5) * 0.3;
//       particleMat.opacity = 0.5 + Math.sin(t * 0.8) * 0.2;

//       renderer.render(scene, camera);
//     };
//     animate();

//     // ── Cleanup ───────────────────────────────────────────────
//     return () => {
//       cancelAnimationFrame(frameId);
//       window.removeEventListener('mousemove', onMouseMove);
//       window.removeEventListener('resize', onResize);
//       renderer.dispose();
//       if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement);
//     };
//   }, []);

//   return <div ref={mountRef} style={{ width: '100%', height: '100%', minHeight: 420 }} />;
// }
// ============================================================
//  Hero — Full-screen landing section
//  Left: text content   Right: 3D sphere (desktop only)
// ============================================================

// ============================================================
//  Hero — Full-screen landing section
//  Left: text content   Right: 3D sphere (desktop only)
// ============================================================

import Typewriter from '../components/Typewriter.jsx';
import ParticleCanvas from '../components/ParticleCanvas.jsx';
import HeroScene from '../components/HeroScene.jsx';
import { HERO_STATS } from '../data/constants.js';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center overflow-hidden" style={{ paddingTop: 64 }}>

      <ParticleCanvas />

      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-px h-48 hidden xl:block"
        style={{ background: 'linear-gradient(to bottom,transparent,rgba(0,212,255,0.25),transparent)' }} />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-px h-48 hidden xl:block"
        style={{ background: 'linear-gradient(to bottom,transparent,rgba(0,212,255,0.25),transparent)' }} />

      <div className="relative z-10 w-full" style={{ maxWidth: 1280, margin: '0 auto', padding: '40px 20px 100px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 0 }}>

          {/* ════ LEFT — text content ════ */}
          <div style={{ flex: 1, paddingRight: 40 }}>

            {/* Availability badge */}
            <div className="inline-flex items-center gap-2 mb-8 px-4 py-2"
              style={{ borderRadius: 100, background: 'linear-gradient(135deg,rgba(0,212,255,0.1),rgba(0,100,160,0.06))', boxShadow: '4px 4px 12px rgba(0,0,0,0.4),-2px -2px 6px rgba(255,255,255,0.03),inset 1px 1px 0 rgba(0,212,255,0.2)', border: '1px solid rgba(0,212,255,0.15)' }}>
              <span className="w-2 h-2 rounded-full flex-shrink-0"
                style={{ background: '#34d399', boxShadow: '0 0 8px #34d399', animation: 'pulse-ring 2s ease-out infinite' }} />
              <span className="font-mono uppercase tracking-widest" style={{ color: '#00d4ff', fontSize: 'clamp(9px,2vw,11px)' }}>
                AVAILABLE FOR OPPORTUNITIES
              </span>
            </div>

            {/* Name */}
            <h1 className="font-display hero-text leading-none mb-1"
              style={{ fontSize: 'clamp(64px,10vw,148px)', lineHeight: 0.88, color: '#e2e8f4', letterSpacing: '.01em' }}>
              AKHIL
            </h1>
            <h1 className="font-display hero-text leading-none mb-6"
              style={{ fontSize: 'clamp(64px,10vw,148px)', lineHeight: 0.88, WebkitTextStroke: '1.5px rgba(0,212,255,0.45)', color: 'transparent', letterSpacing: '.01em' }}>
              KUMAR
            </h1>

            {/* Typewriter */}
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px flex-shrink-0" style={{ width: 28, background: 'linear-gradient(90deg,#00d4ff,transparent)' }} />
              <Typewriter
                className="font-mono"
                style={{ color: '#00d4ff', fontSize: 'clamp(13px,2vw,18px)' }}
                words={['Full-Stack Developer', 'AR/VR Explorer', 'LeetCode Grinder']}
              />
            </div>

            {/* Tagline */}
            <p className="mb-10 leading-relaxed"
              style={{ color: '#94a3b8', fontWeight: 300, maxWidth: 440, fontSize: 'clamp(14px,2vw,17px)' }}>
              Building secure, scalable &amp; remarkable software.<br className="hidden sm:block" />
              B.Tech CSE @ KIET · Delhi NCR · CGPA{' '}
              <span style={{ color: '#34d399', fontWeight: 600 }}>8.04</span>
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-16">
              <a href="#projects" data-hover
                className="clay-btn-primary font-mono uppercase tracking-widest inline-flex items-center justify-center"
                style={{ padding: '14px 32px', fontSize: 'clamp(11px,1.5vw,12px)', width: '100%', maxWidth: 220, textDecoration: 'none' }}>
                View Projects →
              </a>
              <a href="#contact" data-hover
                className="clay-btn-ghost font-mono uppercase tracking-widest inline-flex items-center justify-center"
                style={{ padding: '14px 32px', fontSize: 'clamp(11px,1.5vw,12px)', width: '100%', maxWidth: 220, textDecoration: 'none' }}>
                Get In Touch
              </a>
            </div>

            {/* Stats row */}
            <div className="flex flex-wrap items-start pt-8 gap-4 sm:gap-6"
              style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
              {HERO_STATS.map(([val, label, color]) => (
                <div key={label} className="clay flex-shrink-0 px-4 py-3" style={{ minWidth: 90 }}>
                  <div className="font-display leading-none mb-1"
                    style={{ fontSize: 'clamp(20px,3vw,28px)', color }}>{val}</div>
                  <div className="font-mono uppercase tracking-widest"
                    style={{ color: '#4a5568', fontSize: 9 }}>{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ════ RIGHT — 3D sphere only, centered, no badges ════ */}
          <div className="hidden lg:flex flex-shrink-0 items-center justify-center"
            style={{ width: 600, height: 600, position: 'relative' }}>

            {/* Soft glow behind sphere */}
            <div style={{
              position: 'absolute', inset: 0, borderRadius: '50%',
              background: 'radial-gradient(ellipse 70% 70% at 50% 50%, rgba(0,212,255,0.08) 0%, transparent 70%)',
              pointerEvents: 'none',
            }} />

            {/* Three.js canvas */}
            <div style={{ width: 600, height: 600, overflow: 'hidden' }}>
              <HeroScene />
            </div>

          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2">
        <div className="w-6 h-10 flex justify-center pt-1.5"
          style={{ borderRadius: 99, border: '1px solid rgba(255,255,255,0.12)', boxShadow: 'inset 2px 2px 4px rgba(0,0,0,0.4)' }}>
          <div className="w-1 h-2.5 rounded-full" style={{ background: '#00d4ff', animation: 'float 1.5s ease-in-out infinite' }} />
        </div>
        <span className="font-mono text-xs" style={{ color: '#2d3748', letterSpacing: '.3em' }}>SCROLL</span>
      </div>
    </section>
  );
}