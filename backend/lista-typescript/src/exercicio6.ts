type clientes = {cliente: string, saldoTotal: number, debitos: Array<number>}

const listaDeClientes: Array<clientes>  = 
[
    { cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] }, //nao
    { cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] }, //nao
    { cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] }, //sim
    { cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] }, //sim
    { cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] }, //nao
    { cliente: "Soter", saldoTotal: 1200, debitos: [] } //nao
]

function emprestimoClientes (lista: Array<clientes> ): Array<clientes> {

    const listaAtualizada: Array<clientes> = lista.map((client)=>{
        let debitos:number = 0;

        for(let i = 0; i < client.debitos.length; i++) {
            debitos += client.debitos[i]; 
        }
         client["saldoTotal"] -= debitos; 
         return client

    })

    const clientesAprovados : Array<clientes> = listaAtualizada
    .filter((client)=> {
        return client.saldoTotal < 0
    })

return clientesAprovados
}

console.table(emprestimoClientes(listaDeClientes))