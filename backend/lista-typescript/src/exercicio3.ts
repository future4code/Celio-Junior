enum GENERO {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}

type FilmesPreferidos = {
    nomeDoFilme: string,
    anoLancamento: number,
    pontuacao?: number
}

// const filmes: (nomeDoFilme: string, anoLancamento: number, genero: GENERO, pontuacao?: number)
// => object = (nomeDoFilme, anoLancamento, genero, pontuacao) => {

// }