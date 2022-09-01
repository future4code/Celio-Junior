import axios from "axios"
import React, { useEffect, useState } from "react"
import Router from "./Routes/Router"
import { BASE_URL } from "./Constants/Base_Url"
import { BrowserRouter } from "react-router-dom"
import Main from "./Components/Main"

const App = () => {

  const [concursos, setConcursos] = useState([])

  const getConcursos = () => {
    axios
      .get(`${BASE_URL}/loterias`)

      .then((res) => {
        setConcursos(res.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  useEffect(() => {
    getConcursos()
  }, [])

  return (
    <BrowserRouter>
      <Main data={concursos}/>
      <Router />
    </BrowserRouter>
  );
}

export default App