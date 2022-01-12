import React, {useStates, useEffects} from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    width: 100%;
`

const Button = styled.button`
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
`

function Footer() {
  return (
    <Container>
    
      <Button>A</Button>
      
      <Button>B</Button>
    
    </Container>
  );
}

export default Footer;

