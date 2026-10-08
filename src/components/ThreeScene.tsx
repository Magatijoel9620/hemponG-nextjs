"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  MeshDistortMaterial,
  Sphere,
  TorusKnot,
} from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function Core() {
  const ref = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.x = THREE.MathUtils.lerp(
      ref.current.rotation.x,
      state.pointer.y * 0.18,
      0.03,
    );
    ref.current.rotation.y = THREE.MathUtils.lerp(
      ref.current.rotation.y,
      state.pointer.x * 0.25,
      0.03,
    );
    ref.current.rotation.z += 0.0018;
  });
  return (
    <group ref={ref}>
      <Float speed={1.2} rotationIntensity={0.18} floatIntensity={0.45}>
        <Sphere args={[1.35, 64, 64]} scale={1.05}>
          <MeshDistortMaterial
            color="#d7ff69"
            emissive="#314c0d"
            emissiveIntensity={0.7}
            roughness={0.18}
            metalness={0.72}
            distort={0.26}
            speed={1.35}
          />
        </Sphere>
        <TorusKnot
          args={[1.72, 0.018, 180, 12, 2, 3]}
          rotation={[Math.PI / 2, 0, 0]}
        >
          <meshBasicMaterial color="#65e7ff" transparent opacity={0.7} />
        </TorusKnot>
        <TorusKnot
          args={[2.05, 0.012, 180, 12, 3, 2]}
          rotation={[0, Math.PI / 2, 0]}
        >
          <meshBasicMaterial color="#a88cff" transparent opacity={0.45} />
        </TorusKnot>
      </Float>
    </group>
  );
}

export default function ThreeScene() {
  return (
    <div className="h-[420px] w-full md:h-[600px]" aria-hidden="true">
      <Canvas
        dpr={[1, 1.6]}
        camera={{ position: [0, 0, 5.4], fov: 38 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={1.3} />
        <directionalLight position={[4, 5, 5]} intensity={3} />
        <pointLight position={[-3, -2, 4]} intensity={18} color="#65e7ff" />
        <pointLight position={[3, 1, 1]} intensity={10} color="#c9ff4a" />
        <Core />
      </Canvas>
    </div>
  );
}
