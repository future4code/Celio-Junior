import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import axios from 'axios';

const Container = styled.div`
    display: grid;
    align-items: center;
    justify-content: center;
    background-size: cover;
    background-image: url('/images/space3.png');
    background-repeat: repeat;
    height: 100vh;
    overflow-y: scroll;

h1 {
    text-align: center;
    color: white;
}

`

const ContainerButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const Button = styled.button`
  border-radius: 30px;
  border-color: transparent;
  background-color: black;
  color: white;
  font-size: 18px;
  padding: 7px;
  margin: 10px;
  cursor: pointer;

  :hover {
    background-color: #fff;
    color: black;
  }
`

const DelButton = styled.button`
  border-radius: 30px;
  border-color: transparent;
  background: none;
  color: white;
  font-size: 18px;
  padding: 7px;
  margin: 10px;
  cursor: pointer;  

  :hover {
    background-color: black;
    /* border: 1px solid; */
  }
`

const Text = styled.p`
    text-align: left;
    color: black;
`

const TripsContainerFather = styled.div`
    display: flex;
    flex-direction: column;

`

const TripsContainer = styled.div`
    display: flex;
    padding: 10px 20px;
    border-radius: 10px;
    margin: 10px 0px;
    max-width: 500px;
    width: 100%;
    background-color: white;
    justify-content: space-between;

    :hover {
    background-color: #eaeaea;
    box-shadow: rgb(0 0 0 / 100%) 5px 4px 8px 0px;
    }
`


export const AdminHomePage = () =>{
    const [trips, setTrips] = useState([]);

    const getTrips = async () => {
        await axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/celio-junior/trips
            `).then((res) => {
            setTrips(res.data.trips)
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

    const goToCreateTripPage = () => {
        history.push("createtrippage")
    }

    const goToLoginPage = () => {
        history.push("/loginpage")
    }

    const tripsList = trips.map((list)=>{
        return (
            <TripsContainerFather>
                <TripsContainer>
                    <Text>
                        <b>Viagem:</b> {list.name} 
                    </Text>
                    <DelButton>🗑️</DelButton>
                </TripsContainer>
            </TripsContainerFather>
        )
    })


    return (
        
        <Container>
            <h1>Painel Administrativo</h1>


            <ContainerButton>
                <Button onClick={ goToHomePage }>Voltar para Home</Button>
                <Button type="submit" onClick={ goToCreateTripPage }>Criar Viagem</Button>
                <Button type="submit" onClick={ goToLoginPage }>Logout</Button>
            </ContainerButton>

            <div>
                
                    {tripsList}
                
            </div>

        </Container>
        
    );
};