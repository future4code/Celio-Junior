import React, {useStates, useEffects} from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Container = styled.div`
display: flex;
align-items: center;
flex-direction: column;
justify-content: center;
width: 100%;

hr {
  width: 99.5%;
}
`

const Astromatch = styled.img`
width: 80px;
`

function Header() {
  return (
    <Container>
      <div>
        <Astromatch src='/Imagens/astromatch.png'/>
      </div>
      
      <hr size="1" />
    </Container>
  );
}

export default Header;
