import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { services } from '../../data/companyData';
import { CloseBtn } from './AboutSection';
import './GlassPrism.css';

const SRV_ICONS = {
  residential: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
    </svg>
  ),
  interior: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>
    </svg>
  ),
  office: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
    </svg>
  ),
  structural: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
    </svg>
  ),
  woodwork: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 3v18M18 3v18M3 6h18M3 18h18"/>
    </svg>
  ),
  remodeling: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
    </svg>
  ),
};

export default function ServicesSection({ onClose }) {
  const [selected, setSelected] = useState(services[0]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97, y: 12 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.97, y: 12 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="modal-backdrop"
    >
      <div className="glass-prism-panel" style={{ width: '100%', maxWidth: 920, maxHeight: '88vh', overflowY: 'auto' }}>
        <div className="glass-prism-body">
          <CloseBtn onClick={onClose} />

          {/* Header */}
          <div style={{ marginBottom: '1.75rem' }}>
            <span className="label-badge">OUR SERVICES</span>
          </div>
          <h2 style={{
            fontFamily: "'Cinzel', serif", fontSize: 'clamp(1.375rem, 3vw, 2rem)',
            fontWeight: 700, color: '#e8e8e8', letterSpacing: '0.04em', marginBottom: '2rem',
          }}>
            End-to-End Building Solutions
          </h2>

          {/* Two-column layout */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: '1.25rem' }}>
            {/* Left: Service List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              {services.map((srv) => {
                const isAct = selected.id === srv.id;
                return (
                  <button
                    key={srv.id}
                    onClick={() => setSelected(srv)}
                    className={`prism-card ${isAct ? 'active' : ''}`}
                    style={{
                      display: 'flex', alignItems: 'center', gap: '0.875rem',
                      padding: '0.875rem 1rem', textAlign: 'left',
                      cursor: 'pointer', width: '100%',
                    }}
                  >
                    <div style={{ color: isAct ? '#b8975a' : '#666', flexShrink: 0 }}>
                      {SRV_ICONS[srv.id] || <span style={{ fontSize: '1.125rem' }}>{srv.icon}</span>}
                    </div>
                    <div>
                      <div style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontSize: '0.7875rem', fontWeight: 600,
                        color: isAct ? '#e8e8e8' : '#aaa',
                        letterSpacing: '0.02em', marginBottom: '2px',
                      }}>
                        {srv.title}
                      </div>
                      <div style={{ fontSize: '0.625rem', color: '#666' }}>
                        {srv.features.slice(0, 3).join(' · ')}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right: Detail Card */}
            <div className="prism-card active" style={{
              padding: '1.5rem',
              display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
            }}>
              <div>
                {/* Icon + Title */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem', marginBottom: '1.25rem' }}>
                  <div style={{
                    width: 48, height: 48, borderRadius: '0.5rem',
                    background: 'rgba(184,151,90,0.08)',
                    border: '1px solid rgba(184,151,90,0.2)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#b8975a', flexShrink: 0,
                  }}>
                    <span style={{ fontSize: '1.375rem' }}>{selected.icon}</span>
                  </div>
                  <div>
                    <h3 style={{
                      fontFamily: "'Cinzel', serif",
                      fontSize: '1.125rem', fontWeight: 700,
                      color: '#e8e8e8', letterSpacing: '0.04em', margin: 0,
                    }}>
                      {selected.title}
                    </h3>
                    <div style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: '0.55rem', color: '#b8975a',
                      letterSpacing: '0.2em', textTransform: 'uppercase', marginTop: '2px',
                    }}>
                      ABCD CORE SERVICE
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p style={{ fontSize: '0.8125rem', color: '#999', lineHeight: 1.75, marginBottom: '1.25rem' }}>
                  {selected.description}
                </p>

                {/* Features */}
                <div style={{ paddingTop: '1.25rem', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                  <div style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: '0.55rem', fontWeight: 700,
                    letterSpacing: '0.2em', textTransform: 'uppercase',
                    color: '#666', marginBottom: '0.75rem',
                  }}>
                    SCOPE & FEATURES
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {selected.features.map((f, i) => (
                      <span
                        key={i}
                        style={{
                          padding: '0.25rem 0.75rem',
                          fontFamily: "'Space Grotesk', sans-serif",
                          fontSize: '0.625rem', fontWeight: 500,
                          letterSpacing: '0.05em',
                          color: '#c0b090',
                          background: 'rgba(184,151,90,0.07)',
                          border: '1px solid rgba(184,151,90,0.15)',
                          borderRadius: '2rem',
                        }}
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div style={{ paddingTop: '1.5rem', display: 'flex', justifyContent: 'flex-end', gap: '0.75rem' }}>
                <button className="btn-ghost" onClick={onClose}>Close</button>
                <button className="btn-primary" onClick={onClose}>Request Estimate</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
