import { checaItensDuplicados } from "./ex3";

describe("Checa itens duplicados", () => {
    test("Checa itens duplicados", () =>{
    const arrayDuplicados = checaItensDuplicados([2, 2, 8, 3, 21, 28, 33, 3]);
    
    expect(arrayDuplicados).toEqual(true)
    })
});

