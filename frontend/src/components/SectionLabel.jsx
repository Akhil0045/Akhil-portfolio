// ============================================================
//  SectionLabel — Small decorative section number + title row
//
//  Usage:
//   <SectionLabel num="01" label="About Me" />
// ============================================================

export default function SectionLabel({ num, label }) {
  return (
    <div className="reveal flex items-center gap-4 mb-6">
      {/* Section number */}
      <span className="font-mono text-xs tracking-widest" style={{ color: 'rgba(0,212,255,0.35)' }}>
        {num}
      </span>
      {/* Gradient line */}
      <span
        className="h-px w-12"
        style={{ background: 'linear-gradient(90deg,rgba(0,212,255,0.4),transparent)' }}
      />
      {/* Label text */}
      <span className="font-mono text-xs tracking-widest uppercase" style={{ color: 'rgba(0,212,255,0.35)' }}>
        {label}
      </span>
    </div>
  );
}
