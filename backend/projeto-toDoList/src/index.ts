import express, { Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import connection from "./connection";
import { v4 as id } from "uuid"
import moment from "moment"
import {app} from "./app"


//Exercício 1
app.post("/user", async (req: Request, res: Response): Promise<void> => {
  const name = req.body.name;
  const nickName = req.body.nickname;
  const email = req.body.email;

  try {

    if (!name) {
      res.status(400).send("Por favor, insira um nome de usuário!");
    }
    if (!nickName) {
      res.status(400).send("Por favor, insira um apelido para o usuário!");
    }
    if (!email) {
      res.status(400).send("Por favor, insira um email de usuário!");
    }

    await connection("TodoListUser").insert({
      id: id(),
      name: name,
      nickname: nickName,
      email: email,
    });

    res.status(201).send({ message: "Usuário criado com sucesso!" });
  } catch (error: any) {
    res.status(500).send(error.sqlMessage || error.message);
  }
});

//Exercício 2
app.get("/user/:id", async (req: Request, res: Response): Promise<any> => {  
  const userId = req.params.id;

  try {

    const user = await connection("TodoListUser")
    .where({ id: userId });

    const idUser = user.find((idUser)=>{
      return idUser.id === userId
    })
    
    if(!idUser){
      return res.status(400).send("Usuário não existe, verifique o ID!");
    }

    res.status(200).send(user);
  } catch (error: any) {
    res.status(500).send(error.sqlMessage || error.message);
  }
});


//Exercício 3
app.put("/user/edit/:id", async (req: Request, res: Response): Promise<void> => {
  const name = req.body.name;
  const nickName = req.body.nickname;
  
  try {

    if (name === "") {
      res.status(400).send("O nome do usuário não pode ficar vazio");
    }
    if (nickName === "") {
      res.status(400).send("O apelido do usuário não pode ficar vazio");
    }

    await connection("TodoListUser")
      .update({
        name: name,
        nickname: nickName,
      })
      .where({ id: req.params.id });
    res.status(200).send({ message: "Usuário foi editado com sucesso!" });
  } catch (error: any) {
    res.status(500).send(error.sqlMessage || error.message);
  }
});


//Exercício 4
app.post("/task", async (req: Request, res: Response): Promise<void> => {
  const {title, description, limitDate, creatorUserId} = req.body
  const dateConvert = limitDate.split("/").reverse().join("-")

  try {

    if (!title) {
      res.status(400).send("Por favor, insira um título para a tarefa!");
    }
    if (!description) {
      res.status(400).send("Por favor, insira uma descrição para a tarefa!");
    }
    if (!limitDate) {
      res.status(400).send("Por favor, insira uma data limite para conclução da tarefa!");
    }
    if (!creatorUserId) {
      res.status(400).send("Por favor, insira o id do criador da tarefa!");
    }

    await connection("TodoListTask").insert({
      id: id(),
      title: title,
      description: description,
      limit_date: dateConvert,
      status: "to_do",
      creator_user_id: creatorUserId,
    });

    res.status(201).send({ message: "Tarefa criada com sucesso!" });
  } catch (error: any) {
    res.status(500).send(error.sqlMessage || error.message);
  }
});

// Exercício 5
app.get("/task/:id", async (req: Request, res: Response): Promise<any> => {  
  try {
    const taskId = req.params.id;

    const tasks = await connection("TodoListTask")
    .innerJoin(
    "TodoListUser",
    "TodoListTask.creator_user_id",
    "TodoListUser.id"
    )
    .select("TodoListTask.*", "TodoListUser.nickname")
    .where({ "TodoListTask.id": taskId });

    let Date = (moment(tasks[0].limit_date)).format("DD/MM/YYYY");
    tasks[0].limit_date = Date;

    const idTask = tasks.find((idTask)=>{
      return idTask.id === taskId
    })
    
    if(!idTask){
      return res.status(400).send("Tarefa não existe, verifique o ID!");
    }

    res.status(200).send(tasks);
  } catch (error: any) {
    res.status(500).send(error.sqlMessage || error.message);
  }
});

// Exercício 6 
app.get("/users/all", async (req: Request, res: Response): Promise<void> => {
  try {
    const users = await connection("TodoListUser").select();

    res.status(200).send(users);
  } catch (error: any) {
    res.status(500).send(error.sqlMessage || error.message);
  }
});


// Exercício 7
app.get("/tasks", async (req: Request, res: Response): Promise<any> => {  
    try {
      const creatorUserId = req.query.id as string;

      if(!creatorUserId){
        return res.status(400).send("Informe um ID!");
      }

      if(creatorUserId.length < 36){
        return res.status(404).send("Informe um ID válido!")
      }

      const tasks = await connection("TodoListTask")
      .innerJoin(
      "TodoListUser",
      "TodoListTask.creator_user_id",
      "TodoListUser.id"
      )
      .select("TodoListTask.*", "TodoListUser.nickname")
      .where({ creator_user_id: creatorUserId });
  
      let Date = (moment(tasks[0].limit_date)).format("DD/MM/YYYY");
      tasks[0].limit_date = Date;
  
  
      res.status(200).send(tasks);
    } catch (error: any) {
      res.status(500).send(error.sqlMessage || error.message);
    }
  });
  

