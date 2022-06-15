import { Request, Response } from 'express';
import { UserBusiness } from "../business/userBusiness"
import { userInput } from "../model/userDTO"

export class UserController {
    async create (req: Request, res: Response): Promise<void>{
        try {
            const { name, email, password } = req.body

            const input: userInput = {
                name,
                email,
                password
            }

            const userBusiness = new UserBusiness
            await userBusiness.create(input)

            res.status(201).send({ message: "Usuário criado com sucesso!" })
        } catch (error: any) {
            res.status(500).send(error.sqlMessage || error.message)
        }
    }

    async getAllUsers (req: Request, res: Response): Promise<void> {
        try {
            const userBusiness = new UserBusiness()
            const users = await userBusiness.getAllUsers()

            res.status(200).send(users)
        } catch (error: any) {
            res.status(500).send(error.sqlMessage || error.message)
        }
    }
}