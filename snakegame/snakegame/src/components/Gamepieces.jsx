// import React, { useEffect, useRef, useState } from 'react'

// const Gamepieces = ({score, setscore, ongameover}) => {
//     const canvasref = useRef();
//     const snake_speed = 10;
//     const [apple, setapple] = useState({ x: 180, y: 100 });
//     const [snake, setsnake] = useState([
//         { x: 100, y: 50 },
//         { x: 95, y: 50 }
//     ]);
//     const [direction, setdirection] = useState(null);
//     useEffect(() => {
//         const canvas = canvasref.current;
//         const ctx = canvas.getContext("2d")

//         const drawsnake = () => {
//             snake.forEach((snakepark) => {
//                 ctx.beginPath();
//                 ctx.rect(snakepark.x, snakepark.y, 14, 14)
//                 ctx.fillstyle = "#90EE90";
//                 ctx.fill()
//                 ctx.closePath()
//             })
//         }
//         const drawapple = () => {
//             ctx.beginPath();
//             ctx.rect(apple.x, apple.y, 14, 14)
//             ctx.fillstyle = "#FF0000";
//             ctx.fill()
//             ctx.closePath()
//         }
//         const movesnake = () => {
//             if (direction) {
//                 setsnake((prevsnake) => {
//                     const newsnake = [...prevsnake];
//                     const snakehead = { x: newsnake[0].x, y: newsnake[0].y }


//                     for (let i = newsnake.length - 1; i > 0; i--) {
//                         newsnake[i].x = newsnake[i - 1].x;
//                         newsnake[i].y = newsnake[i - 1].y;

//                     }
//                     switch (direction) {
//                         case "right":
//                             snakehead.x += snake_speed
//                             break;
//                         case "left":
//                             snakehead.x -= snake_speed
//                             break;
//                         case "up":
//                             snakehead.y -= snake_speed
//                             break;
//                         case "down":
//                             snakehead.y += snake_speed
//                             break;
//                         default:
//                             break
//                     }
//                     newsnake[0] = snakehead;
//                     handleapllecollision(newsnake)
//                     handlewallcollision(snakehead)
//                     handlebodycollision(newsnake)

//                     return newsnake
//                 })

//             }

//         }
//         const handlebodycollision = (newsnake) => {
//             const snakehead = newsnake[0];
//             for (let i = 1; i < newsnake.length; i++) {
//                 if (snakehead.x === newsnake[i].x && snakehead.y === newsnake[i].y) {
//                     ongameover("self")
//                 }
//             }
//         }
//         const handlewallcollision = (snakehead) => {
//             if (snakehead.x + snake_speed > canvas.width || snakehead.x + snake_speed < 0) {
//                 ongameover("wall")
//             }
//             if (snakehead.y + snake_speed > canvas.height || snakehead.y < 0) {

//                 ongameover("wall")
//             }
//         }
//         const handleapllecollision = (newsnake) => {
//             const snakehead = newsnake[0]
//             if (snakehead.x === apple.x && snakehead.y === apple.y) {
//                 setscore(score++);
//                 setapple({
//                     x:
//                         Math.floor((Math.random() * canvas.width) / snake_speed) * snake_speed,
//                     y:
//                         Math.floor((Math.random() * canvas.height) / snake_speed) * snake_speed,


//                 })
//                 newsnake.push({
//                     x: newsnake[newsnake.length - 1].x,
//                     y: newsnake[newsnake.length - 1].y
//                 })
//             }

//         }
//         const handlekeypress = (e) => {
//             switch (e.key) {
//                 case "ArrowRight":
//                     setdirection("right")
//                     break
//                 case "ArrowLeft":
//                     setdirection("left")
//                     break
//                 case "Arrowup":
//                     setdirection("up")
//                     break
//                 case "Arrowdown":
//                     setdirection("down")
//                     break

//                 default:
//                     break;
//             }
//         }
//         window.addEventListener("keydown", handlekeypress)
//         const interval = setInterval(() => {
//             ctx.clearRect(0, 0, canvas.width, canvas.height);
//             drawsnake();
//             drawapple();
//             movesnake();



//         }, 100);
//         return () => {
//             clearInterval(interval)
//         };

//     }, [snake, direction])
//     return (
//         <div>
//             <canvas className='gamecanvas' ref={canvasref} width={750} height={420}></canvas>
//         </div>
//     )
// }

// export default Gamepieces
import React, { useState, useEffect, useRef } from "react";

const GamePieces = ({ score, setScore, onGameOver }) => {
  const canvasRef = useRef();
  const SNAKE_SPEED = 10;
  const [apple, setApple] = useState({ x: 180, y: 100 });
  const [snake, setSnake] = useState([
    { x: 100, y: 50 },
    { x: 95, y: 50 },
  ]);
  const [direction, setDirection] = useState(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const drawSnake = () => {
      snake.forEach((snakePart) => {
        ctx.beginPath();
        ctx.rect(snakePart.x, snakePart.y, 14, 14);
        ctx.fillStyle = "#90EE90";
        ctx.fill();
        ctx.closePath();
      });
    };

    const drawApple = () => {
      ctx.beginPath();
      ctx.rect(apple.x, apple.y, 14, 14);
      ctx.fillStyle = "#FF0000";
      ctx.fill();
      ctx.closePath();
    };

    const moveSnake = () => {
      if (direction) {
        setSnake((prevSnake) => {
          const newSnake = [...prevSnake];
          const snakeHead = { x: newSnake[0].x, y: newSnake[0].y };
    
          for (let i = newSnake.length - 1; i > 0; i--) {
            newSnake[i].x = newSnake[i - 1].x;
            newSnake[i].y = newSnake[i - 1].y;
          }
    
          switch (direction) {
            case "right":
              snakeHead.x += SNAKE_SPEED;
              break;
            case "left":
              snakeHead.x -= SNAKE_SPEED;
              break;
            case "up":
              snakeHead.y -= SNAKE_SPEED;
              break;
            case "down":
              snakeHead.y += SNAKE_SPEED;
              break;
            default:
              break;
          }
    
          newSnake[0] = snakeHead;
    
          handleAppleCollision(newSnake);
          handleWallCollision(snakeHead);
          handleBodyCollision(newSnake);

          return newSnake;
        });
      }
    };

    const handleWallCollision = (snakeHead) => {
      if (snakeHead.x + SNAKE_SPEED > canvas.width || snakeHead.x + SNAKE_SPEED < 0) {
        onGameOver("wall");
      }
      if(snakeHead.y + SNAKE_SPEED > canvas.height || snakeHead.y + SNAKE_SPEED < 0) {
        onGameOver("wall");
      }
    };

    const handleBodyCollision = (newSnake) => {
      const snakeHead = newSnake[0];
      for (let i = 1; i < newSnake.length; i++) {
        if (snakeHead.x === newSnake[i].x && snakeHead.y === newSnake[i].y) {
          onGameOver("self"); 
        }
      }
    };

    const handleAppleCollision = (newSnake) => {
      const snakeHead = newSnake[0];

      if (snakeHead.x === apple.x && snakeHead.y === apple.y) {
        setScore(score++);

        setApple({
          x:
            Math.floor((Math.random() * canvas.width) / SNAKE_SPEED) *
            SNAKE_SPEED,
          y:
            Math.floor((Math.random() * canvas.height) / SNAKE_SPEED) *
            SNAKE_SPEED,
        });

        newSnake.push({
          x: newSnake[newSnake.length - 1].x,
          y: newSnake[newSnake.length - 1].y,
        });
      }
    };

    const handleKeyPress = (e) => {
      switch (e.key) {
        case "ArrowRight":
          setDirection("right");
          break;
        case "ArrowLeft":
          setDirection("left");
          break;
        case "ArrowUp":
          setDirection("up");
          break;
        case "ArrowDown":
          setDirection("down");
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    const interval = setInterval(() => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawSnake();
      drawApple();
      moveSnake();
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, [snake, direction]);

  return (
    <div>
      <canvas className="gameCanvas" ref={canvasRef} width={750} height={420} />
    </div>
  );
};

export default GamePieces;