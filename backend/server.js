// ============================================================
//  BACKEND SERVER — LeetCode Proxy + Health Check
//
//  EmailJS handles contact form from the browser (no backend needed).
//  This server only exists to:
//   1. Proxy LeetCode GraphQL API (bypasses CORS)
//   2. Cache LeetCode data for 10 minutes
//
//  START:  cd backend && node server.js
//  PORT:   5000  (configurable via .env PORT=)
// ============================================================

const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// ── Middleware ────────────────────────────────────────────────
app.use(cors({
  // Allow your local dev server + deployed frontend URL
  origin: ['http://localhost:3000', 'http://localhost:5173', 'https://akhil-portfolio-theta.vercel.app', process.env.FRONTEND_URL].filter(Boolean),
}));
app.use(express.json());

// ── LeetCode GraphQL Proxy ────────────────────────────────────
// LeetCode blocks direct browser requests (CORS). We fetch from
// Node.js server-side instead and forward the data to the frontend.
const LEETCODE_GQL = 'https://leetcode.com/graphql';

const LC_QUERY = `
  query getUserProfile($username: String!) {
    allQuestionsCount {
      difficulty
      count
    }
    matchedUser(username: $username) {
      username
      profile {
        ranking
        reputation
      }
      submitStats: submitStatsGlobal {
        acSubmissionNum {
          difficulty
          count
          submissions
        }
      }
    }
  }
`;

// In-memory cache — avoids hammering LeetCode every request
// Refreshes every 10 minutes (CACHE_TTL)
let lcCache = { data: null, ts: 0 };
const CACHE_TTL = 10 * 60 * 1000; // 10 minutes in ms

app.get('/api/leetcode', async (req, res) => {
  const username = process.env.LEETCODE_USERNAME || 'akhil0045-';

  // Serve from cache if still fresh
  if (lcCache.data && Date.now() - lcCache.ts < CACHE_TTL) {
    console.log('📦 LeetCode: serving cached data');
    return res.json(lcCache.data);
  }

  try {
    // Fetch from LeetCode's official GraphQL endpoint
    const response = await fetch(LEETCODE_GQL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Referer': 'https://leetcode.com',
        'User-Agent': 'Mozilla/5.0 (compatible; portfolio-bot/1.0)',
        'Origin': 'https://leetcode.com',
      },
      body: JSON.stringify({ query: LC_QUERY, variables: { username } }),
      signal: AbortSignal.timeout(10000), // 10s timeout
    });

    if (!response.ok) throw new Error(`LeetCode responded with ${response.status}`);

    const json = await response.json();
    if (json.errors || !json.data?.matchedUser) {
      throw new Error(json.errors?.[0]?.message || 'User not found on LeetCode');
    }

    const user = json.data.matchedUser;
    const totals = json.data.allQuestionsCount;
    const stats = user.submitStats.acSubmissionNum;

    // Helper to find count by difficulty label
    const get = (arr, diff) => arr.find(x => x.difficulty === diff)?.count ?? 0;

    const payload = {
      username: user.username,
      ranking: user.profile.ranking,
      totalSolved: get(stats, 'All'),
      easySolved: get(stats, 'Easy'),
      mediumSolved: get(stats, 'Medium'),
      hardSolved: get(stats, 'Hard'),
      totalEasy: get(totals, 'Easy'),
      totalMedium: get(totals, 'Medium'),
      totalHard: get(totals, 'Hard'),
      totalAll: get(totals, 'All'),
    };

    // Save to cache
    lcCache = { data: payload, ts: Date.now() };

    console.log(`✅ LeetCode fetched: ${username} — ${payload.totalSolved} solved`);
    res.json(payload);

  } catch (err) {
    console.error('❌ LeetCode fetch error:', err.message);

    // Return stale cache if available rather than a hard error
    if (lcCache.data) {
      console.log('⚠️  Returning stale cache');
      return res.json({ ...lcCache.data, stale: true });
    }

    res.status(502).json({ error: err.message });
  }
});

// ── Backend Integration for Chatbot ─────────────────────────────────────
app.post('/api/chat', async (req, res) => {
  const { messages, system } = req.body;
  const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY;
  const MODEL_NAME = process.env.MODEL_NAME || "stepfun/step-3.5-flash:free";

  if (!OPENROUTER_API_KEY || OPENROUTER_API_KEY.includes("YOUR_OPENROUTER_API_KEY")) {
    return res.status(500).json({ error: "OpenRouter API Key is missing or using placeholder. Please set OPENROUTER_API_KEY in backend/.env" });
  }

  try {
    const formattedMessages = system
      ? [{ role: "system", content: system }, ...messages]
      : messages;

    const payload = {
      model: MODEL_NAME,
      messages: formattedMessages,
    };

    const headers = {
      'Authorization': `Bearer ${OPENROUTER_API_KEY}`,
      'Content-Type': 'application/json',
      'HTTP-Referer': process.env.FRONTEND_URL || 'https://akhil-portfolio.com',
      'X-Title': 'Akhil Portfolio Chatbot',
    };

    let response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers,
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      console.log(`Primary model failed (${response.status}). Trying openrouter/auto...`);
      const fallbackPayload = { ...payload, model: "openrouter/auto" };
      response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers,
        body: JSON.stringify(fallbackPayload)
      });
    }

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`Error from OpenRouter: ${errorText}`);
      return res.status(response.status).json({ error: `OpenRouter Error: ${errorText}` });
    }

    const data = await response.json();
    const aiMessage = data.choices[0].message.content;

    res.json({ response: aiMessage });
  } catch (err) {
    console.error('❌ Chat proxy error:', err);
    res.status(500).json({ error: err.message });
  }
});

// ── Health check — use to verify server is running ───────────
app.get('/api/health', (_, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// ── Start ─────────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`\n⚡ Portfolio Backend running on http://localhost:${PORT}`);
  console.log(`📊 LeetCode API: GET http://localhost:${PORT}/api/leetcode`);
  console.log(`💬 Chat API: POST http://localhost:${PORT}/api/chat\n`);
});
