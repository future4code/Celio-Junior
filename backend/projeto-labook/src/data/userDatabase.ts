import { userDTO } from "../model/userDTO";
import { BaseDataBase } from "./baseDatabase";

export class UserDataBase extends BaseDataBase {
    private static TABLE_NAME = "labook_users";

    async create (user: userDTO): Promise<void> {
        await UserDataBase.connection
        .insert({
            id: user.id,
            name: user.name,
            email: user.email,
            password: user.password
        })
        .into(UserDataBase.TABLE_NAME)
    }

}