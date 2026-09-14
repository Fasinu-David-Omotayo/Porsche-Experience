"use client";

import { Suspense, useEffect, useRef } from "react";
import {
  ContactShadows,
  Environment,
  Html,
  useGLTF,
  useProgress,
} from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

type CarSceneProps = {
  carColor: string;
};

function LoadingScreen() {
  const { progress } = useProgress();

  return (
    <Html fullscreen>
      <div className="flex h-full w-full items-center justify-center bg-[#e9e6de]">
        <div className="w-[280px]">
          <div className="mb-4 flex items-center justify-between">
            <span className="text-[10px] font-semibold tracking-[0.42em] text-[#171717]">
              PORSCHE
            </span>

            <span className="text-[9px] tracking-[0.2em] text-[#171717]/45">
              {Math.round(progress)}%
            </span>
          </div>

          <div className="h-[2px] overflow-hidden bg-[#171717]/10">
            <div
              className="h-full bg-[#171717] transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>

          <p className="mt-3 text-[8px] uppercase tracking-[0.3em] text-[#171717]/40">
            Preparing the machine
          </p>
        </div>
      </div>
    </Html>
  );
}

function PorscheModel({ carColor }: { carColor: string }) {
  const { scene } = useGLTF("/models/porsche-optimized.glb");

  const bodyMaterials = useRef<THREE.MeshStandardMaterial[]>([]);

  useEffect(() => {
    bodyMaterials.current = [];

    scene.traverse((object) => {
      if (!(object instanceof THREE.Mesh)) return;

      const materials = Array.isArray(object.material)
        ? object.material
        : [object.material];

      materials.forEach((material) => {
        if (!(material instanceof THREE.MeshStandardMaterial)) return;

        const objectName = object.name.toLowerCase();
        const materialName = material.name.toLowerCase();

        const isBody =
          objectName.includes("body") ||
          objectName.includes("paint") ||
          objectName.includes("exterior") ||
          objectName.includes("hood") ||
          objectName.includes("bonnet") ||
          objectName.includes("bumper") ||
          objectName.includes("fender") ||
          objectName.includes("door") ||
          objectName.includes("wing") ||
          materialName.includes("body") ||
          materialName.includes("paint") ||
          materialName.includes("exterior");

        if (!isBody) return;

        if (!bodyMaterials.current.includes(material)) {
          bodyMaterials.current.push(material);
        }

        material.metalness = 0.82;
        material.roughness = 0.2;
        material.envMapIntensity = 1.8;
      });
    });
  }, [scene]);

  useEffect(() => {
    const targetColor = new THREE.Color(carColor);

    bodyMaterials.current.forEach((material) => {
      material.color.copy(targetColor);
    });
  }, [carColor]);

  return (
    <group
      scale={2.65}
      position={[0, -1.2, 0]}
      rotation={[0, -0.08, 0]}
    >
      <primitive object={scene} />
    </group>
  );
}

function CinematicCamera() {
  const { camera, pointer } = useThree();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    const targetX = pointer.x * 0.22;
    const targetY = 0.55 + pointer.y * 0.1;

    camera.position.x = THREE.MathUtils.lerp(
      camera.position.x,
      targetX,
      0.035
    );

    camera.position.y = THREE.MathUtils.lerp(
      camera.position.y,
      targetY,
      0.035
    );

    camera.position.z = THREE.MathUtils.lerp(
      camera.position.z,
      4.9 + Math.sin(time * 0.35) * 0.08,
      0.025
    );

    camera.lookAt(0, -0.65, 0);
  });

  return null;
}

function CinematicLighting() {
  return (
    <>
      <ambientLight intensity={1.15} />

      <directionalLight
        position={[5, 7, 6]}
        intensity={4.2}
      />

      <directionalLight
        position={[-6, 4, 3]}
        intensity={3.2}
      />

      <directionalLight
        position={[0, 4, -6]}
        intensity={2.5}
      />

      <spotLight
        position={[0, 7, 4]}
        intensity={7}
        angle={0.55}
        penumbra={1}
        distance={20}
      />

      <spotLight
        position={[-5, 2, 1]}
        intensity={2.5}
        angle={0.6}
        penumbra={1}
        distance={15}
      />
    </>
  );
}

function StudioFloor() {
  return (
    <>
      <ContactShadows
        position={[0, -1.75, 0]}
        opacity={0.38}
        scale={12}
        blur={2.8}
        far={5}
      />
    </>
  );
}

export default function CarScene({ carColor }: CarSceneProps) {
  return (
    <div className="h-full w-full">
      <Canvas
        camera={{
          position: [0, 0.55, 4.9],
          fov: 32,
          near: 0.1,
          far: 100,
        }}
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
      >
        <Suspense fallback={<LoadingScreen />}>
          <CinematicLighting />

          <Environment preset="studio" />

          <PorscheModel carColor={carColor} />

          <StudioFloor />

          <CinematicCamera />
        </Suspense>
      </Canvas>
    </div>
  );
}

useGLTF.preload("/models/porsche-optimized.glb");