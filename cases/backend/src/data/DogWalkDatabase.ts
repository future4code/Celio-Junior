import { walk } from "../model/Walk";
import { BaseDatabase } from "./BaseDatabase";

export class DogWalkDatabase extends BaseDatabase {
   private static TABLE_NAME = "Dog_Walking";
   
   public insertWalk = async(walking: walk) => {
      try {
        await this.getConnection()
        .insert({
            id: walking.id,
            status: walking.Status,
            data_agendamento: walking.dataAgendamento,
            preco: walking.preco,
            duracao: walking.duracao,
            latitude: walking.latitude,
            longitude: walking.longitude,
            pets: walking.pets,
            hora_inicio: walking.horaInicio,
            hora_termino: walking.horaTermino
         }).into(DogWalkDatabase.TABLE_NAME);

      } catch (error:any) {
         throw new Error(error.sqlMessage || error.message)
      }
   }


   public showWalk = async(walking: walk) => {
     try {

      const result = await this.getConnection()
         .select("duracao")
         .where({ id: walking.id })
         .from(DogWalkDatabase.TABLE_NAME);

      return result;

      } catch (error:any) {
        throw new Error(error.sqlMessage || error.message);
      }
  }


  public startWalk = async(walking: walk) => {
    try {

     const result = await this.getConnection()
         .select("hora_inicio")
         .where({ id: walking.id })
         .from(DogWalkDatabase.TABLE_NAME);

     return result;

   } catch (error:any) {
     throw new Error(error.sqlMessage || error.message);
   }
}


public finishWalk = async(walking: walk) => {
  try {

     const result = await this.getConnection()
         .select("hora_termino")
         .where({ id: walking.id })
         .from(DogWalkDatabase.TABLE_NAME);

     return result;

   } catch (error:any) {
     throw new Error(error.sqlMessage || error.message);
   }
  }
}
