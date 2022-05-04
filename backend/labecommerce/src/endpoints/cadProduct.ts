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
        product_name: name,
        price,
        image_url: imageUrl,
    });

    return result
};

export const productBase = async (req: Request, res: Response): Promise<void> => {
    try {

        const {name, price, imageUrl} = req.body

        if(!name){
            throw new Error("Você precisa informar um nome de produto")
          };
          if(!price || price.length === 0){
            throw new Error("Voçê precisa informar um valor maior que 0")
          };
          if(!imageUrl){
            throw new Error("Você precisa informar a URL de uma imagem válida")
          };
        
        await cadProduct(name, price, imageUrl)

        res.status(201).send("Produto cadastrado com sucesso!")
    } catch (error: any) {
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }
};