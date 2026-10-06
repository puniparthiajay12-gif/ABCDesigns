import React from 'react';
import { Grid } from '@react-three/drei';

export default function BlueprintGrid({ mode = 'realistic' }) {
  const gridColor = mode === 'blueprint' ? '#4b5563' : '#1f2937';
  const sectionColor = mode === 'blueprint' ? '#9ca3af' : '#4b5563';

  return (
    <group position={[0, -0.01, 0]}>
      <Grid
        infiniteGrid
        cellSize={1}
        cellThickness={0.6}
        cellColor={gridColor}
        sectionSize={5}
        sectionThickness={1.2}
        sectionColor={sectionColor}
        fadeDistance={50}
        fadeStrength={1.5}
      />
      {/* Structural X/Z Axis indicators - Subtle and official */}
      <line>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={2}
            array={new Float32Array([-25, 0.01, 0, 25, 0.01, 0])}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial color="#4b5563" linewidth={2} transparent opacity={0.5} />
      </line>
      <line>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={2}
            array={new Float32Array([0, 0.01, -25, 0, 0.01, 25])}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial color="#4b5563" linewidth={2} transparent opacity={0.5} />
      </line>
    </group>
  );
}
