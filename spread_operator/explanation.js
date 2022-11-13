// 1) Spread Operator com arrays:
let array = [1, 2, 3]

console.log(array) // Saída: [1, 2, 3]
console.log(...array) // Saída: 1 2 3
console.log(array[0], array[1], array[2])
// Saída: 1 2 3

// 2) Spread Operator com Objetos:
let objeto = {
  nome: 'João',
  sobrenome: 'da Silva',
  idade: 20,
}
let { nome, sobrenome } = objeto
console.log(`Nome completo: ${nome} ${sobrenome}`)
// Saída: Nome completo: João da Silva
let { idade, ...resto } = objeto
console.log(resto)
// Saída: { nome: 'João', sobrenome: 'da Silva' }
