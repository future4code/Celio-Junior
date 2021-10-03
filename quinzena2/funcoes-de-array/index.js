/******************************* Exercícios de interpretação de código ********************************/

// Exercício 1

/*
    a) O console vai imprimir um novo array para cada nome e apelido..

    {nome: 'Amanda Rangel', apelido: 'Mandi'}
    {nome: 'Laís Petra', apelido: 'Laura'}
    {nome: 'Letícia Chijo', apelido: 'Chijo'}

*/


// Exercício 2

/*
    a) o console vai imprimir um novo array com os nomes retirando seus apelidos.

    ['Amanda Rangel', 'Laís Petra', 'Letícia Chijo']

*/


// Exercício 3

//  a) o console vai imprimir em um novo array os nomes e apelidos que não contenha "Chijo".

/* 

    {nome: 'Amanda Rangel', apelido: 'Mandi'}
    {nome: 'Laís Petra', apelido: 'Laura'}

*/



/******************************* Exercícios de escrita de código ********************************/


// Exercício 1

const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
]

// a)

const nomesPets = pets.map((dogs) => {
    return dogs.nome
})

console.log(nomesPets)


// b)

const racaPets = pets.filter((dogs) => {
    return dogs.raca === "Salsicha"
})

console.log(racaPets)


// c)

const poodlePets = pets.filter((dogs) => {
    return dogs.raca === "Poodle"
    }
)

const cupomPets = poodlePets.map((dogs) => {
    return `Você ganhou um cupom de desconto de 10% para tosar o/a ${dogs.nome}`
})

console.log(cupomPets)



// Exercício 2

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]

// a) 

const itemMercado = produtos.map((itens) => {
    return itens.nome
})

console.log(itemMercado)


// b)

const descontoItens = produtos.map((itens) => {
	const novosValores = (itens.preco * 0.95).toFixed(2)
    const imprimirItens = {
        nome: itens.nome,
        preco: novosValores
    }

    return imprimirItens
})

console.log(descontoItens)


// c)

const bebidasMercado = produtos.filter((itens) => {
    return itens.categoria === "Bebidas"
})

console.log(bebidasMercado)


// d)

const produtosYpes = produtos.filter((itens) => {
    return itens.nome.includes("Ypê")
})

console.log(produtosYpes)


// e)

const precoYpes = produtosYpes.map((itens) => {
    return `Compre ${itens.nome} por ${itens.preco}`

})

console.log(precoYpes)