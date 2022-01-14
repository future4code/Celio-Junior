import React, {useStates, useEffects} from 'react';
import styled from 'styled-components';
import Match from './Components/Match/Match';
import Header from './Components/Header/Header';

const Containers = styled.div`
display: flex;
align-items: center;
flex-direction: column;
justify-content: center;
margin-top: 10px;
`

function App() {
  return (
    <Containers>
      
      <Match/>

    </Containers>
  );
}

export default App;
