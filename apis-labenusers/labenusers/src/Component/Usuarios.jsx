import React from 'react';
import './App.css';


export default class LabenUsuarios extends React.Component {
  

render() {

  return (
    <div>
      
      <button>Trocar de tela</button> <br/>

      <h3>Procurar Usuário</h3>
      <input 
        type = {"text"}
        placeholder={"Nome exato para busca"}
      /> 
      <button>Salvar edição</button> 

      {/* <button>Voltar para lista de usuários</button> */}
      
    </div>
  );
}
}


