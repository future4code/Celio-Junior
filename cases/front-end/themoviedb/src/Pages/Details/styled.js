import styled from 'styled-components'

export const MovieInfoContainer = styled.div`
    display: flex;
    padding: 50px;
    background-color: #2D0C5E;
    color: #ffffff;
    height: 349px;
img{
    border-radius: 5px;
    margin-left: 20px;
    height: 454px;
}
`

export const Description = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 30px;
p{
    font-size: 12px;
}
`

export const Date = styled.div`
    display: flex;
    align-items: center;
`

export const Sinopse = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 496px;
    
    p {
        font-size: 14px;
        text-align: justify;
    }
`
export const VoteAverage = styled.div`
    display: flex;
div{
    margin-right: 10px;
}
`

export const Title = styled.h1`
    margin-top: 3rem;
    font-size: 1.5rem;
`;

export const ContentMidia = styled.div`
    margin: 3.75rem ;
    display: flex;
    flex-direction: column;
    @media (max-width: 720px) {
        margin: 1rem;
    }
`;


export const CastContainer = styled.div`
    margin-top: .5rem;
    display: flex;
    flex-direction: row;
    gap: 1rem;
    overflow-x: auto;
    overflow-y: hidden;
    white-space: nowrap;
`;

export const CastCard = styled.div`
    margin-bottom: 1rem;
    margin-left: 0.1rem;
    padding: .5rem;
    white-space: normal;
    border-radius: 0.25rem;
    box-shadow: 0px 0.25rem 0.25rem rgba(0, 0, 0, 0.25);
    img {
        width: 11rem;
    }
`;

export const NameCast = styled.h1`
    margin-top: 1rem;
    font-size: 1.125rem;
    font-weight: 700;
`;
export const NameCharacter = styled.p`
    margin-top: 0.25rem;
    font-size: 1rem;
    font-weight: 400;
`;

export const MovieTrailer = styled.div`
    margin-top: 1.5rem;
    width: 56.6875rem;
    height: 31.875rem;
    img {
        width: 90%;
    }
    @media (max-width: 900px) {
        width: auto;
        height: 300px;
    }
    @media (max-width: 800px) {
        width: auto;
        height: 300px;
    }
`;