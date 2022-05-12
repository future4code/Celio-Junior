import { Request, Response, urlencoded } from "express";
import { connection } from "../data/connection";
import { selectAllProducts } from "../endpoints/getAllProducts"
import { v4 as generateId } from "uuid";

export async function insertPurchase(
    userId: number, 
    productId: string,
    quantity: number,
    totalPrice: number): Promise<any> {
    const id = generateId()

    const result = await connection("labecommerce_purchases")
    .insert({
        id,
        user_id: userId,
        product_id: productId,
        quantity: quantity,
        total_price: totalPrice,
    });

    return result
};


export const purchaseRegistration = async (req: Request, res: Response): Promise<void> => {
    try {

        const {userId, productId, quantity} = req.body
        let totalPrice = 0

        const products = await selectAllProducts()
        
        const idProduct = products.find((product: { id: any; })=>{
            return product.id === productId
          })

        if (!idProduct) {
            throw new Error("Insira um ID válido de produto!")
        }

        totalPrice = idProduct.price * quantity
        
        const regPurchase = await insertPurchase(userId, productId, quantity, totalPrice)
        
        res.status(201).send("Registro de compra lançado com sucesso!")
    } catch (error: any) {
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }
};