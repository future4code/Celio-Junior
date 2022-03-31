import express, {Request, Response} from 'express'
import cors from 'cors'

type User = {
   id: string | number,
   name: string,
   phone: number,
   email: string,
   website: string
      
}

const usuarios: User[] = [
   {
      id: 1,
      name: "Celio",
      phone: 2244553311,
      email: "celio-junior@uol.com.br",
      website: "www.uol.com.br"
   },

   {
      id: 2,
      name: "Simone",
      phone: 1122334455,
      email: "simone-santos@hotmail.com.br",
      website: "www.hotmail.com"
   },

   {
      id: 3,
      name: "Bruce",
      phone: 1199887766,
      email: "Bruce@gmail.com.br",
      website: "www.gmail.com.br"
   }
]

type Posts = {
   id: string | number,
   title: string,
   body: string, 
   userId: string | number
}

const postsUsuario: Posts[] = [{
   id: 1,
   title: 'Bananinha quando nasce',
   body: 'Amor não é aquilo que ti deixa feliz e cheio de energia, o nome disso são frutas!',
   userId: 1
},

{
   id: 2,
   title: 'Fez sentido?',
   body: 'Não faz sentido procurar sentido no que não faz mais sentido!',
   userId: 2
},

{
   id: 3,
   title: 'o Show não pode parar',
   body: 'O show tem que continuar, a luta não pode parar. Uma vida, vários caminhos e somente um final!',
   userId: 3
}]

const app = express()

app.use(express.json());
app.use(cors ());

app.get('/', (req: Request, res: Response) => {
   res.status(200).send('Tudo belezinha!')
});

app.get('/usuarios', (req: Request, res: Response) => {
   res.status(200).send(usuarios)
});

app.get('/posts', (req: Request, res: Response) => {
   res.status(200).send(postsUsuario)
});

app.get('/posts/:userId', (req: Request, res: Response) => {
   const usuarioID = Number(req.params.userId)

   const postsDosUsuarios = postsUsuario.filter((post) => post.userId === usuarioID)
   res.status(200).send(postsDosUsuarios)
});

app.listen(3003, () => {
   console.log("Server is running in http://localhost:3003")
});

