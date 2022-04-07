import { v4 as generateId } from 'uuid'

export type Frutas = {
   id: string,
   name: string,
   price: number
}

export const hortifruti: Frutas [] = [
  {
    id: generateId(),
    name: "Limão",
    price: 7,
  },
  {
    id: generateId(),
    name: "Melância",
    price: 10,
  },
  {
   id: generateId(),
   name: "Mamão",
   price: 5,
  }
];
