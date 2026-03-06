// ============================================================
//  Highlight — Keyword color highlighter
//
//  Splits plain text into parts, wraps recognized keywords
//  with a colored <strong> tag based on the KEYWORDS map.
//  Used in chatbot assistant messages.
//
//  Usage:
//   <Highlight text="He builds with React and Node.js..." />
// ============================================================

import { KEYWORDS } from '../data/constants.js';

export default function Highlight({ text }) {
  // Sort by length desc so "Node.js" matches before "Node"
  const keys = Object.keys(KEYWORDS).sort((a, b) => b.length - a.length);
  const rx   = new RegExp(
    `(${keys.map((k) => k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`,
    'gi'
  );

  return (
    <>
      {text.split(rx).map((part, i) => {
        const key = keys.find((k) => k.toLowerCase() === part.toLowerCase());
        return key
          ? <strong key={i} style={{ color: KEYWORDS[key], fontWeight: 600 }}>{part}</strong>
          : part;
      })}
    </>
  );
}
