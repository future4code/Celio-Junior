import React from 'react';
import axios from 'axios'
import styled from 'styled-components'

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


    AdicionaMusica = (id) => {
        let URL = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`
    
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
    // let musicaMap = this.state.listaMusicas.map((musica)=>{
    // return <p> <strong> Nome:</strong> {listaMusicas.name} {listaMusicas.artist} {listaMusicas.url}<button onClick={() => this.AdicionaMusica(musica.id)}></button><br /> 
    return (

    <div>
        <h3>Adiciona Musica</h3>
        <div>
            <input placeholder="Nome da Música" value={this.state.nomeMusica} onChange={this.mudaMusicaInput} />
            <input placeholder="Nome do Artista" value={this.state.nomeArtista} onChange={this.mudaArtistaInput} />
            <input placeholder="Link" value={this.state.urlMusica} onChange={this.mudaUrlInput} />
            <button onClick={this.AdicionaMusica}>Adicionar</button>
        </div>
      </div>)
    }
}

export default AdicionaMusica