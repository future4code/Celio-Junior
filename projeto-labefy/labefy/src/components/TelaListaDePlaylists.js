import React from 'react';
import axios from 'axios'
import styled from 'styled-components'
import DetalhesPlay from './DetalhesPlay';
import AdicionaMusica from './AdicionaMusica';


const Botao = styled.button`
  border-radius: 300px;
  color: #fff;
  background-color: black;
  margin: 5px;
`

const Texto = styled.h2`
  text-align: center;
`



class TelaListaDePlaylists extends React.Component {

    state = {
        idPlaylist: '',
        mostraLista: false,
        mostraDetalhe: false,
        infoplaylist: []
        // criar um estado para receber o valor da requisição.
    }

       deletePlay = (id) => {

        axios.delete(
          `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`,
          {
            headers:{
              Authorization: "celio-junior-joy"
            }
          }
        )
        .then(() => {
          alert("Playlist apagada com sucesso!");
          this.props.pegaPlaylists();
        })
        .catch((err) => {
          console.log(err.message)
        })
      }

    addMusica = (id) => {
      this.state.mostraLista 
      ? this.setState({mostraLista:false})
      : this.setState({mostraLista:true})
      this.setState({idPlaylist:id})
    }
    detalhesDaPlay = (id) => {
      this.state.mostraDetalhe
      ? this.setState({mostraDetalhe:false})
      : this.setState({mostraDetalhe:true})
    }

    getPlaylistinfo = (id) => {
      
      axios.get(
      

        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks/`,
        {
          headers:{
            Authorization: "celio-junior-joy"
          }
        }
      )
      .then((res) => {
        this.setState({infoplaylist:res.data.result.tracks})
          console.log(res.data.result.tracks)
      })
      .catch((err) => {
        console.log(err.message)
      })
    }

    render() {
        
    let mostraLista = <h1>Página de erro</h1> 
    if(this.state.mostraLista){
      mostraLista = <AdicionaMusica idPlaylist = {this.state.idPlaylist} />
    }else{
      mostraLista= ""
    }
    let mostraDetalhe = <h1>Página de erro</h1> 
    if(this.state.mostraDetalhe){
      mostraDetalhe = <DetalhesPlay />
      // passar o estado por props para renderizar dentro do componente

    }else{
      mostraDetalhe= ""
    }

        let playListsMap = this.props.playlists.map((playlist)=>{
            return <p> <strong> Nome:</strong> {playlist.name} 
              <Botao onClick={() => this.deletePlay(playlist.id)}>Apagar Playlist</Botao> 
              <Botao onClick={() => this.getPlaylistinfo(playlist.id)}>Detalhes da Playlist</Botao> 
              <Botao onClick={() => this.addMusica(playlist.id)}>Adicionar Música</Botao>
             
               </p>
        })

        return(

            <div key={playListsMap.id}>
                <Texto>Quantidade de playlists: {playListsMap.length}</Texto>
                 <p> {playListsMap} </p>
                 <div>{mostraLista}{mostraDetalhe}</div>
            </div>
        )
    }

}
export default  TelaListaDePlaylists