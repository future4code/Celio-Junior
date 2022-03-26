const pessoa: (nome: string, dataNascimento: string) => string = (nome, dataNascimento) => {
    const dtNasc = dataNascimento.split("/")
    console.log(dtNasc);
    const dia = dtNasc[0]
    const mes = dtNasc[1]
    const ano = dtNasc[2]
    
    return (`Olá me chamo ${nome}, nasci no dia ${dia} do mês de ${mes} do ano de ${ano}`)
}

console.log(pessoa('Celio','12/04/1990'));
