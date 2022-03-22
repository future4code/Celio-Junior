// ************************************  Exercício 1 *************************************

// a) Para acessar os parâmetros passados deve utilizar o process.argv[] a partir do índice 2

// b) 
    const user = process.argv[2]
    const age = Number(process.argv[3])

    console.log(`"Olá, ${user}! Você tem ${age} anos."`)

//  c)
    const newAge = age + 7
    console.log(`"Olá, ${user}! Você tem ${age} anos. Em sete anos você terá ${newAge} anos"`)