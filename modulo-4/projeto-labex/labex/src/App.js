import styled from 'styled-components';
import './App.css';


const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding-top: 100px;
  font-size: 15px;
`

const P = styled.p`
  color: gray;
  margin-bottom: 5px;
  font-weight: bold;
`

const Button = styled.button`
  border-radius: 30px;
  background-color: gray;
  color: white;
  font-size: 6px;
  margin: 5px;
`

function App() {
  return (

    <Container>
      <div>
        <P>LabeX</P>
      </div>
      <div>
        <Button><p>Ver Viagens</p></Button>
        <Button><p>Área de Admin</p></Button>
      </div>
    </Container>
  
  );
}

export default App;
