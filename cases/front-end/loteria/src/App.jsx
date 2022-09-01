import React from "react"
import Router from "./Routes/Router"

import { BrowserRouter } from "react-router-dom"
import GetLoteria from "./Services/GetLoteria"

const App = () => {

  

  return (
    <BrowserRouter>
      <GetLoteria/>
      <Router />
    </BrowserRouter>
  );
}

export default App