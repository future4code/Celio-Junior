import { User } from "../model/User";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
  private static TABLE_NAME = "LABEFLIX_USER";

  async create({ id, name, email, password }: any): Promise<void> {
    await UserDatabase.connection
      .insert({
        id,
        name,
        email,
        password,
      })
      .into(UserDatabase.TABLE_NAME);
  }

  public getAll = async (): Promise<User[]> => {
    const getUser = await UserDatabase.connection(UserDatabase.TABLE_NAME)
    .select("*")
    return getUser
  }
}
