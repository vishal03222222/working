// import React, { useEffect, useState } from 'react'
// import Gamepieces from './Gamepieces';

// const Gamestate = () => {
//     const[score,setscore]=useState(0);
//     const[highscore,sethighscore]=useState(parseInt(localStorage.getItem('highscore'))||0);
//     const[ongameover,setgameover]=useState(false);
//     const[collisontype,setcollisiontype]=useState("")
//     const handlegameover =(type)=>{
//       setgameover(true);
//       if (score>highscore){
//         sethighscore(score);
//         localStorage.setItem("highscore",score.toString)
//     }
//     setcollisiontype(type)
//     }
//     const handleresetgame =()=>{
//       setscore(0);
//       setgameover(false)
//     }
//     useEffect(()=>{
//       const handlekeypress =(e)=>{
//         if(ongameover && e.key === "Enter"){
//           handleresetgame()
//         }
//       }
//       window.addEventListener("keydown",handlekeypress)
//     },[ongameover])
//   return (
//     <div className='game-container'>
//         <p className='score'>score:{score}</p>
//         <p className='high'>High score: {highscore}</p>
//         {
//             ongameover &&(
//                 <div className='game-over'>
//                     <p  >Game over! {collisontype === "wall" ? "You Hit te wall" : "you ate yourself"}</p>
//                     <p className='game'>please press enter to reset the game</p>
//                 </div>
//             )
//         }
//       {

//         !ongameover && (
//             <Gamepieces
//             score={score}
//             setscore={setscore}
//             ongameover={(type)=>handlegameover(type)}/>
//         )
//       }
//     </div>
//   )
// }

// export default Gamestate
import React, { useState, useEffect } from "react";
import GamePieces from "./GamePieces";

const GameState = () => {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(
    parseInt(localStorage.getItem("highScore")) || 0
  );
  const [gameOver, setGameOver] = useState(false);
  const [collisionType, setCollisionType] = useState(null);

  const handleGameOver = (type) => {
    setGameOver(true);

    if (score > highScore) {
      setHighScore(score);
      localStorage.setItem("highScore", score.toString());
    }

    setCollisionType(type);
  };

  const handleResetGame = () => {
    setScore(0);
    setGameOver(false);
  };

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (gameOver && e.key === "Enter") {
        handleResetGame();
      }
    };

    window.addEventListener("keydown", handleKeyPress);

  }, [gameOver]);

  return (
    <div className="game-container">
      <p className="score">Score: {score}</p>
      <p className="high-score">High Score: {highScore}</p>
      {gameOver && (
        <div className="game-over">
          <p>Game Over! {collisionType === "wall" ? "You Hit the wall" : "You Ate yourself"}!</p>
          <p>Press Enter to reset the game.</p>
        </div>
      )}
      {!gameOver && (
        <GamePieces
          score={score}
          setScore={setScore}
          onGameOver={(type) => handleGameOver(type)}
        />
      )}
    </div>
  );
};

export default GameState;