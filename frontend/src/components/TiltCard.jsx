// ============================================================
//  TiltCard — 3D perspective tilt on hover
//
//  Calculates mouse position relative to card center and
//  applies a rotateX + rotateY transform (max ±8 degrees).
//  Also scales up 2% to lift the card off the page.
//  Disabled on touch devices via CSS (.tilt-card rule).
//
//  Usage:
//   <TiltCard className="clay-cyan p-6">...content...</TiltCard>
// ============================================================

import { useRef } from 'react';

export default function TiltCard({ children, className = '' }) {
  const ref = useRef(null);

  const handleMove = (e) => {
    const r = ref.current.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width  - 0.5) * 16;   // -8 to +8 deg
    const y = ((e.clientY - r.top)  / r.height - 0.5) * -16;  // -8 to +8 deg
    ref.current.style.transform =
      `perspective(800px) rotateX(${y}deg) rotateY(${x}deg) scale3d(1.02,1.02,1.02)`;
  };

  const handleLeave = () => {
    ref.current.style.transform =
      'perspective(800px) rotateX(0) rotateY(0) scale3d(1,1,1)';
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={`tilt-card ${className}`}
    >
      {children}
    </div>
  );
}
