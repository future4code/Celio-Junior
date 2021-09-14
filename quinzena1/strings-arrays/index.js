/************* Exercícios de intepretação de código **************/

/*

Exercício 1 - Indique todas as mensagens impressas no console, SEM EXECUTAR o programa.

a. 

b. null 

c. 11

d. 3

e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13] 

f. 9

*/


/*

Exercício 2 - Leia o código abaixo com atenção 

const frase = prompt("Digite uma frase")

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)

Qual será o valor impresso no console se a entrada do usuário for: "Subi num ônibus em Marrocos"?


Valor impresso no console:

SUBI NUM ÔNIBUS EM MIRROCOS 27(tamanho)

*/



/************* Exercícios de escrita de código **************/


// Exercício 1

// Faça um programa que pergunte ao usuário seu nome e seu e-mail. 
// Em seguida, imprima na tela a seguinte mensagem:

// O e-mail emailDoUsuario foi cadastrado com sucesso. Seja bem-vinda(o), nomeDoUsuario!


/*

let emailDoUsuario = prompt("Digite um e-mail para cadastro")
let nomeDoUsuario = prompt("Digite um nome de usuário")

console.log("O e-mail", emailDoUsuario, "foi cadastrado com sucesso. Seja bem-vinda(o)", nomeDoUsuario)

*/





// Exercício 2

// Faça um programa que contenha um array com 5 das suas comidas preferidas, armazenado em uma variável. 
// Em seguida, siga os passos


/*

const comidasPreferidas =   [`Feijoada`,
                             `Churrasco`, 
                             `Lasanha`, 
                             `Pizza`, 
                             `Hamburger`]


// a) Imprima na tela o array completo

console.log(comidasPreferidas)


// b) Imprima na tela a mensagem "Essas são as minhas comidas preferidas: ", 
//    seguida por cada uma das comidas, uma embaixo da outra.

console.log(`Essas são as minhas comidas preferidas: `)
console.log(comidasPreferidas[0])
console.log(comidasPreferidas[1])
console.log(comidasPreferidas[2])
console.log(comidasPreferidas[3])
console.log(comidasPreferidas[4])


// c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. Troque a segunda comida da sua lista 
//    pela inserida pelo usuário. Imprima na tela a nova lista

let comidasPreferidasNovas = prompt(`Digite uma nova comida preferida`)
comidasPreferidasNovas = comidasPreferidas.splice(1, 1, comidasPreferidasNovas)
console.log(comidasPreferidas)

*/




// Exercício 3 
// Faça um programa, seguindo os passos:

/*

// a) Crie um array vazio e guarde-o em uma variável, chamada listaDeTarefas
let listaDeTarefas = []


// b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array
let tarefa1 = prompt("Digite a primeira tarefa")
let tarefa2 = prompt("Digite a segunda tarefa")
let tarefa3 = prompt("Digite a terceira tarefa")

listaDeTarefas.push(tarefa1)
listaDeTarefas.push(tarefa2)
listaDeTarefas.push(tarefa3)


// c) Imprima o array na tela
console.log(listaDeTarefas)


// d) Peça ao usuário que digite o índice de uma tarefa que ele já realizou: 0, 1 ou 2 
let  listaDeTarefasNova = prompt("Digite o índice da tarefa concluída: 0, 1, ou 2")


// e) Remova da lista o item de índice que o usuário escolheu
listaDeTarefasNovas = listaDeTarefas.splice(listaDeTarefasNova,1)


// f) Imprima o array na tela
console.log(listaDeTarefas)

*/


/********************** DESAFIOS **************************/

// 1. Receba uma frase e retorne um array onde cada elemento é uma das palavras da frase, ignorando os espaços

/*

const fraseUsuario = prompt("Digite uma nova frase")

const novaFraseUsuario = fraseUsuario.split(' ')

console.log(novaFraseUsuario)

*/


// 2. Dado o array ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]
// faça um programa que acha o índice da palavra Abacaxi e imprime tanto o índice quanto o tamanho do array

/*

const frutas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]

console.log (frutas.indexOf("Abacaxi"), frutas.length)

*/