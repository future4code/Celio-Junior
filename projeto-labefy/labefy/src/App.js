import React from 'react';
import './App.css';
import axios from 'axios';
import TelaCriarPlaylists from './components/TelaCriarPlaylists';
import TelaListaDePlaylists from './components/TelaListaDePlaylists';
import AdicionaMusica from './components/AdicionaMusica';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center; 
  align-items: center;
  flex-direction: column;
  background-color: #90ee90;
  height: 100vh;
`

const Botao = styled.button`
  border-radius: 300px;
  color: #fff;
  background-color: black;
  margin: 5px;
`

class App extends React.Component {
  state  = {
    mostraPlaylists: false,
    playlists: []
  }

  componentDidMount() {
    this.pegaPlaylists()
}

    mudaCondicionalDeLista =  () => {
      this.state.mostraPlaylists ? this.setState({mostraPlaylists: false}) : this.setState({mostraPlaylists: true})
      }

      pegaPlaylists = () =>{
        let URL= "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        let autorizacao = {
            headers: {
                authorization: "celio-junior-joy"
            }
        }
        axios.get(URL, autorizacao)
        .then((response)=>{ this.setState({playlists: response.data.result.list})})
        .catch((error)=>{console.log(error)})
    }    

  render(){

    let mostraLista = <h1>Página de erro</h1> 
    if(this.state.mostraPlaylists){
      mostraLista = <TelaListaDePlaylists playlists = {this.state.playlists} pegaPlaylists = {this.pegaPlaylists} />
    }else{
      mostraLista= ""
    }

    return (
      <Container>
        <TelaCriarPlaylists pegaPlaylists = {this.pegaPlaylists} />
        <br/><hr />
        <br/><Botao onClick={this.mudaCondicionalDeLista}>Mostrar/Esconder Playlists</Botao>
        {mostraLista}
      </Container>

  );
  }
}

export default App;