type usuario = 
{
    name: string, 
    email: string, 
    role: "user" | "admin" }

    const listaUsuario: Array<usuario> = 
[
    {name: "Rogério", email: "roger@email.com", role: "user"},
    {name: "Ademir", email: "ademir@email.com", role: "admin"},
    {name: "Aline", email: "aline@email.com", role: "user"},
    {name: "Jéssica", email: "jessica@email.com", role: "user"},
    {name: "Adilson", email: "adilson@email.com", role: "user"},
    {name: "Carina", email: "carina@email.com", role: "admin"}
] 

function filtraEmailAdmin (list: Array<usuario>): string[] {

    const filtraEmail: Array<usuario> = list.filter((person)=>{
        if(person.role === "admin"){return person.email}
    })

    let emails : string[] = []

    for(let i=0; i <= filtraEmail.length-1; i++) {
        emails.push(filtraEmail[i].email) 
    } 

    return emails
}

console.log(filtraEmailAdmin(listaUsuario))