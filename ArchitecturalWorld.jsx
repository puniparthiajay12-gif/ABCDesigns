import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html, Float } from '@react-three/drei';
import * as THREE from 'three';
import InteractiveBuilding from './InteractiveBuilding';
import BlueprintGrid from './BlueprintGrid';
import { navigationItems } from '../../data/companyData';

export default function ArchitecturalWorld({
  activeSection,
  setActiveSection,
  buildingStage,
  renderMode,
}) {
  const worldGroupRef = useRef();

  const isVisible = activeSection !== 'intro';

  useFrame((state, delta) => {
    if (worldGroupRef.current) {
      // Continuous smooth 360-degree slow rotation
      // When a specific modal section is open, rotate slightly slower so user can appreciate details
      const rotSpeed = activeSection === 'home' ? 0.12 : 0.06;
      worldGroupRef.current.rotation.y += delta * rotSpeed;
    }
  });

  const getNodePosition = (angle) => {
    const rad = (angle * Math.PI) / 180;
    const distance = 9.5;
    return [Math.sin(rad) * distance, 1.2, Math.cos(rad) * distance];
  };

  if (!isVisible) return null;

  return (
    <group ref={worldGroupRef}>
      {/* Central 3D Interactive Building */}
      <InteractiveBuilding
        stage={buildingStage}
        mode={renderMode}
        activeSection={activeSection}
      />

      {/* Blueprint Floor Grid */}
      <BlueprintGrid mode={renderMode} />

      {/* 3D Navigation Beacon Nodes */}
      {navigationItems
        .filter((item) => item.id !== 'home')
        .map((item) => {
          const pos = getNodePosition(item.angle);
          const isActive = activeSection === item.id;

          return (
            <group key={item.id} position={pos}>
              {/* Minimal vertical beacon */}
              <mesh position={[0, 0.5, 0]}>
                <cylinderGeometry args={[0.04, 0.04, 2.0, 8]} />
                <meshBasicMaterial
                  color={isActive ? '#d4b472' : '#404040'}
                  transparent
                  opacity={isActive ? 0.85 : 0.35}
                />
              </mesh>

              {/* Ground ring */}
              <mesh position={[0, -0.1, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                <ringGeometry args={[0.5, 0.65, 32]} />
                <meshBasicMaterial
                  color={isActive ? '#d4b472' : '#303030'}
                  transparent
                  opacity={isActive ? 0.75 : 0.25}
                  side={THREE.DoubleSide}
                />
              </mesh>

              {/* Floating HTML Node Label — ultra glass style */}
              <Float speed={1.5} floatIntensity={0.3}>
                <Html
                  position={[0, 2.2, 0]}
                  center
                  distanceFactor={15}
                  zIndexRange={[100, 0]}
                >
                  <button
                    onClick={() => setActiveSection(item.id)}
                    style={{
                      display: 'flex', alignItems: 'center', gap: '0.5rem',
                      padding: '0.35rem 0.875rem',
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: '0.6rem', fontWeight: 600,
                      letterSpacing: '0.18em', textTransform: 'uppercase',
                      color: isActive ? '#d4b472' : '#aaaaaa',
                      background: isActive
                        ? 'rgba(20, 18, 12, 0.85)'
                        : 'rgba(12, 13, 18, 0.75)',
                      backdropFilter: 'blur(16px)',
                      WebkitBackdropFilter: 'blur(16px)',
                      border: `1px solid ${isActive ? 'rgba(212,180,114,0.45)' : 'rgba(255,255,255,0.1)'}`,
                      borderRadius: '0.375rem',
                      cursor: 'pointer',
                      transition: 'all 0.25s ease',
                      whiteSpace: 'nowrap',
                      boxShadow: isActive ? '0 4px 20px rgba(212,180,114,0.2)' : '0 2px 10px rgba(0,0,0,0.5)',
                      transform: isActive ? 'scale(1.06)' : 'scale(1)',
                    }}
                  >
                    <span style={{
                      width: 5, height: 5, borderRadius: '50%',
                      background: isActive ? '#d4b472' : '#666',
                      flexShrink: 0,
                    }} />
                    <span>{item.label}</span>
                  </button>
                </Html>
              </Float>
            </group>
          );
        })}
    </group>
  );
}
