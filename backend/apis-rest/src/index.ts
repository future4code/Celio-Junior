import express, { Request, Response } from "express";
import cors from "cors";
import { User, users} from "./data"
import { AddressInfo } from "net";

const app = express();

app.use(express.json());
app.use(cors());


// Exercício 1
app.get("/users", (req: Request, res: Response) => {
  res.status(200).send(users);
});

// a) o método é o get 
// b) A entidade é /users


// Exercício 2
app.get("/users/users_admin", (req: Request, res: Response) => {
  const usersAdmin = users.filter((user) => {
    return user.type === "ADMIN";
  });
  res.status(200).send(usersAdmin);
});

// a) fiz um filter na lista de usuários passando um type específico


// Exercício 3
app.get("/search_user", (req: Request, res: Response) => {
  let errorCode = 400;
  try {
    const name: string = req.query.name as string;

    const user: User | undefined = users.find((user) => user.name === name);

    if (!user) {
      errorCode = 404;
      throw new Error("User not found");
    }
    res.status(200).send({ user });
  } catch (error: any) {
    res.status(errorCode).send(error.message);
  }
});

// a) Query params


// Exercício 4
app.put("/users", (req: Request, res: Response) => {
  let errorCode = 400;
  try {
      const { id, name, type, email, age }: User = req.body

      if (!id) {
          errorCode = 422;
          throw new Error ("id is missing. Please, try again");
      }
      if (!name) {
          errorCode = 422;
          throw new Error ("name is missing. Please, try again");
      }
      if (!type) {
          errorCode = 422;
          throw new Error ("type is missing. Please, try again");
      }
      if (!email) {
          errorCode = 422;
          throw new Error ("email is missing. Please, try again");
      }
      if (!age) {
          errorCode = 422;
          throw new Error ("age is missing. Please, try again");
      }
      const newUser: User = {
          id,
          name,
          age, 
          email, 
          type
      }

      users.push(newUser)

      res.status(200).send(`User created succesfully`)
  } catch (error: any) {
      res.status(errorCode).send(error.message)
  }
}) 

// a) Não percebi mudanças. O correto para se criar outro usuário seria o POST, e para edição seria o PUT.

// b) Não, o método PUT é mais utilizado para alterar alguma coisa que já existe.  

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost: ${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
