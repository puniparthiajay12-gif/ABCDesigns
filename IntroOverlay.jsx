import React from 'react';
import { motion } from 'framer-motion';

export default function IntroOverlay({ onEnter, soundEnabled, setSoundEnabled }) {
  return (
    <div style={{
      position: 'relative', zIndex: 10,
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'space-between',
      minHeight: '100vh', padding: '1.5rem',
      pointerEvents: 'none', userSelect: 'none',
    }}>
      {/* Top Bar */}
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        style={{
          width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '0.75rem 1.25rem',
          background: 'rgba(12, 13, 18, 0.65)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: '0.75rem',
          pointerEvents: 'auto',
        }}
      >
        <div style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: '0.55rem', fontWeight: 600,
          letterSpacing: '0.25em', textTransform: 'uppercase',
          color: '#888888',
        }}>
          Akhil Bharat Constructions & Designs
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <button
            onClick={() => setSoundEnabled(!soundEnabled)}
            style={{
              padding: '0.3rem 0.75rem',
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: '0.5rem', fontWeight: 600,
              letterSpacing: '0.18em', textTransform: 'uppercase',
              color: '#aaaaaa',
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '2rem', cursor: 'pointer', transition: 'all 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; }}
            onMouseLeave={e => { e.currentTarget.style.color = '#aaa'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; }}
          >
            {soundEnabled ? '⏸ AUDIO ON' : '▶ AUDIO OFF'}
          </button>
        </div>
      </motion.div>

      {/* Center — Spacer */}
      <div style={{ flex: 1 }} />

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        style={{
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.25rem',
          marginBottom: '2rem', pointerEvents: 'auto',
        }}
      >
        {/* Decorative divider */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem' }}>
          <div style={{ width: 50, height: 1, background: 'linear-gradient(to right, transparent, rgba(212,180,114,0.4))' }} />
          <div style={{ width: 5, height: 5, borderRadius: '50%', background: '#d4b472', boxShadow: '0 0 10px rgba(212,180,114,0.5)' }} />
          <div style={{ width: 50, height: 1, background: 'linear-gradient(to left, transparent, rgba(212,180,114,0.4))' }} />
        </div>

        <button
          onClick={onEnter}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.75rem',
            padding: '0.9rem 2.5rem',
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: '0.68rem', fontWeight: 700,
            letterSpacing: '0.22em', textTransform: 'uppercase',
            color: '#0c0d10',
            background: 'linear-gradient(135deg, #e4c482 0%, #b8975a 100%)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            borderRadius: '0.5rem', cursor: 'pointer',
            transition: 'all 0.3s ease',
            boxShadow: '0 8px 32px rgba(184, 151, 90, 0.3)',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = 'linear-gradient(135deg, #f0d494 0%, #c8a86a 100%)';
            e.currentTarget.style.boxShadow = '0 12px 40px rgba(184, 151, 90, 0.5)';
            e.currentTarget.style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = 'linear-gradient(135deg, #e4c482 0%, #b8975a 100%)';
            e.currentTarget.style.boxShadow = '0 8px 32px rgba(184, 151, 90, 0.3)';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
        >
          <span>ENTER THE EXPERIENCE</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
          </svg>
        </button>

        <p style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: '0.525rem', fontWeight: 600,
          letterSpacing: '0.22em', textTransform: 'uppercase',
          color: '#666666',
        }}>
          OFFICIAL 3D ARCHITECTURAL EXPERIENCE
        </p>
      </motion.div>
    </div>
  );
}
