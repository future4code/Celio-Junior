import React from 'react';
import styled from 'styled-components'

const Container = styled.div `
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
`

const ContainerImagem = styled.img `
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;
`

const ContainerP = styled.p `
    margin-bottom: 15px;
` 

const ContainerDiv = styled.div `
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
`

function CardPequeno(props) {
    return (
        <Container>
            <ContainerImagem src={ props.imagem } />
            <ContainerDiv>
                <ContainerP><b>{ props.nome}</b>{ props.descricao}</ContainerP>
            </ContainerDiv>
        </Container>
    )
}

export default CardPequeno;