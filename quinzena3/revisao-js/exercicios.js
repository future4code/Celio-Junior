// EXERCÍCIO 01
function inverteArray(array) {
    
  let arrayInvertido = []

  for (let indice = array.length -1; indice >= 0; indice--) {
    arrayInvertido.push(array[indice])
  }
    
  return arrayInvertido
}

// EXERCÍCIO 02
function retornaNumerosParesElevadosADois(array) {

  let numerosPares = [];
  
  for (let indice = 0; indice < array.length; indice++) {
    if (array[indice] % 2 === 0){
        numerosPares.push(array[indice]**2);
    }
  }
  
  return numerosPares
}

// EXERCÍCIO 03
function retornaNumerosPares(array) {
  
  let numerosPares = [];
  
  for (let indice = 0; indice < array.length; indice++) {
    if (array[indice] % 2 === 0){
        numerosPares.push(array[indice]);
    }
  }
  
  return numerosPares

}

// EXERCÍCIO 04
function retornaMaiorNumero(array) {

} 

// EXERCÍCIO 05
function retornaQuantidadeElementos(array) {
  
}

// EXERCÍCIO 06
function retornaExpressoesBooleanas() {

}

// EXERCÍCIO 07
function retornaNNumerosPares(n) {

}

// EXERCÍCIO 08
function checaTriangulo(a, b, c) {
  // return 'Escaleno'
  // return 'Equilátero'
  // return 'Isósceles'
}

// EXERCÍCIO 09
function comparaDoisNumeros(num1, num2) {
  // Formato do objeto a ser retornado:
  // {
  //   maiorNumero: X,
  //   maiorDivisivelPorMenor: Y,
  //   diferenca: Z
  // }
}

// EXERCÍCIO 10
function segundoMaiorEMenor(array) {

}

// EXERCÍCIO 11
function ordenaArray(array) {

}

// EXERCÍCIO 12
function filmeFavorito() {

}

// EXERCÍCIO 13
function imprimeChamada() {
  // "Venha assistir ao filme NOME_DO_FILME, de ANO, dirigido por DIRECAO e estrelado por ELENCO."
}

// EXERCÍCIO 14
function criaRetangulo(lado1, lado2) {

}

// EXERCÍCIO 15
function anonimizaPessoa(pessoa) {

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
