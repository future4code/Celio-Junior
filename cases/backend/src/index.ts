import app from "./App"

import { userRouter } from "./routes/userRouter"
import { productRouter } from "./routes/productRouter"
import { planRouter } from "./routes/planRouter"

app.use('/user/', userRouter)
app.use('/product/', productRouter)
app.use('/plan/', planRouter)


type Pessoas = {
    nome: string,
    idade: number,
    email: string
}

const arrayDePessoas: Pessoas[] = [
    {
        nome: "claudio",
        idade: 16,
        email: "claudio@gmail.com"
    },
    {
        nome: "roberto",
        idade: 18,
        email: "roberto@gmail.com"
    },
    {
        nome: "jose",
        idade: 18,
        email: "jose@gmail.com"
    }]

function maioresDeDezoito(arrayDePessoas: Pessoas[]) {
    // let maioiresDeIdade = []

    // for (const pessoas of arrayDePessoas) { 
    //     if (pessoas.idade >= 18) {
    //             maioiresDeIdade.push({nome: pessoas.nome, email: pessoas.email})
    //     }}

    //     if (!maioiresDeIdade.length) {
    //         return 'não existe maiores de 18 na lista'
    //     }

    // return maioiresDeIdade
    

    // if (maioiresDeIdade.length) {
    //     const a = maioiresDeIdade.map((item) => {
    //         return {nome: item.nome, email: item.email}
    //     })
        
    //     return a
    // }

        
    
    const maioresDeIdade = arrayDePessoas.filter((pessoa) => {
        return pessoa.idade >= 18
    })

    if (maioresDeIdade.length) {
        const maiores = maioresDeIdade.map((pessoa) => { 
            return {nome: pessoa.nome, email: pessoa.email}
        })
        
        return maiores
    }

    return 'não existe maiores de 18 na lista'

}

console.log(maioresDeDezoito(arrayDePessoas));