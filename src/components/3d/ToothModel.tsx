'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function ToothModel() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.15;
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.4) * 0.05;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]} scale={0.6}>
      <mesh position={[0, 0.1, 0]}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshPhysicalMaterial
          color="#F5F5F0"
          metalness={0.0}
          roughness={0.15}
          clearcoat={0.8}
          clearcoatRoughness={0.1}
          envMapIntensity={1.5}
        />
      </mesh>

      <mesh position={[0, -0.5, 0]}>
        <coneGeometry args={[0.45, 0.8, 32]} />
        <meshPhysicalMaterial
          color="#F0F0EB"
          metalness={0.0}
          roughness={0.2}
          clearcoat={0.6}
          clearcoatRoughness={0.2}
          envMapIntensity={1.2}
        />
      </mesh>

      <mesh position={[0, -1.1, 0]}>
        <cylinderGeometry args={[0.15, 0.2, 0.4, 16]} />
        <meshPhysicalMaterial
          color="#E8E8E3"
          metalness={0.0}
          roughness={0.3}
        />
      </mesh>

      <mesh position={[0, -1.4, 0]}>
        <sphereGeometry args={[0.2, 16, 16]} />
        <meshPhysicalMaterial
          color="#E0D8D0"
          metalness={0.0}
          roughness={0.4}
        />
      </mesh>

      {[0, 1, 2, 3].map((i) => {
        const angle = (i / 4) * Math.PI * 2;
        return (
          <mesh key={i} position={[Math.sin(angle) * 0.15, -1.4, Math.cos(angle) * 0.15]}>
            <sphereGeometry args={[0.05, 8, 8]} />
            <meshPhysicalMaterial color="#C8C0B8" roughness={0.5} />
          </mesh>
        );
      })}

      <mesh position={[0, 0.55, 0]}>
        <boxGeometry args={[0.3, 0.04, 0.3]} />
        <meshPhysicalMaterial
          color="#FFFFFF"
          metalness={0.0}
          roughness={0.05}
          transparent
          opacity={0.3}
        />
      </mesh>

      <mesh position={[0, -0.15, 0.42]}>
        <boxGeometry args={[0.15, 0.08, 0.02]} />
        <meshPhysicalMaterial color="#F5F5F0" roughness={0.1} />
      </mesh>
    </group>
  );
}