import React, { useState } from 'react'
import './Xox.css'
let data = ["", "", "", "", "", "", "", "", ""]


const Xox = () => {
    let [count, setcount] = useState(0);
    let [lock, setlock] = useState(false);
    const toogle = (e, num) => {
        if (lock) {
            return 0;
        }
        if (count % 2 === 0) {
            e.target.innerHtml = "x"
            data[num] = "x";
            setcount(++count)
        }
        else {
            e.target.innerHtml = "o"
            data[num] = "o";
            setcount(++count)

        }



    }
    return (
        <div class="conatainer">
            <div className="title"> welcome to the tic tac toe Game</div>
            <div className="board">
                <div className="row1">
                    <div className="boxes" onClick={(e) => { toogle(e, 0) }}></div>
                    <div className="boxes" onClick={(e) => { toogle(e, 1) }}></div>
                    <div className="boxes" onClick={(e) => { toogle(e, 2) }}></div>
                </div>
                <div className="row2">
                    <div className="boxes" onClick={(e) => { toogle(e, 3) }}></div>
                    <div className="boxes" onClick={(e) => { toogle(e, 4) }}></div>
                    <div className="boxes" onClick={(e) => { toogle(e, 5) }}></div>

                </div>
                <div className="row3">
                    <div className="boxes" onClick={(e) => { toogle(e, 6) }}></div>
                    <div className="boxes" onClick={(e) => { toogle(e, 7) }}></div>
                    <div className="boxes" onClick={(e) => { toogle(e, 8) }}></div>
                </div>
            </div>
            <div className="reset">
                <button>reset</button>
            </div>

        </div>
    )
}

export default Xox
