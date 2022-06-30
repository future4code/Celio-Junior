import { Request, Response } from "express";
import { UserBusiness } from '../business/UserBusiness';
import { EditUserInputDTO, LoginInputDTO, UserInputDTO } from "../model/User";

const userBusiness = new UserBusiness();
export class UserController {
  public signup = async (req: Request, res: Response) => {
    try {
      const input: UserInputDTO = {
        email: req.body.email,
        password: req.body.password,
        name: req.body.name,
        role: req.body.role,
      };

      input.role = input.role.toUpperCase();

      const token = await userBusiness.createUser(input);

      res.status(201).send({ message: "Usuário criado!", token });
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  };

  public login = async (req: Request, res: Response) => {
    try {
      const input: LoginInputDTO = {
        email: req.body.email,
        password: req.body.password,
      };

      const token = await userBusiness.login(input);

      res.status(200).send({ message: "Usuário logado!", token });
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  };

  public getProfile = async (req: Request, res: Response): Promise<any> => {
    try {

      const token = req.headers.authorization as string;

      const result = await new UserBusiness().getProfile(token)
      
      res.status(200).send(result)
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  };

  public getProfileFriends = async (req: Request, res: Response) => {
    try {
      const token = req.headers.authorization as string;
      const userBusiness = new UserBusiness();

      const id = req.params.id;

      const user = await userBusiness.getProfileFriend(token, id);
      
      res.status(200).send(user);
    } catch (error: any) {
      res.status(400).send({
        message: error.message,
      });
    }
  };

  public editUser = async (req: Request, res: Response) => {
    try {
      const input: EditUserInputDTO = {
        name: req.body.name,
        id: req.params.id,
        token: req.headers.authorization!,
      };

      const token = await userBusiness.editUser(input);

      res.status(200).send({ message: "Usuário alterado!" });
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  };
}
