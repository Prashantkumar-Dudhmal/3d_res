import React, { useRef } from "react";
import Overlay from "./Overlay1";
import {
  Environment,
  OrbitControls,
  ScrollControls,
  useScroll,
  Scroll,
} from "@react-three/drei";
import { A2 } from "./A2";
import { ScrollManager } from "./ScrollManager";
import { useState } from "react";

export const Experience = () => {
  let seeCursor = true;
  const charRef = useRef();
  const scroll = useScroll();

  const [section, setSection] = useState(0);
  return (
    <>
      <OrbitControls enableZoom={false} />
      <ScrollControls pages={6} damping={0.1}>
        {
          //<ScrollManager section={section} onSectionChange={setSection} />
        }
        <Scroll html>
          <Overlay />
        </Scroll>
        <mesh>
          <group
            ref={charRef}
            position-y={-1.65}
            position-x={0.2}
            rotation={[0, -Math.PI / 6, 0]}
            castShadow
          >
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
        </mesh>
      </ScrollControls>
      <Environment preset="sunset" />
      <pointLight position={[0, 1, -1]} intensity={25} color={"#9361ba"} />
      <pointLight position={[1, 1, 1]} intensity={20} color={"#9361ba"} />
      <ambientLight intensity={0.3} color={"#ffffff"} />
    </>
  );
};
