// //import logo from './logo.svg';
// import './App.css';
// import { Card, Cardwrapper,  Container, Ctop, Ctoptext, Ctoptitile, Description, Logo, Wrapper } from './Style';
// import { useState } from 'react';
// import { useMotionValue, useTransform } from 'framer-motion';

// import Cardbottom from './components/cardbottom';
// //import { useMotionValueEvent } from 'framer-motion';
// function App() {
//   const [currentcolor,setcurrentColor]=useState(1);

//   const x=useMotionValue(0);
//   const y=useMotionValue(0)

//   const rotatex=useTransform(y,[-100,100],[30,-30]);
//   const rotatey=useTransform(x,[-100,100],[30,-30])

//   return (
//    <Wrapper>
//     <Container>
//       <Cardwrapper style={{x,y ,rotatex,rotatey ,z:100}} 
//        drag dargConstraints={{top:0,right:0,bottotm:0,left:0}}
//        dragElastic={0.16}
//        whileTap={{cursor:"garbbing"}}>
//         <Card>
//           <Ctop currentColor={currentcolor}>
//             <Logo alt="logo"/>
//             <Ctoptext>
//               <Ctoptitile>
//                 REACT 55

//               </Ctoptitile>

//               <Description>
//                 The nike react Element  55 Se is a 
//                 balanced blend  of classic design and
//                 forward-looking innovation
//               </Description>
//             </Ctoptext>

//           </Ctop>
//           <Cardbottom currentcolor={currentcolor}
//           setcurrentColor={setcurrentColor}/>
          
//         </Card>
//       </Cardwrapper>

//     </Container>
//    </Wrapper>
//   );
// }

// export default App;
import './App.css';
import { Card, Cardwrapper, Container, Ctop, Ctoptext, Ctoptitile, Description, Logo, Wrapper } from './Style';
import { useState } from 'react';
import { useMotionValue, useTransform } from 'framer-motion';
import Cardbottom from './components/cardbottom';

function App() {
  const [currentcolor, setcurrentColor] = useState(1);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotatex = useTransform(y, [-100, 100], [30, -30]);
  const rotatey = useTransform(x, [-100, 100], [30, -30]);

  return (
    <Wrapper>
      <Container>
        <Cardwrapper
          style={{ x, y, rotatex, rotatey, z: 100 }}
          drag
          dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }} // Fixed typo here
          dragElastic={0.16}
          whileTap={{ cursor: "grabbing" }} // Fixed typo here
        >
          <Card>
            {/* Removed currentColor as a prop */}
            <Ctop style={{ backgroundColor: currentcolor }}>
              
              <Ctoptext>
                <Ctoptitile>REACT 55</Ctoptitile>
                <Description>
                  The Nike React Element 55 SE is a balanced blend of classic design and forward-looking innovation.
                </Description>
              </Ctoptext>
            </Ctop>
            <Cardbottom currentcolor={currentcolor} setcurrentColor={setcurrentColor} />
          </Card>
        </Cardwrapper>
      </Container>
    </Wrapper>
  );
}

export default App;
