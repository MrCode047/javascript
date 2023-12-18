function charger() {
let msg = document.getElementById("msg")
let img = document.getElementById("img")
let data = new Date()
let heure = data.getHours()
msg.innerHTML = `<strong>Il est ${heure} heures !</strong>`

    if (heure >= 0 && heure <=12) {
    img.src = "imagens/matin.jpg"
    document.body.style.background = "darkgrey"
    } else if (heure >=13 && heure <= 20){
    img.src = "imagens/jour.jpg"
    document.body.style.background = "chocolate"
    } else {
    img.src = "imagens/nuit.jpg"
    }
}