import React from "react";


export default class Etapa3 extends React.Component {  

render (){

return (
    <div className="Etapa3">
        <h1>ETAPA 1 - DADOS GERAIS</h1>
        <form >
            <label>7. Por que você não terminou um curso de graduação?</label> <br/>
                <input type="text" name="nome"/> <br/>
            <label>8. Você fez algum curso complementar?</label> <br/>
            <select>
                <option value="Nenhum">Nenhum</option>
                <option value="Curso_técnico">Curso técnico</option>
                <option value="Curso_inglês">Curso de inglês</option>
            </select>
        </form>
    </div>
  );
}
}
