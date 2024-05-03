import { Canvas } from "@react-three/fiber";
import './App.css';
import World from './components/World';
import { OrbitControls } from "@react-three/drei";

function App() {
  return (
    <div className="App">
    <Canvas
      camera={{
        fov: 90,
        position: [-20, 6, 3],
      }}>
        <directionalLight position={[1, 1, 1]} intensity={0.2} />
        <World />
        <OrbitControls />
    </Canvas>
    <div className="footer" >by Zyxxie / 2024</div>
  </div>

  );
}

export default App;
