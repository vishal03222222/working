
// // import React, { useState, useEffect } from "react";
// // import GamePieces from "./Gamepieces";

// // const GameState = () => {
// //   const [score, setScore] = useState(0);
// //   const [highScore, setHighScore] = useState(
// //     parseInt(localStorage.getItem("highScore")) || 0
// //   );
// //   const [gameOver, setGameOver] = useState(false);
// //   const [collisionType, setCollisionType] = useState(null);

// //   const handleGameOver = (type) => {
// //     setGameOver(true);

// //     if (score > highScore) {
// //       setHighScore(score);
// //       localStorage.setItem("highScore", score.toString());
// //     }

// //     setCollisionType(type);
// //   };

// //   const handleResetGame = () => {
// //     setScore(0);
// //     setGameOver(false);
// //   };

// //   useEffect(() => {
// //     const handleKeyPress = (e) => {
// //       if (gameOver && e.key === "Enter") {
// //         handleResetGame();
// //       }
// //     };

// //     window.addEventListener("keydown", handleKeyPress);

// //   }, [gameOver]);

// //   return (
// //     <div className="game-container">
// //       <p className="score">Score: {score}</p>
// //       <p className="high-score">High Score: {highScore}</p>
// //       {gameOver && (
// //         <div className="game-over">
// //           <p>Game Over! {collisionType === "wall" ? "You Hit the wall" : "You Ate yourself"}!</p>
// //           <p>Press Enter to reset the game.</p>
// //         </div>
// //       )}
// //       {!gameOver && (
// //         <GamePieces
// //           score={score}
// //           setScore={setScore}
// //           onGameOver={(type) => handleGameOver(type)}
// //         />
// //       )}
// //     </div>
// //   );
// // };

// // export default GameState;

// import React, { useState, useEffect } from "react";
// import GamePieces from "./Gamepieces";

// const GameState = () => {
//   const [score, setScore] = useState(0);
//   const [highScore, setHighScore] = useState(
//     Number(localStorage.getItem("highScore")) || 0
//   );
//   const [gameOver, setGameOver] = useState(false);
//   const [collisionType, setCollisionType] = useState(null);

//   const handleGameOver = (type) => {
//     setGameOver(true);
//     setCollisionType(type);

//     if (score > highScore) {
//       const newHighScore = score;
//       setHighScore(newHighScore);
//       localStorage.setItem("highScore", newHighScore.toString());
//     }
//   };

//   const handleResetGame = () => {
//     setScore(0);
//     setGameOver(false);
//     setCollisionType(null);
//   };

//   useEffect(() => {
//     const handleKeyPress = (e) => {
//       if (gameOver && e.key === "Enter") {
//         handleResetGame();
//       }
//     };

//     window.addEventListener("keydown", handleKeyPress);

//     return () => {
//       window.removeEventListener("keydown", handleKeyPress);
//     };
//   }, [gameOver, handleResetGame]);

//   return (
//     <div className="game-container">
//       <p className="score">Score: {score}</p>
//       <p className="high-score">High Score: {highScore}</p>

//       {gameOver ? (
//         <div className="game-over">
//           <p>Game Over! {collisionType === "wall" ? "You hit the wall" : "You ate yourself"}!</p>
//           <p>Press Enter to reset the game.</p>
//         </div>
//       ) : (
//         <GamePieces score={score} setScore={setScore} onGameOver={handleGameOver} />
//       )}
//     </div>
//   );
// };

// export default GameState;
import React, { useState, useEffect, useCallback } from "react";
import GamePieces from "./Gamepieces";

const GameState = () => {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(
    Number(localStorage.getItem("highScore")) || 0
  );
  const [gameOver, setGameOver] = useState(false);
  const [collisionType, setCollisionType] = useState(null);

  const handleGameOver = (type) => {
    setGameOver(true);
    setCollisionType(type);

    if (score > highScore) {
      const newHighScore = score;
      setHighScore(newHighScore);
      localStorage.setItem("highScore", newHighScore.toString());
    }
  };

  // ✅ Wrapped handleResetGame in useCallback to prevent re-creation on every render
  const handleResetGame = useCallback(() => {
    setScore(0);
    setGameOver(false);
    setCollisionType(null);
  }, []);

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (gameOver && e.key === "Enter") {
        handleResetGame();
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [gameOver, handleResetGame]); // ✅ Now handleResetGame is stable and won't change on every render

  return (
    <div className="game-container">
      <p className="score">Score: {score}</p>
      <p className="high-score">High Score: {highScore}</p>

      {gameOver ? (
        <div className="game-over">
          <p>Game Over! {collisionType === "wall" ? "You hit the wall" : "You ate yourself"}!</p>
          <p>Press Enter to reset the game.</p>
        </div>
      ) : (
        <GamePieces score={score} setScore={setScore} onGameOver={handleGameOver} />
      )}
    </div>
  );
};

export default GameState;
