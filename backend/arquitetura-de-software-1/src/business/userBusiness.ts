import { BaseDatabase } from '../data/BaseDataBase'
import { v4 as generateId} from 'uuid'

interface UserRequestData {
    name: string,
    email: string,
    password: string
}


export class UserBusiness extends BaseDatabase {
    public async create(request: UserRequestData){
        const {name, email, password} = request

        await BaseDatabase.connection("User_Arq").insert({
            id: generateId(),
            name,
            email,
            password
        })
    }
}