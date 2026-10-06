import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function Particles({ count = 350 }) {
  const meshRef = useRef();

  const dummy = useMemo(() => new THREE.Object3D(), []);

  // Generate particle parameters: position, speed, radius, spiral, size
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const radius = 6 + Math.random() * 26;
      const angle = Math.random() * Math.PI * 2;
      const height = (Math.random() - 0.5) * 25;
      const speed = 0.15 + Math.random() * 0.45;
      const swirlSpeed = 0.05 + Math.random() * 0.15;
      const size = 0.04 + Math.random() * 0.09;
      const pulseSpeed = 1 + Math.random() * 2;

      temp.push({
        radius,
        angle,
        height,
        speed,
        swirlSpeed,
        size,
        pulseSpeed,
        initialY: height,
      });
    }
    return temp;
  }, [count]);

  useFrame((state, delta) => {
    if (!meshRef.current) return;
    const time = state.clock.getElapsedTime();

    particles.forEach((p, i) => {
      // Swirl around Y-axis
      p.angle += delta * p.swirlSpeed;
      // Gently rise up
      p.height += delta * p.speed;
      if (p.height > 14) p.height = -14; // Wrap around vertically

      const x = Math.cos(p.angle) * p.radius;
      const z = Math.sin(p.angle) * p.radius;
      const y = p.height + Math.sin(time * p.pulseSpeed + i) * 0.3;

      const scale = p.size * (1 + Math.sin(time * p.pulseSpeed * 1.5) * 0.25);

      dummy.position.set(x, y, z);
      dummy.scale.set(scale, scale, scale);
      dummy.rotation.set(time * 0.2 + i, time * 0.3 + i, 0);
      dummy.updateMatrix();

      meshRef.current.setMatrixAt(i, dummy.matrix);
    });

    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[null, null, count]}>
      <octahedronGeometry args={[0.22, 0]} />
      <meshStandardMaterial
        color="#d4b472"
        roughness={0.2}
        metalness={0.8}
        emissive="#b8975a"
        emissiveIntensity={0.6}
        transparent
        opacity={0.65}
      />
    </instancedMesh>
  );
}
