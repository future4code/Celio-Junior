import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import imgNotFound from '../../assets/imgNotFound.jpg'
import Header from '../../components/Header/Header';
import { getActors, getMovieDetails, getTrailers } from '../../services/getMovies';
import { CastCard, CastContainer, ContentMidia, Date, Description, MovieInfoContainer, MovieTrailer, NameCast, NameCharacter, Sinopse, Title, VoteAverage } from './styled';
import ReactPlayer from 'react-player/youtube';


function MovieDetails() {

    const [movie, setMovie] = useState([])
    const [castInfo, setCastInfo] = useState([])
    const [movieDetail, setMovieDetails] = useState([]);
    const params = useParams()


    useEffect(() => {
        getMovieDetails(params.id, setMovie)
    }, [params.id])

    useEffect(() => {
        getActors(params.id, setCastInfo)
    }, [params.id])

    useEffect(() => {
        getTrailers(params.id, setMovieDetails)
    },[params.id])
    
    const {videos} = movieDetail;

    const movieDetails = movie &&
        <MovieInfoContainer>
            {movie.poster_path && <img alt="poster do filme" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />}
            <Description>
                <h2>{movie.title && movie.title}</h2>
                <Date>
                    <p>{movie.release_date && movie.release_date
                        .split('-')
                        .reverse()
                        .join('/')} (BR) • 
                    </p>
                    {movie.genres && movie.genres.map((genre) => {
                        return <p>{genre.name && genre.name
                                    .replace('', ', ')}
                                </p>
                    })}
                    <p> • {movie.runtime && movie.runtime + ' min'}</p>
                </Date>
                <VoteAverage>
                    <div>
                        <p>{movie.vote_average && movie.vote_average * 100}%</p>
                    </div>
                    <p> Avaliação dos usuários</p>
                </VoteAverage>
                <Sinopse>
                    <h3>Sinopse</h3>
                    <p>{movie.overview && movie.overview}</p>
                </Sinopse>
            </Description>
        </MovieInfoContainer>

    return (
        <>
            <Header />
                {movieDetails}
            <ContentMidia>
                <Title>
                    Elenco
                </Title>
                    <CastContainer>
                        {castInfo.map(cast => (
                            <CastCard key={cast.id}>
                                <img src={cast.profile_path === null ? imgNotFound : `https://image.tmdb.org/t/p/original/${cast.profile_path}`} alt={cast.name} />
                                <NameCast>{cast.name}</NameCast>
                                <NameCharacter>{cast.character}</NameCharacter>
                            </CastCard>
                        ))}
                    </CastContainer>

                <Title>
                    Trailer
                </Title>
                
                <MovieTrailer>
                    {videos && videos.results.length ? (
                        <ReactPlayer 
                            width='100%' 
                            height='100%' 
                            url={`https://www.youtube.com/watch?v=${videos ? videos.results[0].key : ""}`} 
                            controls={true} />
                        ) : (
                    <>
                        <img src={imgNotFound} alt="imgNotFound"/>
                    </>
                        )}
                </MovieTrailer>
            </ContentMidia>
        </>
    )
}

export default MovieDetails;