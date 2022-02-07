import React from "react";
import './App.css';
import PrimeiraEtapa from "./components/PrimeiraEtapa"
import SegundaEtapa from "./components/SegundaEtapa";
import TerceiraEtapa from "./components/TerceiraEtapa";
import EtapaFinal from "./components/EtapaFinal";


export default class App extends React.Component {
  
  state = {
    etapa: 1,
  }
  
renderizaEtapa = () => {
  switch (this.state.etapa) {
    case 1: 
      return <PrimeiraEtapa />;
    case 2: 
      return <SegundaEtapa />;
    case 3:
      return <TerceiraEtapa />;
    case 4:
      return <EtapaFinal />;
    default:
      break;
  }
}

irParaProximaEtapa = () => {
  this.setState({ etapa: this.state.etapa + 1})
}

render (){
  
  return (
    <div className="App">
      {this.renderizaEtapa()}
      {this.state.etapa < 4 && <button onClick={this.irParaProximaEtapa}>{"Próxima Etapa"}</button>}
    </div>
  );
}
}