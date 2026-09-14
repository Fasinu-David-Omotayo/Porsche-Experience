"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Center, useGLTF } from "@react-three/drei";
import { Suspense, useRef } from "react";
import * as THREE from "three";

function PorscheModel() {
  const { scene } = useGLTF("/models/porsche_911_gt3-optimized.glb");

  const group = useRef<THREE.Group>(null);

  const rotation = useRef({
    y: 0,
  });

  useFrame((state, delta) => {
    if (!group.current) return;

    /*
     * Slow cinematic rotation.
     * This runs directly inside Three.js and does not
     * trigger React re-renders.
     */
    rotation.current.y += delta * 0.16;

    const mouseRotation = state.pointer.x * 0.12;

    const targetY =
      rotation.current.y + mouseRotation;

    group.current.rotation.y = THREE.MathUtils.lerp(
      group.current.rotation.y,
      targetY,
      0.035
    );

    const targetX =
      state.pointer.y * -0.025;

    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      targetX,
      0.035
    );
  });

  return (
    <group ref={group}>
      <Center>
        <primitive
          object={scene}
          scale={1}
        />
      </Center>
    </group>
  );
}

function LoadingFallback() {
  return null;
}

export default function Porsche3D() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <Canvas
        camera={{
          position: [0, 1.2, 7],
          fov: 34,
          near: 0.1,
          far: 50,
        }}
        dpr={1}
        gl={{
          antialias: false,
          alpha: true,
          powerPreference: "high-performance",
          stencil: false,
          depth: true,
        }}
        frameloop="always"
      >
        <ambientLight intensity={1.15} />

        <directionalLight
          position={[5, 6, 5]}
          intensity={2}
        />

        <directionalLight
          position={[-4, 3, 2]}
          intensity={1}
        />

        <Suspense fallback={<LoadingFallback />}>
          <PorscheModel />
        </Suspense>
      </Canvas>
    </div>
  );
}

useGLTF.preload("/models/porsche_911_gt3-optimized.glb");