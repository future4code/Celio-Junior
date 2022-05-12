import { Request, Response } from "express";
import { connection } from "../data/connection";

export async function selectAllUsers(userId: string): Promise<any> {
    const result = await connection("labecommerce_purchases")
    .select(
            "labecommerce_users.name","labecommerce_products.product_name", "labecommerce_purchases.quantity",
            "labecommerce_products.price", "labecommerce_purchases.total_price"
            )
            .innerJoin(
            "labecommerce_products", "labecommerce_products.id", "labecommerce_purchases.product_id"
            )
            .innerJoin(
            "labecommerce_users", "labecommerce_users.id", "labecommerce_purchases.user_id"
            )
            .where("labecommerce_users.id", userId)

    return result
};

export async function getUsersPurchases(req: Request, res: Response): Promise<void> {
    try {
        const userId = req.params.userId

        const userPurchase = await selectAllUsers(userId)
        res.status(200).send(userPurchase)
    }
    catch (error: any) {
        res.send(error.message || error.sqlMessage)
    }
};