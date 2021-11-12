import React from 'react';
import styled from 'styled-components'

const Container = styled.div `
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;
`

const ContainerImagem = styled.img `
    width: 110px;
    margin-right: 10px;
    border-radius: 50%;
`

const ContainerH4 = styled.h4 `
    margin-bottom: 15px;
` 

const ContainerDiv = styled.div `
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
`

function CardGrande(props) {
    return (
        <Container>
            <ContainerImagem src={ props.imagem } />
            <ContainerDiv>
                <ContainerH4>{ props.nome }</ContainerH4>
                <p>{ props.descricao }</p>
            </ContainerDiv>
        </Container>
    )
}

export default CardGrande;