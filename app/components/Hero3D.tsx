"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import {
  ContactShadows,
  Environment,
  useGLTF,
} from "@react-three/drei";
import { Suspense, useEffect, useMemo, useRef } from "react";
import * as THREE from "three";

function SeeratHand() {
  const group = useRef<THREE.Group>(null);
  const { scene } = useGLTF("/models/seerat-hand.glb");

  const model = useMemo(() => {
    // Make a completely fresh copy of the GLB
    const clone = scene.clone(true);

    // Reset any scale/position left over from previous versions
    clone.scale.set(1, 1, 1);
    clone.position.set(0, 0, 0);

    // Find the real dimensions
    const box = new THREE.Box3().setFromObject(clone);
    const size = new THREE.Vector3();
    const center = new THREE.Vector3();

    box.getSize(size);
    box.getCenter(center);

    // Center the model geometry
    clone.position.set(
      -center.x,
      -center.y,
      -center.z
    );

    // Desired visible height
    const targetHeight = 2.8;

    const scale =
      targetHeight / size.y;

    clone.scale.setScalar(scale);

    // Stone material + shadows
    clone.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.castShadow = true;
        child.receiveShadow = true;

        child.material =
  new THREE.MeshStandardMaterial({
    color: new THREE.Color("#292522"), //8B734C
    roughness: 0.72,
    metalness: 0,
  });
      }
    });

    return clone;
  }, [scene]);

  useEffect(() => {
    // Make sure the model is reset whenever it loads
    if (group.current) {
      group.current.rotation.set(0, 0, 0);
    }
  }, []);

  useFrame((_, delta) => {
    if (group.current) {
      // Very slow premium rotation
      group.current.rotation.y += delta * 0.18;
    }
  });

  return (
    <group
  ref={group}
  position={[-0.25, 0.15, 0]}
  rotation={[0, Math.PI, 0]}
>
      <primitive object={model} />
    </group>
  );
}

export default function Hero3D() {
  return (
    <div className="h-full w-full">
      <Canvas
        shadows
        camera={{
          position: [0, 0, 5.5],
          fov: 34,
        }}
        gl={{
          antialias: true,
          alpha: true,
        }}
      >
        {/* Soft base illumination */}
        <ambientLight intensity={0.35} />

        {/* Main sculptural light */}
        <directionalLight
          castShadow
          position={[4, 5, 5]}
          intensity={4}
          color="#fff5e5"
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
        />

        {/* Side fill */}
        <directionalLight
          position={[-4, 2, 3]}
          intensity={1.3}
          color="#ded3c3"
        />

        {/* Gentle rim */}
        <pointLight
          position={[0, 3, -4]}
          intensity={1.4}
          color="#fff8ed"
        />

        <Suspense fallback={null}>
          <SeeratHand />

          <ContactShadows
            position={[0, -2.55, 0]}
            opacity={0.32}
            scale={4}
            blur={2.5}
            far={4}
          />

          <Environment
            preset="studio"
            environmentIntensity={0.6}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}

useGLTF.preload("/models/seerat-hand.glb");