export type TipoCliente = {
  nome: string;
  cpf: string ;
  dataNascimento: string;
  saldo: number;
};

export const contas: TipoCliente[] = [
  {
    nome: "Juvenal Venâncio Meireles",
    cpf: "257.368.643-22",
    dataNascimento: "01/12/1990",
    saldo: 1000
  },
  {
    nome: "Cássio Almeida Ferreira",
    cpf: "374.627.842-33",
    dataNascimento: "01/11/1989",
    saldo: 2000
  },
];


export type extrato = {
  valor: number,
  data: number,
  descricao: string
}