import { UserDatabase } from "../data/UserDatabase";
import {
        CustomError,
        InvalidEmail,
        InvalidName,
        InvalidPassword,
        UnauthorizedUser,
} from "../error/CustomError";
import { AuthenticationData } from "../model/Types";
import {
        UserInputDTO,
        user,
        EditUserInputDTO,
        EditUserInput,
        LoginInputDTO,
} from "../model/User";
import { generateToken, getData } from "../services/Authenticator";
import { compareHash, generateHash } from "../services/HashManager";
import { generateId } from "../services/IdGenerator";

const userDatabase = new UserDatabase();
export class UserBusiness {
  public createUser = async (input: UserInputDTO): Promise<string> => {
    try {
      let { name, email, password, role } = input;
      
      if (!name || !email || !password ) {
        throw new CustomError(400, "Os campos não podem estar vazios");
      }

      if (name.length < 5) {
        throw new InvalidName();
      }

      if (!email.includes("@")) {
        throw new InvalidEmail();
      }

      if (password.length < 6) {
        throw new InvalidPassword();
      }

      if (!role || role !== "ADMIN") {
        role = "NORMAL";
      }

      const id = generateId();
      const hashPassword = await generateHash(password);

      const user: user = {
        id,
        email,
        password: hashPassword,
        name,
        role,
      };

      await userDatabase.insertUser(user);
      const token = generateToken({ id, role });

      return token;
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public login = async (input: LoginInputDTO): Promise<string> => {
    try {
      let { email, password } = input;

      if (!email || !password) {
        throw new CustomError(400, "Preencha corretamente os campos");
      }

      const user = await userDatabase.findUserByEmail(email);

      const hashComparison = await compareHash(password, user.password);

      if (!hashComparison) {
        throw new InvalidPassword();
      }

      const payload: AuthenticationData = { id: user.id, role: user.role };

      const token = generateToken(payload);

      return token;
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public getProfile = async (token: string): Promise<any> => {
    const data = getData(token);

    const user = await new UserDatabase().getUserByID(data.id);

    const output = {
      id: user.id,
      email: user.email,
      name: user.name
    }

    return output
  }

  public getProfileFriend = async (token: string, id: string): Promise<any[]> => {
    try {
      if (!token) {
        throw new CustomError(400, "Informe o token do usuário");
      }
      
      const profileFriend = userDatabase.getFriend(id);
      
      return profileFriend;

    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public editUser = async (input: EditUserInputDTO): Promise<void> => {
    try {
      let { name, id, token } = input;

      if (!name || !id || !token) {
        throw new CustomError(400, "Preencha corretamente os campos");
      }

      const { role } = getData(token);

      if (role !== "ADMIN") {
        throw new UnauthorizedUser();
      }

      const editedUser = {
        name,
        id,
      };

      await userDatabase.editUser(editedUser)
      
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };
}
