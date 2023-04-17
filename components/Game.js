import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, Stars } from "@react-three/drei";
import Spaceship from "./Spaceship";
import Gates from "./Gates";
import Score from "./Score";
import Timer from "./Timer";

function Game() {
  const [score, setScore] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const [gameKey, setGameKey] = useState(0);

  const handleGameOver = () => {
    setIsGameOver(true);
  };

  const restartGame = () => {
    setScore(0);
    setIsGameOver(false);
    setGameKey((prevKey) => prevKey + 1);
  };

  if (isGameOver) {
    return (
      <div className="text-white text-center">
        <h1>Game Over</h1>
        <h2>Your Score: {score}</h2>
        <button
          className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={restartGame}
        >
          Restart
        </button>
      </div>
    );
  }

  return (
    <>
      <Canvas key={gameKey}>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Stars />
        <Spaceship />
        <Gates setScore={setScore} />
        <OrbitControls />
      </Canvas>
      <Score score={score} />
      <Timer onFinish={handleGameOver} />
    </>
  );
}

export default Game;
