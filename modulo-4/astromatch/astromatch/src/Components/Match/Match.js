import React, {useState, useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'


const Container = styled.div`
display: flex;
align-items: center;
flex-direction: column;
justify-content: center;
border: 1px solid black;
width: 200px;
height: 300px;
`

const P = styled.p`
  font-size: 7px;
`


const Imagem = styled.img`
width: 70%;
height: 150px;
`

function Match() {
  const [person, setPerson] = useState({});

const getPhotos = async () => {
  await axios.get(
   `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/celio-junior/person   `
  ).then((response) => {
      setPerson(response.data.profile)
  }).catch((error) => {
      alert(error)
  })
};

useEffect(() => {
  getPhotos();
}, []);




  return (
    <Container>
      <Header/>
      <Imagem src={person.photo}/>
        <P>{person.name}, {person.age}</P>
        <P>{person.bio}</P>
      <Footer/>
    </Container>
  );
}

export default Match;
