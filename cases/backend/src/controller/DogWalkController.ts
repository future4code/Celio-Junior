import { Request, Response } from "express";
import { DogWalkBusiness } from "../business/DogWalkBusiness";
import { DogWalkDatabase } from "../data/DogWalkDatabase";
import { WalkInputDTO } from "../model/Walk"
import { InvalidTime,InvalidPet, InvalidData } from "../error/customError";

export class DogWalkController {

  public createWalk = async (req: Request, res: Response): Promise<void> => {
      try {
         if (req.body.pets < 1) {
            throw new InvalidPet();
          }

          if (!req.body.data_agendamento || !req.body.duracao || !req.body.latitude || !req.body.longitude || !req.body.pets || !req.body.hora_inicio || !req.body.hora_termino) {
            throw new InvalidData();
          }

          if (req.body.duracao != "00:30:00" && req.body.duracao != "01:00:00") {
            throw new InvalidTime()
          }

         const { data_agendamento, duracao, latitude, longitude, pets, hora_inicio, hora_termino } = req.body

         const input: WalkInputDTO = {
            data_agendamento, 
            duracao, 
            latitude, 
            longitude, 
            pets, 
            hora_inicio,
            hora_termino 
         }

         const dogWalkBusiness = new DogWalkBusiness
         dogWalkBusiness.createWalk(input)

         res.status(201).send({ message: "Passeio adicionado com sucesso!" })
      } catch (error:any) {
         res.status(400).send(error.sqlMessage || error.message)
      }
   }
   
   public showWalk = async (req: Request, res: Response) => {
      try {
       const input:any = {
           id: req.params.id,
       }

       const duracao = await new DogWalkDatabase().showWalk(input);

       res.send(duracao).status(200);
      } catch (error:any) {
         res.send({ message: error.message }).status(error.sqlMessage || error.message);
     }
   }
   
   public startWalk = async (req: Request, res: Response) => {
      try {
       const input:any = {
           id: req.params.id,
       }
        
       const inicio = await new DogWalkDatabase().startWalk(input);

       res.send(inicio).status(200);
      } catch (error:any) {
       res.send({ message: error.message }).status(error.sqlMessage || error.message);
     }
   }

   public finishWalk = async (req: Request, res: Response) => {
      try {
       const input:any = {
           id: req.params.id,
       }
         const termino = await new DogWalkDatabase().finishWalk(input);

         res.send(termino).status(200);
      } catch (error:any) {
         res.send({ message: error.message }).status(error.sqlMessage || error.message);
     }
   }

   public allWalk = async (req: Request, res: Response) => {
      try {
       const input:any = {
           id: req.params.id,
           search:req.query.search,
           sort:req.query.sort as string,
           order:req.query.order as string,
           page: Number(req.query.page),
           size:Number(req.query.size),

       }

let offset = input.size*(input.page-1)
input.offset = offset    

    if(!input.data_agendamento){
      input.data_agendamento ="%"
    }

    if(input.sort !== "data_agendamento") {
      input.sort = "data_agendamento"
    }

    if( !input.order || input.order.toUpperCase() !== "ASC" && input.order.toUpperCase() !== "DESC" ){
      input.order = "ASC"
    }

    if(isNaN(input.page) || input.page < 1) {
      input.page = 1
    }

    if(isNaN(input.size) || input.size < 1) {
      input.size = 10
    }

         const termino = await new DogWalkDatabase().allWalk(input);

         res.send(termino).status(200);
      } catch (error:any) {
         res.send({ message: error.message }).status(error.sqlMessage || error.message);
     }
   }
   }
