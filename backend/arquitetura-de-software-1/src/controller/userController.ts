import { Request, Response } from "express";
import { UserBusiness } from "../business/userBusiness"

export class UserController {
    public createUSer = async (req: Request, res: Response) => {

    try {
        const {name, email, password} = req.body

        const userBusiness = new UserBusiness()

        await userBusiness.create({name, email, password})

        res.status(201).send("Usuário criado com sucesso!")
        
    } catch (error: any) {
        throw new Error(error.messsage)
    }
}
}