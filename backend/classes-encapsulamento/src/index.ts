import { app } from "./app"
import { Request, Response } from "express"
import { UserAccount } from "./UserAccount"

// Exercício 1

// a)
/*
    O método constructor serve para instanciar os objetos de uma classe. 
    Podemos chama-lo através de uma função.
*/

// b) A mensagem "Chamando o construtor da classe User" foi chamada apenas uma vez!

app.get("/userAccount", async (req: Request, res: Response)=>{
    try {
        const userAccount = new UserAccount('111.111.111-11','Josias',18)

        res.status(201).send(userAccount)
    } catch (error: any) {
        throw new Error(error.messsage)
    }
})


app.post("/user", async (req: Request, res: Response)=>{
    
    try {
        const {cpf, name, age} = req.body

        const user = new UserAccount(cpf, name, age)

        res.status(201).send(user)
        
    } catch (error: any) {
        throw new Error(error.messsage)
    }
})

// c) Criando um Getter.


// Exercício 2

class Transaction {
    private description: string
    private value: number
    private date: string
    
    constructor(date: string, value: number, description: string) {
        this.date = date;
        this.value = value;
        this.description = description
      }
    
    public getDescription = () => this.description
    public getValue = () => this.value
    public getDate = () => this.date
  }


  // Exercício 3
  class Bank {
    private accounts: UserAccount[];
  
    constructor(accounts: UserAccount[]) {
      this.accounts = accounts;
    }

    public getAccount = () => this.accounts
  }