import { BaseDatabase } from '../data/BaseDataBase'
import { v4 as generateId} from 'uuid'

interface UserRequestData {
    name: string,
    email: string,
    password: string
}


export class UserBusiness extends BaseDatabase {
    public async create(request: UserRequestData){
        try {
            const {name, email, password} = request

            if (!name || !email || !password) {
                throw new Error("Verifique se foi informado o nome, o email e a senha!")
            }

            await BaseDatabase.connection("User_Arq").insert({
                id: generateId(),
                name,
                email,
                password
        })
            
        } catch (error: any) {
            throw new Error(error.messsage)
        }
    }

    public async getAllUsers(): Promise<any> {
       
       return await BaseDatabase.connection("User_Arq")
    }
}