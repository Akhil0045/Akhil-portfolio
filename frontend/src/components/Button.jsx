// ============================================================
//  components/Button.jsx
//  ► Reusable clay button — two variants:
//
//    variant="primary"  → filled bright cyan (default)
//    variant="ghost"    → dark outlined cyan
//
//  ► Hover animation: simple CSS scale(1.07) with spring bounce.
//    NO magnetic movement. NO wobble. Just grows slightly.
//
//  ► Renders as <a> when href is given, <button> otherwise.
//
//  Usage examples:
//    <Button href="#projects">View Projects →</Button>
//    <Button variant="ghost" href="#contact">Get In Touch</Button>
//    <Button onClick={handleSubmit}>Send Message →</Button>
//    <Button className="w-full py-4 text-sm">Full Width</Button>
// ============================================================
export default function Button({
  children,
  href,
  onClick,
  variant = 'primary',   // 'primary' | 'ghost'
  className = '',
  style = {},
  disabled = false,
}) {
  // Pick the correct CSS class for the variant
  const variantClass = variant === 'primary' ? 'btn-primary' : 'btn-ghost';

  // Font class shared by both variants
  const baseClass = `${variantClass} font-mono uppercase tracking-widest ${className}`;

  // If href provided → render as anchor link
  if (href) {
    return (
      <a href={href} className={baseClass} style={style}>
        {children}
      </a>
    );
  }

  // Otherwise → render as button
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={baseClass}
      style={{ opacity: disabled ? 0.5 : 1, ...style }}
    >
      {children}
    </button>
  );
}
