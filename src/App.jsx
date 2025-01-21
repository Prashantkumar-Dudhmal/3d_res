import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Canvas shadows camera={{ position: [0, 0, 1], fov: 30 }}>
      <color attach="background" args={["#242b38"]} />
      <Experience />
    </Canvas>
  );
}

export default App;
