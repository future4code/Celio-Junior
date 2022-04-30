import { Request, Response } from "express";
import { connection } from "../data/connection";

export async function selectAllProducts(): Promise<any> {
    const result = await connection("labecommerce_products")

    return result
};

export async function getAllProducts(req: Request, res: Response): Promise<void> {
    try {
        const products = await selectAllProducts()
        res.status(200).send(products)
    }
    catch (error: any) {
        res.send(error.message || error.sqlMessage)
    }
};