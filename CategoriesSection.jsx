import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { categories } from '../../data/companyData';
import { CloseBtn } from './AboutSection';
import './GlassPrism.css';

const TIER_DESCRIPTIONS = [
  'Large-scale commercial construction',
  'Essential residential construction',
  'Elevated materials & finishes',
  'Luxury living, fully furnished',
];

export default function CategoriesSection({ onClose }) {
  const [activeTier, setActiveTier] = useState(categories[3]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97, y: 12 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.97, y: 12 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="modal-backdrop"
    >
      <div className="glass-prism-panel" style={{ width: '100%', maxWidth: 1000, maxHeight: '90vh', overflowY: 'auto' }}>
        <div className="glass-prism-body">
          <CloseBtn onClick={onClose} />

          {/* Header */}
          <div style={{ marginBottom: '1.75rem' }}>
            <span className="label-badge">CONSTRUCTION PACKAGES</span>
          </div>
          <h2 style={{
            fontFamily: "'Cinzel', serif", fontSize: 'clamp(1.375rem, 3vw, 2rem)',
            fontWeight: 700, color: '#e8e8e8', letterSpacing: '0.04em', marginBottom: '0.5rem',
          }}>
            Tailored Construction Tiers
          </h2>
          <p style={{ fontSize: '0.8125rem', color: '#777', marginBottom: '2rem' }}>
            Choose the package that fits your vision, budget, and material preferences.
          </p>

          {/* Tier Cards Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.75rem', marginBottom: '2rem' }}>
            {categories.map((cat, idx) => {
              const isAct = activeTier.id === cat.id;
              return (
                <div
                  key={cat.id}
                  onClick={() => setActiveTier(cat)}
                  className={`prism-card ${isAct ? 'active' : ''}`}
                  style={{
                    position: 'relative',
                    padding: '1.25rem',
                    cursor: 'pointer',
                  }}
                >
                  {/* Popular Badge */}
                  {cat.id === 'royale' && (
                    <div style={{
                      position: 'absolute', top: '-10px', right: '12px',
                      padding: '2px 10px',
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: '0.525rem', fontWeight: 700,
                      letterSpacing: '0.15em', textTransform: 'uppercase',
                      color: '#0c0c0d',
                      background: 'linear-gradient(135deg, #d4b472, #b8975a)',
                      borderRadius: '2rem',
                    }}>
                      MOST POPULAR
                    </div>
                  )}

                  <div style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: '0.525rem', fontWeight: 700,
                    letterSpacing: '0.25em', textTransform: 'uppercase',
                    color: '#b8975a', marginBottom: '0.4rem',
                  }}>
                    TIER 0{cat.tier}
                  </div>
                  <h3 style={{
                    fontFamily: "'Cinzel', serif",
                    fontSize: '1.1rem', fontWeight: 700,
                    color: isAct ? '#e8e8e8' : '#aaa',
                    letterSpacing: '0.05em', marginBottom: '0.5rem',
                  }}>
                    {cat.title}
                  </h3>
                  <p style={{ fontSize: '0.68rem', color: '#666', lineHeight: 1.5, marginBottom: '1rem' }}>
                    {TIER_DESCRIPTIONS[idx]}
                  </p>

                  <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '0.875rem' }}>
                    <div style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: '0.5rem', color: '#555',
                      letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.5rem',
                    }}>INCLUDES:</div>
                    <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '3px' }}>
                      {cat.features.slice(0, 4).map((f, i) => (
                        <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '6px', fontSize: '0.65rem', color: '#888' }}>
                          <span style={{ color: '#b8975a', flexShrink: 0, marginTop: '1px' }}>✓</span>
                          <span style={{ lineHeight: 1.4 }}>{f}</span>
                        </li>
                      ))}
                      {cat.features.length > 4 && (
                        <li style={{ fontSize: '0.6rem', color: '#b8975a', marginTop: '2px', fontFamily: "'Space Grotesk', sans-serif", letterSpacing: '0.05em' }}>
                          + {cat.features.length - 4} more specifications
                        </li>
                      )}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom CTA Bar */}
          <div className="prism-card" style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem',
            padding: '1.25rem 1.5rem',
          }}>
            <div>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.575rem', color: '#666', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '2px' }}>
                SELECTED PACKAGE
              </div>
              <div style={{ fontFamily: "'Cinzel', serif", fontSize: '0.9rem', color: '#d4b472', fontWeight: 700, letterSpacing: '0.05em' }}>
                {activeTier.title} TIER
                <span style={{ color: '#666', fontFamily: "'Inter', sans-serif", fontSize: '0.7rem', fontWeight: 400, marginLeft: '0.5rem' }}>
                  · Contact ABCD for detailed itemized estimate
                </span>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <button className="btn-ghost" onClick={onClose}>Close</button>
              <button className="btn-primary" onClick={onClose}>
                Get Estimate for {activeTier.title}
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
