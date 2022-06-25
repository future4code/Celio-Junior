import app from "./App"
import { recipeRouter } from "./routes/RecipeRouter"
import { userRouter } from "./routes/UserRouter"

app.use('/user/', userRouter)
app.use('/recipe', recipeRouter)