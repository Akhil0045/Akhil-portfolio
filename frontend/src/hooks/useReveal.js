// ============================================================
//  useReveal — Scroll-triggered reveal hook
//
//  Watches all .reveal / .reveal-left / .reveal-right elements.
//  Adds .visible class when each enters the viewport (once only).
//  Called in App.jsx — applies globally to every section.
// ============================================================

import { useEffect } from 'react';

export default function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');

    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // animate only once
          }
        }),
      { threshold: 0.1 }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  });
}
