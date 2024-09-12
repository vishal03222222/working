import React, { createContext, useRef, useState } from 'react'
import { songsData } from '../assets/assets';

export const Playercontext = createContext();
const Playercontextprovider = (props) => {
    const audioref = useRef();
    const seekbg = useRef();
    const seekbar = useRef();
    const [track, settrack] = useState(songsData[0])
    const [playerstatus, setplayerstatus] = useState(false)
    const [time, setime] = useState({
        currenttime: {
            second: 0,
            minute: 0
        },
        totaltime: {
            second: 0,
            minute: 0
        }
    }

    )

    const contextvalue = {
        audioref,
        seekbar, seekbg,
        track, settrack,
        playerstatus, setplayerstatus,
        time, setime

    }
    return (
        <Playercontext.Provider value={contextvalue}>
            {props.children}
        </Playercontext.Provider>
    )
}
export default Playercontextprovider;