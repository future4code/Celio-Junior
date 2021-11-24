import React from "react";


export default class Etapa2 extends React.Component {  

render (){

return (
    <div className="Etapa2">
        <h1>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h1>
        <form >
            <label>5. Qual curso?</label> <br/>
                <input type="text" name="curso"/> <br/>
            <label>6. Qual a unidade de ensino?</label> <br/>
                <input type="text" name="unidade_ensino"/> <br/>
        </form>
    </div>
  );
}
}
