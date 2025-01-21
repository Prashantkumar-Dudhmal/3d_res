import React, { useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { A2 } from "./A2";

export const Experience = () => {
  return (
    <>
      <OrbitControls />
      <mesh>
        <group position-y={-1.65} castShadow>
          <A2 />
        </group>
        <spotLight
          position={[0, 1, -1]}
          angle={0.5}
          intensity={20}
          castShadow
          penumbra={1}
          color="#b8d0de"
        />
        <Environment preset="sunset" />
        <pointLight position={[0, 1, -1]} intensity={25} color={"#9361ba"} />
        <pointLight position={[1, 1, 1]} intensity={20} color={"#9361ba"} />

        <ambientLight intensity={0.3} color={"#ffffff"} />
      </mesh>
    </>
  );
};
