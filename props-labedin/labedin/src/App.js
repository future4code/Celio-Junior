import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';
// import imagens from './components/CardPequeno/img';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://media-exp1.licdn.com/dms/image/D5635AQG6M51IQW9SkA/profile-framedphoto-shrink_200_200/0/1635454195147?e=1636761600&v=beta&t=bfxFOcDuCS91nXnGspKIMHo3Q14DWRqqZ3Wx2tSBLWg" 
          nome="Célio" 
          descricao="Olá, me chamo Célio Santos. Atualmente estudando Desenvolvimento Web Full Stack na Labenu."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      {/* <div className="page-section-container">
        <CardPequeno 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="E-mail" 
          descricao="Formando desenvolvedores para o mercado de trabalho!" 
        />
        
        <CardPequeno 
          imagem="https://t.ctcdn.com.br/hvGx3b_vvT3_QH9eacAEj-L2EmM=/400x400/smart/i490082.jpeg" 
          nome="NASA" 
          descricao="Apontando defeitos." 
        />
      </div> */}



      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Formando desenvolvedores para o mercado de trabalho!" 
        />
        
        <CardGrande 
          imagem="https://t.ctcdn.com.br/hvGx3b_vvT3_QH9eacAEj-L2EmM=/400x400/smart/i490082.jpeg" 
          nome="NASA" 
          descricao="Apontando defeitos." 
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
