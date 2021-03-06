import { CustomError } from "../error/CustomError";
import { EditUserInput, user } from "../model/User";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {

  private TABLE_NAME = "Cookenu_users"

  public insertUser = async (user: user) => {
    try {
      await UserDatabase.connection
        .insert({
          id: user.id,
          name: user.name,
          email: user.email,
          password: user.password,
          role: user.role
        })
        .into(this.TABLE_NAME);
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public editUser = async (user: EditUserInput) => {
    try {
      await UserDatabase.connection
        .update({ name: user.name })
        .where({ id: user.id })
        .into(this.TABLE_NAME);
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public findUserByEmail = async (email: string) => {
    try {
  
      const result = await UserDatabase.connection(this.TABLE_NAME)
        .select()
        .where({email});
      return result[0];
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public getUserByID = async (id: string) => {
    try {
  
      const result = await UserDatabase.connection(this.TABLE_NAME)
        .select('*')
        .where({id});
      return result[0];

    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public getFriend = async (id: string) => {
    try {
      const result = await UserDatabase.connection("Cookenu_users")
        .select("id", "name", "email")
        .where({ id });
      return result;
    } catch (error: any) {
      throw new CustomError(404, error.message);
    }
  };
}
