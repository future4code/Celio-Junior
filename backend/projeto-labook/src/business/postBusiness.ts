import { PostDataBase } from "../data/postDataBase";
import { postDTO, postInput } from "../model/postDTO";
import { generateId } from "../services/generateID";

export class PostBusiness {
    async create(post:postInput):Promise<void> {
        const { photo, description, type, authorId } = post

        const id = generateId()

        const createPost:postDTO = {
            id,
            photo,
            description,
            type,
            authorId
        }        
        await new PostDataBase().create(createPost)
    }

    async getAllPosts ():Promise<any[]>{
        const postDB = new PostDataBase()
        const posts = await postDB.getAllPosts()

        return posts
    }

    async find (id: string) {

        const postDB = new PostDataBase()
        const [post] = await postDB.postID(id)

        if (!postDB) {
            const message = "Post não encontrado!"
            throw new Error(message)
        }

        

        return post

    }
}