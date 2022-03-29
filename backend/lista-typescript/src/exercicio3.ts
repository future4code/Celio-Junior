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
	genero: string,
    pontuacao?: number
}

const filmes: (nomeDoFilme: string, anoLancamento: number, genero: GENERO, pontuacao?: number)
=> FilmesPreferidos = (nomeDoFilme, anoLancamento, genero, pontuacao?) => {

	const detalhesDoFilme: FilmesPreferidos = {
		nomeDoFilme: nomeDoFilme,
		anoLancamento: anoLancamento,
		genero: genero,
		pontuacao: pontuacao
	}

	return detalhesDoFilme
}
console.log(filmes('Titanic', 1990, GENERO.ROMANCE, 8.9));
