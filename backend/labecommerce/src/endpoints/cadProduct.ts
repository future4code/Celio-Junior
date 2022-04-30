import { Request, Response } from "express";
import { connection } from "../data/connection";
import { v4 as generateId } from "uuid";

export async function cadProduct(
    name: string, 
    price: number, 
    imageUrl: string): Promise<any> {
    const id = generateId()

    const result = await connection("labecommerce_products")
    .insert({
        id,
        name,
        price,
        image_url: imageUrl,
    });

    return result
};

export const productBase = async (req: Request, res: Response): Promise<void> => {
    try {

        const {name, price, imageUrl} = req.body
        
        await cadProduct(name, price, imageUrl)

        res.status(201).send("Produto cadastrado com sucesso!")
    } catch (error: any) {
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }
};