import { app } from "./app";
import { userBase } from "./endpoints/createUsers";
import { getAllUsers } from "./endpoints/getAllUsers";
import { productBase } from "./endpoints/cadProduct";
import { getAllProducts } from "./endpoints/getAllProducts";
import { purchaseRegistration } from "./endpoints/purchaseRegistration";

app.get("/users", getAllUsers)
app.post("/createUser", userBase)

app.post("/cadProduct", productBase)
app.get("/products", getAllProducts)

app.post("/RegistrarCupom", purchaseRegistration)