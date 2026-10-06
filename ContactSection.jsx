import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { contactInfo, companyInfo, categories } from '../../data/companyData';
import { CloseBtn } from './AboutSection';
import './GlassPrism.css';

const CONTACT_ITEMS = [
  {
    key: 'phone',
    label: 'PHONE',
    Icon: () => (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.37a2 2 0 0 1 1.99-2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.09 6.09l1.63-1.63a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
    ),
    get: () => contactInfo.phone,
  },
  {
    key: 'email',
    label: 'EMAIL',
    Icon: () => (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
    get: () => contactInfo.email,
  },
  {
    key: 'website',
    label: 'WEBSITE',
    Icon: () => (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
    get: () => contactInfo.website,
  },
];

export default function ContactSection({ onClose }) {
  const [calcArea, setCalcArea] = useState(2000);
  const [calcTier, setCalcTier] = useState('royale');
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97, y: 12 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.97, y: 12 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="modal-backdrop"
    >
      <div className="glass-prism-panel" style={{ width: '100%', maxWidth: 920, maxHeight: '90vh', overflowY: 'auto' }}>
        <div className="glass-prism-body">
          <CloseBtn onClick={onClose} />

          {/* Header */}
          <div style={{ marginBottom: '1.75rem' }}>
            <span className="label-badge">GET IN TOUCH</span>
          </div>
          <h2 style={{
            fontFamily: "'Cinzel', serif", fontSize: 'clamp(1.375rem, 3vw, 2rem)',
            fontWeight: 700, color: '#e8e8e8', letterSpacing: '0.04em', marginBottom: '0.4rem',
          }}>
            Connect with {companyInfo.name}
          </h2>
          <p style={{ fontSize: '0.8125rem', color: '#777', marginBottom: '2rem' }}>
            {contactInfo.note}
          </p>

          {/* Two-column */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '1.5rem' }}>
            {/* Left Column */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {/* Contact Info Card */}
              <div className="prism-card" style={{ padding: '1.25rem' }}>
                <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.6rem', fontWeight: 700, color: '#666', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1rem' }}>
                  DIRECT CONTACT
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
                  {CONTACT_ITEMS.map((item) => (
                    <div key={item.key} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <div style={{
                        width: 32, height: 32, borderRadius: '0.375rem', flexShrink: 0,
                        background: 'rgba(184,151,90,0.08)', border: '1px solid rgba(184,151,90,0.15)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        color: '#b8975a',
                      }}>
                        <item.Icon />
                      </div>
                      <div>
                        <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.5rem', color: '#666', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1px' }}>
                          {item.label}
                        </div>
                        <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.775rem', color: '#c8b890', fontWeight: 500 }}>
                          {item.get()}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Estimate Calculator */}
              <div className="prism-card" style={{ padding: '1.25rem' }}>
                <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.6rem', fontWeight: 700, color: '#666', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1rem' }}>
                  ESTIMATE HELPER
                </div>

                <div style={{ marginBottom: '0.875rem' }}>
                  <label style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.575rem', color: '#999', letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: '0.35rem' }}>
                    Built-up Area: <span style={{ color: '#d4b472', fontWeight: 700 }}>{calcArea.toLocaleString()} sq.ft</span>
                  </label>
                  <input
                    type="range" min="500" max="10000" step="100" value={calcArea}
                    onChange={e => setCalcArea(Number(e.target.value))}
                    style={{ width: '100%', accentColor: '#b8975a', cursor: 'pointer' }}
                  />
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.5rem', color: '#555', marginTop: '2px' }}>
                    <span>500</span><span>10,000 sq.ft</span>
                  </div>
                </div>

                <div>
                  <label style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.575rem', color: '#999', letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: '0.35rem' }}>
                    Package Tier:
                  </label>
                  <select
                    value={calcTier}
                    onChange={e => setCalcTier(e.target.value)}
                    style={{
                      width: '100%', padding: '0.5rem 0.75rem',
                      background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)',
                      borderRadius: '0.375rem', color: '#c8c8c8',
                      fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.7rem',
                      outline: 'none', cursor: 'pointer',
                    }}
                  >
                    {categories.map(c => (
                      <option key={c.id} value={c.id} style={{ background: '#141416' }}>{c.title} Tier</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="prism-card active" style={{ padding: '1.5rem' }}>
              {submitted ? (
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '300px', textAlign: 'center', gap: '1rem' }}>
                  <div style={{
                    width: 56, height: 56, borderRadius: '50%',
                    background: 'rgba(184,151,90,0.1)', border: '1px solid rgba(184,151,90,0.3)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '1.5rem', color: '#b8975a',
                  }}>
                    ✓
                  </div>
                  <h3 style={{ fontFamily: "'Cinzel', serif", fontSize: '1.25rem', color: '#e8e8e8', letterSpacing: '0.04em' }}>
                    Inquiry Received
                  </h3>
                  <p style={{ fontSize: '0.8125rem', color: '#888', lineHeight: 1.7, maxWidth: '320px' }}>
                    Thank you for reaching out to ABCD. Our senior architect will review your project parameters ({calcArea.toLocaleString()} sq.ft · {calcTier.toUpperCase()} TIER) and contact you shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn-ghost"
                    style={{ marginTop: '0.5rem' }}
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <h3 style={{
                    fontFamily: "'Cinzel', serif",
                    fontSize: '1rem', fontWeight: 700,
                    color: '#e8e8e8', letterSpacing: '0.04em', marginBottom: '0.25rem',
                  }}>
                    Request Architectural Consultation
                  </h3>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                    <div>
                      <label className="field-label">Your Name</label>
                      <input required type="text" placeholder="e.g. Rajesh Kumar" className="field"
                        value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
                    </div>
                    <div>
                      <label className="field-label">Phone Number</label>
                      <input required type="tel" placeholder="+91 9030807570" className="field"
                        value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} />
                    </div>
                  </div>

                  <div>
                    <label className="field-label">Email Address</label>
                    <input required type="email" placeholder="name@example.com" className="field"
                      value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
                  </div>

                  <div>
                    <label className="field-label">Project Details & Requirements</label>
                    <textarea
                      rows={4} className="field"
                      placeholder="Tell us about your plot, construction goals, timeline, or interior preferences..."
                      value={form.message}
                      onChange={e => setForm({ ...form, message: e.target.value })}
                      style={{ resize: 'vertical' }}
                    />
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem', paddingTop: '0.5rem' }}>
                    <button type="button" className="btn-ghost" onClick={onClose}>Cancel</button>
                    <button type="submit" className="btn-primary">Submit Inquiry to ABCD</button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
