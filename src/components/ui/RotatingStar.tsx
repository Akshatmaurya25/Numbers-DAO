"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh, Shape, ExtrudeGeometry } from "three";

const createStarGeometry = () => {
  const shape = new Shape();
  const outerRadius = 1;
  const innerRadius = 0.4;
  const spikes = 5;

  for (let i = 0; i < spikes * 2; i++) {
    const angle = (i * Math.PI) / spikes;
    const radius = i % 2 === 0 ? outerRadius : innerRadius;
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;
    if (i === 0) {
      shape.moveTo(x, y);
    } else {
      shape.lineTo(x, y);
    }
  }
  shape.closePath();

  return new ExtrudeGeometry(shape, { depth: 0.2, bevelEnabled: false });
};

const RotatingStarMesh = () => {
  const meshRef = useRef<Mesh>(null!);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={meshRef} geometry={createStarGeometry()}>
      <meshBasicMaterial wireframe color="white" />
    </mesh>
  );
};

const RotatingStar = () => {
  return (
    <Canvas className="w-full h-full" camera={{ position: [3, 3, 3] }}>
      <ambientLight intensity={0.5} />
      <RotatingStarMesh />
    </Canvas>
  );
};

export default RotatingStar;
