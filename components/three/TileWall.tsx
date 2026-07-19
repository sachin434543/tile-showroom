'use client';

import { useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Sparkles } from '@react-three/drei';
import * as THREE from 'three';

const GRID_COLS = 10;
const GRID_ROWS = 6;
const GAP = 1.15;
const COUNT = GRID_COLS * GRID_ROWS;

function Tiles() {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);

  useFrame(({ clock }) => {
    const mesh = meshRef.current;
    if (!mesh) return;
    const t = clock.getElapsedTime();
    let i = 0;
    for (let x = 0; x < GRID_COLS; x++) {
      for (let y = 0; y < GRID_ROWS; y++) {
        dummy.position.set(
          (x - (GRID_COLS - 1) / 2) * GAP,
          (y - (GRID_ROWS - 1) / 2) * GAP,
          Math.sin(t * 0.6 + x * 0.7 + y * 0.5) * 0.18,
        );
        dummy.rotation.set(
          Math.sin(t * 0.3 + y) * 0.04,
          Math.cos(t * 0.25 + x) * 0.04,
          0,
        );
        dummy.updateMatrix();
        mesh.setMatrixAt(i++, dummy.matrix);
      }
    }
    mesh.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, COUNT]}>
      <boxGeometry args={[1, 1, 0.08]} />
      <meshStandardMaterial
        color="#efe9dd"
        metalness={0.55}
        roughness={0.28}
        envMapIntensity={1.1}
      />
    </instancedMesh>
  );
}

function MovingLight() {
  const lightRef = useRef<THREE.PointLight>(null);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    lightRef.current?.position.set(Math.sin(t * 0.4) * 6, Math.cos(t * 0.3) * 3, 3.5);
  });

  return <pointLight ref={lightRef} color="#c9a24b" intensity={35} distance={14} />;
}

function CameraRig() {
  useFrame(({ camera, pointer }) => {
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, pointer.x * 0.8, 0.04);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, pointer.y * 0.5, 0.04);
    camera.lookAt(0, 0, 0);
  });
  return null;
}

export default function TileWall() {
  return (
    <Canvas
      dpr={[1, 1.8]}
      camera={{ position: [0, 0, 8.5], fov: 42 }}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.9} />
      <directionalLight position={[4, 6, 6]} color="#fff6e0" intensity={1.4} />
      <MovingLight />
      <pointLight position={[-6, -3, 4]} color="#8c6a3f" intensity={16} distance={16} />
      <Tiles />
      <Sparkles count={90} scale={[14, 8, 4]} size={2.4} speed={0.25} color="#a67c00" />
      <Environment preset="apartment" />
      <CameraRig />
    </Canvas>
  );
}
