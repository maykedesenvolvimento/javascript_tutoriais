// Usando o spread operator:

let pessoas = ['João', 'Maria']

// Forma errada de copiar
let pessoas2 = pessoas
// Porquê? Veja o que acontece a seguir.
pessoas2.push('Joca')
console.log(pessoas1)
// Saída: ['João', 'Maria', 'Joca']
console.log(pessoas2)
// Saída: ['João', 'Maria', 'Joca']

// Forma correta de copiar
let pessoas3 = [...pessoas]
// Agora sim, podemos adicionar um novo
// elemento sem afetar a variável original.
pessoas3.push('Joca')
console.log(pessoas) // Saída: ['João', 'Maria']
console.log(pessoas3)
// Saída: ['João', 'Maria', 'Joca']
