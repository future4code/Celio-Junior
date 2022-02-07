import React from "react";


export default class SegundaEtapa extends React.Component {  

render (){

return (
    <div>
        <h1>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h1>
        <form >
            <p><label>5. Qual curso?</label></p>
                <p><input type="text" name="curso"/></p>
            <p><label>6. Qual a unidade de ensino?</label></p>
                <p><input type="text" name="unidade_ensino"/></p>
        </form>
    </div>
  );
}
}
