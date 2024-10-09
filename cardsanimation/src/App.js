import logo from './logo.svg';
import './App.css';
import { Card, Cardwrapper, Container, Ctop, Logo, Wrapper } from './Style';
import { useState } from 'react';

function App() {
  const [currentColor,setcurrentColor]=useState(1);
  return (
   <Wrapper>
    <Container>
      <Cardwrapper>
        <Card>
          <Ctop currentColor={currentColor}>
            <Logo alt="logo"/>

          </Ctop>
        </Card>
      </Cardwrapper>

    </Container>
   </Wrapper>
  );
}

export default App;
