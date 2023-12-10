function charger() {
let msg = document.getElementById("msg")
let img = document.getElementById("img")
let data = new Date()
let heure = data.getHours()
msg.innerHTML = `Il est ${heure} heures !`


}