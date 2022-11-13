// Usando o spread operator:

let participantes = ['João', 'Maria']
let outros = ['José', 'Ana', 'Pedro']

// 1) Adicionando novos participantes 1 por 1:
participantes.push(outros[0])
participantes.push(outros[1])
participantes.push(outros[2])

// 2) Adicionando todos com o spread operator:
participantes.push(...outros)

// 3) Adicionando todos sem o método push:
participantes = [...participantes, ...outros]
