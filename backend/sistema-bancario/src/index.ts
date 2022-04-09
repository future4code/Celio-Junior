import express, { Request, Response } from "express";
import cors from "cors";
import { TipoCliente, contas } from "./clientes";
import { Errors } from "./error-message"

const app = express();

app.use(express.json());
app.use(cors ());

app.get("/clientes", (req: Request, res: Response) => {          
    res.status(200).send(contas)
});

app.post("/clientes", (req: Request, res: Response) => {          
    
    try {
    const { nome, cpf, dataNascimento, saldo }: TipoCliente = req.body
    
    const verificaIdade = (dtNascimento: string): boolean => {
            const dataAtual = new Date().getTime()
            const dataNascimento: number = Date.parse(dtNascimento.split('/').reverse().join("/"))

            const idade = (dataAtual - dataNascimento) * (3.17 * 10 ** -11)

            return idade >= 18
        }

    const verificaCPF = contas.find((conta)=>{
        return cpf === conta.cpf
    })
    
        if (!verificaIdade(dataNascimento)) {
            throw new Error(Errors.NOT_AUTHORIZED.message)
        }

        if (verificaCPF) {
            throw new Error(Errors.CONFLICT.message)
        }

    const novoCliente: TipoCliente = {
        nome,
        cpf,
        dataNascimento, 
        saldo
    }

    contas.push(novoCliente)

    res.status(201).send("Conta criada com sucesso!")

    } catch (error: any) {
        switch(error.message){
            case Errors.NOT_AUTHORIZED.message:
            res.status(Errors.NOT_AUTHORIZED.status).send(error.message)
            break;
            case Errors.CONFLICT.message:
            res.status(Errors.CONFLICT.status).send(error.message)
            break;
        }
    }
});


app.get("/conta/saldo-cliente", (req: Request, res: Response) => {
    try {
    const cpf: string = req.query.cpf as string

    const consultarSaldo = contas.find((cpfCliente) => {
        return cpf === cpfCliente.cpf
      });
      
      if (!consultarSaldo) {
          throw new Error(Errors.NOT_FOUND.message)
      }

      res.status(201).send(consultarSaldo);
      
    } catch (error: any) {
      res.status(Errors.NOT_FOUND.status).send(error.message)
    }
});


app.listen(3003, () => {
    console.log("Servidor rodando http://localhost:3003")
});