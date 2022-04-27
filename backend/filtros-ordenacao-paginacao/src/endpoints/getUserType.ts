import { Request, Response } from "express";
import { off } from "process";
import { connection } from "../data/connection";


// Exercício 1 

// b)
export default async function usersType(type: string) :Promise<any> {
    const result = await connection.raw(`
       SELECT id, name, email, type
       FROM aula48_exercicio WHERE type = "${type}";
    `)
 
    return result[0]
 }

export const getUsersType = async(req: Request,res: Response): Promise<void> =>{
    try {
       let type = req.params.type as string;
       const users = await usersType(type)
        
       if(!users.length){
        res.statusCode = 404
        throw new Error("Digite um tipo válido!")
       }

      // if(!type || type.toUpperCase() !== "cx"  && type.toUpperCase() !== "teacher"  && type.toUpperCase() !== "operation"  ) {
      //   throw new Error("Você precisa informar um tipo válido!")
      //  }
       
       if(!type){
        type = "%"
       }
 
       res.status(200).send(users)
       
    } catch (error: any) {
       console.log(error)
       res.send(error.message || error.sqlMessage)
    }

 }