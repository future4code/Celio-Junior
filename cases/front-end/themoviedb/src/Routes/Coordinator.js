export function goToHomePage(history) {
    history('/')
}

export function goToMovieDetails(history, id) {
    history(`/movie/${id}`)
}