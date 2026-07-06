'use client';

import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import { ToothModel } from './ToothModel';
import { DentalParticles } from './DentalParticles';
import { cn } from '@/lib/utils';

interface DentalSceneProps {
  className?: string;
  interactive?: boolean;
}

export function DentalScene({ className, interactive = false }: DentalSceneProps) {
  return (
    <div className={cn('relative', className)}>
      <Canvas
        shadows
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 3.5], fov: 40, near: 0.1, far: 10 }}
        gl={{
          antialias: true,
          toneMapping: 3,
          toneMappingExposure: 1.0,
          alpha: true,
        }}
        className="w-full h-full"
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.6} />
          <directionalLight position={[5, 5, 5]} intensity={1.5} />
          <directionalLight position={[-3, 2, -2]} intensity={0.5} color="#22d3ee" />
          <ToothModel />
          <DentalParticles count={80} />
          <Environment preset="studio" environmentIntensity={0.6} />
        </Suspense>
      </Canvas>
    </div>
  );
}