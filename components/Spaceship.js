import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";

function Spaceship() {
  const mesh = useRef();
  const [velocity, setVelocity] = useState({ x: 0, y: 0, z: 0 });

  const handleKeyDown = (event) => {
    const { key } = event;
    if (key === "ArrowUp") setVelocity((v) => ({ ...v, y: 0.05 }));
    if (key === "ArrowDown") setVelocity((v) => ({ ...v, y: -0.05 }));
    if (key === "ArrowLeft") setVelocity((v) => ({ ...v, x: -0.05 }));
    if (key === "ArrowRight") setVelocity((v) => ({ ...v, x: 0.05 }));
  };

  const handleKeyUp = (event) => {
    const { key } = event;
    if (key === "ArrowUp" || key === "ArrowDown") setVelocity((v) => ({ ...v, y: 0 }));
    if (key === "ArrowLeft" || key === "ArrowRight") setVelocity((v) => ({ ...v, x: 0 }));
  };

  useFrame((state, delta) => {
    mesh.current.position.x += velocity.x;
    mesh.current.position.y += velocity.y;

    // Clamp spaceship position within a predefined range
    mesh.current.position.x = Math.min(Math.max(mesh.current.position.x, -4), 4);
    mesh.current.position.y = Math.min(Math.max(mesh.current.position.y, -2), 2);
  });

  return (
    <mesh ref={mesh} onKeyDown={handleKeyDown} onKeyUp={handleKeyUp} tabIndex={0}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={"blue"} />
    </mesh>
  );
}

export default Spaceship;
