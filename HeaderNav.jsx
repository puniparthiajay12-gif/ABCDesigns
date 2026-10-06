import React from 'react';
import { motion } from 'framer-motion';

const SECTIONS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'categories', label: 'Categories' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

export default function HeaderNav({ activeSection, setActiveSection, renderMode, setRenderMode }) {
  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 40, pointerEvents: 'none' }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem',
          padding: '0.75rem 1.5rem',
          margin: '0.75rem 1rem',
          borderRadius: '0.75rem',
          background: 'rgba(12, 13, 18, 0.88)',
          backdropFilter: 'blur(28px)',
          WebkitBackdropFilter: 'blur(28px)',
          border: '1px solid rgba(255,255,255,0.08)',
          boxShadow: '0 8px 32px rgba(0,0,0,0.6), 0 0 0 1px rgba(120,140,200,0.05) inset',
          pointerEvents: 'auto',
        }}
      >
        {/* Logo */}
        <button
          onClick={() => setActiveSection('home')}
          style={{
            display: 'flex', alignItems: 'center', gap: '0.625rem',
            background: 'none', border: 'none', cursor: 'pointer', padding: 0,
            flexShrink: 0,
          }}
        >
          <div style={{
            width: 36, height: 36, borderRadius: 8,
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.1)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            overflow: 'hidden',
          }}>
            <img src="/logo.png" alt="ABCD" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
          </div>
          <div style={{ lineHeight: 1.2, textAlign: 'left' }}>
            <div style={{
              fontFamily: "'Cinzel', serif",
              fontSize: '0.875rem', fontWeight: 700,
              color: '#e8e8e8', letterSpacing: '0.06em',
            }}>
              ABCD
            </div>
            <div style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: '0.5rem', fontWeight: 500,
              color: '#8a8a8a', letterSpacing: '0.2em', textTransform: 'uppercase',
            }}>
              CONSTRUCTIONS & DESIGNS
            </div>
          </div>
        </button>

        {/* Navigation Pills */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          {SECTIONS.map((s) => {
            const isActive = activeSection === s.id;
            return (
              <button
                key={s.id}
                onClick={() => setActiveSection(s.id)}
                style={{
                  position: 'relative',
                  padding: '0.425rem 0.95rem',
                  borderRadius: '0.375rem',
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: '0.625rem', fontWeight: 600,
                  letterSpacing: '0.15em', textTransform: 'uppercase',
                  color: isActive ? '#d4b472' : '#888',
                  background: isActive ? 'rgba(184, 151, 90, 0.12)' : 'transparent',
                  border: isActive ? '1px solid rgba(184, 151, 90, 0.3)' : '1px solid transparent',
                  cursor: 'pointer', transition: 'all 0.2s ease',
                  boxShadow: isActive ? '0 0 12px rgba(184, 151, 90, 0.1)' : 'none',
                }}
                onMouseEnter={e => { if (!isActive) { e.currentTarget.style.color = '#ccc'; e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; }}}
                onMouseLeave={e => { if (!isActive) { e.currentTarget.style.color = '#888'; e.currentTarget.style.background = 'transparent'; }}}
              >
                {s.label}
              </button>
            );
          })}
        </nav>

        {/* Render Mode Switcher */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: '2px',
          background: 'rgba(255,255,255,0.03)',
          border: '1px solid rgba(255,255,255,0.07)',
          borderRadius: '0.5rem', padding: '3px',
        }}>
          {[
            { id: 'realistic', label: 'Realistic' },
            { id: 'xray', label: 'X-Ray' },
            { id: 'blueprint', label: 'Blueprint' },
          ].map((m) => {
            const isAct = renderMode === m.id;
            return (
              <button
                key={m.id}
                onClick={() => setRenderMode(m.id)}
                style={{
                  padding: '0.3rem 0.7rem',
                  borderRadius: '0.375rem',
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: '0.55rem', fontWeight: 600,
                  letterSpacing: '0.12em', textTransform: 'uppercase',
                  color: isAct ? '#fff' : '#666',
                  background: isAct ? 'rgba(255,255,255,0.12)' : 'transparent',
                  border: 'none', cursor: 'pointer', transition: 'all 0.2s ease',
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={e => { if (!isAct) e.currentTarget.style.color = '#aaa'; }}
                onMouseLeave={e => { if (!isAct) e.currentTarget.style.color = '#666'; }}
              >
                {m.label}
              </button>
            );
          })}
        </div>
      </div>
    </motion.header>
  );
}
