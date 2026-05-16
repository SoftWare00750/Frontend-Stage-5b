import React, { useState, useEffect } from 'react';

interface NavbarProps {
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
}

const NAV_LINKS = [
  { label: 'About',      href: '#about'            },
  { label: 'Work',       href: '#work'              },
  { label: 'Terminal',   href: '#terminal'          },
  { label: 'Experience', href: '#experience'        },
  { label: 'Contact',    href: '#contact'           },
];

const Navbar: React.FC<NavbarProps> = ({ theme, onToggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navStyle: React.CSSProperties = {
    position: 'fixed',
    top: 0, left: 0, right: 0,
    zIndex: 100,
    padding: '1.2rem 3rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backdropFilter: 'blur(16px)',
    background: scrolled ? 'rgba(5,5,8,0.85)' : 'rgba(5,5,8,0.5)',
    borderBottom: `1px solid ${scrolled ? 'var(--border)' : 'transparent'}`,
    transition: 'background 0.3s, border-color 0.3s',
  };

  const logoStyle: React.CSSProperties = {
    fontFamily: "'DM Serif Display',serif",
    fontSize: '1.4rem',
    letterSpacing: '-0.02em',
    background: 'linear-gradient(135deg,var(--accent2),var(--accent3))',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    textDecoration: 'none',
    cursor: 'pointer',
  };

  const linkStyle: React.CSSProperties = {
    color: 'var(--text2)',
    textDecoration: 'none',
    fontSize: '0.82rem',
    fontWeight: 600,
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
    transition: 'color 0.2s',
    position: 'relative',
  };

  return (
    <nav style={navStyle}>
      {/* Logo */}
      <a href="#hero" style={logoStyle}>AC</a>

      {/* Desktop links */}
      <ul style={{ display: 'flex', gap: '2.5rem', listStyle: 'none', margin: 0, padding: 0 }}
          className="pf-nav-links-desktop">
        {NAV_LINKS.map(({ label, href }) => (
          <li key={label}>
            <a
              href={href}
              style={linkStyle}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--text)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--text2)')}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>

      {/* Right: theme toggle + resume CTA */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <button
          onClick={onToggleTheme}
          aria-label="Toggle theme"
          style={{
            background: 'transparent',
            border: '1px solid var(--border)',
            borderRadius: '6px',
            padding: '0.4rem 0.7rem',
            fontSize: '1rem',
            cursor: 'pointer',
            transition: 'border-color 0.2s',
            lineHeight: 1,
          }}
          onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--accent)')}
          onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--border)')}
        >
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>

        <a
          href="#"
          style={{
            background: 'var(--accent)',
            color: '#fff',
            padding: '0.5rem 1.3rem',
            borderRadius: '4px',
            textDecoration: 'none',
            fontSize: '0.8rem',
            fontWeight: 700,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            transition: 'all 0.2s',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = 'var(--accent2)'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
          onMouseLeave={e => { e.currentTarget.style.background = 'var(--accent)';  e.currentTarget.style.transform = 'translateY(0)';    }}
        >
          Resume ↓
        </a>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
          style={{
            display: 'none',
            background: 'transparent',
            border: '1px solid var(--border)',
            borderRadius: '6px',
            padding: '0.4rem 0.6rem',
            cursor: 'pointer',
            fontSize: '1.1rem',
            color: 'var(--text)',
          }}
          className="pf-hamburger"
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div style={{
          position: 'absolute',
          top: '100%', left: 0, right: 0,
          background: 'var(--bg2)',
          borderBottom: '1px solid var(--border)',
          padding: '1rem 2rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
        }}>
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={() => setMenuOpen(false)}
              style={{ ...linkStyle, fontSize: '0.9rem' }}
            >
              {label}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .pf-nav-links-desktop { display: none !important; }
          .pf-hamburger { display: flex !important; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;