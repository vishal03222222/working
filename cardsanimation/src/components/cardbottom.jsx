import React from 'react'
import { Badge, Cbottom, Cbottomtitle, Colors, ColorTitle, Price, Size, Sizes, Sizetitle, Stars, Title } from '../Style'
//import { Simulate } from 'react-dom/test-utils'

const Cardbottom = (currentcolor,setcurrentColor) => {
  return (
    <Cbottom>
        <Cbottomtitle>React 55</Cbottomtitle>
        <Badge>New</Badge>
        <Title>Running Collections</Title>
        <Stars>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
        </Stars>
        <Size>
            <Sizetitle>Size</Sizetitle>
            <Sizes>
                <span>7</span>
                <span>8</span>
                <span>9</span>
                <span>10</span>
            </Sizes>
        </Size>
        <div className='color'>
            <ColorTitle>color</ColorTitle>
            <Colors>
                <div className='color-1' onClick={()=>setcurrentColor(1)}></div>
                <div className='color-2' onClick={()=>setcurrentColor(2)}></div>
            </Colors>


        </div>
        <Price currentColor={currentcolor}>
            <span>usd</span>
            <span>350,00</span>
        </Price>

    </Cbottom>
   
  )
}

export default Cardbottom
