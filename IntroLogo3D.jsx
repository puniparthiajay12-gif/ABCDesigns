import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, useTexture } from '@react-three/drei';
import * as THREE from 'three';

export default function IntroLogo3D({ mousePos }) {
  const groupRef = useRef();
  const lightRef = useRef();

  // Load official ABCD logo texture from public/logo.png
  const logoTexture = useTexture('/logo.png');

  useFrame((state) => {
    if (groupRef.current) {
      // Smooth mouse tilt parallax
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        mousePos.x * 0.25,
        0.05
      );
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        -mousePos.y * 0.15,
        0.05
      );
    }

    // Dynamic light sweep
    if (lightRef.current) {
      const t = state.clock.getElapsedTime();
      lightRef.current.position.x = Math.sin(t * 1.2) * 8;
      lightRef.current.position.y = Math.cos(t * 0.8) * 4 + 2;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Dynamic Sweep Light */}
      <pointLight ref={lightRef} intensity={100} color="#ffffff" distance={25} />
      <spotLight position={[0, 10, 12]} angle={0.5} penumbra={1} intensity={120} color="#ffffff" />
      <ambientLight intensity={0.8} />

      <Float speed={2} rotationIntensity={0.1} floatIntensity={0.2}>
        {/* Floating Official ABCD Logo */}
        <mesh position={[0, 0, 0]}>
          <planeGeometry args={[7, 6]} />
          <meshStandardMaterial
            map={logoTexture}
            transparent
            roughness={0.2}
            metalness={0.1}
            side={THREE.DoubleSide}
          />
        </mesh>
      </Float>
    </group>
  );
}
