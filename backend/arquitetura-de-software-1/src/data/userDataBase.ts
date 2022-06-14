import { BaseDatabase } from "./BaseDataBase";

type User = {
    id: string;
    name: string;
    email: string;
    password: string;
}

export class UserDataBase extends BaseDatabase{
    public insertUser = async (user: User) => {
        
        await BaseDatabase.connection("User_Arq").insert({
            id: user.id,
            name: user.name,
            email: user.email,
            password: user.password
    })

    }
}