//************************************ Exercícios de interpretação de código *************************************//

//  Exercício 1

/*
   1. False --> As duas operações devem ser iguais para ter um resultado positivo.

   2. False --> Mesma situação do primeiro caso.

   3. True  --> Neste caso, precisamos apenas que uma das a operações sejam positivas, pois é utilizado o OU (||)
                E também o !resultado negou a resposta da questão anterior que havia sido false.

   4. Tipo Booleano

*/


//  Exercício 2

/*
    Como é um exercício de cálculo, os valores inseridos no prompt retornam como texto (String), impossibilitando efetuar
    essa operação matemática.

    Será impresso um valor concatenado, em vez de somar (neste caso), apenas irá adicionar um valor à frente do outro.
    ex: 2+2 = 22
*/


//  Exercício 3

/*
    Uma forma simples de resolver este problema, é convertendo os valores inseridos no prompt para (Number).

    let primeiroNumero = Number(prompt("Digite um numero!"))
    let segundoNumero = Number(prompt("Digite outro numero!"))

*/



//************************************ Exercícios de escrita de código *************************************//

//  Exercício 1

/*

    let idadeUsuario = Number(prompt("Digite sua idade?"))
    let idadeMelhorAmigo = Number(prompt("Qual idade tem seu melhor amigo?"))

    let resultado1 = idadeUsuario > idadeMelhorAmigo
    let resultado2 = idadeUsuario - idadeMelhorAmigo

    console.log ("Sua idade é maior do que a do seu melhor amigo?", resultado1)
    console.log ("A diferença de idade entre você e seu melhor amigo é de", resultado2, "anos")

*/


//  Exercício 2

/*

    let numeroPar = Number(prompt("digite um número par"))

    let restoDivisao = numeroPar % 2

    
    console.log ("O número:", numeroPar, "quando dividido por 2, tem o resto da divisão de:", restoDivisao)

    // Quando um usuário digitar um número par e dividí-lo por 2, o resto sempre será 0. 
    // Quando um usuário digitar um número ímpar, e dividí-lo por 2, o resto sempre será 1. 

*/


//  Exercício 3

/*

let idadeAnos = Number(prompt("Quantos anos você tem?"))

let idadeMeses = idadeAnos * 12
let idadeDias = idadeAnos * 365
let idadeHoras = idadeDias * 24

console.log ("Sua idade é de", idadeAnos, "anos")
console.log ("Já se passaram:", idadeMeses, "desde que você nasceu")
console.log ("Já se passaram:", idadeDias, "desde que você nasceu") 
console.log ("Já se passaram:", idadeHoras, "desde que você nasceu")

*/


//  Exercício 4 

/*

let primeiroNumero = Number(prompt("Digite o primeiro número"))
let segundoNumero = Number(prompt("Digite o segundo número"))

let resultado1 = primeiroNumero > segundoNumero
let resultado2 = primeiroNumero === segundoNumero
let resultado3 = (primeiroNumero % segundoNumero) === 0
let resultado4 = (segundoNumero % primeiroNumero) === 0

console.log ("O primeiro numero é maior que segundo?", resultado1)
console.log ("O primeiro numero é igual ao segundo?", resultado2)
console.log ("O primeiro numero é divisível pelo segundo?", resultado3)
console.log ("O segundo numero é divisível pelo primeiro?", resultado4)

*/