// ============================================================
//  ✏️  DATA / CONSTANTS  — MAIN FILE TO EDIT
//  Change your projects, skills, stats, links, and EmailJS
//  config all in one place. No need to touch other files.
// ============================================================

// ── Chatbot resume context ────────────────────────────────────
// The Claude AI reads this to answer visitor questions.
// Update whenever you add new projects or achievements.
export const RESUME_CONTEXT = `
Akhil Kumar — CS Engineering student at KIET Group of Institutions,
Delhi NCR, graduating July 2027. CGPA: 8.04.
PROJECTS: 1.AnonSphere (Dec2025–Feb2026) — MERN+Socket.io, AES-256, SHA-256, bcrypt.
2.Quick Show (Apr2025–Ongoing) — React, Node.js, MongoDB, Clerk Auth.
3.ZeroTrace (Nov2025–Ongoing) — C++, Solidity, Ethereum, IPFS, NIST SP 800-88.
4.3D Quiz Game (2024–2025) — Unity, Vuforia, AR/VR, educational.
5.Safe Shore (2025–Ongoing) — disaster alerting, geolocation, real-time.
SKILLS: C, C++, C#, Python, Java, JavaScript, React, Node.js, Express.js,
MongoDB, Tailwind CSS, Socket.io, Solidity, Ethereum, IPFS, Unity, Vuforia,
Blender, Git, GitHub, Figma, Firebase, Supabase, PostgreSQL.
LEETCODE: akhil0045 — competitive programmer, DSA.
LEADERSHIP: Event Lead CyberSecureX (20-member, 150+ participants, CTF).
Tech Lead Technocrats (15+ members, 40% project completion increase).
EDUCATION: B.Tech CSE KIET 2027 (8.04). Senior Secondary 88.5%. Secondary 80.6%.
CONTACT: akhil87901@gmail.com | GitHub: Akhil0045 | LeetCode: akhil0045-
`;

// Suggestion chips shown when chatbot opens
export const CHATBOT_QUICK_PROMPTS = [
  "Tell me about Akhil's projects",
  "What stack does he use?",
  "What's his LeetCode profile?",
  "Is he available for work?",
  "Show his leadership",
];

// Keyword → color map used to highlight text in chatbot responses
export const KEYWORDS = {
  "React": "#00d4ff", "Node.js": "#00d4ff", "MongoDB": "#00d4ff", "Socket.io": "#00d4ff", "MERN": "#00d4ff",
  "JavaScript": "#00d4ff", "Python": "#00d4ff", "C++": "#00d4ff", "Tailwind": "#00d4ff", "Express": "#00d4ff",
  "LeetCode": "#00d4ff", "DSA": "#00d4ff",
  "AnonSphere": "#a855f7", "Quick Show": "#a855f7", "ZeroTrace": "#a855f7", "3D Quiz Game": "#a855f7", "Safe Shore": "#a855f7",
  "AES-256": "#ff6b35", "SHA-256": "#ff6b35", "bcrypt": "#ff6b35", "Ethereum": "#ff6b35", "Solidity": "#ff6b35",
  "IPFS": "#ff6b35", "NIST": "#ff6b35", "blockchain": "#ff6b35", "CTF": "#ff6b35",
  "Unity": "#ff6b35", "Vuforia": "#ff6b35", "AR/VR": "#ff6b35",
  "akhil0045-": "#34d399", "8.04": "#34d399", "competitive": "#34d399",
  "Tech Lead": "#fbbf24", "Event Lead": "#fbbf24", "CyberSecureX": "#fbbf24", "Technocrats": "#fbbf24",
  "KIET": "#f472b6", "Computer Science": "#f472b6", "B.Tech": "#f472b6",
};

// ── Projects list ─────────────────────────────────────────────
// clayClass options: clay-cyan / clay-purple / clay-orange /
//   clay-green / clay-yellow / clay-pink / clay-blue / clay
export const PROJECTS = [
  {
    num: '01', name: 'AnonSphere', emoji: '🔒',
    period: 'Dec 2025 – Feb 2026', type: 'Full-Stack · Security',
    desc: 'Secure anonymous real-time messaging — no tracking, no logs. Military-grade encryption with automatic message expiry.',
    detail: 'MERN + Socket.io for real-time comm. SHA-256 client-side hashing, bcrypt private rooms, AES-256 at rest, MongoDB TTL auto-deletion.',
    tags: ['MERN', 'Socket.io', 'AES-256', 'SHA-256', 'bcrypt', 'MongoDB TTL'],
    clayClass: 'clay-cyan', accent: '#00d4ff',
    github: 'https://github.com/Akhil0045/AnonSphere', // ← update with real repo link
  },
  {
    num: '02', name: 'Safe Shore', emoji: '🌊',
    period: '2025 – Ongoing', type: 'Full-Stack · Social Impact',
    desc: 'Crowdsourced real-time disaster alerting — community-driven, geolocation-aware emergency reports.',
    detail: 'Real-time geo-push alerts, community upvoting, offline-first PWA architecture for disaster scenarios.',
    tags: ['React', 'Node.js', 'MongoDB', 'Geolocation', 'Real-time', 'PWA'],
    clayClass: 'clay-yellow', accent: '#fbbf24',
    github: 'https://github.com/Akhil0045',
  },

  {
    num: '03', name: 'ZeroTrace', emoji: '🛡️',
    period: 'Nov 2025 – Ongoing', type: 'Systems · Blockchain',
    desc: 'Bootable OS-independent disk sanitizer with blockchain-verified Certificate of Destruction.',
    detail: 'C++ + Linux, NIST SP 800-88, ATA Secure Erase, NVMe Format, Gutmann overwrite, Ethereum smart contract + IPFS.',
    tags: ['C++', 'Linux', 'Solidity', 'Ethereum', 'IPFS', 'NIST SP 800-88'],
    clayClass: 'clay-orange', accent: '#ff6b35',
    github: 'https://github.com/ambar-chakravartty/zerotrace',
  },
  {
    num: '04', name: 'Quick Show', emoji: '🎬',
    period: 'Apr 2025 – Sep 2025', type: 'Full-Stack · Platform',
    desc: 'Cinema-grade movie booking with live seat selection — seats update instantly across all connected users.',
    detail: 'React + Tailwind UI, Clerk Auth for secure login, Express + MongoDB with race-condition-safe seat locking.',
    tags: ['React', 'Node.js', 'MongoDB', 'Clerk Auth', 'Tailwind CSS'],
    clayClass: 'clay-purple', accent: '#a855f7',
    github: 'https://github.com/Akhil0045/QUICKSHOW',
  },
  {
    num: '05', name: '3D Quiz Game', emoji: '🎮',
    period: ' Oct 2024 –March 2025', type: 'Game Dev · AR · Education',
    desc: 'Immersive 3D educational game where quiz questions spawn based on your environment context.',
    detail: 'Unity 3D + Vuforia AR markers, environment-triggered question sets, classroom ready, Blender 3D assets.',
    tags: ['Unity', 'Vuforia', 'Blender', 'AR/VR', 'C#', '3D Modeling'],
    clayClass: 'clay-pink', accent: '#f472b6',
    github: 'https://github.com/Akhil0045',
  },

  {
    num: '06', name: 'Herbal AR', emoji: '🌿',
    period: '2024 – 2025', type: 'Education · AR · Web3D',
    desc: 'Interactive educational platform to explore medicinal plants in 3D — visualize, rotate, and learn about plant properties in real-time.',
    detail: 'Three.js for web-based 3D rendering, Unity + Vuforia for AR camera overlay. Users can scan physical plants or browse a 3D library. Includes plant taxonomy, medicinal uses, and habitat data.',
    tags: ['Three.js', 'Unity', 'Vuforia', 'AR/VR', 'WebGL', 'Education'],
    clayClass: 'clay-green', accent: '#34d399',
  },
];

// ── Skills grid — each object becomes one card ────────────────
export const SKILLS_DATA = [
  { cat: 'Languages', icon: '⌨️', clayClass: 'clay-cyan', color: '#00d4ff', items: ['C', 'C++', 'C#', 'Python', 'Java', 'JavaScript'] },
  { cat: 'Frontend', icon: '🎨', clayClass: 'clay-purple', color: '#a855f7', items: ['React', 'HTML5', 'CSS3', 'Tailwind CSS', 'Vite'] },
  { cat: 'Backend', icon: '⚙️', clayClass: 'clay-orange', color: '#ff6b35', items: ['Node.js', 'Express.js', 'MongoDB', 'PostgreSQL', 'REST APIs'] },
  { cat: 'Blockchain', icon: '⛓️', clayClass: 'clay-green', color: '#34d399', items: ['Solidity', 'Ethereum', 'IPFS', 'Smart Contracts'] },
  { cat: 'Security', icon: '🔐', clayClass: 'clay-yellow', color: '#fbbf24', items: ['AES-256', 'SHA-256', 'bcrypt', 'NIST Standards', 'CTF'] },
  { cat: 'AR / Game', icon: '🎮', clayClass: 'clay-pink', color: '#f472b6', items: ['Unity 3D', 'Vuforia', 'Blender', 'C#', 'AR Markers'] },
  { cat: 'Tools', icon: '🛠️', clayClass: 'clay-blue', color: '#60a5fa', items: ['Git', 'GitHub', 'Figma', 'Firebase', 'Supabase', 'Linux'] },
  { cat: 'Coursework', icon: '📚', clayClass: 'clay', color: '#94a3b8', items: ['DSA', 'OS', 'DBMS', 'Networks', 'Cryptography'] },
];

// ── Hero stats row — [value, label, color] ────────────────────
export const HERO_STATS = [
  ['5+', 'Projects Built', '#00d4ff'],
  ['25+', 'Members Mentored', '#a855f7'],
  ['8.04', 'CGPA', '#34d399'],
  ['akhil0045-', 'LeetCode', '#ffa116'],
];

// ── Scrolling ticker band ─────────────────────────────────────
export const TICKER_ITEMS = [
  'Full-Stack Dev', 'React ', 'Node.js', 'MongoDB', 'Socket.io',
  'Blockchain', 'Solidity', 'Unity 3D', 'AR/VR', 'LeetCode',
  'Security', 'AES-256', 'IPFS', 'Open Source',
];

// ── Contact social links ──────────────────────────────────────
export const SOCIAL_LINKS = [
  { icon: '✉️', label: 'Email', val: 'akhil87901@gmail.com', href: 'mailto:akhil87901@gmail.com', c: '#00d4ff', clay: 'clay-cyan' },
  { icon: '⌨️', label: 'GitHub', val: 'github.com/Akhil0045', href: 'https://github.com/Akhil0045', c: '#a855f7', clay: 'clay-purple' },
  { icon: '💼', label: 'LinkedIn', val: 'linkedin.com/in/akhilkumar', href: '#', c: '#34d399', clay: 'clay-green' },
  { icon: '🧩', label: 'LeetCode', val: 'leetcode.com/akhil0045-', href: 'https://leetcode.com/akhil0045-', c: '#ffa116', clay: 'clay-yellow' },
];

// ── Leadership timeline entries ───────────────────────────────
export const LEADERSHIP = [
  {
    role: 'Tech Lead', org: 'Club Technocrats, KIET',
    period: 'May 2025 – Present', color: '#00d4ff',
    points: [
      'Mentored 15+ members in full-stack development',
      'Increased project completion rate by 40%',
      'Guided 10+ juniors in AR-VR technologies',
    ],
  },
  {
    role: 'Event Lead', org: 'Club CyberSecureX, KIET',
    period: 'May 2025 – Sep 2025', color: '#ff6b35',
    points: [
      'Led 20-member event coordination team',
      'Organized CTF competitions & CyberConclave',
      'Attracted 150+ participants to events',
    ],
  },
];

// ── Certifications ────────────────────────────────────────────
export const CERTIFICATIONS = [
  { name: 'AWS Cloud Practitioner', issuer: 'Amazon Web Services', icon: '☁️', color: '#ff9900', year: '2026', link: 'https://drive.google.com/your-aws-link' },
  { name: 'Networking Essentials', issuer: 'Cisco', icon: '🌐', color: '#00bceb', year: 'ongoing', link: 'https://drive.google.com/your-cisco-link' },
  { name: 'DevOps Fundamentals', issuer: 'DevOps Institute', icon: '⚙️', color: '#a855f7', year: '2025', link: 'https://drive.google.com/your-devops-link' },
];
// ── EmailJS Configuration ─────────────────────────────────────
// HOW TO SETUP (free, no backend needed):
// 1. Create account at https://emailjs.com
// 2. Click "Add New Service" → choose Gmail → copy Service ID
// 3. Click "Email Templates" → Create template → copy Template ID
//    Your template should use these variables:
//      {{from_name}}   — sender's name
//      {{from_email}}  — sender's email
//      {{subject}}     — email subject
//      {{message}}     — message body
// 4. Account → API Keys → copy your Public Key
// Then paste all three values below:
export const EMAILJS_CONFIG = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
};
// ── Certifications ────────────────────────────────────────────


