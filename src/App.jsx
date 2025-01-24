import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { ScrollControls } from "@react-three/drei";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Canvas shadows camera={{ position: [0, 0, 1], fov: 30 }}>
        <ScrollControls pages={3} damping={2}>
          <color attach="background" args={["#242b38"]} />
          <Experience />
        </ScrollControls>
      </Canvas>

      <div className="App">
        <h1>
          Prashantkumar <br />
          Dudhmal
        </h1>
      </div>
    </>
  );
}

export default App;
