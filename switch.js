const imprimirResultado = function (nota) {
    switch(Math.floor(nota)){
        case 10: // Neste caso se deixar o bloco do case vazio ele vai executar o case 9 evitando repetição de linhas codigos
        case 9:
            console.log('Quadro de Honra')
            break // em JS o codigo só saira do switch com break, caso contrario ele executará as linhas de baixo
        case 8: case 7: //mesmo caso do case 10 case 9
            console.log('Aprovado')
            break
        case 6: case 5: case 4:
                console.log('Recuperação')
                break
        case 3: case 2: case 1: case 0:
            console.log('Reprovado')
        default: // caso os outro case nao sejam executados
            console.log('Nota invalida')
    }
}

imprimirResultado(10)
imprimirResultado(8.9)
imprimirResultado(6.55)
imprimirResultado(2.3)
imprimirResultado(-1)
imprimirResultado(11)