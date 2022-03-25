type Estatisticas = {
    maior: number,
    menor: number,
    media: number
}

// a) A entrada é um array de números

function obterEstatisticas(numeros: number[]): Estatisticas {

    const numerosOrdenados = numeros.sort(
        (a, b) => a - b
    )

    let soma: number = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas: Estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}
console.log(obterEstatisticas([2,5,7,3,10,21]));


// b) numerosOrdenados: number[] 
//    soma: number
//    estatisticas: Estatisticas

// c)
    type AmostraDeDados = {
        numeros: number,
        obterEstatisticas: (numeros: number) => Estatisticas
    }
