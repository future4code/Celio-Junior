import { Request, Response } from "express";
import { connection } from "../data/connection";

export async function selectAllUsers(): Promise<any> {
    
    const result = await connection("labecommerce_purchases")
    .select(
    "labecommerce_users.id",
    "labecommerce_users.name",
    "labecommerce_users.email",
    "labecommerce_products.product_name",
    "labecommerce_purchases.quantity",
    "labecommerce_products.price",
    "labecommerce_purchases.total_price")
    .innerJoin("labecommerce_products","labecommerce_products.id", "labecommerce_purchases.product_id")
    .innerJoin("labecommerce_users", "labecommerce_users.id", "labecommerce_purchases.user_id")

    return result
};

export async function getAllUsersPurchase(req: Request, res: Response): Promise<void> {
    try {
        const users = await selectAllUsers()
        res.status(200).send(users)
    }
    catch (error: any) {
        res.send(error.message || error.sqlMessage)
    }
};