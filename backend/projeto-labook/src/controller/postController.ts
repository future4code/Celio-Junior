import { Request, Response } from "express";
import { PostBusiness } from "../business/postBusiness";
import { postInput } from "../model/postDTO";

export class PostController {

    async create (req:Request, res:Response):Promise<void>{
        try { 
            const { photo, description, type, authorId } = req.body

            const input:postInput = {
                photo, 
                description, 
                type, 
                authorId
            }

            await new PostBusiness().create(input)
            res.status(201).send({message: "post criado"})
        } catch (error:any) {
            res.status(500).send(error.sqlMessage || error.message);
        }
    }

    async getAllPosts (req:Request, res:Response):Promise<void>{
        try {
            const postBusiness = new PostBusiness()
            const posts = await postBusiness.getAllPosts()

            res.status(200).send(posts)
        } catch (error:any) {
            res.status(500).send(error.sqlMessage || error.message);
        }
    }

    async find (req:Request, res:Response):Promise<void>{
        try {
            const id = req.params.id

            const postBusiness = new PostBusiness()
            const result = await postBusiness.find(id)

            res.status(200).send(result)
        } catch (error:any) {
            res.status(500).send(error.sqlMessage || error.message);
        }
    }
} 