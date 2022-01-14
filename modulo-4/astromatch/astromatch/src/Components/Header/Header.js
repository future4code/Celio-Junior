import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;

hr {
  width: 100%;
}

h2 {
  display: inline-block;
  font-weight: bold;
  background: linear-gradient(to bottom, #FF5C00 57%, #000000 43%);
  background-clip: text;
  font-family: 'Source Code Pro', monospace;
  -webkit-background-clip: text;
  color: transparent;
  font-size: 15px;
}
`
const Button = styled.button`
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 20px;
  border-radius: 50%;
`
const ContainerComponent = styled.div`
  width: 100%;
  
`

function Header() {
  return (
    <ContainerComponent>
      <Container>
          <h2>ASTROMATCH</h2>
          <Button> 👩‍❤️‍👨 </Button>
      </Container>

    </ContainerComponent>
  );
}

export default Header;
