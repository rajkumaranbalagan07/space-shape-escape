import { useEffect, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three"; // Add this import statement


const shapes = ["box", "sphere", "pyramid"];

function getRandomShape() {
  return shapes[Math.floor(Math.random() * shapes.length)];
}

function createGate() {
  return { shape: getRandomShape(), position: [0, 0, -20] };
}

function Gate({ shape, position }) {
  return (
    <mesh position={position}>
      {shape === "box" && <boxGeometry args={[1, 1, 1]} />}
      {shape === "sphere" && <sphereGeometry args={[0.5, 32, 32]} />}
      {shape === "pyramid" && <coneGeometry args={[1, 1, 4]} />}
      <meshStandardMaterial color={"yellow"} />
    </mesh>
  );
}

function Gates() {
  const [gates, setGates] = useState([createGate()]);
  const frameCount = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setGates((gates) => [...gates, createGate()]);
    }, 5000); // Add a new gate every 5 seconds
    return () => clearInterval(interval);
  }, []);

  useFrame((state, delta) => {
    for (let gate of gates) {
      gate.position[2] += 0.1; // Move gates towards the player

      // Basic collision detection
      const spaceshipPosition = state.scene.children.find((obj) => obj.type === "Mesh").position;
      const distanceToGate = spaceshipPosition.distanceTo(new THREE.Vector3(...gate.position));
      if (distanceToGate < 1) {
        console.log("Collision detected!");
        // Implement scoring, combo system, and game over logic here
      }
    }

    // Remove gates that have moved past the player
    setGates((gates) => gates.filter((gate) => gate.position[2] < 10));
  });

  return (
    <group>
      {gates.map((gate, index) => (
        <Gate key={index} shape={gate.shape} position={gate.position} />
      ))}
    </group>
  );
}

export default Gates;
