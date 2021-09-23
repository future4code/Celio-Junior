/************************************** Exercícios de interpretação de código *********************************************/

// Exercício 1

// a)

// Primeiro console: Matheus Nachtergaele
// Segundo console: Virginia Cavendish
// Terceiro console: {canal: 'Globo', horario: '14h'}

// Sincerametne no console 2 eu imaginei que iria puxar o tamanho por conta do .length, acabei rodando por conta disso... 
// me confundi



// Exercício 2

// a) 

//  Primeiro console: {nome: 'Juca', idade: 3, raca: 'SRD'}
//  Segundo console: {nome: 'Juba', idade: 3, raca: 'SRD'}
//  Terceiro console: {nome: 'Jubo', idade: 3, raca: 'SRD'}

// b)

//  Realiza uma cópia inteira de um objeto para outro e muda/adiciona, apenas uma ou outra propriedade.



// Exercício 3

// a)

//  Primeiro console: false
//  Segundo console: undefined

// b)
// No primeiro console ele trouxe o valor setado na minhaFuncao e dentro do objeto pessoa na chave: backender.
// No segundo console a chave altura não foi declarada em nenhum momento, por isso retorna como undefined.




/************************************** Exercícios de interpretação de código *********************************************/


// Exercício 1

// a) 
/*
let pessoa = {

    nome: 'Celio',
    apelidos: ['Celinho', ' Celião', ' Juninho']

    }

    let imprimePessoa = (pessoa) => {
    console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos}`)

    }


imprimePessoa(pessoa)


// b)

    let novaPessoa = {
        ...pessoa,
        apelidos: ['Ju', ' Junior', ' Defaultao']
       
    }

imprimePessoa(novaPessoa)



// Exercício 2

// a)

    const pessoaUm = {
        nome: "Danilo", 
        idade: 34, 
        profissao: "Analista de Redes"
    }

    const pessoaDois = {
        nome: "Tiago", 
        idade: 38, 
        profissao: "Analista de Segurança"
    }


// b)

    const funcaoPessoa = (pessoaUm, pessoaDois) => {
        
        const nomePessoaUm = (pessoaUm.nome)
        const idadePessoaUm = (pessoaUm.idade)
        const profissaoPessoaUm = (pessoaUm.profissao)
        const nomePessoaDois = (pessoaDois.nome)
        const idadePessoaDois = (pessoaDois.idade)
        const profissaoPessoaDois = (pessoaDois.profissao)

        const informacoesPessoas = []

        informacoesPessoas.push(nomePessoaUm, nomePessoaUm.length, idadePessoaUm, profissaoPessoaUm, profissaoPessoaUm.length, 
                                nomePessoaDois, nomePessoaDois.length, idadePessoaDois, profissaoPessoaDois, profissaoPessoaDois.length)

        console.log(informacoesPessoas)

    }

    funcaoPessoa(pessoaUm, pessoaDois)
    


// Exercício 3

// a)
    let carrinho = []


// b)
    let frutaUm = {
        nome: 'Maçã',
        disponibilidade: true
    }

    let frutaDois = {
        nome: 'Laranja',
        disponibilidade: true
    }

    let frutaTres = {
        nome: 'Limão',
        disponibilidade: true
    }


// c)
    function sacolao (frutaUm, frutaDois, frutaTres) {
        
        carrinho.push(frutaUm, frutaDois, frutaTres)

        console.log(carrinho)

    }

    sacolao (frutaUm, frutaDois, frutaTres)


*/


/******************************* DESAFIOS *********************************/

// Exercício 1

/*

function usuario () {

    let informacoesUsuario = {
    
        nomeUsuario: prompt("Digite seu nome: "),
        idadeUsuario: Number(prompt("Digite sua idade: ")),
        profissaoUsuario: prompt("Digite sua profissão: ")
    }

    console.log(informacoesUsuario, typeof informacoesUsuario)

}

usuario()




// Exercício 2

function filmes () {

    let filmeUm = {
        anoDeLancamento: 2008,
        nomeDoFilme: 'The Dark Knight'
    }

    let filmeDois = {
        anoDeLancamento: 2001,
        nomeDoFilme: 'Lord of the Rings'
    }

    let verificacaoLancamentoUm = (filmeUm.anoDeLancamento < filmeDois.anoDeLancamento)
    let verificacaoLancamentoDois = (filmeUm.anoDeLancamento === filmeDois.anoDeLancamento)

    console.log('O primeiro filme foi lançado antes do segundo?', verificacaoLancamentoUm)
    console.log('O primeiro filme foi lançado no mesmo ano do segundo?', verificacaoLancamentoDois)

}

filmes()



// Exercício 3


let carrinho = []

    let frutaUm = {
        nome: 'Maçã',
        disponibilidade: true
    }

    let frutaDois = {
        nome: 'Laranja',
        disponibilidade: true
    }

    let frutaTres = {
        nome: 'Limão',
        disponibilidade: true
    }

    function sacolao (frutaUm, frutaDois, frutaTres) {
        
        carrinho.push(frutaUm, frutaDois, frutaTres)

        console.log(carrinho)

    }

    sacolao (frutaUm, frutaDois, frutaTres)


    function estoqueSacolao (frutaUm) {
        const disponibilidadeEstoque = (!frutaUm.disponibilidade )
        
        frutaUm.disponibilidade = disponibilidadeEstoque

    }

    estoqueSacolao(frutaUm)


    */