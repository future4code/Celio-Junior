import { BaseDatabase } from '../data/BaseDataBase'
import { v4 as generateId} from 'uuid'
import { UserDataBase } from '../data/userDataBase'

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

            const id = generateId()

            const userInfo = {
                id,
                name,
                email,
                password
            }

            const userDataBase = new UserDataBase()
            .insertUser(userInfo)

            
        } catch (error: any) {
            throw new Error(error.messsage)
        }
    }

    public async getAllUsers(): Promise<any> {
       
       return await BaseDatabase.connection("User_Arq")
    }
}