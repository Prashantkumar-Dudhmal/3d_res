import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import {
  Environment,
  OrbitControls,
  ScrollControls,
  useScroll,
} from "@react-three/drei";
import * as THREE from "three";
import { A2 } from "./A2";

export const Experience = () => {
  let seeCursor = true;
  const charRef = useRef();
  const scroll = useScroll();

  useFrame(() => {
    const scrollY = scroll.offset; // Get normalized scroll value (0 to 1)
    if (charRef.current) {
      if (scrollY > 0.25 && scrollY < 0.5) {
        charRef.current.position.x = -0.8;
        seeCursor = false;
      }
      if (scrollY > 0.5 && scrollY < 0.75) {
        charRef.current.position.x = 0.2;
      }
    }
  });

  return (
    <>
      <OrbitControls />
      <mesh>
        <group ref={charRef} position-y={-1.65} castShadow>
          <A2 seeCursor={seeCursor} />
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
