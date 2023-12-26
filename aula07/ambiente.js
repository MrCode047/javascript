let num = [5, 8, 2, 9 ,3]
num[5] = 1
num.push(6)
num.sort() // pour ordre croissant
console.log(`Nosso vetor é o ${num}`)
console.log(`O vetor tem ${num.length} position`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(8)
if(pos == -1) {
    console.log(`O valor não foi encontrado !`)
} else {
    console.log(`O valor 8 está na posição ${pos}`)
}
