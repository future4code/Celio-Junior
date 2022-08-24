import { useHistory } from 'react-router-dom'
import { MainContainer, SelectStyled } from "./MainStyle"

const Main = ({ data }) => {
    
    const history = useHistory()

    const onChange = (e) => {
        history.push(e.target.value)
    }

    return (
        <MainContainer>
            <Select onChange={onChange}>
                <option value={"/"}>{data[0] && data[0].nome.toLowerCase()}</option>

                <option value={"/quina"}> {" "} {data[1] && data[1].nome.toLowerCase()} {" "}</option>

                <option value={"/lotofacil"}>{" "} {data[2] && data[2].nome.toLowerCase()} {" "}</option>

                <option value={"/lotomania"}>{" "} {data[3] && data[3].nome.toLowerCase()} {" "}</option>

                <option value={"/timemania"}>{" "} {data[4] && data[4].nome.toLowerCase()} {" "}</option>

                <option value={"/diadesorte"}>{" "} {data[5] && data[5].nome.toLowerCase()} {" "}</option>
            </Select>
        </MainContainer>
    )
}

export default Main