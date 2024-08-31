import React, { useRef, useState } from 'react'
import './Xox.css'
import circle from '../components/o.jpeg'
import cross from '../components/x.png'
let data = ["", "", "", "", "", "", "", "", ""]


const Xox = () => {
    let [count, setcount] = useState(0);
    let [lock, setlock] = useState(false);
    let titleref = useRef(null)
     let box1 =useRef(null);
        let box2 =useRef(null);
        let box3 =useRef(null);
        let box4 =useRef(null);
        let box5 =useRef(null);
        let box6 =useRef(null);
        let box7 =useRef(null);
        let box8 =useRef(null);
        let box9 =useRef(null);
        let boxarray=[box1,box2,box3,box4,box4,box5,box6,box7,box8,box9]

    const toogle = (e, num) => {
        if (lock) {
            return 0;
        }
        if (count % 2 === 0) {
            e.target.innerHTML =`<img src="${cross}" alt="X" />`
            data[num] = "x";
            setcount(++count)
        } else if (count%2 !== 0) {
            e.target.innerHTML =`<img src="${circle}" alt="X" />`;
            data[num] = "o";
            setcount(++count)

        }
        else {
            e.target.innerHTML =`Macth is draw click reset to play new game`;

        }
        checkwin()

    }
    
    //https://youtu.be/lYtPscvwgP4?si=nPYcxjYTy0HOkz6g
    const checkwin = () => {
        if (data[0] === data[1] && data[1] === data[2] && data[2] !== "") {
            won(data[2]);
        }
        else if (data[3] === data[4] && data[4] === data[5] && data[5] !== "") {

            won(data[5]);
        }
        else if (data[6] === data[7] && data[7] === data[8] && data[8] !== "") {

            won(data[8]);
        }

        else if (data[0] === data[3] && data[3] === data[6] && data[6] !== "") {

            won(data[6]);
        }
        else if (data[1] === data[4] && data[4] === data[7] && data[7] !== "") {

            won(data[7]);
        }
        else if (data[2] === data[5] && data[5] === data[8] && data[8] !== "") {

            won(data[8]);
        }
        else if (data[0] === data[4] && data[4] === data[8] && data[8] !== "") {

            won(data[8]);
        }
        else if (data[0]===data[1] && data[1] === data[2] && data[2] !== "") {

            won(data[2]);
        }
        else if (data[2] === data[4] && data[4] === data[6] && data[6] !== "") {

            won(data[6]);
        }





    }

    const won = (winner) => {
        setlock(true)
        if (winner === "x") {
            titleref.current.innerHTML = ['congratulations' ,`<img src="${cross}" alt="X" />` ,'Won The Match' ]
        }
        else {
            titleref.current.innerHTML = ['congratulations ',`<img src="${circle}" alt="X" />`, 'Won The Match']
        }

    }
    const reset =() =>{
        setlock(false);
        data=["","","","","","","","",""];
        titleref.current.innerHTML ="Tic Tac Toe Game  using react";
        boxarray.map((e)=>{
            e.current.innerHTML="";
        })
       

    }
    return (
        <div class="conatainer">
            <div className="title" ref={titleref}> welcome to the Tic Tac Toe Game</div>
            <div className="board">
                <div className="row1">
                    <div className="boxes"ref={box1} onClick={(e) => { toogle(e, 0) }}></div>
                    <div className="boxes" ref={box2} onClick={(e) => { toogle(e, 1) }}></div>
                    <div className="boxes" ref={box3}onClick={(e) => { toogle(e, 2) }}></div>
                </div>
                <div className="row2">
                    <div className="boxes" ref={box4}onClick={(e) => { toogle(e, 3) }}></div>
                    <div className="boxes" ref={box5} onClick={(e) => { toogle(e, 4) }}></div>
                    <div className="boxes" ref={box6}onClick={(e) => { toogle(e, 5) }}></div>

                </div>
                <div className="row3">
                    <div className="boxes" ref={box7}onClick={(e) => { toogle(e, 6) }}></div>
                    <div className="boxes"ref={box8} onClick={(e) => { toogle(e, 7) }}></div>
                    <div className="boxes"ref={box9} onClick={(e) => { toogle(e, 8) }}></div>
                </div>
            </div>
            <div className="reset">
                <button onClick={reset}>reset</button>
            </div>

        </div>
    )
}

export default Xox

