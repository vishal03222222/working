import React, { useEffect, useState } from 'react'
import Gamepieces from './Gamepieces';

const Gamestate = () => {
    const[score,setscore]=useState(0);
    const[highscore,sethighscore]=useState(parseInt(localStorage.getItem('highscore'))||0);
    const[gameover,setgameover]=useState(false);
    const[collisontype,setcollisiontype]=useState("")
    const handlegameover =(type)=>{
      setgameover(true);
      if (score>highscore){
        sethighscore(score);
        localStorage.setItem("highscore",score.toString)
    }
    setcollisiontype(type)
    }
    const handleresetgame =()=>{
      setscore(0);
      setgameover(false)
    }
    useEffect(()=>{
      const handlekeypress =(e)=>{
        if(gameover && e.key === "Enter"){
          handleresetgame()
        }
      }
      window.addEventListener("keydown",handlekeypress)
    },[gameover])
  return (
    <div>
        <p>score:{score}</p>
        <p>High score: {highscore}</p>
        {
            gameover &&(
                <div>
                    <p>Game over! {collisontype === "wall" ? "You Hit te wall" : "you ate yourself"}</p>
                    <p>please press enter to reset the game</p>
                </div>
            )
        }
      {

        !gameover && (
            <Gamepieces
            score={score}
            setscore={setscore}
            ongameover={(type)=>handlegameover(type)}/>
        )
      }
    </div>
  )
}

export default Gamestate
