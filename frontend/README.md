# Akhil Kumar — Portfolio

Claymorphism portfolio built with React + Vite + Tailwind.
AI chatbot (Claude), live LeetCode stats, EmailJS contact form.

---

## Quick Start

### 1. Frontend

```bash
npm install
npm run dev
```

Open `http://localhost:5173`

---

### 2. EmailJS Setup (Contact Form — no backend needed)

1. Create free account at https://emailjs.com
2. **Add Service** → Gmail → copy **Service ID**
3. **Email Templates** → Create template → copy **Template ID**
   - Template must use these variables:
     - `{{from_name}}` — sender's name
     - `{{from_email}}` — sender's email
     - `{{subject}}` — subject line
     - `{{message}}` — message body
4. **Account → API Keys** → copy **Public Key**
5. Open `src/data/constants.js` and fill in:

```js
export const EMAILJS_CONFIG = {
  serviceId:  'service_abc123',
  templateId: 'template_xyz789',
  publicKey:  'abcDEFghiJKLmno',
};
```

Free tier: 200 emails/month. No backend required.

---

### 3. LeetCode Live Stats (optional)

Requires the backend to bypass CORS.

```bash
cd backend
cp .env.example .env
npm install
npm run dev
```

Backend runs on `http://localhost:5000`.
Without it the LeetCode widget shows a "Start backend" message.

---

## File Structure

```
portfolio/
├── src/
│   ├── App.jsx                  # Root — imports all sections
│   ├── data/
│   │   └── constants.js         # ✏️ EDIT THIS — all your content
│   ├── styles/
│   │   └── GlobalStyles.jsx     # All CSS (claymorphism, buttons, animations)
│   ├── hooks/
│   │   └── useReveal.js         # Scroll reveal hook
│   ├── components/              # Reusable UI pieces
│   │   ├── Cursor.jsx
│   │   ├── ParticleCanvas.jsx
│   │   ├── Typewriter.jsx
│   │   ├── TiltCard.jsx
│   │   ├── SectionLabel.jsx
│   │   └── Highlight.jsx
│   └── sections/                # One file per page section
│       ├── Nav.jsx
│       ├── Hero.jsx
│       ├── Ticker.jsx
│       ├── About.jsx
│       ├── Projects.jsx
│       ├── Skills.jsx
│       ├── Contact.jsx          # Uses EmailJS
│       ├── Footer.jsx
│       └── Chatbot.jsx
└── backend/
    ├── server.js                # LeetCode proxy only
    ├── package.json
    └── .env.example
```

## How to edit content

Everything editable is in **`src/data/constants.js`**:

| What you want to change | Where |
|---|---|
| Projects | `PROJECTS` array |
| Skills | `SKILLS_DATA` array |
| Stats row | `HERO_STATS` array |
| Chatbot knowledge | `RESUME_CONTEXT` string |
| Social links | `SOCIAL_LINKS` array |
| Leadership timeline | `LEADERSHIP` array |
| Contact form email | `EMAILJS_CONFIG` object |
