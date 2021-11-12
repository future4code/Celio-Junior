import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';
import imagem1 from './components/CardPequeno/img/email.png';
import imagem2 from './components/CardPequeno/img/localizacao.png';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://media-exp1.licdn.com/dms/image/D5635AQG6M51IQW9SkA/profile-framedphoto-shrink_200_200/0/1635454195147?e=1636761600&v=beta&t=bfxFOcDuCS91nXnGspKIMHo3Q14DWRqqZ3Wx2tSBLWg" 
          nome="Célio" 
          descricao=" Olá, me chamo Célio Santos, formado em Sistemas de Informação. 
                      Atualmente estudando Desenvolvimento Web Full Stack na Labenu."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <CardPequeno 
          imagem={imagem1} 
          nome="E-mail: " 
          descricao="celiojr932ster@gmail.com" 
        />
        
        <CardPequeno 
          imagem={imagem2} 
          nome="Endereço: " 
          descricao="Rua dos Bobos, Nº. 0" 
        />
      </div>



      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://uploads-ssl.webflow.com/5e790d30d198385b09366d8f/5eb17dfd4a07be86d2b8951e_Labenu_principal_slogan.png" 
          nome="Labenu" 
          descricao="Cursando Desenvolvimento Web Full Stack Noturno - Turma Joy!" 
        />
        
        <CardGrande 
          imagem="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Fnac_Logo.svg/1200px-Fnac_Logo.svg.png" 
          nome="Fnac - Analista de Sistemas" 
          descricao=" Atuação na área de banco de dados SQL SERVER.
                      Elaborar relatórios, Controle de acessos de usuários para aplicação interna, 
                      replicação de dados entre servidores via banco de dados, análise e monitoramento 
                      de geração de notas fiscais." 
        />

        <CardGrande 
          imagem="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Fnac_Logo.svg/1200px-Fnac_Logo.svg.png" 
          nome="Fnac - Assistente Financeiro" 
          descricao=" Atuação no setor Administrativo/Financeiro utilizando o software de Gestão Empresarial SAP, 
                      monitoração e auxílio em atividades financeiras, gerar relatórios, controle de pagamentos, 
                      conciliação bancária." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
