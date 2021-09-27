/********************************* Exercícios de interpretação de código ***********************************/

// Exercício 1

/*

// a)
    
    O código solicita ao usuário que digite um valor(inicialmente como string e o transforma em número) para calcular 
    se o mesmo é divisível por 2 e tenha como resto 0 (ou seja, um número par).

// b)

    Todo número divisível por 2 que tenha como resto 0 (números pares).

// c)

    Números ímpares, pois terão resto diferente de 0.

*/


// Exercício 2

/*

// a) 

    O código serve para que o usário descubra o valor de uma determinada fruta através de um prompt.

// b)

    Será impresso: O preço da fruta Maçã é R$ 2.25.

// c)
    
    O preço da fruta  Pêra  é  R$  5    // Entendo que tirando este break, entra na última condição com break, 
    pois é assim que o código vai entender.

*/


// Exercício 3

/*

// a)

    A primeira linha é uma variável(numero) recebendo uma msg do usuário via prompt(string) sendo convertida para (Number)

// b) 

    Digitando 10, vai retornar a msg "Esse número passou no teste"
    Digitando -10, deve retornar uma msg de erro, pois não foi adicionada uma condição para números negativos.

 // c)

    Sim, haverá, pois há uma variável(mensagem) declarada dentro de uma condição(if) e sendo chamada fora em um console

*/



/********************************* Exercícios de escrita de código ***********************************/

// Exercício 1

// a)
    let respostaUsuario = Number(prompt("Qual a sua idade?"))
    
// b)
    let idadeUsuario = (respostaUsuario)

// c)
    if (idadeUsuario >= 18) {
        console.log("Você pode dirigir")
    }
    else {
        console.log("Você não pode dirigir")
    }


// Exercício 2

    let verificaTurnoAluno = prompt("Qual turno você estuda?")
    let respostaAluno = (verificaTurnoAluno).toUpperCase()

    if (respostaAluno === 'M'){
        console.log("Bom dia!")
    }else if(respostaAluno === 'V'){
             console.log("Boa tarde!")
    }else if(respostaAluno === 'N'){
            console.log("Boa noite!")
    }else {
            console.log("Não foi possível localizar o seu turno, por favor, informe ( M = Matutino/Manhã), ( V = Vespertino/Tarde) ou ( N = Noturno)")
    }



// Exercício 3

    let verificaTurnoAluno = prompt("Qual turno você estuda?")
    let respostaAluno = (verificaTurnoAluno).toUpperCase()

    switch(respostaAluno){
        case "M":
            console.log("Bom dia!")
            break;
        case "V":
            console.log("Boa tarde!")
            break;
        case "N":
            console.log("Boa noite!")
            break;
        default:
            console.log("Não foi possível localizar o seu turno, por favor, informe ( M = Matutino/Manhã), ( V = Vespertino/Tarde) ou ( N = Noturno)")
            break;
    }



// Exercício 4

let generoDoFilme = prompt("Qual gênero de filme você quer assistir?")
let precoDoIngresso = Number(prompt("Qual o preço do ingresso?"))

const respostaDoFilme = (generoDoFilme).toUpperCase()
const respostaDoIngresso = (precoDoIngresso)

if(respostaDoFilme === "FANTASIA" && respostaDoIngresso < 15){
    console.log("Bom filme!")
} else {
    console.log("Escolha outro filme :(")
}




/******************************************* DESAFIOS ********************************************/



// Exercício 1

let generoDoFilme = prompt("Qual gênero de filme você quer assistir?")
let precoDoIngresso = Number(prompt("Qual o preço do ingresso?"))
let lanchinho = prompt("Qual lanche você quer comprar? Pipoca, Chocolate, Doces, Refrigerante")

const respostaDoFilme = (generoDoFilme).toUpperCase()
const respostaDoIngresso = (precoDoIngresso)
const respostadoLanchinho = (lanchinho).toLowerCase()

if(respostaDoFilme === "FANTASIA" && respostaDoIngresso < 15){
    console.log("Bom filme!", `Aproveite o seu ${respostadoLanchinho}`)
} else {
    console.log("Escolha outro filme :(")
}


