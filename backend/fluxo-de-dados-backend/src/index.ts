import express, { Request, Response } from 'express';
import cors from 'cors';
import { Frutas, hortifruti } from './data'
import { v4 as generateId } from 'uuid'

const app = express();

app.use(express.json());
app.use(cors());

const Errors: { [chave: string]: {status: number, message: string} } = {
   BAD_REQUEST: {status:400, message:"Valores incorretos"},
   AUTHORIZATION_NOT_FOUND: {status: 401, message: "Favor enviar header authorization"},
   PRODUCT_NOT_FOUND: {status: 404, message: "Produto não encontrado"},
   MISSING_PARAMETERS: {status: 422, message: "Alguma informação está faltando. Consulte a documentação."},
   SOMETHING_WENT_WRONG: {status: 500, message: "Algo deu errado"},
}

// 1) 
app.get('/test', (request: Request, response: Response) => {
   response.status(200).send('Teste Ok');
});

// 2) Exercício feito no arquivo (data.ts)

// 3) 
app.post('/hortifruti/novaFruta', (request: Request, response: Response) => {
   const {name,price} = request.body

   if (!name || !price) { 
      response.status(422).send('Digite um nome e um preço para o produto')

      return
   }

   const novaFruta: Frutas = {
      id: generateId(),
      name: name,
      price: price
   }

   hortifruti.push(novaFruta)

   response.status(201).send(hortifruti);
});

// 4)
app.get('/hortifruti', (request: Request, response: Response) => {
   response.status(201).send(hortifruti);
});

// 5)
app.put('/hortifruti/novoPreco/:id', (request: Request, response: Response) => {
   try{
   const id = request.params.id

   const { price } = request.body

   const novoPreco = hortifruti.find((produtoId)=> produtoId.id === id)

   if (!novoPreco) {
      throw Error(Errors.PRODUTO_NAO_ENCONTRADO.message)
   }
   
   if (typeof price !== 'number' || price <= 0) {
      throw Error(Errors.BAD_REQUEST.message)
   }
   
   novoPreco.price = Number(price)

}catch(error: any){
   switch(error.message) {
      case Errors.AUTHORIZATION_NOT_FOUND.message:
         response.status(Errors.AUTHORIZATION_NOT_FOUND.status).send(Errors.AUTHORIZATION_NOT_FOUND.message);
         break;
      case Errors.PRODUCT_NOT_FOUND.message:
         response.status(Errors.PRODUCT_NOT_FOUND.status).send(Errors.PRODUCT_NOT_FOUND.message);
         break;
      case Errors.MISSING_PARAMETERS.message:
         response.status(Errors.MISSING_PARAMETERS.status).end(Errors.MISSING_PARAMETERS.message);
         break;
      case Errors.PRODUCT_EXISTS.message:
         response.status(Errors.PRODUCT_EXISTS.status).send(Errors.PRODUCT_EXISTS.message);
         break;
      default:
         response.status(Errors.SOMETHING_WENT_WRONG.status).send(Errors.SOMETHING_WENT_WRONG.message)
   }
}
   response.status(201).send(hortifruti);
});


// app.get('/tracks', (request: Request, response: Response) => {
//    const IDPlaylist = request.body.id;

//    if (!IDPlaylist) {
//       response.status(400).send('O id da playlist é obrigatorio');
//    }

//    const playlists = users.map((user) => user.playlists).flat(1);

//    let tracks;
//    playlists.forEach((playlist) => {
//       if (playlist.id === IDPlaylist) {
//          tracks = playlist.tracks;
//       }
//    });
//    response.send(tracks);
// });

// app.delete('/playlist', (request: Request, response: Response) => {
//    const IDPlaylist = request.query.id;

//    users.forEach((user) => {
//       user.playlists = user.playlists.map((playlist: any) => {
//          if (playlist.id === IDPlaylist) {
//             return {};
//          }
//          return playlist;
//       });
//    });
//    response.status(200).send(users);
// });

// app.delete('/track', (request: Request, response: Response) => {
//    const trackId = request.query.id1;
//    const playlistId = request.query.id2;

//    const allPlaylists = users
//       .map((user: any) => {
//          return user.playlists;
//       })
//       .flat(1);

//    allPlaylists.forEach((playlist: any) => {
//       if (playlist.id === playlistId) {
//          playlist.tracks = playlist.tracks.map((track: any) => {
//             if (track.id === trackId) {
//                return {};
//             }

//             return track;
//          });
//       }
//    });

//    response.status(200).send(allPlaylists);
// });

// app.get('/playlists/search', (request: Request, response: Response) => {
//    const userName = request.headers.authorization;
//    // console.log("usuário é",userName);
//    const usuario = users.find(user => user.id === userName);
//    if(!usuario) {
//       response.status(404).send("usuário não encontrado");
//       return
//    }
//    const playlistName = request.query.name; // query é sempre string, params também
//    console.log(playlistName);
//    const playlistsDoUsuario = usuario?.playlists;
//    const playlist = playlistsDoUsuario.find(playlist => playlist.name === (playlistName as string).toLocaleLowerCase())
//    if(!playlist) {
//       response.status(404).send("playlist não encontrada");
//       return
//    }
//    // console.log(playlistsDoUsuario)
//    response.status(200).send(playlist)
// });

// app.post('/playlists', (request: Request, response: Response) => {
//    const userName = request.headers.authorization;
//    const usuario = users.find(user => user.id === userName);
//    if(!usuario) {
//       response.status(404).send("usuário não encontrado");
//       return
//    }
//    const playlistName = request.body.name;
//    if(!playlistName) {
//       response.status(400).send("Favor informar nome da playlist no body.");
//       return
//    }
//    const newPlaylist = {
//       id: generateId(),
//       name: playlistName,
//       tracks: []
//    }
//    // console.log(newPlaylist);
//    usuario.playlists.push(newPlaylist);
//    response.status(201).send("ok")
// });

// // [authorization_nao_encontrado] 401 - Favor enviar header authorization
// // [playlist_nao_encontrada] 404 - Playlist não encontrada
// // [track_com_conflito] 409 - Essa faixa já existe na playlist
// // [parametros_faltantes] 422 - Alguma informação está faltando. Consulte a documentação.
// // [algo_deu_errado] 500 - Algo deu errado.

// // como fazer enums de objetos?

// const Errors: { [chave: string]: { status: number, message: string } } = {
//    AUTHORIZATION_NOT_FOUND: {status: 401, message: "Favor enviar header authorization"},
//    PLAYLIST_NOT_FOUND: {status: 404, message: "Playlist não encontrada"},
//    TRACK_EXISTS: {status: 409, message: "Essa faixa já existe na playlist"},
//    MISSING_PARAMETERS: {status: 422, message: "Alguma informação está faltando. Consulte a documentação."},
//    SOMETHING_WENT_WRONG: {status: 500, message: "Algo deu errado"},
// }
// // playlists/tracks
// app.post('/playlists/:playlistId/tracks', (request: Request, response: Response, next) => {
//    try {

//       const userName = request.headers.authorization;
//       const playlistId = request.params.playlistId;
//       const { artist, name, url } = request.body;

//       if(!artist || !name || !url) {
//          // response.status().send()
//          // return
//          throw new Error(Errors.MISSING_PARAMETERS.message);
//       }
//       if(!userName) {
//          throw new Error(Errors.AUTHORIZATION_NOT_FOUND.message)
//       }
//       const user = users.find(user => user.id === userName);
//       if(!user) {
//          // authorization incorreto
//          // envia erro 403 
//       }
//       const playlist = user?.playlists.find(playlist => playlist.id === playlistId);
//       if(!playlist) {
//          throw new Error(Errors.PLAYLIST_NOT_FOUND.message);
//       }

//       const track = playlist.tracks.find(track => {
//          return track.name === name && track.artist === artist
//       });
//       if(track) {
//          throw new Error(Errors.TRACK_EXISTS.message);
//       }
      
//       playlist.tracks.push({
//          id: generateId(),
//          artist,
//          name,
//          url
//       });


//    } catch(error: any) {
//       switch(error.message) {
//          case Errors.AUTHORIZATION_NOT_FOUND.message:
//             response.status(Errors.AUTHORIZATION_NOT_FOUND.status).send(Errors.AUTHORIZATION_NOT_FOUND.message);
//             break;
//          case Errors.PLAYLIST_NOT_FOUND.message:
//             response.status(Errors.PLAYLIST_NOT_FOUND.status).send(Errors.PLAYLIST_NOT_FOUND.message);
//             break;
//          case Errors.MISSING_PARAMETERS.message:
//             response.status(Errors.MISSING_PARAMETERS.status).end(Errors.MISSING_PARAMETERS.message);
//             break;
//          case Errors.TRACK_EXISTS.message:
//             response.status(Errors.TRACK_EXISTS.status).send(Errors.TRACK_EXISTS.message);
//             break;
//          default:
//             response.status(Errors.SOMETHING_WENT_WRONG.status).send(Errors.SOMETHING_WENT_WRONG.message)
//       }
//    }
//    response.status(201).send("")
// })

// /test/9 /test/10 /test/0
// /test/hello

// /teste/lucky-number/:number
// /teste/lucky-profession/:profissao

// app.get('/test/hello', (req: Request, res) => res.send("olá mundo"))

// app.get('/test/:number', (req: Request, res) => {
//    res.send(`Seu número da sorte é ${Number(req.params.number)}`)
// })


// erro CANNOT GET /test/hello2

app.listen(3003, () => console.log('Server rodando.....'));
