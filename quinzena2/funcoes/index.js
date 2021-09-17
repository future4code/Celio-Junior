/*************************************** Exercícios de interpretação de código ***************************************/

/*

// Exercício 1

a) Vai ser impresso:  
    (5)
    (50) 

Pois foi atribuído um parâmetro(variável) que seria multiplicado por 5
    

b) Se retirar o console.log, vai fazer o cálculo normalmente, porém não vai apresentar no console o resultado

*/


/*

// Exercício 2

a) Essa função transforma o texto em letras minúsculas e verificar se está incluído a palavra "cenoura" 
   

b)   i.   Eu gosto de cenoura        //  true
     ii.  CENOURA é bom pra vista    //  true
     iii. Cenouras crescem na terra  //  true


*/


/*************************************** Exercícios de escrita de código ***************************************/

/*

// Exercício 1

// a)
    function sobreMim() {
        const mensagemImpressa = ('Eu sou Célio, tenho 31 anos, moro em São Paulo e sou estudante')
        return(mensagemImpressa)
    }

console.log (sobreMim())


// b)
    function sobreMinhaPessoa(nome, idade, cidade, profissao) {
        nome = prompt("Digite seu nome:")
        idade = Number(prompt("Digite sua idade:"))
        cidade = prompt("Digite sua cidade:")
        profissao = prompt("Digite sua profissão:")
        const perfilUsuario = (`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}.`)
        return perfilUsuario
    }

    console.log (sobreMinhaPessoa())


// Exercício 2

// a)
    function operacaoSomar(numero1, numero2) {
        
        let soma = (numero1 + numero2)

        return soma

    }

    console.log ("A soma do número um com o número 2 é:", operacaoSomar(2, 6)) // basta o usuário digitar os números que a função faz o cálculo



// b)
    function retornaBooleano(numero1, numero2) {

        let verificaNumero = (numero1 >= numero2)

        return verificaNumero

    }

    console.log ("O primeiro número é maior ou igual o segundo?", retornaBooleano(8, 7))



// c)
    function numeroPar (numero) {
        
        const divisao = (numero % 2 === 0)
        return divisao
    }

    console.log ("O número é par?", numeroPar(7))



// d)
    function mensagemUsuario (fraseUsuario) {
        fraseUsuario = prompt("Digite uma mensagem:")
        
        let imprimirMensagem = (`${fraseUsuario.length} ${fraseUsuario.toUpperCase()}`)
        return imprimirMensagem

    }

    console.log (mensagemUsuario())




// Exercício 3

    function operacaoSomar (numero1, numero2) {
        
        let soma = (numero1 + numero2)

        return soma
    }
    

    function operacaoSubtracao (numero1, numero2) {

        let subtracao = (numero1 - numero2)

        return subtracao
    }


    function operacaoMultiplicacao (numero1, numero2) {

        let multiplicacao = (numero1 * numero2)

        return multiplicacao

    }


    function operacaoDivisao (numero1, numero2) {

        let divisao = (numero1 / numero2)

        return divisao

    }

    let digitarPrimeiroNumero = Number(prompt("Digite o primeiro número"))
    let digitarSegundoNumero = Number(prompt("Digite o segundo número"))

    console.log (`    A Soma desses dois números é: ${operacaoSomar(digitarPrimeiroNumero, digitarSegundoNumero)} 
    A Subtracao desses dois números é: ${operacaoSubtracao(digitarPrimeiroNumero, digitarSegundoNumero)}
    A Multiplicação desses dois números é: ${operacaoMultiplicacao(digitarPrimeiroNumero, digitarSegundoNumero)}
    A Divisão desses dois números é: ${operacaoDivisao(digitarPrimeiroNumero, digitarSegundoNumero)}`)

*/


/*************************************** DESAFIOS ***************************************/

// Exercício 1

// a)
    const recebeParametro = (parametro) => {
        
        console.log (parametro)    

    }


// b)
    const valoresParamentros = (parametro1, parametro2) => {
        const soma = (parametro1 + parametro2)

        recebeParametro(soma)

    }

    valoresParamentros(5,5)
    