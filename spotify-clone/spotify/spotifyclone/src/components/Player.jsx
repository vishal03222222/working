import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { Playercontext } from '../context/Playercontext'
// import { parseAstAsync } from 'vite'


const Player = () => {
    const { track, seekbg, seekbar, playerstatus, play, pause, time, previous,seeksong, next } = useContext(Playercontext)
    return (
        <div className='h-[10%] bg-black flex justify-between items-center text-white px-4'>
            <div className='hidden lg:flex items-center gap-4'>
                <img className='w-12' src={track.image} alt="" />
                <div>
                    <p>{track.name}</p>
                    <p>{track.desc.slice(0, 12)}</p>
                </div>
            </div>
            <div className='flex flex-col items-center gap-1 m-auto'>
                <div className='flex gap-4'>
                    <img className='w-4 cursor-pointer' src={assets.search_icon} alt="" />
                    <img  onClick={previous}className='w-4 cursor-pointer' src={assets.prev_icon} alt="" />
                    {playerstatus
                        ? <img onClick={pause} className='w-4 cursor-pointer' src={assets.pause_icon} alt="" />
                        : <img onClick={play} className='w-4 cursor-pointer' src={assets.play_icon} alt="" />


                    }
                    <img onClick={next} className='w-4 cursor-pointer' src={assets.next_icon} alt="" />
                    <img className='w-4 cursor-pointer' src={assets.loop_icon} alt="" />

                    <div className='flex items-center gap-5'>
                        <p>{time.currenttime.minute}:{time.currenttime.second}</p>
                        <div ref={seekbg} onClick={seeksong} className='w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer'>
                            <hr ref={seekbar} className='h-1 border-none w-0 bg-green-800 rounded-full' />
                        </div>
                        <p>{time.totaltime.minute}:{time.totaltime.second}</p>

                    </div>
                    <div className='hidden lg:flex items-center ml-[50px] gap-2 opacity-75'>
                    <img className='w-4' src={assets.play_icon} alt="" />
                    <img className='w-4' src={assets.mic_icon} alt="" />
                    <img className='w-4' src={assets.queue_icon} alt="" />
                    <img className='w-4' src={assets.speaker_icon} alt="" />
                    <img className='w-4' src={assets.volume_icon} alt="" />
                    <div className='w-20 bg-slate-50 h-1 rounded'>  </div>
                </div>
                <img className='w-4' src={assets.mini_player_icon} alt="" />
                <img className='w-4' src={assets.zoom_icon} alt="" />
            </div>
                </div>
               

        </div>
    )
}

export default Player
