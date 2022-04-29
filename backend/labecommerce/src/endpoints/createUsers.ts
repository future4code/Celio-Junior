import { Request, Response } from "express";
import { connection } from "../data/connection";
import { v4 as generateId } from "uuid";


export default async function createUsers(name: string, email: string, password: string): Promise<void> {
    const id = generateId()

    const result = await connection("labecommerce_users")
    .insert({
        id,
        name,
        email,
        password,
    })
}

export const getAllUsers = async (req: Request, res: Response): Promise<void> => {
    try {

        const {name, email, password} = req.body
        
        const users = await createUsers(name, email, password)

        res.status(200).send(users)
    } catch (error: any) {
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }
}