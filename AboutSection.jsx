import React from 'react';
import { motion } from 'framer-motion';
import { aboutContent, companyInfo } from '../../data/companyData';
import './GlassPrism.css';

const ANIM = {
  initial: { opacity: 0, scale: 0.97, y: 14 },
  animate: { opacity: 1, scale: 1, y: 0 },
  exit: { opacity: 0, scale: 0.97, y: 14 },
  transition: { duration: 0.38, ease: [0.22, 1, 0.36, 1] },
};

export default function AboutSection({ onClose }) {
  return (
    <motion.div {...ANIM} className="modal-backdrop">
      <div className="glass-prism-panel" style={{ width: '100%', maxWidth: 780, maxHeight: '88vh', overflowY: 'auto' }}>
        <div className="glass-prism-body">

          {/* Close */}
          <CloseBtn onClick={onClose} />

          {/* Label */}
          <div style={{ marginBottom: '1.75rem' }}>
            <span className="label-badge">ABOUT THE STUDIO</span>
          </div>

          {/* Heading */}
          <h2 style={ST.heading}>{companyInfo.fullName}</h2>
          <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.8125rem', color: '#b8975a', letterSpacing: '0.08em', marginBottom: '1.75rem' }}>
            {companyInfo.tagline}
          </p>

          <hr className="prism-divider" />

          {/* Intro Quote */}
          <div style={{
            padding: '1rem 1.25rem', marginBottom: '1.5rem',
            background: 'rgba(184, 151, 90, 0.05)',
            borderLeft: '2px solid rgba(184, 151, 90, 0.5)',
            borderRadius: '0 0.375rem 0.375rem 0',
          }}>
            <p style={{ fontSize: '0.875rem', color: '#c8c8c8', fontStyle: 'italic', lineHeight: 1.75, margin: 0 }}>
              "{aboutContent.intro}"
            </p>
          </div>

          <p style={{ fontSize: '0.8125rem', color: '#6a6a6a', lineHeight: 1.8, marginBottom: '2rem' }}>
            {aboutContent.description}
          </p>

          {/* Core Pillars */}
          <SectionLabel>CORE PILLARS OF EXCELLENCE</SectionLabel>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(210px, 1fr))', gap: '0.625rem', marginBottom: '2rem' }}>
            {aboutContent.values.map((val, idx) => (
              <div key={idx} className="prism-card" style={{ padding: '1rem 1.125rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.375rem' }}>
                  <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#b8975a', flexShrink: 0 }} />
                  <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.75rem', fontWeight: 600, color: '#d0c5b0' }}>
                    {val.title}
                  </span>
                </div>
                <p style={{ fontSize: '0.7rem', color: '#555', margin: 0, lineHeight: 1.55 }}>{val.description}</p>
              </div>
            ))}
          </div>

          {/* Footer */}
          <hr className="prism-divider" />
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem' }}>
            <button className="btn-ghost" onClick={onClose}>Close</button>
            <button className="btn-primary" onClick={onClose}>Return to 3D World</button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Shared sub-components ───────────────────────────────────
export function CloseBtn({ onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        position: 'absolute', top: '1.25rem', right: '1.25rem',
        width: 32, height: 32, borderRadius: '50%',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        background: 'rgba(255,255,255,0.05)',
        border: '1px solid rgba(255,255,255,0.1)',
        color: '#777', fontSize: '0.75rem',
        cursor: 'pointer', transition: 'all 0.2s ease',
      }}
      onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.color = '#ccc'; }}
      onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.color = '#777'; }}
    >✕</button>
  );
}

export function SectionLabel({ children }) {
  return (
    <div style={{
      fontFamily: "'Space Grotesk', sans-serif",
      fontSize: '0.55rem', fontWeight: 700,
      letterSpacing: '0.22em', textTransform: 'uppercase',
      color: '#444', marginBottom: '0.875rem',
    }}>
      {children}
    </div>
  );
}

export const ST = {
  heading: {
    fontFamily: "'Cinzel', serif",
    fontSize: 'clamp(1.375rem, 3vw, 2rem)',
    fontWeight: 700, color: '#e8e8e8',
    letterSpacing: '0.04em', marginBottom: '0.4rem',
  },
};
