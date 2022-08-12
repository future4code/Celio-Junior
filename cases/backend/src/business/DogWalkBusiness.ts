import { GenerateID } from "../services/GenerateId";
import { DogWalkDatabase } from "../data/DogWalkDatabase";
import { STATUS_TYPES, walk, WalkInputDTO } from "../model/Walk";

const generateId = new GenerateID()

export class DogWalkBusiness {
  public createWalk = async (input: WalkInputDTO) => {
    try {
      const {
        data_agendamento,
        duracao,
        latitude,
        longitude,
        pets,
        hora_inicio,
        hora_termino } = input;


     const calculosDosPasseios = (duracao: any, pets: any) => {
        if (duracao === "00:30:00") {
          if (pets >= 2) {
            let quant = pets
            pets = pets * -15
            let preco: number = 25 * quant + pets
            
            return preco

          } else {
            let preco: number = 25 * pets

            return preco

          }

        } else if (duracao === "01:00:00") {
          if (pets >= 2) {
            let quant = pets
            pets = pets * -20
            let preco: number = 35 * quant + pets

            return preco

          } else {
            let preco: number = 35 * pets

            return preco

          }
        }
      }

      const id: string = generateId.idGenerate()
      const Status = STATUS_TYPES.PENDENTE
      const preco: any = calculosDosPasseios(input.duracao, input.pets)

      const dogWalkDatabase = new DogWalkDatabase();
      
      const walk: walk = {
        id,
        Status,
        data_agendamento,
        preco,
        duracao,
        latitude,
        longitude,
        pets,
        hora_inicio,
        hora_termino
      }

      await dogWalkDatabase.insertWalk({
        id,
        Status,
        data_agendamento,
        preco,
        duracao,
        latitude,
        longitude,
        pets,
        hora_inicio,
        hora_termino

      });
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }


  public showWalking = async (walk: walk) => {
    try {

      return await new DogWalkDatabase().showWalk(walk);

    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }
  

  public startWalking = async (walk: walk) => {
    try {

      return await new DogWalkDatabase().startWalk(walk);

    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }
  

  public finishWalking = async (walk: walk) => {
    try {

      return await new DogWalkDatabase().finishWalk(walk);

    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }
  

  public allWalking = async (walk: walk) => {
    try {

      return await new DogWalkDatabase().allWalk(walk);

    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }
}
