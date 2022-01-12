import React, {useStates, useEffects} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Match from './Components/Match/Match';



const Containers = styled.div`
display: flex;
align-items: center;
flex-direction: column;
justify-content: center;
`


function App() {
  return (
    <Containers>
      
      <Match/>
    </Containers>
  );
}

export default App;
