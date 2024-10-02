import React, { useEffect, useState } from 'react'
import Gamepieces from './Gamepieces';

const Gamestate = () => {
    const[score,setscore]=useState(0);
    const[highscore,sethighscore]=useState(parseInt(localStorage.getItem('highscore'))||0);
    const[ongameover,setgameover]=useState(false);
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
        if(ongameover && e.key === "Enter"){
          handleresetgame()
        }
      }
      window.addEventListener("keydown",handlekeypress)
    },[ongameover])
  return (
    <div className='game-container'>
        <p className='score'>score:{score}</p>
        <p className='high'>High score: {highscore}</p>
        {
            ongameover &&(
                <div className='game-over'>
                    <p  >Game over! {collisontype === "wall" ? "You Hit te wall" : "you ate yourself"}</p>
                    <p className='game'>please press enter to reset the game</p>
                </div>
            )
        }
      {

        !ongameover && (
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
