import express, { Request, Response } from "express";
import cors from "cors";
import { tasks } from "./data";
import { v4 as generateId } from "uuid"

const app = express();

app.use(express.json());
app.use(cors ());

app.get("/ping", (req: Request, res: Response) => {          
    res.send("Pong! 🏓")
})

app.get("/todos/:tasksolved", (req: Request, res: Response) => {          
    const taskSolved = req.params.taskSolved

    if (taskSolved.toLowerCase() !== "true" && taskSolved.toLowerCase() !== "false") {
        res.status(400).send("Digite um parâmetro válido")
    } else {
        const selectedTasks = tasks.filter((task) => {
            if(taskSolved === "true"){
                return task.completed === true
            } else {
                taskSolved === "false"
            }
                return task.completed === false
        })
        res.status(200).send(selectedTasks)
    }
})

app.post("/todos/createtask", (req: Request, res: Response) => {
    const userId = Number(req.headers.authorization)
    const title: string = req.body.title

    if (!userId) res.status(400).send("Usuário não autorizado")
    
    const newTask = {
        userId: userId,
        id: generateId(),
        title: title,
        completed: false
    }

    tasks.push(newTask)
    res.status(200).send(tasks)
})


app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
});
