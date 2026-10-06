import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CloseBtn } from './AboutSection';
import './GlassPrism.css';

const PROJECTS = [
  {
    id: 1,
    title: 'Modern Luxury Villa',
    location: 'Jubilee Hills, Hyderabad',
    category: 'Residential',
    tier: 'Royale Tier',
    area: '6,500 sq.ft',
    description: 'A multi-level modern luxury villa featuring RCC cantilever structures, Italian marble flooring, and smart home automation.',
    tags: ['RCC Structure', 'Interior Furnishing', 'Landscape Design'],
  },
  {
    id: 2,
    title: 'Corporate HQ Interiors',
    location: 'Gachibowli, Hyderabad',
    category: 'Office Renovation',
    tier: 'Commercial',
    area: '12,000 sq.ft',
    description: 'Complete office overhaul with ergonomic workstations, false ceilings, acoustic paneling, and bespoke woodwork throughout.',
    tags: ['Space Planning', 'Acoustic Walls', 'HVAC & Lighting'],
  },
  {
    id: 3,
    title: 'Contemporary Duplex',
    location: 'Kokapet, Hyderabad',
    category: 'Residential',
    tier: 'Premium Tier',
    area: '4,200 sq.ft',
    description: 'Custom family residence with modular kitchen setup, teak wood joinery, and a rooftop terrace pergola garden.',
    tags: ['Custom Woodwork', 'Modular Kitchen', 'Pergola Deck'],
  },
  {
    id: 4,
    title: 'Heritage Villa Remodel',
    location: 'Banjara Hills, Hyderabad',
    category: 'Remodeling',
    tier: 'Royale Tier',
    area: '3,800 sq.ft',
    description: 'Structural restoration and interior modernization preserving architectural heritage while introducing contemporary luxury finishes.',
    tags: ['Structural Reinforcement', 'Restoration', 'Luxury Bathrooms'],
  },
];

export default function ProjectsSection({ onClose }) {
  const [sel, setSel] = useState(PROJECTS[0]);

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
            <span className="label-badge">PROJECT PORTFOLIO</span>
          </div>
          <h2 style={{
            fontFamily: "'Cinzel', serif", fontSize: 'clamp(1.375rem, 3vw, 2rem)',
            fontWeight: 700, color: '#e8e8e8', letterSpacing: '0.04em', marginBottom: '2rem',
          }}>
            Architectural Excellence in Execution
          </h2>

          {/* Two-column layout */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: '1.25rem' }}>
            {/* Left: Project List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              {PROJECTS.map((p) => {
                const isAct = sel.id === p.id;
                return (
                  <button
                    key={p.id}
                    onClick={() => setSel(p)}
                    className={`prism-card ${isAct ? 'active' : ''}`}
                    style={{
                      padding: '1rem', textAlign: 'left', width: '100%',
                      cursor: 'pointer',
                    }}
                  >
                    <div style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: '0.525rem', color: '#b8975a',
                      letterSpacing: '0.18em', textTransform: 'uppercase',
                      marginBottom: '0.25rem',
                    }}>
                      {p.category} · {p.tier}
                    </div>
                    <div style={{
                      fontFamily: "'Cinzel', serif",
                      fontSize: '0.875rem', fontWeight: 700,
                      color: isAct ? '#e8e8e8' : '#aaa', letterSpacing: '0.02em',
                      marginBottom: '0.2rem',
                    }}>
                      {p.title}
                    </div>
                    <div style={{ fontSize: '0.6rem', color: '#666' }}>
                      {p.location} · {p.area}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right: Detail */}
            <motion.div
              key={sel.id}
              initial={{ opacity: 0, x: 8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.25 }}
              className="prism-card active"
              style={{
                padding: '1.5rem',
                display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
              }}
            >
              <div>
                {/* Tier badge + area */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem', paddingBottom: '1rem', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                  <span style={{
                    padding: '0.25rem 0.75rem', borderRadius: '2rem',
                    background: 'rgba(184,151,90,0.08)', border: '1px solid rgba(184,151,90,0.2)',
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: '0.575rem', fontWeight: 700,
                    color: '#b8975a', letterSpacing: '0.12em', textTransform: 'uppercase',
                  }}>
                    {sel.tier}
                  </span>
                  <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.625rem', color: '#777' }}>
                    {sel.area}
                  </span>
                </div>

                {/* Title */}
                <h3 style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: '1.25rem', fontWeight: 700,
                  color: '#e8e8e8', letterSpacing: '0.04em', marginBottom: '0.25rem',
                }}>
                  {sel.title}
                </h3>
                <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.65rem', color: '#b8975a', marginBottom: '1rem' }}>
                  {sel.location}
                </div>
                <p style={{ fontSize: '0.8125rem', color: '#999', lineHeight: 1.75, marginBottom: '1.25rem' }}>
                  {sel.description}
                </p>

                {/* Tags */}
                <div style={{ paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                  <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.5rem', color: '#666', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.625rem' }}>
                    PROJECT HIGHLIGHTS
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                    {sel.tags.map((tag, i) => (
                      <span key={i} style={{
                        padding: '0.25rem 0.625rem',
                        fontSize: '0.6rem',
                        fontFamily: "'Space Grotesk', sans-serif", fontWeight: 500,
                        color: '#c0b090',
                        background: 'rgba(184,151,90,0.07)',
                        border: '1px solid rgba(184,151,90,0.15)',
                        borderRadius: '2rem',
                      }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div style={{ paddingTop: '1.5rem', display: 'flex', justifyContent: 'flex-end', gap: '0.75rem' }}>
                <button className="btn-ghost" onClick={onClose}>Close</button>
                <button className="btn-primary" onClick={onClose}>Request Similar Estimate</button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
