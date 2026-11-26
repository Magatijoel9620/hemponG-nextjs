"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  MeshDistortMaterial,
  Sphere,
  Torus,
  TorusKnot,
} from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function SphereBorderGlow({
  radius,
  z,
}: {
  radius: number;
  z: number;
}) {
  return (
    <>
      {/* Broad outer halo */}
      <Torus args={[radius, 0.055, 16, 180]} position={[0, 0, z]} renderOrder={5}>
        <meshBasicMaterial
          color="#8cff00"
          transparent
          opacity={0.12}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
          toneMapped={false}
        />
      </Torus>

      {/* Brighter middle halo */}
      <Torus args={[radius, 0.028, 16, 180]} position={[0, 0, z]} renderOrder={6}>
        <meshBasicMaterial
          color="#aaff24"
          transparent
          opacity={0.3}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
          toneMapped={false}
        />
      </Torus>

      {/* Fine luminous border */}
      <Torus args={[radius, 0.009, 12, 180]} position={[0, 0, z]} renderOrder={7}>
        <meshBasicMaterial
          color="#d6ff75"
          toneMapped={false}
        />
      </Torus>
    </>
  );
}

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

        {/* Two luminous concentric borders on the HG sphere. */}
        <SphereBorderGlow radius={1.34} z={0.48} />
        <SphereBorderGlow radius={1.19} z={0.77} />

        {/* Orbital ring 1 — intensified lime halo and bright core. */}
        <TorusKnot
          args={[1.72, 0.16, 180, 12, 2, 3]}
          rotation={[Math.PI / 2, 0, 0]}
          renderOrder={1}
        >
          <meshBasicMaterial
            color="#8cff00"
            transparent
            opacity={0.2}
            blending={THREE.AdditiveBlending}
            depthWrite={false}
            toneMapped={false}
          />
        </TorusKnot>
        <TorusKnot
          args={[1.72, 0.095, 180, 12, 2, 3]}
          rotation={[Math.PI / 2, 0, 0]}
          renderOrder={2}
        >
          <meshBasicMaterial
            color="#a6ff19"
            transparent
            opacity={0.34}
            blending={THREE.AdditiveBlending}
            depthWrite={false}
            toneMapped={false}
          />
        </TorusKnot>
        <TorusKnot
          args={[1.72, 0.048, 180, 12, 2, 3]}
          rotation={[Math.PI / 2, 0, 0]}
          renderOrder={3}
        >
          <meshBasicMaterial
            color="#c0ff45"
            transparent
            opacity={0.62}
            blending={THREE.AdditiveBlending}
            depthWrite={false}
            toneMapped={false}
          />
        </TorusKnot>
        <TorusKnot
          args={[1.72, 0.014, 180, 12, 2, 3]}
          rotation={[Math.PI / 2, 0, 0]}
          renderOrder={4}
        >
          <meshBasicMaterial color="#dcff8a" toneMapped={false} />
        </TorusKnot>

        {/* Orbital ring 2 — matching stronger lime treatment. */}
        <TorusKnot
          args={[2.05, 0.15, 180, 12, 3, 2]}
          rotation={[0, Math.PI / 2, 0]}
          renderOrder={1}
        >
          <meshBasicMaterial
            color="#8cff00"
            transparent
            opacity={0.18}
            blending={THREE.AdditiveBlending}
            depthWrite={false}
            toneMapped={false}
          />
        </TorusKnot>
        <TorusKnot
          args={[2.05, 0.09, 180, 12, 3, 2]}
          rotation={[0, Math.PI / 2, 0]}
          renderOrder={2}
        >
          <meshBasicMaterial
            color="#a6ff19"
            transparent
            opacity={0.32}
            blending={THREE.AdditiveBlending}
            depthWrite={false}
            toneMapped={false}
          />
        </TorusKnot>
        <TorusKnot
          args={[2.05, 0.045, 180, 12, 3, 2]}
          rotation={[0, Math.PI / 2, 0]}
          renderOrder={3}
        >
          <meshBasicMaterial
            color="#c0ff45"
            transparent
            opacity={0.58}
            blending={THREE.AdditiveBlending}
            depthWrite={false}
            toneMapped={false}
          />
        </TorusKnot>
        <TorusKnot
          args={[2.05, 0.012, 180, 12, 3, 2]}
          rotation={[0, Math.PI / 2, 0]}
          renderOrder={4}
        >
          <meshBasicMaterial color="#dcff8a" toneMapped={false} />
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
