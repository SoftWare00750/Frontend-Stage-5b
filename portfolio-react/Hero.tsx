import React from 'react';

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        padding: '0 3rem',
        overflow: 'hidden',
      }}
    >
      {/* ── Animated background ── */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        {/* Grid lines */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `
            linear-gradient(rgba(124,106,245,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(124,106,245,0.04) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }} />

        {/* Orbs */}
        <div style={{ position: 'absolute', width: 600, height: 600, borderRadius: '50%', background: 'var(--accent)',  filter: 'blur(80px)', opacity: 0.18, top: -100, right: -100,   animation: 'orb-float 8s ease-in-out infinite alternate' }} />
        <div style={{ position: 'absolute', width: 400, height: 400, borderRadius: '50%', background: 'var(--accent3)', filter: 'blur(80px)', opacity: 0.18, bottom: -50, left: 100,   animation: 'orb-float 8s ease-in-out infinite alternate', animationDelay: '-3s' }} />
        <div style={{ position: 'absolute', width: 300, height: 300, borderRadius: '50%', background: '#f472b6',        filter: 'blur(80px)', opacity: 0.18, top: '40%', right: '30%', animation: 'orb-float 8s ease-in-out infinite alternate', animationDelay: '-5s' }} />
      </div>

      {/* ── Main content ── */}
      <div style={{ position: 'relative', zIndex: 1, maxWidth: 750 }}>

        {/* Badge */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
          background: 'rgba(124,106,245,0.12)',
          border: '1px solid rgba(124,106,245,0.3)',
          padding: '0.4rem 1rem', borderRadius: '100px',
          fontSize: '0.75rem', fontWeight: 600,
          letterSpacing: '0.15em', textTransform: 'uppercase',
          color: 'var(--accent2)', marginBottom: '1.8rem',
          animation: 'fade-up 0.8s ease both',
        }}>
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--accent2)', animation: 'pulse 2s infinite' }} />
          Available for hire — 2025
        </div>

        {/* Name */}
        <h1 style={{
          fontFamily: "'DM Serif Display',serif",
          fontSize: 'clamp(3.5rem,8vw,6.5rem)',
          lineHeight: 1, letterSpacing: '-0.03em',
          marginBottom: '0.3rem',
          animation: 'fade-up 0.8s 0.1s ease both',
        }}>
          <span style={{ display: 'block' }}>Alex</span>
          <span style={{
            display: 'block',
            background: 'linear-gradient(135deg,var(--accent2) 0%,var(--accent3) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            Chen.
          </span>
        </h1>

        {/* Title */}
        <p style={{
          fontFamily: "'JetBrains Mono',monospace",
          fontSize: '1rem', color: 'var(--accent3)',
          marginBottom: '1.5rem',
          animation: 'fade-up 0.8s 0.2s ease both',
        }}>
          &gt; Frontend Engineer &amp; Creative Developer
        </p>

        {/* Description */}
        <p style={{
          fontSize: '1.1rem', lineHeight: 1.8,
          color: 'var(--text2)', maxWidth: 520,
          marginBottom: '2.5rem',
          animation: 'fade-up 0.8s 0.3s ease both',
          fontWeight: 400,
        }}>
          I build immersive digital experiences at the intersection of design and
          engineering. Svelte enthusiast. Animation obsessed. Performance-driven.
        </p>

        {/* CTAs */}
        <div style={{
          display: 'flex', gap: '1rem', flexWrap: 'wrap',
          animation: 'fade-up 0.8s 0.4s ease both',
        }}>
          <a
            href="#work"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              background: 'var(--accent)', color: '#fff',
              padding: '0.9rem 2rem', borderRadius: '6px',
              textDecoration: 'none', fontWeight: 700,
              fontSize: '0.85rem', letterSpacing: '0.08em',
              textTransform: 'uppercase', transition: 'all 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'var(--accent2)'; e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 12px 30px rgba(124,106,245,0.35)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'var(--accent)';  e.currentTarget.style.transform = 'translateY(0)';    e.currentTarget.style.boxShadow = 'none'; }}
          >
            View My Work →
          </a>
          <a
            href="#contact"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              background: 'transparent', color: 'var(--text)',
              padding: '0.9rem 2rem', borderRadius: '6px',
              textDecoration: 'none', fontWeight: 700,
              fontSize: '0.85rem', letterSpacing: '0.08em',
              textTransform: 'uppercase',
              border: '1px solid var(--border)',
              transition: 'all 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text)';   e.currentTarget.style.transform = 'translateY(0)';    }}
          >
            Get In Touch
          </a>
        </div>
      </div>

      {/* ── Vertical social links ── */}
      <div style={{
        position: 'absolute', right: '3rem', top: '50%',
        transform: 'translateY(-50%)',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', gap: '1.5rem',
        animation: 'fade-up 0.8s 0.5s ease both',
        zIndex: 2,
      }}>
        <div style={{ width: 1, height: 40, background: 'var(--border)' }} />
        {['GitHub', 'LinkedIn', 'Twitter'].map(s => (
          <a
            key={s}
            href="#"
            style={{
              color: 'var(--text3)', textDecoration: 'none',
              fontSize: '0.7rem', fontWeight: 700,
              letterSpacing: '0.15em', textTransform: 'uppercase',
              writingMode: 'vertical-rl', transition: 'color 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent2)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--text3)')}
          >
            {s}
          </a>
        ))}
        <div style={{ width: 1, height: 40, background: 'var(--border)' }} />
      </div>

      {/* ── Scroll indicator ── */}
      <div style={{
        position: 'absolute', bottom: '2rem', left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', gap: '0.5rem',
        color: 'var(--text3)', fontSize: '0.7rem',
        letterSpacing: '0.2em', textTransform: 'uppercase',
        animation: 'fade-up 1s 1s ease both',
        zIndex: 2,
      }}>
        <div style={{
          width: 1, height: 50,
          background: 'linear-gradient(to bottom,var(--accent),transparent)',
          animation: 'scroll-line 2s ease infinite',
        }} />
        <span>scroll</span>
      </div>
    </section>
  );
};

export default Hero;