/**************************** Exercícios de interpretação de código *******************************/

// Exercício 1

/*
Foram declaradas 2 variáveis

valor = 0
i = 0 

No Loop, i vai recebendo 1 a cada repetição, a variável "valor" vai recebendo este mesmo 1 junto.
o console vai trazer o resultado de 10.

*/


// Exercício 2 

/*

a) Os números > 18 ou sejaa [19, 21, 23, 25, 27, 30]

b) Acho que poderia ser usado o indexOf no console.log 

*/


// Exercício 3

/*

    É adicionado 1 *(asterisco) a cada passada pelo loop

    Digitando 4 no prompt no console vai sair:

    *
    **
    ***
    ****


*/


/******************************* Exercícios de escrita de código *******************************/

// Exercício 1

let bichinhosDeEstimacao = [];
let qtdeBichinhos = Number(prompt("Quantos bichinhos de estimação você tem?"));

// a)
if (qtdeBichinhos === 0){
    console.log("Que pena! Você pode adotar um pet!");

} else {
        
    while   (qtdeBichinhos > 0) {
            let nomesBichinhosDeEstimacao = prompt("Digite os nomes dos seus pets!");
            bichinhosDeEstimacao.push(nomesBichinhosDeEstimacao);

            qtdeBichinhos--
            }

            console.log(bichinhosDeEstimacao) 

}


// Exercício 2

const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55];


// a)

const arrayNumeros = (numeros) => { 

    for (let index = 0; index < numeros.length; index++) {
        console.log(numeros[index]);
        
    }
    
}

arrayNumeros(arrayOriginal)


// b)

const arrayDivideNumeros = (numeros) => { 

    for (let index = 0; index < numeros.length; index++) {
        console.log(numeros[index] / 10);
        
    }
    
}

arrayDivideNumeros(arrayOriginal)


// c)

const numerosPares = [];

const arrayNumerosPares = (numeros) => { 

    for (let index = 0; index < numeros.length; index++) {
        if (numeros[index] % 2 === 0){
            numerosPares.push(numeros[index]);
            console.log(numeros[index]);
        }
    }
}

arrayNumerosPares(arrayOriginal)




// d)

const imprimirMensagem = (numeros) => {
    let arrayString = [];

  for (let index = 0; index < numeros.length; index++) {
      arrayString.push(`O elemento do index ${index} é: ${numeros[index]}`);
      
  }

  return arrayString;
};

const resultado = imprimirMensagem(arrayOriginal);
console.log(resultado);



// e)

const maiorNumero = (numeros) => {
  let maiorNumero = -Infinity;

  for (let numeroDaVez of numeros) {
    if (numeroDaVez > maiorNumero) {
      maiorNumero = numeroDaVez;
    }
  }

  return maiorNumero;
};

console.log(maiorNumero(arrayOriginal));



const menorNumero = (numeros) => {
    let menorNumero = Infinity;
  
    for (let numeroDaVez of numeros) {
      if (numeroDaVez < menorNumero) {
        menorNumero = numeroDaVez;
      }
    }
  
    return menorNumero;
  };
  
  console.log(menorNumero(arrayOriginal));
  