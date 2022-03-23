const numeros: () => object = () => {
    let numero1:number = Number(process.argv[2])
    let numero2:number = Number(process.argv[3])

    const soma = numero1 + numero2;
    const sub = numero1 - numero2;
    const mult = numero1 * numero2;
    
    let maiorNumero
    if (numero1 > numero2) maiorNumero = numero1
    else maiorNumero = numero2

    return [{
        soma: soma,
        sub: sub,
        mult: mult,
        maiorNumero: maiorNumero
    }]   
}
console.table(numeros());