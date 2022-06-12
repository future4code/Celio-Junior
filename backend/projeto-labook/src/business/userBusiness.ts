import { UserDataBase } from "../data/userDatabase"
import { userInput, userDTO } from "../model/userDTO"
import { generateId } from "../services/generateID"

export class UserBusiness {
    async create(user: userInput):Promise<void> {
      const { name, email, password } = user
    
      if (!name || !email || !password) {
        throw new Error("Dados inválidos (email, name, password)")
      }
  
      const id: string = generateId()

      const input: userDTO = {
        id,
        name,
        email,
        password
      }
    
      const createUser = await new UserDataBase()
      createUser.create(input)
    }

    async getAllUsers(): Promise<any> {
      const userDatabase = new UserDataBase()
      const users = await userDatabase.getAllUsers()
      
      return users
    }
}