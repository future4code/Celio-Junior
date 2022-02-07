import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {


  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />

        <Post
          nomeUsuario={'Carlinha'}
          fotoUsuario={'https://picsum.photos/50/60'}
          fotoPost={'https://picsum.photos/200/160'}
        />

        <Post
          nomeUsuario={'Andressa'}
          fotoUsuario={'https://picsum.photos/50/70'}
          fotoPost={'https://picsum.photos/200/170'}
        />
        
      </MainContainer>
    );
  }

  state = {
    
    posts: [
      {
        nomeUsuario:'paulinha',
        fotoUsuario:'https://picsum.photos/50/50',
        fotoPost:'https://picsum.photos/200/150'
      },
      {
        nomeUsuario:'Carlinha',
        fotoUsuario:'https://picsum.photos/50/60',
        fotoPost:'https://picsum.photos/200/160'
      },
      {
        nomeUsuario:'Andressa',
        fotoUsuario:'https://picsum.photos/50/70',
        fotoPost:'https://picsum.photos/200/170'
      }

    ],
    
    valorInputNomeUsuario: "",
    valorInputFotoUsuario: "",
    valorInputFotoPost: ""
  };

  adicionaPost = () => {
    
    const novoPost = {
    
      nomeUsuario: this.state.valorInputNomeUsuario,
      
      fotoUsuario: this.state.valorInputFotoUsuario,

      fotoPost: this.state.valorInputFotoPost
    };

    const novoPostCopia = [...this.state.posts, novoPost];

    this.setState({ posts: novoPostCopia });
    this.setState({ valorInputNomeUsuario: "" });
    this.setState({ valorInputFotoUsuario: "" });
    this.setState({ valorInputFotoPost: "" });
  };

  onChangeInputNomeUsuario = (event) => {
    
    this.setState({ valorInputNomeUsuario: event.target.value });
  };

  onChangeInputFotoUsuario = (event) => {
    
    this.setState({ valorInputFotoUsuario: event.target.value });
  };

  onChangeInputFotoPost = (event) => {
    
    this.setState({ valorInputFotoPost: event.target.value });
  };


  render() {
    const listaDeComponentes = this.state.posts.map((posts) => {
      return <Post nomeUsuario={posts.nomeUsuario}
                   fotoUsuario={posts.fotoUsuario}
                   fotoPost={posts.fotoPost}
              />
    });
            
    return (
      <MainContainer>
    <input

            value={this.state.valorInputNomeUsuario}

            onChange={this.onChangeInputNomeUsuario}
            placeholder={"Nome"}
          />
          <input

            value={this.state.valorInputFotoUsuario}

            onChange={this.onChangeInputFotoUsuario}
            placeholder={"Foto Usuário"}
          />
          <input

            value={this.state.valorInputFotoPost}

            onChange={this.onChangeInputFotoPost}
            placeholder={"Foto Post"}
          />
          <button onClick={this.adicionaPost}>Adicionar</button>
          {listaDeComponentes}
      </MainContainer>
    );
  }


}

export default App;
