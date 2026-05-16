import React, { useState } from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Projects from './Projects';
import Terminal from './Terminal';
import Experience from './Experience';
import Contact from './Contact';
import Cursor from './Cursor';

const App: React.FC = () => {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  const toggleTheme = () => {
    setTheme(t => {
      const next = t === 'dark' ? 'light' : 'dark';
      document.body.classList.toggle('light', next === 'light');
      return next;
    });
  };

  return (
    <>
      {/* Custom cursor elements */}
      <div id="cursor" />
      <div id="cursor-ring" />
      <Cursor />

      <Navbar theme={theme} onToggleTheme={toggleTheme} />

      <main>
        <Hero />
        <About />
        <Projects />
        <Terminal onToggleTheme={toggleTheme} />
        <Experience />
        <Contact />
      </main>

      <footer style={{
        background: 'var(--bg)', borderTop: '1px solid var(--border)',
        padding: '2rem 3rem', display: 'flex', justifyContent: 'space-between',
        alignItems: 'center', flexWrap: 'wrap', gap: '1rem',
      }}>
        <div style={{ color: 'var(--text3)', fontSize: '0.78rem', fontFamily: "'JetBrains Mono',monospace" }}>
          © 2025 Alex Chen. Built with React + TypeScript.
        </div>
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          {['GitHub', 'LinkedIn', 'Twitter', 'Resume'].map(link => (
            <a key={link} href="#" style={{ color: 'var(--text3)', textDecoration: 'none', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent2)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--text3)')}>
              {link}
            </a>
          ))}
        </div>
      </footer>

      {/* Theme toggle FAB */}
      <div onClick={toggleTheme} title="Toggle theme" style={{ position: 'fixed', bottom: '2rem', right: '2rem', width: 44, height: 44, borderRadius: '50%', background: 'var(--surface)', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', zIndex: 50, fontSize: '1.1rem', transition: 'all 0.2s' }}>
        {theme === 'dark' ? '☀️' : '🌙'}
      </div>
    </>
  );
};

export default App;