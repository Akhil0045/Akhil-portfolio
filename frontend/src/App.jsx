// ============================================================
//  App.jsx — Root component and routing hub
//
//  ROUTING:
//    /   -> Portfolio (the main single-page portfolio)
//
//  To add a new page e.g. /blog:
//    1. Create src/pages/Blog.jsx
//    2. import Blog from './pages/Blog.jsx'
//    3. Add <Route path="/blog" element={<Blog />} /> below
//
//  SECTIONS: reorder the components inside <main> to change layout.
//  Each section lives in src/sections/ — edit independently.
// ============================================================

import { useState, useEffect }  from 'react';
import { Routes, Route }        from 'react-router-dom';

import GlobalStyles from './styles/GlobalStyles.jsx';  // All CSS
import useReveal    from './hooks/useReveal.js';        // Scroll animations
import Cursor       from './components/Cursor.jsx';    // Custom cursor

// Page sections — each in its own file for easy editing
import Nav      from './sections/Nav.jsx';
import Hero     from './sections/Hero.jsx';
import Ticker   from './sections/Ticker.jsx';
import About    from './sections/About.jsx';
import Projects from './sections/Projects.jsx';
import Skills   from './sections/Skills.jsx';
import Contact  from './sections/Contact.jsx';
import Footer   from './sections/Footer.jsx';
import Chatbot  from './sections/Chatbot.jsx';

// ─────────────────────────────────────────────────────────────
// Portfolio — the main single-page layout
// ─────────────────────────────────────────────────────────────
function Portfolio() {
  // Which section is in view — drives the nav highlight
  const [active, setActive] = useState('home');

  // Activate scroll-reveal animations (.reveal, .reveal-left etc.)
  useReveal();

  // Watch sections with IntersectionObserver
  // A section becomes 'active' once 35% of it is visible
  useEffect(() => {
    const sectionIds = ['home', 'about', 'projects', 'skills', 'contact'];

    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        }),
      { threshold: 0.35 }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <GlobalStyles />
      <Cursor />
      <Nav active={active} />

      {/* Reorder components here to change page section order */}
      <main>
        <Hero />
        <Ticker />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <Footer />
      <Chatbot />
    </>
  );
}

// ─────────────────────────────────────────────────────────────
// App — defines all URL routes for the site
// ─────────────────────────────────────────────────────────────
export default function App() {
  return (
    <Routes>
      {/* Main portfolio page */}
      <Route path="/" element={<Portfolio />} />

      {/* Catch-all: unknown URLs redirect back to portfolio */}
      <Route path="*" element={<Portfolio />} />

      {/* — ADD NEW PAGES BELOW —
          <Route path="/blog"     element={<Blog />} />
          <Route path="/case/:id" element={<CaseStudy />} />  */}
    </Routes>
  );
}
