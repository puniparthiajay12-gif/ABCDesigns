import React, { useState, useEffect } from 'react';
import CanvasContainer from './components/3d/CanvasContainer';
import IntroOverlay from './components/ui/IntroOverlay';
import HeaderNav from './components/ui/HeaderNav';
import HUDOverlay from './components/ui/HUDOverlay';
import StageControls from './components/ui/StageControls';
import AboutSection from './components/ui/AboutSection';
import ServicesSection from './components/ui/ServicesSection';
import CategoriesSection from './components/ui/CategoriesSection';
import ProjectsSection from './components/ui/ProjectsSection';
import ContactSection from './components/ui/ContactSection';

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
