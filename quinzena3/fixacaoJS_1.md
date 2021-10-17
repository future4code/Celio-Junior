``` javascript
function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
  const salarioFuncionario = 2000
  let salarioComComissao = salarioFuncionario
  
  let valoresCarros = (valorTotalVendas / qtdeCarrosVendidos)
  
  let comissaoPorCarro = ((valoresCarros * 0.05) + 100) * qtdeCarrosVendidos
  
  if (qtdeCarrosVendidos > 0) {
  
    salarioComComissao = (comissaoPorCarro + salarioFuncionario)
  
  }
  
  return salarioComComissao
}
ˋˋˋ