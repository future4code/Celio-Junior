import React from 'react'
import Router from './Routes/Router';
import { BrowserRouter } from 'react-router-dom'
import { GlobalStyle } from './Constants/globalStyle';

function App() {
  return ( 
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  )
}

export default App;