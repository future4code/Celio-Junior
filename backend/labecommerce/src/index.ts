import { app } from "./app";
import { getAllUsers } from "./endpoints/createUsers";

app.get("/Users", getAllUsers)
