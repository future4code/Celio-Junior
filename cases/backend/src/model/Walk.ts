export enum STATUS_TYPES {
   PENDENTE = "Pendente",
   PROGRESSO = "Em progresso",
   CONCLUIDO = "Concluido",
}

export type walk = {
    id: string,
    Status:STATUS_TYPES.PENDENTE,
    data_agendamento: Date,
    preco: number,
    duracao:string,
    latitude:number,
    longitude:number,
    pets:number,
    hora_inicio:string,
    hora_termino:string
 }

 export interface WalkInputDTO  {
    data_agendamento: Date,
    duracao:string,
    latitude:number,
    longitude:number,
    pets:number,
    hora_inicio:string,
    hora_termino:string
 }

