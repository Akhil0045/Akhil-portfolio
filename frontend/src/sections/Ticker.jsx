// ============================================================
//  Ticker — Scrolling marquee band between Hero and About
//
//  Items are doubled so the loop appears seamless.
//  Speed controlled by animation duration in GlobalStyles.jsx
//  → search "animation: ticker"  (currently 28s)
//
//  To change items: edit TICKER_ITEMS in data/constants.js
// ============================================================

import { TICKER_ITEMS } from '../data/constants.js';

export default function Ticker() {
  // Double the array so the CSS loop looks seamless
  const doubled = [...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <div className="overflow-hidden py-3.5"
      style={{
        background: 'linear-gradient(90deg,rgba(0,212,255,0.03) 0%,rgba(168,85,247,0.03) 100%)',
        borderTop: '1px solid rgba(0,212,255,0.07)',
        borderBottom: '1px solid rgba(0,212,255,0.07)',
        boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.03),inset 0 -1px 0 rgba(255,255,255,0.02)',
      }}>
      <div className="flex animate-ticker" style={{ width: 'max-content' }}>
        {doubled.map((item, i) => (
          <div key={i} className="flex items-center gap-5 px-5">
            <span className="font-mono text-xs uppercase tracking-widest whitespace-nowrap"
              style={{ color: '#2a4055' }}>{item}</span>
            <span style={{ color: 'rgba(0,212,255,0.18)', fontSize: 8 }}>◆</span>
          </div>
        ))}
      </div>
    </div>
  );
}
