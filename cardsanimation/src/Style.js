import { motion } from "framer-motion";
import { rendergradient } from "./utils";
import styled from "styled-components";
export const Wrapper = styled.div`
width:100%;
display:flex;
justify-content:center;
align-items:center;
background-color:#000

`
export const Container = styled.div`
width:100%;
height:100vh;
display:grid;
place_items:center;
cursor:pointer;
prespective:2000
`

export const Cardwrapper = styled(motion.div)`
width:50rem;
height:70rem;
display:grid;
palce-items:center;
overflow:hidden;
margin-left:730px;
margin-top:50px
`
export const Card = styled.div`
width:30rem;
heigth:55rem;
background:#eee;
border-radius:2.5rem;
box-shadow:0 2rem 6rem rgba(0,0,0,0.7);
position:relative;
`;
export const Ctop = styled.div`
width:100%;
height:50%;
padding:3rem;
border-radius:2.5rem 2.5rem 0 0;
transition:background 0.5s;
background-image:linear-gradient($
{({currentcolor})=> ${rendergradient}(currentcolor) })

`
 export const Logo=styled.img`
 width:8rem;
 margin-bottom:2rem;
 `
 export const Ctoptext = styled.div`
 color:black;
 margin:20px
 `
 
 export const Ctoptitile=styled.h1`
 font-weight:600;
 text-transform:uppercase;
 letter-spacing:1rem;
 margin-bottom:1rem;
 color:black
 
 `
 export const Description=styled.p`
 font-weight:400;
 letter-spacong:1rem.`


export const Cbottom =styled.div`
padding:2rem 3rem;
height:50%;
width:100%
`
export const Cbottomtitle=styled.h1`
font-weigt:500;
text-transform:uppercase;
letter-spacing: .1rem;
color:#333;
margin-bottom: 0.6rem
`
export const Badge=styled.div`
 position:absolute;
 top:30rem;
 right:5rem;
 width:3.5rem;
 heigt:1.6rem;
 background:#25d390;
 color:#fff;
 place-items:center;
 border-radius:0.3rem;
 font-size:0.9rem;
 font-weight:bold;
 letter-spacing:0.1rem;
 text-tranform:uppercase
`
export const Title =styled.h3`
font-size:1rem;
font-weigt: 400;
text-transform:uppercase;
margin-bottom:0.6rem;
`
export const Stars=styled.div`
margin-bottom:3rem;
i:last-child{
    opacity:0.4
}
`
export const Size=styled.div`
amargin-bottom:3rem;
`
export const Sizetitle=styled.h3`
font-size:1.2rem;
text-transform:uppercase;
letter-spacing:0.1rem;
margin-bottom:1.3rem
`
export const Sizes=styled.div`
display:flex;
span {
     font-size:1.3rem;
     margin-right:2.5rem;
}
span:nth-child(3){
    width:2rem;
    height:2rem;
    background:#25d393;
    colcor:#fff;
    border-radius:50%;
    display:grid;
    place-items:center
}
`
export const ColorTitle=styled.h3`
font-size:1.2rem;
text-transform:uppercase;
letter-spacing:0.1rem;
margin-bottom:1rem;
`
export const Colors=styled.div`
display:flex;

.color-1,.color-2{
width:2rem;
heigt:2rem;
border-radius:50%;
cursor:pointer;
}

.color-1{
    background:#1c477a;
    margin-right:1.5rem;
    box-shadow:0 1rem 2rem rgba(28,71,122,.2)
}
    .color-2{
    background:#1c477a;
   
    box-shadow:0 1rem 2rem rgba(192,34,68,.3)
}
`
export const Price=styled.div`
width:16rem;
height:4rem;
backgroungnd:${({currentcolor})=>
currentcolor ===1 ? "#1c477a" :"#a8e063"}
color:$fff;
border-radius:0.5rem;
position:absolute
right:-1rem;
bottom:3rem;
box-shadow:0 1rem 2rem rgba(28,71,122,0.5);
display:flex;
justify-content:center;
align-items:center;
transition:background:0.5s

span{
font-size:2rem;
}

span:first-child{
font-weight:300;
text-transform:uppercase;
margin-right:1rem;
}

span:last-child{
font-weight:bold
}
`
