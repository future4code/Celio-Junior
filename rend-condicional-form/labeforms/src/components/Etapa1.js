import React from "react";


export default class Etapa1 extends React.Component {  

render (){

return (
    <div className="Etapa1">
        <h1>ETAPA 1 - DADOS GERAIS</h1>
        <form >
            <label>1. Qual o seu nome?</label> <br/>
                <input type="text" name="nome"/> <br/>
            <label>2. Qual sua idade?</label> <br/>
                <input type="number" name="idade"/> <br/>
            <label>2. Qual seu e-mail?</label> <br/>
                <input type="text" name="email"/> <br/>
            <label>4. Qual a sua escolaridade?</label> <br/>
            <select>
                <option value="Ensino médio incompleto">Ensino médio incompleto</option>
                <option value="Ensino médio completo">Ensino médio completo</option>
                <option value="Ensino superior incompleto">Ensino superior incompleto</option>
                <option value="Ensino superior completo">Ensino superior completo</option>
            </select>
        </form>
    </div>
  );
}
}
