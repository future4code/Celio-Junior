import { app } from "./app";
import { getAllUsers } from "./endpoints/getlAllUsers";
import { getUsersType } from "./endpoints/getUserType";
import { getUserPages } from "./endpoints/getUserPage"

app.get("/Users", getAllUsers)
app.get("/UserType/:type", getUsersType)
app.get("/Pages", getUserPages)