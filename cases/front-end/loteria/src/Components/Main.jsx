import { MainContainer, SelectStyled } from "./MainStyled"
import { useNavigate } from "react-router-dom"

const Main = ({data}) => {

    const navigate = useNavigate()

    const onChange = (event) => {
        navigate.push(event.target.value)
    }

    return (
        <MainContainer>
        <SelectStyled onChange={onChange}>

            <option value={"/"}>{data[0] && data[0].nome.toLowerCase()}</option>

            <option value={"/quina"}> {" "} {data[1] && data[1].nome.toLowerCase()} {" "}</option>

            <option value={"/lotofacil"}>{" "} {data[2] && data[2].nome.toLowerCase()} {" "}</option>

            <option value={"/lotomania"}>{" "} {data[3] && data[3].nome.toLowerCase()} {" "}</option>

            <option value={"/timemania"}>{" "} {data[4] && data[4].nome.toLowerCase()} {" "}</option>

            <option value={"/diadesorte"}>{" "} {data[5] && data[5].nome.toLowerCase()} {" "}</option>

        </SelectStyled>
        </MainContainer>
    )
}

export default Main