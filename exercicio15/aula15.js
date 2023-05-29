let num = [4, 3, 2, 6, 8, 7, 9]
num.push(1)
num.sort()
console.log(num)
console.log(`o vetor tem ${num.length} posições...`)
console.log(`o valor do primeiro vetor é ${num[0]}`)
let pos = num.indexOf(8)
if(pos == -1) {
console.log(`O valor não foi encontrado`)
} else {
    console.log(`O Valor 8 está na posição ${pos}`)
}