function teste1(num) {
    if (num > 7)
        console.log(num)
    console.log('Final')
}

teste1(6)
teste1(8)
console.log()

function teste2(num) {
    if (num > 7); { //neste caso o if esta sendo finalizado pelo ;
        console.log(num)
    }
}
teste2(6)
teste2(8)