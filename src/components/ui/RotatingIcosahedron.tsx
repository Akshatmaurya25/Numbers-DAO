"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh } from "three";

const RotatingIcosahedronMesh = () => {
  const meshRef = useRef<Mesh>(null!);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={meshRef}>
      <icosahedronGeometry args={[1]} />
      <meshBasicMaterial wireframe color="white" />
    </mesh>
  );
};

const RotatingIcosahedron = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-gradient-to-b from-purple-900 to-purple-600">
      <Canvas className="w-full h-full" camera={{ position: [3, 3, 3] }}>
        <ambientLight intensity={0.5} />
        <RotatingIcosahedronMesh /> {/* Ensuring useFrame is inside Canvas */}
      </Canvas>
    </div>
  );
};

export default RotatingIcosahedron;
