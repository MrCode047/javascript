let agora = new Date()
let hora = agora.getHours()
console.log (`Agora sâo exatamente ${hora} horas`)
if (hora <= 12) {
    console.log ("Bom dia !")
} else if (hora <= 19){
    console.log ("Boa tarde !")
} else {
    console.log("Boa noite !")
}