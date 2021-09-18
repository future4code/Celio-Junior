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

  let cor1 = prompt("Ditite sua primeira cor favoritda: ")
  let cor2 = prompt("Ditite sua segunda cor favoritda: ")
  let cor3 = prompt("Ditite sua terceira cor favoritda: ")

  coresFavoritas.push(cor1, cor2, cor3)

  console.log(coresFavoritas)

}

// Exercício 6
function retornaStringEmMaiuscula() {
  let texto = prompt("Digite um texto")
  console.log(texto.toUpperCase())
  // escreva seu código aqui
}

// Exercício 7
function calculaIngressosEspetaculo() {
  let custoEspetaculo = Number(prompt("Qual o custo do espetáculo? "))
  let valorIngresso = Number(prompt("Qual o valor do ingresso? "))

  let espetaculoSemPrejuizo = (custoEspetaculo / valorIngresso)

  console.log(espetaculoSemPrejuizo)

  // escreva seu código aqui
}

// Exercício 8
function checaStringsMesmoTamanho() {
  let texto1 = prompt("Digite o primeiro texto")
  let texto2 = prompt("Digite o segundo texto")

  let verificaTamanho = (texto1.length === texto2.length)

  console.log(verificaTamanho)
  // escreva seu código aqui
}

// Exercício 9
function checaIgualdadeDesconsiderandoCase() {
  let texto1 = prompt("Digite o primeiro texto")
  let texto2 = prompt("Digite o segundo texto")

  let verificaTamanho = (texto1.toUpperCase() === texto2.toUpperCase())

  console.log(verificaTamanho)

  // escreva seu código aqui
}

// Exercício 10
function checaRenovacaoRG() {
  // escreva seu código aqui 
  let anoAtual = Number(prompt("Digite o ano atual: "))
  let anoDeNascimento = Number(prompt("Digite o ano de nascimento: "))
  let anoCarteiraEmitda = Number(prompt("Digite o ano que a carteira foi emitida: "))

  let idadeUsuario = (anoAtual - anoDeNascimento)
  let idadeCarteira = (anoAtual - anoCarteiraEmitda)

  let renovaCincoAnos = (idadeUsuario <= 20) && idadeCarteira >= 5
  let renovaDezAnos = (idadeUsuario > 20 && idadeUsuario <= 50) && idadeCarteira >= 10
  let renovaQuinzeAnos = (idadeUsuario > 50) && idadeCarteira >= 15

  let renovarCarteira = (renovaCincoAnos || renovaDezAnos || renovaQuinzeAnos)

  console.log(renovarCarteira)

}

// Exercício 11
function checaAnoBissexto() {
  // escreva seu código aqui
  let informarAno = prompt('Digite um ano para verificar se é bissexto ou não: ')

  let multiploDeQuatro = informarAno % 4 === 0
  let multiploDeCem = informarAno % 100 !== 0
  let multiploDeQuatrocentos = informarAno % 400 === 0

  let anoBissexto = (multiploDeQuatro && multiploDeCem || multiploDeQuatrocentos)


  console.log(anoBissexto)

}

// Exercício 12
function checaValidadeInscricaoLabenu() {
  // escreva seu código aqui
  let idade = prompt("Tem mais de 18?")
  let ensinoMedio= prompt("Tem ensino médio completo?")
  let disponibilidadeDeHoras = prompt("Tem disponibilidade de horários?")

  const ValidaInscricao = idade === "sim" && ensinoMedio === "sim" && disponibilidadeDeHoras === "sim"

  console.log(ValidaInscricao)
}