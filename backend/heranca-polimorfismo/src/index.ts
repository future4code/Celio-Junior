import { Customer } from "./heranca/customer"

//EXERCÍCIOS DE HERANÇA

// 1- a) Não, pois ela é privada.
//    b) Uma vez.

// 2- a) Uma vez.
//    b) Uma vez, pois só foi enviada uma vez as informações para essa classe.

// 3- a) Não seria possível pois ela é privada e não há a disponibilidade de função get para ela.

// 4- A resposta está no arquivo user.

// 5- 
    const person = new Customer('mastercard','1','bananinha123@bananinha.com','banana','ban')
    person.introduceYourself()
    
    console.log(person.introduceYourself());
    

//EXERCÍCIOS DE POLIMORFISMO