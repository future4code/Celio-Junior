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
    cursor: pointer;  

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


    const logout = () => {
        setTimeout(()=> {
            localStorage.removeItem("token")
            checkoutLogin()
        }, 1000)
    }

    const checkoutLogin = () =>{
        if(localStorage.getItem("token") !== null){
            history.push("/admin")
        } else {
            history.push("/login")
        }
    }

    useEffect(() =>{
        checkoutLogin();
    }, [logout]);


    const deleteTrip = (id) => {
         axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/celio-junior/trips/${id}`, {
            headers: { 
                Auth: localStorage.getItem("token")
            }
        }).then((res) => {
            alert('Viagem deletada com sucesso!')
            getTrips();
        }).catch(err => {
            alert((err))
        })
    }


    const history = useHistory()
    
    const goToHomePage = () => {
        history.push("/")
    }

    const goToCreateTripPage = () => {
        history.push("createtrip")
    }


    const tripsList = trips.map((trip)=>{
        return (
            <TripsContainerFather key={trips.id}>
                <TripsContainer>
                    <Text>
                        <b>Viagem:</b> {trip.name} 
                    </Text>
                    <DelButton onClick={()=> deleteTrip(trip.id)}>🗑️</DelButton>
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
                <Button type="submit" onClick={ logout }>Logout</Button>
            </ContainerButton>

            <div>
                
                    {tripsList}
                
            </div>

        </Container>
        
    );
};