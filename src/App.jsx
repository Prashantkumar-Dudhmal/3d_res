import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { ScrollControls } from "@react-three/drei";

import "./index.css";

function App() {
  

  return (
    <>
      <Canvas shadows camera={{ position: [0, 0, 1], fov: 30 }}>
        <color attach="background" args={["#090909"]} />

        <Experience />
      </Canvas>
    </>
  );
}

export default App;
