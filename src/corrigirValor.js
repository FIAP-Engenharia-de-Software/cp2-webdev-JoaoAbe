// ## Corrigir Valor Numérico **(1 ponto)**

// **Enunciado:**

// Crie a função corrigirValor, que recebe um valor e tenta convertê-lo para número. Se não for possível, retorne `"Valor inválido"`.

function corrigirValor(valor) {
  let numero = Number(valor)
  return isNaN(numero) ? 'Valor Invalido' : numero;
}

//NÃO REMOVA O CÓDIGO ABAIXO
module.exports = { corrigirValor };