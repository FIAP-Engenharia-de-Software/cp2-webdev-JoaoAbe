// ### Calculadora Simples (2 pontos)

// **Enunciado:**

// Crie uma função chamada Calcular, que recebe dois números e uma operação matemática (`+`, `-`, `*`, `/`). A função deve:

// - Retornar `"Erro: parâmetros inválidos"` se `a` ou `b` não forem números.
// - Retornar `"Erro: divisão por zero"` se tentar dividir por zero;
// - Retornar `"Erro: operação inválida"` se for passado um operador desconhecido;
// - Executar a operação correta e retornar o resultado;

function calcular(num1, num2, operador) {
  if (num1 === 0) {
    return "Erro: divisão por zero"
  }
  if (num1 !== Number) {
    return "Erro: parâmetros inválidos"
  }
  if (num1 === NaN) {
    return "Erro: operação inválida"
  }

  if (num2 === 0) {
    return "Erro: divisão por zero"
  }
  if (num2 !== Number) {
    return "Erro: parâmetros inválidos"
  }
  if (num2 === NaN) {
    return "Erro: operação inválida"
  }

  const somaNum = num1 + num2
  return somaNum
}


//NÃO REMOVA O CÓDIGO ABAIXO
module.exports = { calcular };