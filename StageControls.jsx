import React from 'react';
import { motion } from 'framer-motion';
import { constructionStages } from '../../data/companyData';

const STAGES = constructionStages.slice(2, 7); // Stages 3-7 mapped to 1-5

export default function StageControls({ buildingStage, setBuildingStage }) {
  return (
    <motion.div
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      style={{
        position: 'fixed', bottom: '1.5rem', left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 30, pointerEvents: 'auto',
        maxWidth: '92vw',
      }}
    >
      <div style={{
        display: 'flex', alignItems: 'center', gap: '0.5rem',
        padding: '0.625rem 0.875rem',
        background: 'rgba(14, 14, 16, 0.88)',
        backdropFilter: 'blur(28px)',
        WebkitBackdropFilter: 'blur(28px)',
        border: '1px solid rgba(255,255,255,0.07)',
        borderRadius: '0.75rem',
        boxShadow: '0 8px 32px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.03) inset',
      }}>
        {/* Label */}
        <div style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: '0.5rem', fontWeight: 700,
          color: '#555', letterSpacing: '0.2em', textTransform: 'uppercase',
          paddingRight: '0.5rem',
          borderRight: '1px solid rgba(255,255,255,0.07)',
          whiteSpace: 'nowrap',
        }}>
          BUILD PHASE
        </div>

        {/* Stage Buttons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
          {STAGES.map((stg, idx) => {
            const stageNum = idx + 1;
            const isAct = buildingStage === stageNum;
            return (
              <button
                key={stg.id}
                onClick={() => setBuildingStage(stageNum)}
                style={{
                  display: 'flex', alignItems: 'center', gap: '0.4rem',
                  padding: '0.4rem 0.75rem', borderRadius: '0.375rem',
                  background: isAct ? 'rgba(184,151,90,0.12)' : 'transparent',
                  border: `1px solid ${isAct ? 'rgba(184,151,90,0.3)' : 'transparent'}`,
                  cursor: 'pointer', transition: 'all 0.2s ease',
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={e => { if (!isAct) { e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; }}}
                onMouseLeave={e => { if (!isAct) { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'transparent'; }}}
              >
                <span style={{
                  width: 16, height: 16, borderRadius: '50%',
                  background: isAct ? '#b8975a' : 'rgba(255,255,255,0.08)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: '0.5rem', fontWeight: 700,
                  color: isAct ? '#0c0c0d' : '#555', flexShrink: 0,
                }}>
                  {stageNum}
                </span>
                <span style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: '0.6rem', fontWeight: isAct ? 600 : 400,
                  letterSpacing: '0.08em', textTransform: 'uppercase',
                  color: isAct ? '#c8b890' : '#555',
                }}>
                  {stg.title}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}
