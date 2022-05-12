import { Request, Response } from "express";
import { connection } from "../data/connection";

export async function selectAllUsers(): Promise<any> {
    const result = await connection("labecommerce_users")

    return result
};

export async function getAllUsers(req: Request, res: Response): Promise<void> {
    try {
        const users = await selectAllUsers()
        res.status(200).send(users)
    }
    catch (error: any) {
        res.send(error.message || error.sqlMessage)
    }
};