function getInteiroAleatorio(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = -1

do { //esta estrutura faz o calculo antes de testar a restrição
    opcao = getInteiroAleatorio(-1, 10)
    console.log(`Opcao escolhida foi ${opcao}.`)
} while (opcao != -1)

console.log('Até a proxima')