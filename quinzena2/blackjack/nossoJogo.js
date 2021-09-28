console.log("Boas vindas ao jogo de Blackjack!")

if(confirm("Quer iniciar uma nova rodada?")){
   
   let cartaUmUsuario = comprarCarta();
   let cartaDoisUsuario = comprarCarta();
   let cartaUmComputador = comprarCarta();
   let cartaDoisComputador = comprarCarta();

   let somaCartasUsuario = (cartaUmUsuario.valor + cartaDoisUsuario.valor);
   let somaCartasComputador = (cartaUmComputador.valor + cartaDoisComputador.valor);

   console.log(`As cartas do usuário são: ${cartaUmUsuario.texto} e ${cartaDoisUsuario.texto}
   Soma das cartas do usuário é: ${somaCartasUsuario}`);

   console.log(`As cartas do computador são: ${cartaUmComputador.texto} e ${cartaDoisComputador.texto}
   Soma das cartas do usuário é: ${somaCartasComputador}`);
   
   if (somaCartasUsuario > somaCartasComputador) {
      console.log("Usuario venceu!");
   }  else if (somaCartasUsuario === somaCartasComputador) {
      console.log("O resultado foi: empate");
   }  else {
      console.log("O Computador venceu!");
   }

} else {

   console.log("O jogo acabou");
}