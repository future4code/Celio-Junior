import { app } from "./app";
import { getAllUsers } from "./endpoints/getlAllUsers";
import { getUsersType } from "./endpoints/getUserType"

app.get("/Users", getAllUsers)
app.get("/UserType/:type", getUsersType)