//****************** Exercícios de interpretação de código *****************//

/*
    Exercício 1

    Foi impresso:

    10
    10, 5
*/

/*
    Exercício 2

    Foi impresso:

    10, 10, 10
*/

/*
    Exercício 3

    Este programa calcula quanto uma pessoa recebe por hora trabalhada
    Sugestão de variáveis

    cargaHoraria
    valorDia

    let cargaHoraria = prompt ("Quantas horas você trabalha por dia?")
    let valorDia = prompt ("Quanto você recebe por dia?")
    alert (`Você recebe ${cargaHoraria/valorDia} por hora`)
*/



//**************************** Exercícios de escrita de código ****************************//

// Exercício 1

/*
let primeiroNome
let suaIdade

console.log (typeof primeiroNome)
console.log (typeof suaIdade)
*/

// As variávels ficaram com o tipo "undefined", pois não foram atribuídos valores as mesmas.
// Obs. const não node ser declarada sem um valor

/*
let primeiroNome = prompt ("Digite seu primeiro nome:")
let suaIdade = prompt ("Digite sua idade:")

console.log (typeof primeiroNome)
console.log (typeof suaIdade)

// Agora as variáveis receberam um valor via prompt o que as tornam com tipo "String"

console.log ("Olá,",primeiroNome,", você tem", suaIdade, "anos")
*/



// Exercício 2

/*
let carroProprio = prompt ("Você tem um carro próprio?")
let casaPropria = prompt ("Você tem casa própria?")
let temFilho = prompt ("Você tem filho(a)?")

console.log ("Você tem um carro próprio?", carroProprio)
console.log ("Você tem casa própria?", casaPropria)
console.log ("Você tem filho(a)?", temFilho)
*/


// Exercício 3

/*
let valorDeA = 10
let valorDeB = 25
let valorDeC


valorDeC = valorDeA
valorDeA = valorDeB
valorDeB = valorDeC


console.log ("O novo valor de a é", valorDeA)
console.log ("O novo valor de b é", valorDeB)
*/


// DESAFIO

/*
let primeiroNumero = prompt ("Digite o primeiro número")
let segundoNumero = prompt ("Digite o segundo número")


let atuallzaTipoPrimeiroNumero = Number (primeiroNumero)
let atuallzaTipoSegundoNumero = Number (segundoNumero)


//  Converti as variáveis para o tipo "Número", pois o que retorna do prompt vem como "String" e com isso 
//  não conseguia fazer as operações matemáticas.


let x = atuallzaTipoPrimeiroNumero + atuallzaTipoSegundoNumero
let y = atuallzaTipoPrimeiroNumero * atuallzaTipoSegundoNumero


console.log ("O primeiro número somado ao segundo número resulta em:", x)
console.log ("O primeiro número multiplicado pelo segundo número resulta em:", y)
*/