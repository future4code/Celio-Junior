import React, {useStates, useEffects} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Header from '../Header/Header'


const Container = styled.div`
display: flex;
align-items: center;
flex-direction: column;
justify-content: center;
border: 1px solid black;
width: 300px;
height: 300px;
`



function Match() {
  return (
    <Container>
      <Header/>
      <p>AAAAAAAAAAAAAAAAAAA</p>
      
    </Container>
  );
}

export default Match;
