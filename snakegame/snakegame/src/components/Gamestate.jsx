import React, { useState } from 'react'
import Gamepieces from './Gamepieces';

const Gamestate = () => {
    const[score,getscore]=useState(0);
    const[highscore,sethighscore]=useState(parseInt(localStorage.getItem('highscore'))||0);
    const[gameover,setgameover]=useState(false);
    const[collisontype,setcollisiontype]=useState("")

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
            <Gamepieces/>
        )
      }
    </div>
  )
}

export default Gamestate
