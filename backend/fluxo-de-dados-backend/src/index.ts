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
   try{
   const {name,price} = request.body

   if (!name || !price) { 
      throw Error(Errors.BAD_REQUEST.message)

      return
   }

   if (typeof price !== 'number' || price <= 0) {
      throw Error(Errors.BAD_REQUEST.message)
      
      return
   }

   const novaFruta: Frutas = {
      id: generateId(),
      name: name,
      price: price
   }

   hortifruti.push(novaFruta)

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
      throw Error(Errors.PRODUCT_NOT_FOUND.message)
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
   response.status(200).send(hortifruti);
});


// 6)
app.delete('/hortifruti/deleteFruta/:id', (request: Request, response: Response) => {
   try{
   const id = request.params.id;
   
   if (!id) {
      throw Error(Errors.PRODUCT_NOT_FOUND.message)
   }

   hortifruti.forEach((item, index, array) => {
      if (item.id === id) {
         hortifruti.splice(index, 1)
         }
            return hortifruti;
         });

}catch ( error: any ) {
   switch ( error.message ) {
       case Errors.PRODUCT_NOT_FOUND.message:
           response.status(Errors.PRODUCT_NOT_FOUND.status).send(Errors.PRODUCT_NOT_FOUND.message);
           break;
       default:
         response.status(Errors.SOMETHING_WENT_WRONG.status).send(Errors.SOMETHING_WENT_WRONG.message);
   };
   };
      response.status(200).send(hortifruti);
   
});


// 7) Exercício refatorado

// 8) Exercício refatorado

// 9) Exercício refatorado


app.listen(3003, () => console.log('Server rodando.....'));
