import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment, Stars } from '@react-three/drei';
import IntroLogo3D from './IntroLogo3D';
import ArchitecturalWorld from './ArchitecturalWorld';
import Particles from './Particles';

export default function CanvasContainer({
  activeSection,
  setActiveSection,
  buildingStage,
  renderMode,
  mousePos,
}) {
  const isIntro = activeSection === 'intro';

  return (
    <div style={{ position: 'fixed', inset: 0, width: '100%', height: '100%', zIndex: 0, background: '#09090b' }}>
      <Canvas
        gl={{ antialias: true, alpha: false, powerPreference: 'high-performance' }}
        dpr={[1, 1.5]}
      >
        <Suspense fallback={null}>
          {/* Camera Setup */}
          <PerspectiveCamera
            makeDefault
            position={isIntro ? [0, 0, 10] : [14, 12, 16]}
            fov={45}
          />

          {/* Orbit Controls */}
          <OrbitControls
            enablePan={!isIntro}
            enableZoom={true}
            maxPolarAngle={Math.PI / 2 - 0.05}
            minDistance={4}
            maxDistance={40}
            autoRotate={activeSection === 'home'}
            autoRotateSpeed={0.4}
            dampingFactor={0.06}
          />

          {/* Lighting — warm, architectural */}
          <ambientLight intensity={isIntro ? 0.25 : 0.5} />
          <directionalLight
            position={[15, 20, 15]}
            intensity={isIntro ? 0.8 : 1.6}
            castShadow
            shadow-mapSize={[1024, 1024]}
            color="#fff8f0"
          />
          {/* Warm fill light */}
          <pointLight position={[-12, 8, -8]} intensity={0.4} color="#c8a060" />
          {/* Cool rim */}
          <pointLight position={[10, -5, -15]} intensity={0.2} color="#8899bb" />

          {/* Very subtle floating particles — off-white/warm */}
          <Particles count={180} color="#a89070" />

          {/* Stars — very faint */}
          <Stars radius={120} depth={60} count={2000} factor={3} saturation={0} fade speed={0.6} />

          {/* 3D Content — use group visibility to prevent R3F unmount issues */}
          <group visible={isIntro}>
            <IntroLogo3D mousePos={mousePos} />
          </group>

          <group visible={!isIntro}>
            <ArchitecturalWorld
              activeSection={activeSection}
              setActiveSection={setActiveSection}
              buildingStage={buildingStage}
              renderMode={renderMode}
            />
          </group>

          {/* HDRI Environment */}
          <Environment preset="city" />
        </Suspense>
      </Canvas>
    </div>
  );
}
