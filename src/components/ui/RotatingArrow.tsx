"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh, Shape, ExtrudeGeometry } from "three";

const createArrowGeometry = () => {
  const shape = new Shape();
  shape.moveTo(0, 1);
  shape.lineTo(0.5, 0.5);
  shape.lineTo(0.2, 0.5);
  shape.lineTo(0.2, -0.5);
  shape.lineTo(-0.2, -0.5);
  shape.lineTo(-0.2, 0.5);
  shape.lineTo(-0.5, 0.5);
  shape.closePath();

  return new ExtrudeGeometry(shape, { depth: 0.2, bevelEnabled: false });
};

const RotatingArrowMesh = () => {
  const meshRef = useRef<Mesh>(null!);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={meshRef} geometry={createArrowGeometry()}>
      <meshBasicMaterial wireframe color="white" />
    </mesh>
  );
};

const RotatingArrow = () => {
  return (
    <Canvas className="w-full h-full" camera={{ position: [3, 3, 3] }}>
      <ambientLight intensity={0.5} />
      <RotatingArrowMesh />
    </Canvas>
  );
};

export default RotatingArrow;
