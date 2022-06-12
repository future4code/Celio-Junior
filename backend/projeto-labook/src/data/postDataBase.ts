import { postDTO, PostOutput } from "../model/postDTO";
import { BaseDataBase } from "./baseDatabase";

export class PostDataBase extends BaseDataBase {    
    private static TABLE_NAME = "labook_posts"
    async create (post:postDTO):Promise<void>{

        await BaseDataBase.connection
        .insert({
            id : post.id,
            photo: post.photo,
            description: post.description,
            type: post.type,
            author_id: post.authorId
        })
        .into(PostDataBase.TABLE_NAME)
    }

    async getAllPosts ():Promise<PostOutput[]>{
        const posts = await PostDataBase.connection
        .select('*')
        .from(PostDataBase.TABLE_NAME)

        return posts
    }


    async postID (id: string):Promise<PostOutput[]>{
        const result = await PostDataBase.connection
        .where('id', id)
        .from(PostDataBase.TABLE_NAME)

        return result
    }
}