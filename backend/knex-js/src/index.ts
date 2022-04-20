import express, { Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import connection from "./connection";

const app = express();
app.use(express.json());
app.use(cors());


// Exercício 1

// a) A resposta do raw vem em dois arrays, um com os dados que você solicitou, 
// e o segundo com informações(os tipos dos campos por exemplo) referentes aos seus dados.


// b)
app.get("/actor", async (req: Request, res: Response): Promise<void> => {
  try {
    const name = req.query.name
    const searchActor = await connection("Actor")
    .where('name', 'like', `%${name}%`);
    
    res.status(201).send(searchActor[0]);
  } catch (error: any) {
    res.status(500).send(error.sqlMessage || error.message);
  }
});


// c)
app.get("/actor/gender", async (req: Request, res: Response): Promise<void> => {
  try {
      const result = await connection.raw(
        `SELECT COUNT(*), gender FROM Actor GROUP BY gender`);
    // const countGender = await connection("Actor")
    // // .select()
    // .where({ gender: req.query.gender });
    
    res.status(201).send(result[0]);
  } catch (error: any) {
    res.status(500).send(error.sqlMessage || error.message);
  }
});


// Exercício 2

// a)
app.put("/actor/:id", async (req: Request, res: Response): Promise<void> => {
  try {
    await connection("Actor")
      .update({
        salary: req.body.salary,
      })
      .where({ id: req.params.id });

    res.status(201).send({ message: "Aumento de salário efetuado com sucesso!" });
  } catch (error: any) {
    res.status(500).send(error.sqlMessage || error.message);
  }
});


// b)
app.delete("/actor/:id", async (req: Request, res: Response): Promise<void> => {
  try {
    await connection("Actor").delete().where({ id: req.params.id });

    res.status(201).send({ message: "Ator/Atriz deletado" });
  } catch (error: any) {
    res.status(500).send(error.sqlMessage || error.message);
  }
});




const server = app.listen(3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in https://localhost:${address.port}`);
  } else {
    console.error(`Server is not running in https://localhost`);
  }
});
