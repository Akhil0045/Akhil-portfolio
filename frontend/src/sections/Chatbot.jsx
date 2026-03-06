// ============================================================
//  Chatbot — Floating AI assistant widget
//
//  Uses Anthropic's Claude API (via claude.ai's proxy).
//  The assistant answers questions about Akhil using
//  RESUME_CONTEXT defined in data/constants.js.
//
//  To change the greeting message: edit initialMessage below
//  To add quick prompts: edit CHATBOT_QUICK_PROMPTS in constants.js
//  To change AI behavior: edit the system prompt in the send() call
// ============================================================

import { useState, useEffect, useRef } from 'react';
import Highlight from '../components/Highlight.jsx';
import { RESUME_CONTEXT, CHATBOT_QUICK_PROMPTS } from '../data/constants.js';

// Initial greeting shown when chat opens
const initialMessage = {
  role: 'assistant',
  text: "Hi! 👋 I'm Akhil's portfolio assistant. Ask me about his projects, tech stack, LeetCode, or how to reach him!",
};

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState([initialMessage]);
  const [inp, setInp] = useState('');
  const [loading, setLoading] = useState(false);
  const [showQuick, setShowQuick] = useState(true); // hide quick prompts after first message

  const endRef = useRef(null);
  const inpRef = useRef(null);

  // Scroll to bottom + focus input when new messages arrive
  useEffect(() => {
    if (open) {
      endRef.current?.scrollIntoView({ behavior: 'smooth' });
      if (!showQuick || msgs.length > 1) inpRef.current?.focus();
    }
  }, [msgs, open]);

  // Send a message — accepts either typed text or a quick prompt
  const send = async (quickText) => {
    const msg = (quickText || inp).trim();
    if (!msg) return;

    setInp('');
    setShowQuick(false);
    setMsgs((m) => [...m, { role: 'user', text: msg }]);
    setLoading(true);

    try {
      const API_BASE_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000';
      const res = await fetch(`${API_BASE_URL}/api/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          // System prompt: tells Claude what context to use and how to respond
          system: `You are Akhil Kumar's portfolio AI assistant. Only answer based on this info:\n\n${RESUME_CONTEXT}\n\nBe concise, enthusiastic, and highlight strengths. Under 120 words unless asked for detail.`,
          messages: [
            // Send full chat history so Claude has conversation context
            ...msgs
              .filter((m) => m.role !== 'system')
              .map((m) => ({ role: m.role, content: m.text })),
            { role: 'user', content: msg },
          ],
        }),
      });
      const data = await res.json();
      setMsgs((m) => [...m, { role: 'assistant', text: data.response || "Sorry, couldn't get a response." }]);
    } catch {
      setMsgs((m) => [...m, { role: 'assistant', text: 'Network error. Please try again.' }]);
    }

    setLoading(false);
  };

  return (
    <>
      {/* ── FAB (Floating Action Button) ── */}
      <div className="fixed z-50 flex flex-col items-end gap-3" style={{ bottom: 20, right: 16 }}>
        {/* Tooltip hint — visible when chat is closed, desktop only */}
        {!open && (
          <div className="hidden sm:block animate-slide-up clay font-mono text-xs px-3 py-1.5"
            style={{ color: '#00d4ff', borderRadius: 12, fontSize: 11 }}>
            Ask about Akhil ↓
          </div>
        )}

        {/* Open/close button */}
        <button data-hover onClick={() => setOpen((o) => !o)}
          className="w-14 h-14 flex items-center justify-center text-xl transition-all duration-300"
          style={{
            borderRadius: 18,
            background: open
              ? 'linear-gradient(145deg,rgba(239,68,68,0.18),rgba(180,30,30,0.1))'
              : 'linear-gradient(145deg,rgba(0,212,255,0.18),rgba(0,120,180,0.1))',
            border: open ? '1px solid rgba(239,68,68,0.25)' : '1px solid rgba(0,212,255,0.22)',
            boxShadow: open
              ? '6px 6px 20px rgba(0,0,0,0.5),inset 1px 1px 0 rgba(255,255,255,0.06)'
              : '6px 6px 20px rgba(0,0,0,0.5),inset 1px 1px 0 rgba(255,255,255,0.07)',
            backdropFilter: 'blur(14px)',
            transform: open ? 'rotate(45deg)' : 'none',
          }}>
          {open ? '✕' : '💬'}
        </button>
      </div>

      {/* ── Chat window ── */}
      <div className="fixed z-50 transition-all duration-500 origin-bottom-right"
        style={{
          bottom: 90, right: 16,
          width: 'min(400px,calc(100vw - 32px))',
          opacity: open ? 1 : 0,
          transform: open ? 'scale(1) translateY(0)' : 'scale(0.92) translateY(14px)',
          pointerEvents: open ? 'auto' : 'none',
        }}>
        <div className="clay-chatbot overflow-hidden">

          {/* Window header */}
          <div className="flex items-center justify-between px-5 py-3.5"
            style={{ background: 'linear-gradient(90deg,rgba(0,212,255,0.06),rgba(168,85,247,0.04))', borderBottom: '1px solid rgba(0,212,255,0.08)' }}>
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-9 h-9 flex items-center justify-center text-base"
                  style={{ borderRadius: 12, background: 'rgba(0,212,255,0.1)', border: '1px solid rgba(0,212,255,0.18)', boxShadow: 'inset 1px 1px 0 rgba(255,255,255,0.08)' }}>
                  🤖
                </div>
                {/* Online indicator dot */}
                <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full border-2"
                  style={{ background: '#34d399', borderColor: '#0a0a18', boxShadow: '0 0 6px #34d399' }} />
              </div>
              <div>
                <div className="text-sm font-semibold" style={{ color: '#e2e8f4' }}>Akhil's AI Assistant</div>
                <div className="font-mono text-xs" style={{ color: '#34d399' }}>● Always available</div>
              </div>
            </div>
            {/* Decorative macOS-style traffic lights */}
            <div className="flex gap-1.5">
              {['#ef4444', '#fbbf24', '#34d399'].map((c, i) => (
                <div key={i} className="w-2.5 h-2.5 rounded-full" style={{ background: c, opacity: 0.6 }} />
              ))}
            </div>
          </div>

          {/* Message list */}
          <div className="chat-scroll overflow-y-auto p-4 space-y-3" style={{ height: 'min(310px,42vh)' }}>
            {msgs.map((msg, i) => (
              <div key={i} className={`flex gap-2.5 chat-in ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                {/* Assistant avatar */}
                {msg.role === 'assistant' && (
                  <div className="w-7 h-7 flex items-center justify-center text-sm flex-shrink-0 mt-0.5"
                    style={{ borderRadius: 10, background: 'rgba(0,212,255,0.1)', border: '1px solid rgba(0,212,255,0.18)', boxShadow: 'inset 1px 1px 0 rgba(255,255,255,0.06)' }}>
                    🤖
                  </div>
                )}
                {/* Message bubble */}
                <div className="text-sm leading-relaxed px-3.5 py-2.5"
                  style={{
                    maxWidth: '75%',
                    background: msg.role === 'user'
                      ? 'linear-gradient(135deg,rgba(0,212,255,0.12),rgba(0,100,160,0.08))'
                      : 'linear-gradient(145deg,rgba(20,20,40,0.9),rgba(14,14,30,0.95))',
                    border: msg.role === 'user' ? '1px solid rgba(0,212,255,0.18)' : '1px solid rgba(255,255,255,0.06)',
                    color: '#c8d6e5',
                    borderRadius: msg.role === 'user' ? '16px 4px 16px 16px' : '4px 16px 16px 16px',
                    boxShadow: '3px 3px 10px rgba(0,0,0,0.35)',
                  }}>
                  {/* Highlight keywords in assistant messages */}
                  {msg.role === 'assistant' ? <Highlight text={msg.text} /> : msg.text}
                </div>
                {/* User avatar */}
                {msg.role === 'user' && (
                  <div className="w-7 h-7 flex items-center justify-center text-sm flex-shrink-0 mt-0.5"
                    style={{ borderRadius: 10, background: 'rgba(168,85,247,0.1)', border: '1px solid rgba(168,85,247,0.18)' }}>
                    👤
                  </div>
                )}
              </div>
            ))}

            {/* Typing indicator */}
            {loading && (
              <div className="flex gap-2.5">
                <div className="w-7 h-7 flex items-center justify-center text-sm flex-shrink-0"
                  style={{ borderRadius: 10, background: 'rgba(0,212,255,0.1)', border: '1px solid rgba(0,212,255,0.18)' }}>
                  🤖
                </div>
                <div className="px-4 py-3 flex gap-1.5 items-center"
                  style={{ background: 'linear-gradient(145deg,rgba(20,20,40,0.9),rgba(14,14,30,0.95))', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '4px 16px 16px 16px', boxShadow: '3px 3px 10px rgba(0,0,0,0.35)' }}>
                  {[0, 1, 2].map((i) => (
                    <div key={i} className="w-1.5 h-1.5 rounded-full"
                      style={{ background: '#00d4ff', animation: `float 1s ease-in-out ${i * 0.15}s infinite` }} />
                  ))}
                </div>
              </div>
            )}
            <div ref={endRef} />
          </div>

          {/* Quick prompt chips — visible until user sends first message */}
          {showQuick && (
            <div className="px-3 py-2.5 flex flex-wrap gap-1.5"
              style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}>
              {CHATBOT_QUICK_PROMPTS.map((q) => (
                <button key={q} data-hover onClick={() => send(q)}
                  className="clay-tag font-mono text-xs px-2.5 py-1.5 transition-all duration-200"
                  style={{ background: 'rgba(0,212,255,0.05)', border: '1px solid rgba(0,212,255,0.13)', color: '#64748b', cursor: 'pointer', fontSize: 10 }}>
                  {q}
                </button>
              ))}
            </div>
          )}

          {/* Input row */}
          <div className="p-3 flex gap-2" style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}>
            <input
              ref={inpRef}
              value={inp}
              onChange={(e) => setInp(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && !e.shiftKey && send()}
              placeholder="Ask me anything about Akhil..."
              disabled={loading}
              className="clay-input flex-1 text-sm px-3.5 py-2.5"
              style={{ fontFamily: 'DM Mono, monospace', opacity: loading ? 0.5 : 1 }}
            />
            <button data-hover onClick={() => send()} disabled={!inp.trim() || loading}
              className="w-10 h-10 flex items-center justify-center transition-all duration-200"
              style={{
                borderRadius: 12, border: 'none', fontWeight: 700,
                background: inp.trim() && !loading ? 'linear-gradient(145deg,#00e5ff,#00a8cc)' : 'rgba(255,255,255,0.05)',
                color: inp.trim() && !loading ? '#07070f' : '#2d3748',
                boxShadow: inp.trim() && !loading ? '3px 3px 8px rgba(0,212,255,0.3),inset 1px 1px 0 rgba(255,255,255,0.3)' : 'none',
              }}>
              →
            </button>
          </div>

          <div className="text-center pb-2 font-mono" style={{ fontSize: 9, color: '#151525', letterSpacing: '.15em' }}>
            POWERED BY CLAUDE AI
          </div>
        </div>
      </div>
    </>
  );
}
