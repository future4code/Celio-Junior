import React from "react";


export default class PrimeiraEtapa extends React.Component {  

render (){

return (
    <div className="Etapa1">
        <h1>ETAPA 1 - DADOS GERAIS</h1>
        <p>
        <form >
            <p><label>1. Qual o seu nome?</label></p>
                <p><input type="text" name="nome"/></p>
            <p><label>2. Qual sua idade?</label></p>
                <p><input type="text" name="idade"/></p>
            <p><label>2. Qual seu e-mail?</label></p>
                <p><input type="text" name="email"/></p>
            <p><label>4. Qual a sua escolaridade?</label></p>
            <select>
                <option value="Ensino médio incompleto">Ensino médio incompleto</option>
                <option value="Ensino médio completo">Ensino médio completo</option>
                <option value="Ensino superior incompleto">Ensino superior incompleto</option>
                <option value="Ensino superior completo">Ensino superior completo</option>
            </select>
        </form>
        </p>
    </div>
  );
}
}
