import React, { useState, useEffect } from 'react';
import CanvasContainer from './CanvasContainer';
import IntroOverlay from './IntroOverlay';
import HeaderNav from './HeaderNav';
import HUDOverlay from './HUDOverlay';
import StageControls from './StageControls';

import AboutSection from './AboutSection';
import ServicesSection from './ServicesSection';
import CategoriesSection from './CategoriesSection';
import ProjectsSection from './ProjectsSection';
import ContactSection from './ContactSection';

export default function App() {
  const [activeSection, setActiveSection] = useState('intro');
  const [buildingStage, setBuildingStage] = useState(5); // Default to full stage 5
  const [renderMode, setRenderMode] = useState('realistic'); // 'realistic' | 'xray' | 'blueprint'
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Track global mouse position for 3D parallax
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const isIntro = activeSection === 'intro';

  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden', background: '#09090b', color: '#e8e8e8', userSelect: 'none' }}>
      {/* 3D R3F World Canvas */}
      <CanvasContainer
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        buildingStage={buildingStage}
        renderMode={renderMode}
        mousePos={mousePos}
      />

      {/* 2D HUD Cyber Grid Overlay */}
      {!isIntro && (
        <HUDOverlay
          activeSection={activeSection}
          buildingStage={buildingStage}
          renderMode={renderMode}
        />
      )}

      {/* Opening 3D Intro Overlay */}
      {isIntro && (
        <IntroOverlay
          onEnter={() => setActiveSection('home')}
          soundEnabled={soundEnabled}
          setSoundEnabled={setSoundEnabled}
        />
      )}

      {/* Main Top Header Navigation */}
      {!isIntro && (
        <HeaderNav
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          renderMode={renderMode}
          setRenderMode={setRenderMode}
        />
      )}

      {/* Floating 3D Building Stage Controller */}
      {!isIntro && (
        <StageControls
          buildingStage={buildingStage}
          setBuildingStage={setBuildingStage}
        />
      )}

      {/* Section Content Overlay Modals */}
      {activeSection === 'about' && (
        <AboutSection onClose={() => setActiveSection('home')} />
      )}

      {activeSection === 'services' && (
        <ServicesSection onClose={() => setActiveSection('home')} />
      )}

      {activeSection === 'categories' && (
        <CategoriesSection onClose={() => setActiveSection('home')} />
      )}

      {activeSection === 'projects' && (
        <ProjectsSection onClose={() => setActiveSection('home')} />
      )}

      {activeSection === 'contact' && (
        <ContactSection onClose={() => setActiveSection('home')} />
      )}
    </div>
  );
}
