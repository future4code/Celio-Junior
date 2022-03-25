//Exercicio 1 

// a) A variável aprensenta um erro informando que o tipo 'number' não pode ser atribuído
//    pois a mesma foi definida para receber apenas tipo 'strings'.
    
    const minhaString: string = "Celio" 
    
    // const minhaString1: string = 7 
    

// b) Podemos criar um Aliases + Union Type
//    Para que a variável possa receber mais de um tipo de valor, utilizamos o pipe | = "Ou" 
    type Numero = number | string

    let meuNumero: Numero
    console.log(7, "7");
    
// c) 
    type Pessoa = {
        nome: string,
        idade: number,
        corFavorita: CoresFavoritas
    }

// d) 
    enum CoresFavoritas {
        VERMELHO = "Vermelho",
        LARANJA = "Laranja",
        AMARELO = "Amarelo",
        VERDE = "Verde",
        AZUL = "Azul",
        ANIL = "Anil",
        VIOLETA = "Violeta",
    }

    const usuario: Pessoa = {
        nome: "Josemar",
        idade: 25,
        corFavorita: CoresFavoritas.LARANJA
    }

    const usuario2: Pessoa = {
        nome: "Joselinton",
        idade: 24,
        corFavorita: CoresFavoritas.VERDE
    }

    const usuario3: Pessoa = {
        nome: "Joselindo",
        idade: 26,
        corFavorita: CoresFavoritas.AZUL
    }

    const usuario4: Pessoa = {
        nome: "Josecleison",
        idade: 27,
        corFavorita: CoresFavoritas.VIOLETA
    }

