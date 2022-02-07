import React from "react";


export default class TerceiraEtapa extends React.Component {  

render (){

return (
    <div>
        <h1>ETAPA 1 - DADOS GERAIS</h1>
        <form >
            <p><label>7. Por que você não terminou um curso de graduação?</label></p>
                <p><input type="text" name="nome"/></p>
            <p><label>8. Você fez algum curso complementar?</label></p>
            <p><select>
                <option value="Nenhum">Nenhum</option>
                <option value="Curso_técnico">Curso técnico</option>
                <option value="Curso_inglês">Curso de inglês</option>
            </select></p>
        </form>
    </div>
  );
}
}
