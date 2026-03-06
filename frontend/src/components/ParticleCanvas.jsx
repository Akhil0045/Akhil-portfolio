// ============================================================
//  ParticleCanvas — Animated floating particle field
//
//  Canvas renders 80 cyan dots that slowly drift and connect
//  with faint lines when within 110px of each other.
//  Used as the background layer in the Hero section.
//  Auto-resizes when window size changes.
// ============================================================

import { useEffect, useRef } from 'react';

export default function ParticleCanvas() {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let W, H, particles = [], raf;

    const resize = () => {
      W = canvas.width  = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Spawn 80 particles with random position, velocity, and opacity
    for (let i = 0; i < 80; i++) {
      particles.push({
        x:  Math.random() * window.innerWidth,
        y:  Math.random() * window.innerHeight,
        r:  Math.random() * 1.4 + 0.3,           // radius 0.3–1.7px
        vx: (Math.random() - 0.5) * 0.28,         // slow drift
        vy: (Math.random() - 0.5) * 0.28,
        o:  Math.random() * 0.4 + 0.08,           // opacity 0.08–0.48
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, W, H);

      particles.forEach((p, i) => {
        // Move particle
        p.x += p.vx;
        p.y += p.vy;
        // Wrap around edges
        if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;

        // Draw the dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0,212,255,${p.o})`;
        ctx.fill();

        // Draw lines to nearby particles
        particles.slice(i + 1).forEach((p2) => {
          const dx   = p.x - p2.x;
          const dy   = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 110) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(0,212,255,${0.05 * (1 - dist / 110)})`;
            ctx.lineWidth   = 0.5;
            ctx.stroke();
          }
        });
      });

      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      className="absolute inset-0 w-full h-full"
      style={{ opacity: 0.55 }}
    />
  );
}
