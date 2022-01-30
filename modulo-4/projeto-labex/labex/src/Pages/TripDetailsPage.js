import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;   
    background-size: cover;
    background-image: url('/images/space2.png');
    background-repeat: repeat;
    height: 100vh;
    overflow: auto;

h1 {
    color: white;
}

`

const ContainerButton = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
`

const Button = styled.button`
  border-radius: 30px;
  border-color: transparent;
  background-color: #020004;
  color: white;
  font-size: 18px;
  padding: 7px;
  margin: 10px;

  :hover {
    background-color: #fff;
    color: black;
  }
`

export const TripDetailsPage = () =>{

    const history = useHistory()

    const goToAdminHomePage = () => {
        history.push("/adminhomepage")
    }

    return (
        
        <Container>
            <h1>Nome da viagem</h1>

            <ContainerButton>
                <Button type="submit" onClick={ goToAdminHomePage }>Voltar</Button>
            </ContainerButton>

            <h2>Candidatos Pendentes</h2>

            <h2>Candidatos Aprovados</h2>


        </Container>
        
    );
};