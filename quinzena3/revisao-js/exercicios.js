// EXERCÍCIO 01
function inverteArray(array) {
    
  let arrayInvertido = []

  for (let i = array.length -1; i >= 0; i--) {
    arrayInvertido.push(array[i])
  }
    
  return arrayInvertido
}

// EXERCÍCIO 02
function retornaNumerosParesElevadosADois(array) {

  let numerosPares = [];
  
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0){
        numerosPares.push(array[i]**2);
    }
  }
  
  return numerosPares
}

// EXERCÍCIO 03
function retornaNumerosPares(array) {
  
  let numerosPares = [];
  
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0){
        numerosPares.push(array[i]);
    }
  }
  
  return numerosPares

}

// EXERCÍCIO 04
function retornaMaiorNumero(array) {

  let maiorNumero = array[0];

  for (let numeroDaVez of array) {
    if (numeroDaVez > maiorNumero) {
      maiorNumero = numeroDaVez;
    }
  }

  return maiorNumero;
  
} 

// EXERCÍCIO 05
function retornaQuantidadeElementos(array) {
  
  return array.length
}

// EXERCÍCIO 06
function retornaExpressoesBooleanas() {
  
  const booleano1 = true
  const booleano2 = false
  const booleano3 = !booleano2 
  const booleano4 = !booleano3
  
  const arrayResposta = [
    booleano1 && booleano2 && !booleano4,
    (booleano1 && booleano2) || !booleano3,
    (booleano2 || booleano3) && (booleano4 || booleano1),
    !(booleano2 && booleano3) || !(booleano1 && booleano3),
    !(booleano1) && !(booleano3) || (!booleano4 && booleano3 && booleano3)
  ]

  return arrayResposta

}

// EXERCÍCIO 07
function retornaNNumerosPares(n) {
  let nNumerosPares = []

  for (let numero = 0; nNumerosPares.length < n; numero++) {
    if (numero % 2 === 0) {
      nNumerosPares.push(numero)
    }
  }
  return nNumerosPares
}

// EXERCÍCIO 08
function checaTriangulo(a, b, c) {
  if (a === b & b === c){
    return 'Equilátero'
  }

  if (a === b || a === c || b === c) {
    return 'Isósceles'
  } else {
    
    return 'Escaleno'
  }
  
  return checaTriangulo

}

// EXERCÍCIO 09
function comparaDoisNumeros(num1, num2) {
  let maior
  let menor

  if (num1 > num2) {
    maior = num1
    menor = num2

  } else {
    menor = num1
    maior = num2
  }

  let divisivel = (maior % menor) === 0

  let valorDiferenca = (maior - menor)

  let objeto =
  {
    maiorNumero: maior,
    maiorDivisivelPorMenor: divisivel,
    diferenca: valorDiferenca

  }
  return objeto

}

// EXERCÍCIO 10
function segundoMaiorEMenor(array) {
  let novaArray = []

  for (item of array) {
    let contador = 0
    for (itemComparado of array) {
      if (item > itemComparado) {
        contador = contador + 1
      }
    }
    novaArray[contador] = item
  }

  let segundoMaiorNumero = novaArray[novaArray.length - 2] 
  let segundoMenorNumero = novaArray[1]

  return [segundoMaiorNumero, segundoMenorNumero]

}

// EXERCÍCIO 11
function ordenaArray(array) {
  let novaArray = []

  for (item of array) {
    let contador = 0
    for (itemComparado of array) {
      if (item > itemComparado) {
        contador = contador + 1
      }
    }
    novaArray[contador] = item
  }
  return novaArray
}

// EXERCÍCIO 12
function filmeFavorito() {
  let filme = {
    nome: "O Diabo Veste Prada",
    ano: 2006,
    diretor: "David Frankel",
    atores: ["Meryl Streep", "Anne Hathaway", "Emily Blunt", "Stanley Tucci"]
  }
  return filme
}

// EXERCÍCIO 13
function imprimeChamada() {
  let filme = {
    nome: "O Diabo Veste Prada",
    ano: 2006,
    diretor: "David Frankel",
    atores: ["Meryl Streep", " Anne Hathaway", " Emily Blunt", " Stanley Tucci"]
  }
  
  return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores}.`
}

// EXERCÍCIO 14
function criaRetangulo(lado1, lado2) {
  const retangulo = {
    largura: lado1,
    altura: lado2,
    perimetro: (2 * (lado1 + lado2)),
    area: (lado1 * lado2)
  }
  
  return retangulo  
}

// EXERCÍCIO 15
function anonimizaPessoa(pessoa) {
  // const novaPessoa = {
  //   ...pessoa,
  //   nome: "ANÔNIMO"
  // }
  // return novaPessoa
}

// EXERCÍCIO 16A
function maioresDe18(arrayDePessoas) {

}

// EXERCÍCIO 16B
function menoresDe18(arrayDePessoas) {

}

// EXERCÍCIO 17A
function multiplicaArrayPor2(array) {

}

// EXERCÍCIO 17B
function multiplicaArrayPor2S(array) {

}

// EXERCÍCIO 17C
function verificaParidade(array) {

}

// EXERCÍCIO 18A
function retornaPessoasAutorizadas(pessoas) {

}

// EXERCÍCIO 18B
function retornaPessoasNaoAutorizadas(pessoas) {

}

// EXERCÍCIO 19A
function ordenaPorNome(consultasNome) {

}

// EXERCÍCIO 19B
function ordenaPorData(consultasData) {

}

// EXERCÍCIO 20
function calculaSaldo(contas) {

}
