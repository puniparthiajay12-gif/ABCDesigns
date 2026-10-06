import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function HUDOverlay({ buildingStage, renderMode }) {
  const [time, setTime] = useState('');

  useEffect(() => {
    const tick = () => {
      const d = new Date();
      setTime(
        `${d.getHours().toString().padStart(2, '0')}:${d.getMinutes().toString().padStart(2, '0')}:${d.getSeconds().toString().padStart(2, '0')}`
      );
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const PHASE_LABELS = ['FOUNDATION', 'STRUCTURE', 'MASONRY', 'INTERIORS', 'FINISHES'];

  const labelStyle = {
    fontFamily: "'Space Grotesk', monospace",
    fontSize: '0.5rem',
    fontWeight: 600,
    letterSpacing: '0.18em',
    textTransform: 'uppercase',
    color: '#3a3a3a',
  };

  const valueStyle = {
    fontFamily: "'Space Grotesk', monospace",
    fontSize: '0.65rem',
    fontWeight: 500,
    color: '#606060',
    letterSpacing: '0.05em',
  };

  return (
    <div
      style={{
        position: 'fixed', inset: 0,
        pointerEvents: 'none', userSelect: 'none',
        zIndex: 20,
      }}
    >
      {/* Corner Marks */}
      {[
        { top: 16, left: 16, borderTop: 1, borderLeft: 1 },
        { top: 16, right: 16, borderTop: 1, borderRight: 1 },
        { bottom: 16, left: 16, borderBottom: 1, borderLeft: 1 },
        { bottom: 16, right: 16, borderBottom: 1, borderRight: 1 },
      ].map((pos, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            width: 18, height: 18,
            ...pos,
            borderStyle: 'solid',
            borderColor: 'rgba(255,255,255,0.1)',
            borderTopWidth: pos.borderTop || 0,
            borderBottomWidth: pos.borderBottom || 0,
            borderLeftWidth: pos.borderLeft || 0,
            borderRightWidth: pos.borderRight || 0,
            opacity: 0.5,
          }}
        />
      ))}

      {/* Top Left */}
      <div style={{ position: 'absolute', top: 80, left: 28, display: 'flex', flexDirection: 'column', gap: 4 }}>
        <div style={labelStyle}>SYSTEM</div>
        <div style={valueStyle}>ABCD-ARCH v1.0</div>
        <div style={{ ...labelStyle, marginTop: 4 }}>TIMESTAMP</div>
        <div style={valueStyle}>{time}</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 4 }}>
          <div style={{ width: 5, height: 5, borderRadius: '50%', background: '#4a9e6a', boxShadow: '0 0 6px #4a9e6a' }} />
          <span style={{ ...labelStyle, color: '#4a9e6a' }}>ONLINE</span>
        </div>
      </div>

      {/* Top Right */}
      <div style={{ position: 'absolute', top: 80, right: 28, display: 'flex', flexDirection: 'column', gap: 4, alignItems: 'flex-end' }}>
        <div style={labelStyle}>RENDER MODE</div>
        <div style={{ ...valueStyle, color: '#7a7a7a' }}>{renderMode.toUpperCase()}</div>
        <div style={{ ...labelStyle, marginTop: 4 }}>FRAME RATE</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <span style={valueStyle}>60 FPS</span>
          <div style={{ width: 32, height: 2, background: 'rgba(255,255,255,0.06)', borderRadius: 2, overflow: 'hidden' }}>
            <div style={{ height: '100%', width: '100%', background: 'rgba(255,255,255,0.2)' }} />
          </div>
        </div>
      </div>

      {/* Bottom Left — Phase Indicator */}
      <div style={{ position: 'absolute', bottom: 70, left: 28, display: 'flex', flexDirection: 'column', gap: 4 }}>
        <div style={labelStyle}>ACTIVE PHASE</div>
        <div style={{
          fontFamily: "'Space Grotesk', monospace",
          fontSize: '0.7rem', fontWeight: 600,
          color: '#888', letterSpacing: '0.08em',
        }}>
          {String(buildingStage).padStart(2, '0')} / {PHASE_LABELS[buildingStage - 1]}
        </div>
        {/* Progress Dots */}
        <div style={{ display: 'flex', gap: 4, marginTop: 2 }}>
          {[1, 2, 3, 4, 5].map(n => (
            <div key={n} style={{
              width: 20, height: 2, borderRadius: 2,
              background: n <= buildingStage ? 'rgba(184,151,90,0.5)' : 'rgba(255,255,255,0.08)',
              transition: 'background 0.4s ease',
            }} />
          ))}
        </div>
      </div>

      {/* Bottom Right — Dimensions */}
      <div style={{ position: 'absolute', bottom: 70, right: 28, display: 'flex', flexDirection: 'column', gap: 3, alignItems: 'flex-end' }}>
        <div style={labelStyle}>DIMENSIONS</div>
        {['X: 24.80m', 'Y: 14.20m', 'Z: 18.50m'].map((dim, i) => (
          <div key={i} style={valueStyle}>{dim}</div>
        ))}
      </div>
    </div>
  );
}
