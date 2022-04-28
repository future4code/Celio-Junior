export type detalheCompra = {
  valor: number,
  data: string,
  descricao: string
} 

export type tipoCliente = {
  nome: string;
  cpf: string ;
  dataNascimento: string;
  saldo: number;
  extrato: detalheCompra[]
};

export const contas: tipoCliente[] = [
  {
    nome: "Juvenal Venâncio Meireles",
    cpf: "257.368.643-22",
    dataNascimento: "01/12/1990",
    saldo: 1000,
    extrato: [
      {
       valor: 250.00,
       data: "01/04/2022",
       descricao: "Controle Xbox One" 
      },
    ],
  },
  {
    nome: "Cássio Almeida Ferreira",
    cpf: "374.627.842-33",
    dataNascimento: "01/11/1989",
    saldo: 2000,
    extrato: [
      {
       valor: 4000.00,
       data: "30/06/2021",
       descricao: "PS4" 
      },
    ],
  },
];

