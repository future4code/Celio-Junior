import axios from "axios"
import { useEffect, useState } from "react"
import { BASE_URL } from "../Constants/Base_Url"
import Main from "../Components/Main"

const GetLoteria = () => {

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
    <>
        <Main data={concursos}/>
    </>
)

}

export default GetLoteria