// ============================================================
//  Cursor — Custom animated cursor
//
//  Two elements:
//   • #cursor-dot  — snaps instantly to mouse position
//   • #cursor-ring — lags behind with lerp smoothing (12%)
//
//  When mouse moves over a, button, or [data-hover],
//  both elements grow slightly (via CSS cursor-hover class, stays cyan).
//  Hidden automatically on touch devices via CSS media query.
// ============================================================

import { useEffect, useRef } from 'react';

export default function Cursor() {
  const dotRef  = useRef(null);
  const ringRef = useRef(null);
  const pos     = useRef({ x: 0, y: 0 }); // real mouse position
  const ring    = useRef({ x: 0, y: 0 }); // lagging ring position
  const raf     = useRef(null);

  useEffect(() => {
    const onMove = (e) => { pos.current = { x: e.clientX, y: e.clientY }; };

    // Add hover effect when over interactive elements
    const onOver = (e) => {
      if (e.target.closest('a, button, [data-hover]'))
        document.body.classList.add('cursor-hover');
    };
    const onOut = () => document.body.classList.remove('cursor-hover');

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseover', onOver);
    window.addEventListener('mouseout',  onOut);

    // Animation loop — ring lerps toward dot each frame
    const tick = () => {
      if (dotRef.current) {
        dotRef.current.style.left = pos.current.x + 'px';
        dotRef.current.style.top  = pos.current.y + 'px';
      }
      // Lerp at 12% per frame for smooth trailing
      ring.current.x += (pos.current.x - ring.current.x) * 0.12;
      ring.current.y += (pos.current.y - ring.current.y) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.left = ring.current.x + 'px';
        ringRef.current.style.top  = ring.current.y + 'px';
      }
      raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseover', onOver);
      window.removeEventListener('mouseout',  onOut);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <>
      <div id="cursor-dot"  ref={dotRef}  />
      <div id="cursor-ring" ref={ringRef} />
    </>
  );
}
