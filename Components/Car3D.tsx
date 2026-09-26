"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Center, useGLTF } from "@react-three/drei";
import { Suspense, useMemo, useRef } from "react";
import * as THREE from "three";

type CarType =
  | "911"
  | "718"
  | "taycan"
  | "panamera"
  | "macan"
  | "cayenne";

const MODEL_CONFIG = {
  "911": {
    file: "/models/porsche_911_gt3-optimized.glb",
    scale: 122,
  },

  "718": {
    file: "/models/cayman-optimized.glb",
    scale: 120,
  },

  taycan: {
    file: "/models/tayy-optimized.glb",
    // scale: 1.3,
    scale: 0.0013,
  },

  panamera: {
    file: "/models/pan.glb",
    scale: 0.3,
  },

  macan: {
    file: "/models/mac.glb",
    scale: 125,
  },

  cayenne: {
    file: "/models/cayenne-optimized.glb",
    scale: 120,
  },
};

function Vehicle({
  model,
}: {
  model: CarType;
}) {
  const config = MODEL_CONFIG[model];

  const { scene } = useGLTF(config.file);

  const group = useRef<THREE.Group>(null);

  const autoRotation = useRef(0);

  useFrame((state, delta) => {
    if (!group.current) return;

    autoRotation.current += delta * 0.15;

    const pointerInfluence =
      state.pointer.x * 0.12;

    const targetY =
      autoRotation.current +
      pointerInfluence;

    group.current.rotation.y =
      THREE.MathUtils.lerp(
        group.current.rotation.y,
        targetY,
        0.035
      );

    const targetX =
      state.pointer.y * -0.025;

    group.current.rotation.x =
      THREE.MathUtils.lerp(
        group.current.rotation.x,
        targetX,
        0.035
      );
  });

  const clonedScene = useMemo(
    () => scene.clone(),
    [scene]
  );

  return (
    <group ref={group}>
      <Center>
        <primitive
          object={clonedScene}
          scale={config.scale}
        />
      </Center>
    </group>
  );
}

function Loader() {
  return null;
}

export default function Car3D({
  model,
}: {
  model: CarType;
}) {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <Canvas
        dpr={[1, 1.5]}
        camera={{
          position: [0, 1.2, 7],
          fov: 34,
          near: 0.1,
          far: 200,
        }}
        gl={{
          antialias: false,
          alpha: true,
          powerPreference:
            "high-performance",
        }}
      >
        <ambientLight intensity={1.15} />

        <directionalLight
          position={[5, 6, 5]}
          intensity={2}
        />

        <directionalLight
          position={[-5, 4, 2]}
          intensity={1.2}
        />

        <Suspense fallback={<Loader />}>
          <Vehicle model={model} />
        </Suspense>
      </Canvas>
    </div>
  );
}

useGLTF.preload(
  "/models/porsche_911_gt3-optimized.glb"
);

useGLTF.preload(
  "/models/cayman-optimized.glb"
);

useGLTF.preload(
  "/models/taycan-optimized.glb"
);

useGLTF.preload(
  "/models/panamera-optimized.glb"
);

useGLTF.preload(
  "/models/macan.glb"
);

useGLTF.preload(
  "/models/cayenne-optimized.glb"
);