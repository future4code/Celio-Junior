// Exemplos

// Exercício 0A
function soma() {
  // escreva seu código aqui
  const num1 = prompt('Digite o primeiro número')
  const num2 = prompt('Digite o segundo número')

  console.log(Number(num1) + Number(num2))
}

// Exercício 0B
function imprimeMensagem() {
  // escreva seu código aqui
  const mensagem = prompt('Digite sua mensagem')

  console.log(mensagem)
}

// ---------------------------------------------------
// Exercícios

// Exercício 1
function calculaAreaRetangulo() {
  // escreva seu código aqui
  let alturaDoRetangulo = Number(prompt("Digite a altura do retângulo:"))
  let larguraDoRetangulo = Number(prompt("Digite a largura do retângulo:"))

  calculaAreaRetangulo = (alturaDoRetangulo * larguraDoRetangulo)

  console.log(calculaAreaRetangulo)
}

// Exercício 2
function imprimeIdade() {
  // escreva seu código aqui
  let anoAtual = Number(prompt("Digite o ano atual:"))
  let anoDeNascimento = Number(prompt("Digite o ano de nascimento:"))

  //idadeUsuario = (anoAtual - anoDeNascimento)

  //console.log(idadeUsuario)
}

// Exercício 3
function calculaIMC() {
  // escreva seu código aqui
  let pesoUsuario = Number(prompt("Digite seu peso:"))
  let alturaUsuario = Number(prompt("Digite sua altura:"))

  imc = (pesoUsuario / (alturaUsuario * alturaUsuario))

  console.log(imc)
}

// Exercício 4
function imprimeInformacoesUsuario() {
  // escreva seu código aqui
  let nomeUsuario = prompt("Digite seu nome:")
  let idadeUsuario = Number(prompt("Digite sua idade:"))
  let emailUsuario = prompt("Digite seu e-mail:")

  console.log(`Meu nome é ${nomeUsuario}, tenho ${idadeUsuario} anos, e o meu email é ${emailUsuario}.`)


}

// Exercício 5
function imprimeTresCoresFavoritas() {
  // escreva seu código aqui
  coresFavoritas = []

  let cor1 = prompt("Ditite sua primeira cor favoritda:")
  let cor2 = prompt("Ditite sua segunda cor favoritda:")
  let cor3 = prompt("Ditite sua terceira cor favoritda:")

  coresFavoritas.push(cor1, cor2, cor3)

  console.log(coresFavoritas)

}

// Exercício 6
function retornaStringEmMaiuscula() {
  // escreva seu código aqui
}

// Exercício 7
function calculaIngressosEspetaculo() {
  // escreva seu código aqui
}

// Exercício 8
function checaStringsMesmoTamanho() {
  // escreva seu código aqui
}

// Exercício 9
function checaIgualdadeDesconsiderandoCase() {
  // escreva seu código aqui
}

// Exercício 10
function checaRenovacaoRG() {
  // escreva seu código aqui
}

// Exercício 11
function checaAnoBissexto() {
  // escreva seu código aqui
}

// Exercício 12
function checaValidadeInscricaoLabenu() {
  // escreva seu código aqui
}