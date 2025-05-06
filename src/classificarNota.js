// Classificador de Nota (1 ponto)

// **Enunciado:**

// Implemente a função classificarNota, que receba uma nota e:

// - Retorna `"Aprovado"` se nota ≥ 6;
// - Retorna `"Reprovado"` se nota < 6;
// - Retorna `"Nota inválida"` se for um valor fora de 0 a 10 ou não numérico.

function classificarNota(nota) {
  let valor = Number(nota)
  if (valor >= 6) {
    return alert("Aprovado")
  }
  else if (valor < 6) {
    return alert("Reprovado")
  }
  else {
    return alert("Nota inválida")
  }
}

//NÃO REMOVA O CÓDIGO ABAIXO
module.exports = { classificarNota };