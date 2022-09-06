import axios from "axios"
import { useEffect, useState } from "react"
import { BASE_URL } from "../../Constants/Base_Url"
import {GeneralContainer,
        LeftCol, 
        RightCol, 
        TitleWrap, 
        Title,
        LogoLoterias, 
        NumbersWrap,
        GameTitle,
        GameNumberDate,
        Obs} from "./QuinaStyled"
import logoLoterias from "../../Assets/logo.svg"
import NumeroSorteado from "../../Components/DrawnNumbers"

const Quina = () => {
  const [relacaoConcurso, setRelacaoConcurso] = useState([])
  const [concursoId, setConcursoId] = useState("")
  const [concursos, setConcursos] = useState([])

  const getRelacaoConcursos = () => {
    axios
      .get(`${BASE_URL}/loterias-concursos`)
      .then((res) => {
        setRelacaoConcurso(res.data[1])
        if (relacaoConcurso) {
          setConcursoId(res.data[1].concursoId)
        }

       
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const getConcursosById = (id) => {
    axios
      .get(`${BASE_URL}/concursos/${id}`)
      .then((res) => {
        setConcursos(res.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  useEffect(() => {
    getRelacaoConcursos()
  }, [])

  useEffect(() => {
    if (concursoId) getConcursosById(concursoId)
  }, [concursoId])

  const data = new Date(concursos?.data)
  const formatedDate = data.toLocaleDateString("pt-BR", { timeZone: "UTC" })

  return (
    <GeneralContainer>
      <LeftCol></LeftCol>
      <TitleWrap>
        <LogoLoterias src={logoLoterias} />
        <Title>QUINA</Title>
      </TitleWrap>
      <GameTitle>
        <p>CONCURSO  {concursos.id}</p>
      </GameTitle>
      <GameNumberDate>
        <p>
          {data && formatedDate}
        </p>
      </GameNumberDate>
      <RightCol>
        <NumbersWrap>
          <ul>
            {concursos.numeros &&
              concursos.numeros.map((item) => (
                <NumeroSorteado numbers={item} key={item} />
              ))}
          </ul>
        </NumbersWrap>
        <Obs>
          Este sorteio é meramente ilustrativo.
        </Obs>
      </RightCol>
    </GeneralContainer>
  )
}

export default Quina