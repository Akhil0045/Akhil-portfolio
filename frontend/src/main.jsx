// ============================================================
//  main.jsx — App entry point
//
//  BrowserRouter wraps the whole app so React Router works.
//  All routing logic lives in App.jsx.
//
//  To add a new page later (e.g. /blog):
//    1. Create src/pages/Blog.jsx
//    2. Add <Route path="/blog" element={<Blog />} /> in App.jsx
// ============================================================

import React             from 'react';
import ReactDOM          from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App               from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* BrowserRouter lets React Router manage URL navigation */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
