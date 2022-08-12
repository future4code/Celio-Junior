import dotenv from "dotenv";
import express from "express";
import {AddressInfo} from "net";
import { dogWalkRouter } from "./routes/DogWalkRouter";

dotenv.config();

const app = express();
app.use(express.json());


app.get("/", dogWalkRouter)
app.post("/walk", dogWalkRouter)
app.get("/show/:id", dogWalkRouter)
app.get("/start_walk/:id", dogWalkRouter)
app.get("/finish_walk/:id", dogWalkRouter)


const server = app.listen(3000, () => {
    if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Servidor rodando em http://localhost:${address.port}`);
    } else {
      console.error(`Falha ao rodar o servidor.`);
    }
});