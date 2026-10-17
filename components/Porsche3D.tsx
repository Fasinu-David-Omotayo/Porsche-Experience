// 

"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Center, useGLTF } from "@react-three/drei";
import { Suspense, useRef } from "react";
import * as THREE from "three";

function Model({
  modelPath,
  scale,
}: {
  modelPath: string;
  scale: number;
}) {
  const { scene } = useGLTF(modelPath);

  const group = useRef<THREE.Group>(null);

  const rotation = useRef(0);

  useFrame((state, delta) => {
    if (!group.current) return;

    rotation.current += delta * 0.08;

    group.current.rotation.y = THREE.MathUtils.lerp(
      group.current.rotation.y,
      rotation.current + state.pointer.x * 0.12,
      0.03
    );

    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      state.pointer.y * -0.03,
      0.03
    );
  });

  return (
    <group ref={group}>
      <Center>
        <primitive
          object={scene}
          scale={scale}
        />
      </Center>
    </group>
  );
}

export default function Car3D({
  modelPath,
  scale = 50,
}: {
  modelPath: string;
  scale?: number;
}) {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <Canvas
        camera={{
          position: [0, 1, 7],
          fov: 34,
        }}
      >
        <ambientLight intensity={1.2} />

        <directionalLight
          position={[5, 6, 5]}
          intensity={2}
        />

        <directionalLight
          position={[-5, 4, 2]}
          intensity={1}
        />

        <Suspense fallback={null}>
          <Model
            modelPath={modelPath}
            scale={scale}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}