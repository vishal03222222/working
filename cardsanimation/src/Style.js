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
padding:3removeEventListener;
border-radius:2.5rem 2.5rem 0 0;
transition:background 0.5s;
background-image:linear-gradient($
{({
currentColor})=> rendergradient(currentColor) })

`
 export const Logo=styled.img`
 width:8rem;
 margin-bottom:2rem
 `