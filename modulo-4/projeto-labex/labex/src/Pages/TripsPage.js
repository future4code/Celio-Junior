import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    background-size: cover;
    background-image: url('/images/space3.png');
    background-repeat: repeat;
    height: 100vh;
    overflow-y: scroll;
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
  margin: 50px 10px 0px 10px;

  :hover {
    background-color: #fff;
    color: black;
  }
`

const Text = styled.p`
    text-align: left;
    color: black;
`

const H1 = styled.h1`
    text-align: center;
    color: white;

`

const TripsContainerFather = styled.div`
    display: block;
`

const TripsContainer = styled.div`
    box-shadow: rgb(0 0 0 / 30%) 0px 4px 8px 0px;
    padding: 10px 20px;
    border-radius: 10px;
    margin: 10px 0px;
    max-width: 500px;
    background-color: white;
`

export const TripsPage = () => {
    const [trips, setTrips] = useState([]);

    const getTrips = async () => {
        await axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/celio-junior/trips
            `).then((res) => {
            setTrips(res.data.trips)
            console.log(res.data.trips)
        }).catch((err) => {
            alert((err))
        })
    };

    useEffect(() => {
        getTrips();
    }, []);


    const history = useHistory()

    const goToHomePage = () => {
        history.push("/")
    }

    const goToApplicationForm = () => {
        history.push("/application")
    }

    const tripsList = trips.map((list)=>{
        return (
            <TripsContainerFather key={list.id} >
                <TripsContainer>
                    <Text><b>Nome:</b> {list.name}</Text>
                    <Text><b>Descrição:</b> {list.description}</Text>
                    <Text><b>Planeta:</b> {list.planet}</Text>
                    <Text><b>Duração:</b> {list.durationInDays} Dias</Text>
                    <Text><b>Data:</b> {list.date}</Text>
                </TripsContainer>
            </TripsContainerFather>
        )
    })

    

    return (

        <Container>
            
            <ContainerButton>
                <Button onClick={ goToHomePage }>Voltar</Button>
                <Button onClick={ goToApplicationForm }>Inscrever-se</Button>
            </ContainerButton>


            <H1>Lista de Viagens</H1>


            <div>
                {tripsList}
            </div>

        </Container>

    );
};
