import { MovieDatabase } from "../data/MovieDatabase"
import { v4 as generateId } from 'uuid'

export class MovieBusiness {
  async create({ title, description, duration, year }: any):Promise<void> {
    if (!title || !description || !duration || !year) {
      throw new Error("Dados inválidos (title, description, duration, year)")
    }

    const id = generateId()

    const movieDatabase = new MovieDatabase()
    await movieDatabase.create({
      id: id,
      title,
      description,
      duration,
      year
    })
  }

  public getAll = async (): Promise<any> => {
    const movieDatabase = new MovieDatabase()
    const movies = await movieDatabase.getAll()

    if(!movies){
      throw new Error("Não foi possível encontrar o filme")
    }
      return movies
    }

}
