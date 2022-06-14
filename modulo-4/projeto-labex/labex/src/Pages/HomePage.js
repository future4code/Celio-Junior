import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';


const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-size: cover;
  background-image: url('/images/space.gif');
  background-repeat: repeat;
  height: 100vh;
  overflow: auto;
`

const P = styled.p`
  margin-bottom: 5px;
  font-weight: bold;
`

const Logo = styled.img`
  width: 400px;
`

const Button = styled.button`
  border-radius: 30px;
  border-color: transparent;
  background-color: #020004;
  color: white;
  font-size: 18px;
  padding: 7px;
  margin: 50px 10px;

  :hover {
    background-color: #fff;
    color: black;
  }
`

export const HomePage = () => {

    const history = useHistory()

    const goToTripPages = () => {
        history.push("/trips")
    }

    const goToAdmPage = () => {
        history.push("/login")
    }

  return (

    <Container>
      <div>
        <P><Logo src='/images/LABEX.png'/></P>
      </div>
      <div>
        <Button onClick={ goToTripPages }>Viagens</Button>
        <Button onClick={ goToAdmPage }>Área de Admin</Button>
      </div>
    </Container>
  
  );
};
