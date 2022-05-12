import { Request, Response } from "express";
import { connection } from "../data/connection";
import { v4 as generateId } from "uuid";

export async function createUser(
    name: string, 
    email: string, 
    password: string): Promise<any> {
    const id = generateId()

    const result = await connection("labecommerce_users")
    .insert({
        id,
        name,
        email,
        password,
    });

    return result
};

export const userBase = async (req: Request, res: Response): Promise<void> => {
    try {

        const {name, email, password} = req.body

          if(!name){
            throw new Error("Você precisa informar um nome")
          };
          if(!email || email.length < 10){
            throw new Error("Voçê precisa informar um e-mail válido com pelo menos 10 caracteres")
          };
          if(!email.includes("@")){
            throw new Error("Endereço de e-mail precisar incluir um @")
          };
          if(!password || password.length < 6){
            throw new Error("Você precisa informar um password e ter no mínimo 6 caracteres")
          };
        
        const users = await createUser(name, email, password)

        res.status(201).send("Usuário criado com sucesso!")
    } catch (error: any) {
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }
};