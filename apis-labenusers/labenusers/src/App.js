import React from 'react';
import './App.css';
import axios from 'axios';


export default class App extends React.Component {
  
  state = {
    labenusers: [],
    inputNome:'',
    inputEmail: ''
  }


componentDidMount() {
  this.pegaUsuario ()
}


pegarUsuario = () => {
  axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users',
  { 
    headers:{
      Authorization: "celio-junior-joy"
    }

    
  })
  .then((res) => {
    this.setState({ labenusers: res.data })
    console.log(res.data)
  })
  .catch((err) => {
    console.log(err.response.data)
  })
}

mudaNome = (e) => {
  this.setState({inputNome: e.target.value });
};

mudaEmail = (e) => {
  this.setState({inputEmail: e.target.value });
};

criarUsuario = () => {
  const URL =
    "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";

  const body = {

      name: this.state.inputNome,
      email: this.state.inputEmail
  };
  const headers = {
    headers: {Authorization: "celio-junior-joy"}
  }

  axios
  .post(URL, body, headers)
  .then((res) => {
    console.log('')
    this.pegarUsuario();
  })
  .catch((err) => {
    console.log(err.response.data);
  });

}

  render () {

    const listaUsuario = this.state.labenusers.map((user) =>{
      return<p key = {user.id}>{user.name}</p>

    })

    return (
      <div>
        <button>Trocar de Tela</button>
      <div>
        <input 
          placeholder = "Nome"
          type = "text"
          value = {this.state.inputNome}
          onChange = {this.mudaNome}
        />
      </div>

        <div>
        <input
          placeholder = "E-mail"
          type = "email"
          value = {this.state.inputEmail}
          onChange = {this.mudaEmail}
        />
        </div>
       <button onClick={this.criarUsuario}>Enviar</button>

      {listaUsuario}
      </div>
    );
  }

}
