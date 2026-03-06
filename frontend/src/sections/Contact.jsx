// ============================================================
//  Contact — Social links + EmailJS contact form
//
//  Uses EmailJS (no backend needed) to send emails directly
//  from the browser. Free tier allows 200 emails/month.
//
//  SETUP:
//   1. npm install @emailjs/browser
//   2. Fill in EMAILJS_CONFIG in data/constants.js
//
//  Left:  social link cards (from SOCIAL_LINKS in constants.js)
//  Right: contact form (name, email, subject, message)
// ============================================================

import { useState } from 'react';
import emailjs       from '@emailjs/browser';
import SectionLabel  from '../components/SectionLabel.jsx';
import { SOCIAL_LINKS, EMAILJS_CONFIG } from '../data/constants.js';

export default function Contact() {
  // Form field state
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  // Button state: 'idle' | 'sending' | 'success' | 'error'
  const [status, setStatus] = useState('idle');

  // Update a single field without losing others
  const setField = (key) => (e) => setForm((v) => ({ ...v, [key]: e.target.value }));

  const submit = async () => {
    // Basic validation — all required except subject
    if (!form.name || !form.email || !form.message) return;

    setStatus('sending');

    try {
      // EmailJS send — uses template variables {{from_name}}, {{from_email}}, {{subject}}, {{message}}
      await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        {
          from_name:  form.name,
          from_email: form.email,
          subject:    form.subject || '(no subject)',
          message:    form.message,
        },
        EMAILJS_CONFIG.publicKey
      );

      setStatus('success');
      setForm({ name: '', email: '', subject: '', message: '' }); // clear form
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus('error');
    }

    // Reset button after 5 seconds
    setTimeout(() => setStatus('idle'), 5000);
  };

return (
    <section id="contact" style={{ background: 'rgba(0,0,0,0.2)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '80px 20px' }} className="md:py-40">

        {/* Heading — full width on top */}
        <div className="mb-12">
          <SectionLabel num="04" label="Contact" />
          <h2 className="reveal d2 font-display mt-4"
            style={{ fontSize: 'clamp(44px,6vw,78px)', lineHeight: 0.9, color: '#e2e8f4' }}>
            LET'S BUILD<br />
            <span style={{ WebkitTextStroke: '1px rgba(0,212,255,0.4)', color: 'transparent' }}>TOGETHER</span>
          </h2>
          <p className="reveal d3 text-lg leading-relaxed mt-6"
            style={{ color: '#64748b', fontWeight: 300, maxWidth: 480 }}>
            Have a project in mind, a job opportunity, or just want to connect —
            my inbox is always open.
          </p>
        </div>

        {/* Two columns — social links + form — both aligned from same top */}
        <div className="grid lg:grid-cols-2 gap-8 items-center">

          {/* LEFT — Social links */}
          <div className="reveal d4 space-y-3">
            {SOCIAL_LINKS.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer" data-hover
                className={`${s.clay} flex items-center gap-4 p-4 group transition-all duration-300`}
                style={{ textDecoration: 'none', display: 'flex' }}>
                <span className="text-xl">{s.icon}</span>
                <div className="min-w-0">
                  <div className="font-mono text-xs uppercase tracking-widest mb-0.5" style={{ color: s.c }}>{s.label}</div>
                  <div className="text-sm truncate" style={{ color: '#94a3b8' }}>{s.val}</div>
                </div>
                <span className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0"
                  style={{ color: s.c }}>→</span>
              </a>
            ))}
          </div>

          {/* RIGHT — Contact form */}
          <div className="reveal-right d2">
            <div className="clay-cyan p-6 sm:p-8">

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                {[
                  { key: 'name',  label: 'Full Name', placeholder: 'Your name',      type: 'text'  },
                  { key: 'email', label: 'Email',     placeholder: 'your@email.com', type: 'email' },
                ].map((f) => (
                  <div key={f.key}>
                    <label className="block font-mono text-xs uppercase tracking-widest mb-2"
                      style={{ color: 'rgba(0,212,255,0.45)' }}>{f.label}</label>
                    <input type={f.type} value={form[f.key]} placeholder={f.placeholder}
                      onChange={setField(f.key)}
                      className="clay-input w-full text-sm px-4 py-3"
                      style={{ fontFamily: 'DM Mono, monospace' }} />
                  </div>
                ))}
              </div>

              <div className="mb-4">
                <label className="block font-mono text-xs uppercase tracking-widest mb-2"
                  style={{ color: 'rgba(0,212,255,0.45)' }}>Subject</label>
                <input value={form.subject} placeholder="What's this about?"
                  onChange={setField('subject')}
                  className="clay-input w-full text-sm px-4 py-3"
                  style={{ fontFamily: 'DM Mono, monospace' }} />
              </div>

              <div className="mb-6">
                <label className="block font-mono text-xs uppercase tracking-widest mb-2"
                  style={{ color: 'rgba(0,212,255,0.45)' }}>Message</label>
                <textarea rows={5} value={form.message}
                  placeholder="Tell me about your project or idea..."
                  onChange={setField('message')}
                  className="clay-input w-full text-sm px-4 py-3 resize-none"
                  style={{ fontFamily: 'DM Mono, monospace' }} />
              </div>

              <button data-hover onClick={submit}
                disabled={status === 'sending' || !form.name || !form.email || !form.message}
                className={`w-full py-4 font-mono text-sm uppercase tracking-widest transition-all duration-300 ${
                  status === 'idle' || status === 'sending' ? 'clay-btn-primary' : 'clay'
                }`}
                style={{
                  color: status === 'idle' || status === 'sending' ? '#07070f' : status === 'success' ? '#34d399' : '#ef4444',
                  fontWeight: 600,
                  opacity: status === 'sending' ? 0.7 : 1,
                  ...(status !== 'idle' && status !== 'sending'
                    ? { border: `1px solid ${status === 'success' ? 'rgba(52,211,153,0.3)' : 'rgba(239,68,68,0.3)'}` }
                    : {}),
                }}>
                {status === 'idle'    && 'Send Message →'}
                {status === 'sending' && '⟳ Sending...'}
                {status === 'success' && '✓ Message Sent!'}
                {status === 'error'   && '✗ Failed — Try Again'}
              </button>

              <p className="text-center font-mono mt-3" style={{ color: 'rgba(0,212,255,0.2)', fontSize: 10 }}>
                Powered by EmailJS · Set credentials in data/constants.js
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );}
