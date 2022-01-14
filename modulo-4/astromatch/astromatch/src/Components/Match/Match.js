import React, {useState, useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Header from '../Header/Header'


const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  border: 1px solid black;
  width: 150px;
  height: 400%;
  padding-top: -10px;
`

const P = styled.p`
  font-size: 7px;
  font-family: Space Meatball;
  text-align: center;
  padding: 0 2px;
`

const DivImage = styled.div`
  overflow: hidden;
  display: flex;
  width: 90%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Image = styled.img`
  width: 100%;
  max-height: 150px;
  margin: auto;
`

const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
`

const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 50%;
`


function Match() {
  const [person, setPerson] = useState({});


const getPerson = async () => {
  await axios.get(
   `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/celio-junior/person`
  ).then((response) => {
      setPerson(response.data.profile)
  }).catch((error) => {
      alert(error)
  })
};

useEffect(() => {
  getPerson();
}, []);

const matchPerson = (choice) => {
  const body = {
    id: `${person.id}`,
    choice: choice,
  };

  axios.post(
    `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/celio-junior/choose-person`, body
  ).then((res) =>{
      getPerson();
  })
  .catch ((error) =>{
      getPerson();
      alert(error);
  });
};


return (
  <Container>
      
    <Header/>
    
      <DivImage>
        <Image src={person.photo}/>
      </DivImage>

        <P>{person.name}, {person.age}</P>
        <P>{person.bio}</P>

      <ButtonContainer>
        <Button onClick={() => matchPerson(false)}> ⛈️ </Button>
        <Button onClick={() => matchPerson(true)}> 🔥 </Button>
      </ButtonContainer>

  </Container>
  );
}

export default Match;
