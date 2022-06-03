import { UserDataBase } from "../data/userDatabase"
import { Input, userDTO } from "../model/userDTO"
import { generateId } from "../services/generateID"

export class UserBusiness {
    async create(user: Input):Promise<void> {
      const { name, email, password } = user
    
      if (!name || !email || !password) {
        throw new Error("Dados inválidos (email, name, password)")
      }
  
      const id = generateId()

      const input: userDTO = {
        id,
        name,
        email,
        password
      }
    
      const createUser = await new UserDataBase()
      createUser.create(input)
    }
}