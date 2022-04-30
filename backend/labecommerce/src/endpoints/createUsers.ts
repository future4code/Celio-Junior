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
        
        const users = await createUser(name, email, password)

        res.status(201).send("Usuário criado com sucesso!")
    } catch (error: any) {
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }
};