// ============================================================
//  Typewriter — Animated typing + deleting effect
//
//  Props:
//   words    — array of strings to cycle through
//   className — CSS class for the span
//   style     — inline style for the span
//
//  Timing:
//   90ms per char when typing
//   50ms per char when deleting
//   2200ms pause after fully typed
// ============================================================

import { useState, useEffect } from 'react';

export default function Typewriter({ words, className = '', style = {} }) {
  const [idx, setIdx]   = useState(0);     // which word we're on
  const [sub, setSub]   = useState(0);     // how many chars shown
  const [del, setDel]   = useState(false); // typing or deleting?
  const [txt, setTxt]   = useState('');

  useEffect(() => {
    const word  = words[idx];
    const timer = setTimeout(() => {
      if (!del) {
        // Type next character
        setTxt(word.slice(0, sub + 1));
        setSub((s) => s + 1);
        if (sub + 1 === word.length) setTimeout(() => setDel(true), 2200);
      } else {
        // Delete last character
        setTxt(word.slice(0, sub - 1));
        setSub((s) => s - 1);
        if (sub - 1 === 0) {
          setDel(false);
          setIdx((i) => (i + 1) % words.length);
        }
      }
    }, del ? 50 : 90);

    return () => clearTimeout(timer);
  }, [sub, del, idx, words]);

  return (
    <span className={className} style={style}>
      {txt}
      <span style={{ opacity: 0.7 }}>_</span>
    </span>
  );
}
