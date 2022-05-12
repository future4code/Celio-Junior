import { Request, Response } from "express";
import { connection } from "../data/connection";

export async function selectAllProducts(order?:string, search?:string): Promise<any> {
    
    let result
    if(!order && !search){
        result = await connection("labecommerce_products")
    } else if(search){
        result = await connection("labecommerce_products")
      .where("product_name", "like", `%${search}%`)
    } else {
        result = await connection("labecommerce_products")
      .orderBy("product_name", order)
    }

    return result
};

export async function getAllProducts(req: Request, res: Response): Promise<void> {
    try {
        const order = req.query.order as string
        const search = req.query.search as string

        let products = await selectAllProducts(order, search)
        res.status(200).send(products)
    }
    catch (error: any) {
        res.send(error.message || error.sqlMessage)
    }
};