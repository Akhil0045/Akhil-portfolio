// ============================================================
//  Footer — Simple bottom bar
// ============================================================

export default function Footer() {
  return (
    <footer className="py-10" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left"
        style={{ maxWidth: 1280, margin: '0 auto', padding: '0 20px' }}>

        {/* Logo */}
        <div className="font-display text-xl" style={{ color: 'rgba(0,212,255,0.7)', letterSpacing: '.1em' }}>AK.</div>

        {/* Copyright */}
        <div className="font-mono text-xs order-last sm:order-none" style={{ color: '#4a5568' }}>
          © 2026 Akhil Kumar · Built with React, passion &amp; caffeine
        </div>

        {/* Social links */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-5">
          {[
            ['GitHub', 'https://github.com/Akhil0045'],
            ['LinkedIn', '#'],
            ['LeetCode', 'https://leetcode.com/akhil0045'],
            ['Email', 'mailto:akhil87901@gmail.com'],
          ].map(([label, href]) => (
            <a key={label} href={href} target="_blank" rel="noreferrer" data-hover
              className="font-mono text-xs uppercase tracking-widest transition-colors duration-200"
              style={{ color: '#64748b', textDecoration: 'none' }}
              onMouseEnter={(e) => (e.target.style.color = '#00d4ff')}
              onMouseLeave={(e) => (e.target.style.color = '#64748b')}>
              {label}
            </a>
          ))}
        </div>

      </div>
    </footer>
  );
}