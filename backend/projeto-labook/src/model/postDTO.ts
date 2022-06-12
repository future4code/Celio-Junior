export enum POST_TYPES {
    NORMAL = "normal",
    EVENT = "event"
}

export interface postDTO {
    id: string,
    photo: string,
    description: string,
    type: POST_TYPES,
    authorId: string
}

export interface postInput {
    photo: string 
    description: string
    type: POST_TYPES
    authorId: string
}


export interface PostOutput {
    id: string
    photo: string 
    description: string 
    type: POST_TYPES
    created_at: string 
    author_id: string
}

// const postOut: postOutput = {
        //     id: postDB.id,
        //     photo: postDB.photo,
        //     description: postDB.description,
        //     type: postDB.type,
        //     createdAt: postDB.created_at,
        //     authorId: postDB.author_id,
        // }