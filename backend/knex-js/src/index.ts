import express, { Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import connection from "./connection";

const app = express();
app.use(express.json());
app.use(cors());


export const getActorById = async (id: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT * FROM Actor WHERE id = '${id}'
  `)

    return result[0][0]
}

getActorById("003")
    .then(result => {
        console.log(result)
    })
    .catch(err => {
        console.log(err)
    });

(async () => {
  console.log(await getActorById("001") )
})()


app.get("/users/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id

    console.log(await getActorById(id))

    res.end()
  } catch (error: any) {
        console.log(error.message)
    res.status(500).send("Unexpected error")
  }
});


// Exercício 1

// a) A resposta do raw vem em dois arrays, um com os dados que você solicitou, 
// e o segundo com informações(os tipos dos campos por exemplo) referentes aos seus dados.


// b)
const searchActor = async (name: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT * FROM Actor WHERE name = "${name}"
  `)
  return result[0][0]
}


// c)
const countActorsGender = async (gender: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}"
  `);
	
  const count = result[0][0].count;
  return count;
};


// Exercício 2

// a)
const salaryUpdate = async (id: string, salary: number): Promise<any> => {
  await connection("Actor")
    .update({
      salary: salary,
    })
    .where("id", id);
};

// b)
const deleteActorId = async (id: string): Promise<void> => {
  await connection("Actor")
    .delete()
    .where("id", id);
}; 

// c)
const avgSalaryGender = async (gender: string): Promise<any> => {
  const result = await connection("Actor")
    .avg("salary")
    .where({ gender });

  return result[0].salary;
};

// Exercício 3

// a)
app.get("/actor/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const actor = await getActorById(id)

    res.status(200).send(actor)
  } catch (error: any) {
    res.status(400).send({ message: error.message });
  }
});


// b)
app.get("/gender/actor", async (req: Request, res: Response) => {
  try {
    const count = await countActorsGender(req.query.gender as string);
    res.status(200).send({
      quantity: count,
    });
  } catch (err: any) {
    res.status(400).send({ message: err.message });
  }
});


// Exercício 4

app.post("/actor", async (req: Request, res: Response) => {
  try {
    await connection("Actor").insert({
      id: req.body.id,
      name: req.body.name,
      salary: req.body.salary,
      birth_date: new Date(req.body.birthDate),
      gender: req.body.gender,
    });
    
    res.status(200).send({ message: `Ator ${req.body.name} criado em ${new Date} com sucesso`});
  } catch (err: any) {
    res.status(400).send({ message: err.message });
  }
});


// a)
app.put("/actor", async (req: Request, res: Response) => {
  try {
    await salaryUpdate(req.body.id, req.body.salary);
    res.status(200).send({ message: "Você um aumento de salário!" });
  } catch (err: any) {
    res.status(400).send({ message: err.message });
  }
});

// b)
app.delete("/actor/:id", async (req: Request, res: Response) => {
  try {
    await deleteActorId(req.params.id);
    res.status(200).send({ message: "Ator deletado com sucesso!" });
  } catch (err: any) {
    res.status(400).send({ message: err.message });
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
