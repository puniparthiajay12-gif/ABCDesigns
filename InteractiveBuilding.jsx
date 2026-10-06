import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function InteractiveBuilding({ stage = 5, mode = 'realistic' }) {
  const groupRef = useRef();

  useFrame((state, delta) => {
    if (groupRef.current) {
      // Gentle continuous rotation when idling
      groupRef.current.rotation.y += delta * 0.05;
    }
  });

  const isBlueprint = mode === 'blueprint';
  const isXray = mode === 'xray';

  // Advanced Materials System for Hyper-Realism
  const materials = {
    // Concrete Structural Members
    concrete: isBlueprint
      ? new THREE.MeshBasicMaterial({ color: '#38bdf8', wireframe: true })
      : isXray
      ? new THREE.MeshStandardMaterial({ color: '#475569', transparent: true, opacity: 0.35 })
      : new THREE.MeshStandardMaterial({ color: '#94a3b8', roughness: 0.7, metalness: 0.1 }),

    darkConcrete: isBlueprint
      ? new THREE.MeshBasicMaterial({ color: '#0ea5e9', wireframe: true })
      : isXray
      ? new THREE.MeshStandardMaterial({ color: '#334155', transparent: true, opacity: 0.3 })
      : new THREE.MeshStandardMaterial({ color: '#334155', roughness: 0.6 }),

    // Steel Structural Beams & Rebar
    steelBeam: isBlueprint
      ? new THREE.MeshBasicMaterial({ color: '#38bdf8', wireframe: true })
      : new THREE.MeshStandardMaterial({ color: '#1e293b', metalness: 0.95, roughness: 0.15 }),

    rebar: isBlueprint
      ? new THREE.MeshBasicMaterial({ color: '#ef4444', wireframe: true })
      : new THREE.MeshStandardMaterial({ color: '#dc2626', metalness: 0.8, roughness: 0.2 }),

    // Gold Metallic Accent
    gold: isBlueprint
      ? new THREE.MeshBasicMaterial({ color: '#38bdf8', wireframe: true })
      : new THREE.MeshStandardMaterial({ color: '#d4af37', metalness: 0.9, roughness: 0.2 }),

    // Brick & Masonry Walls
    brick: isBlueprint
      ? new THREE.MeshBasicMaterial({ color: '#0ea5e9', wireframe: true })
      : isXray
      ? new THREE.MeshStandardMaterial({ color: '#cbd5e1', transparent: true, opacity: 0.25 })
      : new THREE.MeshStandardMaterial({ color: '#991b1b', roughness: 0.85 }),

    whiteStucco: isBlueprint
      ? new THREE.MeshBasicMaterial({ color: '#38bdf8', wireframe: true })
      : isXray
      ? new THREE.MeshStandardMaterial({ color: '#f8fafc', transparent: true, opacity: 0.3 })
      : new THREE.MeshStandardMaterial({ color: '#f8fafc', roughness: 0.5 }),

    // High-End Architectural Glass
    glass: isBlueprint
      ? new THREE.MeshBasicMaterial({ color: '#38bdf8', wireframe: true })
      : isXray
      ? new THREE.MeshStandardMaterial({ color: '#38bdf8', transparent: true, opacity: 0.15 })
      : new THREE.MeshPhysicalMaterial({
          color: '#e0f2fe',
          transmission: 0.92,
          opacity: 1,
          transparent: true,
          roughness: 0.05,
          ior: 1.52,
          reflectivity: 0.9,
          clearcoat: 1,
        }),

    // Natural Teak Wood
    wood: isBlueprint
      ? new THREE.MeshBasicMaterial({ color: '#38bdf8', wireframe: true })
      : new THREE.MeshStandardMaterial({ color: '#78350f', roughness: 0.55 }),

    darkWood: isBlueprint
      ? new THREE.MeshBasicMaterial({ color: '#38bdf8', wireframe: true })
      : new THREE.MeshStandardMaterial({ color: '#451a03', roughness: 0.45 }),

    // Outdoor Landscaping & Water
    grass: isBlueprint
      ? new THREE.MeshBasicMaterial({ color: '#38bdf8', wireframe: true })
      : new THREE.MeshStandardMaterial({ color: '#166534', roughness: 0.9 }),

    poolWater: isBlueprint
      ? new THREE.MeshBasicMaterial({ color: '#38bdf8', wireframe: true })
      : new THREE.MeshPhysicalMaterial({
          color: '#06b6d4',
          transmission: 0.8,
          transparent: true,
          opacity: 0.85,
          roughness: 0.1,
          ior: 1.33,
        }),
  };

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* ========================================================================= */}
      {/* ---------------- STAGE 1: EXCAVATION & HEAVY FOUNDATION ---------------- */}
      {/* ========================================================================= */}
      {stage >= 1 && (
        <group name="stage-1-foundation">
          {/* Soil Earth Base Pit */}
          <mesh position={[0, -0.6, 0]} material={materials.darkConcrete}>
            <boxGeometry args={[14, 0.6, 11]} />
          </mesh>

          {/* Heavy Concrete Retaining Pit Wall */}
          <mesh position={[0, -0.2, -5.3]} material={materials.concrete}>
            <boxGeometry args={[13.8, 0.4, 0.4]} />
          </mesh>

          {/* 6 Heavy Structural RCC Footing Pads */}
          {[-5, 0, 5].map((x) =>
            [-3.8, 3.8].map((z) => (
              <group key={`footing-${x}-${z}`} position={[x, -0.15, z]}>
                {/* Concrete Footing Block */}
                <mesh material={materials.concrete}>
                  <boxGeometry args={[1.8, 0.5, 1.8]} />
                </mesh>
                {/* Steel Rebar Anchors */}
                {(stage === 1 || isXray) && (
                  <mesh position={[0, 0.6, 0]} material={materials.rebar}>
                    <cylinderGeometry args={[0.08, 0.08, 1.2, 8]} />
                  </mesh>
                )}
              </group>
            ))
          )}

          {/* Main Ground RCC Plinth Slab */}
          <mesh position={[0, 0.1, 0]} material={materials.concrete}>
            <boxGeometry args={[13.2, 0.3, 10.2]} />
          </mesh>
        </group>
      )}

      {/* ========================================================================= */}
      {/* ---------------- STAGE 2: RCC COLUMNS, BEAMS & SLABS ---------------- */}
      {/* ========================================================================= */}
      {stage >= 2 && (
        <group name="stage-2-structure">
          {/* 6 Structural Load-Bearing Columns for Ground & 1st Floor */}
          {[-5, 0, 5].map((x) =>
            [-3.8, 3.8].map((z) => (
              <group key={`column-${x}-${z}`}>
                {/* Ground Floor Column */}
                <mesh position={[x, 1.6, z]} material={materials.concrete}>
                  <boxGeometry args={[0.6, 2.7, 0.6]} />
                </mesh>
                {/* First Floor Column */}
                <mesh position={[x, 4.5, z]} material={materials.concrete}>
                  <boxGeometry args={[0.6, 2.7, 0.6]} />
                </mesh>
              </group>
            ))
          )}

          {/* Steel I-Beams Grid for Ground Floor Ceiling */}
          {[-5, 0, 5].map((x) => (
            <mesh key={`beam-x-${x}`} position={[x, 2.95, 0]} material={materials.steelBeam}>
              <boxGeometry args={[0.4, 0.2, 7.8]} />
            </mesh>
          ))}
          {[-3.8, 3.8].map((z) => (
            <mesh key={`beam-z-${z}`} position={[0, 2.95, z]} material={materials.steelBeam}>
              <boxGeometry args={[10.4, 0.2, 0.4]} />
            </mesh>
          ))}

          {/* First Floor Cantilever RCC Slab */}
          <mesh position={[0, 3.05, 0]} material={materials.concrete}>
            <boxGeometry args={[13.6, 0.3, 10.6]} />
          </mesh>

          {/* Roof Terrace RCC Slab */}
          <mesh position={[0, 5.9, 0]} material={materials.concrete}>
            <boxGeometry args={[13.8, 0.35, 10.8]} />
          </mesh>

          {/* Steel Rebar Framework Wireframes visible in X-Ray / Stage 2 */}
          {(stage === 2 || isXray) && (
            <group position={[0, 3.05, 0]}>
              <lineSegments>
                <edgesGeometry args={[new THREE.BoxGeometry(13.7, 0.35, 10.7)]} />
                <lineBasicMaterial color="#ef4444" linewidth={2} />
              </lineSegments>
            </group>
          )}
        </group>
      )}

      {/* ========================================================================= */}
      {/* ---------------- STAGE 3: MASONRY & FACADE WALLS ---------------- */}
      {/* ========================================================================= */}
      {stage >= 3 && (
        <group name="stage-3-walls">
          {/* Ground Floor Exterior Walls */}
          {/* Back Wall (Masonry Brick) */}
          <mesh position={[0, 1.6, -3.8]} material={materials.brick}>
            <boxGeometry args={[10.4, 2.7, 0.3]} />
          </mesh>
          {/* Left Side Wall */}
          <mesh position={[-5, 1.6, 0]} material={materials.whiteStucco}>
            <boxGeometry args={[0.3, 2.7, 7.4]} />
          </mesh>
          {/* Right Side Wall */}
          <mesh position={[5, 1.6, 0]} material={materials.whiteStucco}>
            <boxGeometry args={[0.3, 2.7, 7.4]} />
          </mesh>

          {/* First Floor Exterior Walls */}
          <mesh position={[-2, 4.5, -3.8]} material={materials.whiteStucco}>
            <boxGeometry args={[6.4, 2.7, 0.3]} />
          </mesh>
          <mesh position={[-5, 4.5, 0]} material={materials.whiteStucco}>
            <boxGeometry args={[0.3, 2.7, 7.4]} />
          </mesh>
        </group>
      )}

      {/* ========================================================================= */}
      {/* ---------------- STAGE 4: LUXURY INTERIORS & STAIRCASE ---------------- */}
      {/* ========================================================================= */}
      {stage >= 4 && (
        <group name="stage-4-interiors">
          {/* Ground Floor Living Room Furniture */}
          {/* Plush Sectional Sofa */}
          <mesh position={[-2.5, 0.5, 1]} material={materials.darkWood}>
            <boxGeometry args={[3.2, 0.5, 1.5]} />
          </mesh>
          {/* Modern Coffee Table */}
          <mesh position={[-2.5, 0.4, -0.5]} material={materials.gold}>
            <boxGeometry args={[1.8, 0.3, 0.8]} />
          </mesh>

          {/* Kitchen Island & Countertop */}
          <mesh position={[2.5, 0.55, -1.5]} material={materials.gold}>
            <boxGeometry args={[2.6, 0.7, 1.2]} />
          </mesh>
          {/* Barstools */}
          {[-1.8, -1.2, -0.6].map((z, idx) => (
            <mesh key={`stool-${idx}`} position={[1.1, 0.4, z]} material={materials.steelBeam}>
              <cylinderGeometry args={[0.2, 0.2, 0.6, 16]} />
            </mesh>
          ))}

          {/* Floating Architectural Staircase to 1st Floor */}
          {[0, 1, 2, 3, 4, 5, 6].map((step) => (
            <mesh
              key={`stair-${step}`}
              position={[4.2, 0.3 + step * 0.38, 2.5 - step * 0.6]}
              material={materials.wood}
            >
              <boxGeometry args={[1.2, 0.12, 0.45]} />
            </mesh>
          ))}

          {/* Master Bedroom Furniture (First Floor) */}
          <mesh position={[-2.5, 3.4, -1.8]} material={materials.darkWood}>
            <boxGeometry args={[2.4, 0.5, 2.2]} />
          </mesh>

          {/* Ceiling Recessed Spotlights */}
          {!isBlueprint && (
            <>
              <pointLight position={[-2.5, 2.7, 0]} intensity={25} color="#fef08a" distance={7} />
              <pointLight position={[2.5, 2.7, -1]} intensity={25} color="#fef08a" distance={7} />
              <pointLight position={[-2.5, 5.6, 0]} intensity={25} color="#fef08a" distance={7} />
            </>
          )}
        </group>
      )}

      {/* ========================================================================= */}
      {/* ---------------- STAGE 5: EXTERIOR FINISHES & LANDSCAPING ---------------- */}
      {/* ========================================================================= */}
      {stage >= 5 && (
        <group name="stage-5-finishes">
          {/* Ground Floor Panoramic Glass Curtain Wall */}
          <mesh position={[0, 1.6, 3.8]} material={materials.glass}>
            <boxGeometry args={[9.8, 2.7, 0.08]} />
          </mesh>
          {/* Aluminum Mullions Frame around Glass */}
          <lineSegments position={[0, 1.6, 3.81]}>
            <edgesGeometry args={[new THREE.BoxGeometry(9.85, 2.75, 0.1)]} />
            <lineBasicMaterial color="#1e293b" linewidth={2} />
          </lineSegments>

          {/* First Floor Balcony & Glass Facade */}
          <mesh position={[1, 4.5, 3.8]} material={materials.glass}>
            <boxGeometry args={[7.8, 2.7, 0.08]} />
          </mesh>

          {/* Architectural Teak Wooden Louver Slats (First Floor Facade) */}
          {[-4.2, -3.6, -3.0, -2.4].map((x, idx) => (
            <mesh key={`louver-${idx}`} position={[x, 4.5, 3.9]} material={materials.wood}>
              <boxGeometry args={[0.2, 2.7, 0.12]} />
            </mesh>
          ))}

          {/* Balcony Glass Railing */}
          <mesh position={[1, 3.6, 4.8]} material={materials.glass}>
            <boxGeometry args={[7.8, 0.9, 0.05]} />
          </mesh>
          {/* Balcony Handrail */}
          <mesh position={[1, 4.08, 4.8]} material={materials.steelBeam}>
            <boxGeometry args={[7.9, 0.08, 0.08]} />
          </mesh>

          {/* Roof Terrace Deck with Grass & Garden */}
          <mesh position={[0, 6.1, 0]} material={materials.grass}>
            <boxGeometry args={[13.2, 0.05, 10.2]} />
          </mesh>
          {/* Roof Pergola Structure */}
          <mesh position={[2, 7.1, 0]} material={materials.wood}>
            <boxGeometry args={[4.5, 2.0, 4.5]} />
          </mesh>
          {/* Roof Glass Balustrade */}
          <lineSegments position={[0, 6.6, 0]}>
            <edgesGeometry args={[new THREE.BoxGeometry(13.6, 1.0, 10.6)]} />
            <lineBasicMaterial color="#38bdf8" linewidth={2} transparent opacity={0.6} />
          </lineSegments>

          {/* Outdoor Pool Deck & Swimming Pool */}
          <group position={[-3.5, 0.25, 6]}>
            {/* Wooden Pool Deck */}
            <mesh position={[0, 0, 0]} material={materials.wood}>
              <boxGeometry args={[6, 0.1, 4]} />
            </mesh>
            {/* Infinity Pool Water Surface */}
            <mesh position={[0, 0.02, 0]} material={materials.poolWater}>
              <boxGeometry args={[5, 0.05, 3]} />
            </mesh>
          </group>

          {/* Ground Entrance Driveway Tiles & Lawn */}
          <mesh position={[3.5, 0.25, 6]} material={materials.grass}>
            <boxGeometry args={[6, 0.1, 4]} />
          </mesh>

          {/* 3D Metallic Gold ABCD Signage on Main Entrance Frame */}
          <mesh position={[0, 3.1, 4.2]} material={materials.gold}>
            <boxGeometry args={[3.2, 0.45, 0.08]} />
          </mesh>
        </group>
      )}
    </group>
  );
}
