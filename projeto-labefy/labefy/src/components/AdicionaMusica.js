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
  margin: 5px;
`

const Texto = styled.h3`
  text-align: center;
`


class AdicionaMusica extends React.Component {

    state = {
        nomeMusica: '',
        nomeArtista: '',
        urlMusica: '',
        listaMusicas: []
    }

    mudaMusicaInput = (event) => {
        this.setState({nomeMusica: event.target.value})
        console.log(this.state.nomeMusica)
    }
    mudaArtistaInput = (event) => {
        this.setState({nomeArtista: event.target.value})
        console.log(this.state.nomeArtista)
    }
    mudaUrlInput = (event) => {
        this.setState({urlMusica: event.target.value})
        console.log(this.state.urlMusica)
     }


    adicionaMusica = (id) => {
        let URL = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.idPlaylist}/tracks`
    
        let body = {
            name: this.state.nomeMusica,
            artist: this.state.nomeArtista,
            url: this.state.urlMusica
        }
        let autorizacao = {
          headers: {
            Authorization: "celio-junior-joy"
          }
        }
    
        axios.post(URL, body, autorizacao)
        .then((response) => {
          this.setState({nomeMusica:"", nomeArtista:'', urlMusica:''})
          alert("Música adicionada com sucesso!")
        })
        .catch((error) => {alert(error)})
      }

    render() {

    console.log('x',this.props.idPlaylist) 
    return (

    <div>
        <Texto>Adiciona Musica</Texto>
        <div>
            <Input placeholder="Nome da Música" value={this.state.nomeMusica} onChange={this.mudaMusicaInput} />
            <Input placeholder="Nome do Artista" value={this.state.nomeArtista} onChange={this.mudaArtistaInput} />
            <Input placeholder="Link" value={this.state.urlMusica} onChange={this.mudaUrlInput} />
            <Botao onClick={this.adicionaMusica}>Adicionar</Botao>
        </div>
      </div>)
}




}

export default AdicionaMusica