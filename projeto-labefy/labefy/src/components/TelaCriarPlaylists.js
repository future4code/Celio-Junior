import React from 'react';
import axios from 'axios'
import styled from 'styled-components'

const Botao = styled.button`
  border-radius: 300px;
  color: #fff;
  background-color: black;
  margin: 5px;
  `

const Input = styled.input`
  border-radius: 300px;
`

const Texto = styled.h3`
  text-align: center;
`

class TelaCriarPlaylists extends React.Component {

  state = {
    textoInput: ""
  }

  mudaTextoInput = (event) => {
    this.setState({textoInput: event.target.value})
    
  }

  CriarPlaylist = () => {
    let URL = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"

    let body = {
        "name": this.state.textoInput 
    }
    let autorizacao = {
      headers: {
        Authorization: "celio-junior-joy"
      }
    }

    axios.post(URL, body, autorizacao)
    .then((response) => {
      this.setState({textoInput:""})
      alert("Playlist Criada com sucesso!")
      this.props.pegaPlaylists()
    })
    .catch((error) => {alert(error)})
  }
  
  render(){
  return (


     <div>
        <Texto>Criar Playlist</Texto>
        <div>
            <Input placeholder="Nome da Playlist" value={this.state.textoInput} onChange={this.mudaTextoInput} />
            <Botao onClick={this.CriarPlaylist}>Criar</Botao>
        </div>
      </div>
  )}
}

export default TelaCriarPlaylists