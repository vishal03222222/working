import React, { useEffect, useRef, useState } from 'react'

const Gamepieces = (score,setscore,ongameover) => {
    const canvasref = useRef();
    const snake_speed = 10;
    const [apple, setapple] = useState({ x: 180, y: 100 });
    const [snake, setsnake] = useState([
        { x: 100, y: 50 },
        { x: 95, y: 50 }
    ]);
    const [direction, setdirection] = useState(null);
    useEffect(() => {
        const canvas = canvasref.current;
        const ctx = canvas.getContext("2d")

        const drawsnake = () => {
            snake.forEach((snakepark) => {
                ctx.beginPath();
                ctx.rect(snakepark.x, snakepark.y, 14, 14)
                ctx.fillstyle = "#90EE90";
                ctx.fill()
                ctx.closePath()
            })
        }
        const drawapple = () => {
            ctx.beginPath();
            ctx.rect(apple.x, apple.y, 14, 14)
            ctx.fillstyle = "#FF0000";
            ctx.fill()
            ctx.closePath()
        }
        const movesnake = () => {
            if (direction) {
                setsnake((prevsnake) => {
                    const newsnake = [...prevsnake];
                    const snakehead = { x: newsnake[0].x, y: newsnake[0].y }

                
                for (let i = newsnake.length - 1; i > 0; i--) {
                    newsnake[i].x = newsnake[i - 1].x;
                    newsnake[i].y = newsnake[i - 1].y;

                }
                switch (direction) {
                    case "right":
                        snakehead.x += snake_speed
                        break;
                    case "left":
                        snakehead.x -= snake_speed
                        break;
                    case "up":
                        snakehead.y -= snake_speed
                        break;
                    case "down":
                        snakehead.y += snake_speed
                        break;
                    default:
                        break
                }
                newsnake[0] = snakehead;
                handleapllecollision(newsnake)
                handlewallcollision(snakehead)
                handlebodycollision(newsnake)

                return newsnake
            })

            }

        }
        const handlebodycollision =(newsnake)=>{
            const snakehead= newsnake[0];
            for(let i=1; i<newsnake.length; i++){
                if(snakehead.x ===newsnake[i].x && snakehead.y===newsnake[i].y){
                    ongameover("self")
                }
            }
        }
        const handlewallcollision=(snakehead)=>{
            if(snakehead.x+snake_speed>canvas.width || snakehead.x+snake_speed<0){
                ongameover("wall")
            }
            if(snakehead.y+snake_speed>canvas.height || snakehead.y<0){

                ongameover("wall")
            }
        }
        const handleapllecollision = (newsnake) => {
             const snakehead=newsnake[0]
            if (snakehead.x === apple.x && snakehead.y === apple.y) {
                setscore(score++);
                setapple({
                    x:
                        Math.floor((Math.random() * canvas.width) / snake_speed) * snake_speed,
                    y:
                        Math.floor((Math.random() * canvas.height) / snake_speed) * snake_speed,


                })
                newsnake.push({
                    x:newsnake[newsnake.length -1].x,
                    y: newsnake[newsnake.length -1].y
                })
            }

        }
        const handlekeypress = (e) => {
            switch (e.key) {
                case "ArrowRight":
                    setdirection("right")
                    break
                case "ArrowLeft":
                    setdirection("left")
                    break
                case "Arrowup":
                    setdirection("up")
                    break
                case "Arrowdown":
                    setdirection("down")
                    break

                default:
                    break;
            }
        }
        window.addEventListener("keydown", handlekeypress)
        const interval = setInterval(() => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            drawsnake();
            drawapple();
            movesnake();



        }, 100);
        return () => {
            clearInterval(interval)
        };

    }, [snake, direction])
    return (
        <div>
            <canvas className='gamecanvas' ref={canvasref} width={750} height={420}></canvas>
        </div>
    )
}

export default Gamepieces
