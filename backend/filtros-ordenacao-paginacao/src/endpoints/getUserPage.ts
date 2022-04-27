import { Request, Response } from "express"
import { connection } from "../data/connection"

export default async function selectAllUsers(page: number, limit: number): Promise<any> {
    const result = await connection("aula48_exercicio")
        .limit(limit).offset((page - 1) * limit);

    return result
};

export const getUserPages = async(req: Request, res: Response): Promise<void> =>{
    try {
        let page = Number(req.query.page);
        let size = Number(req.query.size);

        if (!page) {
            page = 1
        }

        if (!size) {
            size = 5
        }

        const users = await selectAllUsers(Number(page), Number(size));

        res.status(200).send(users)
        
    } catch (error: any) {
        res.send(error.message || error.sqlMessage)
    }
};