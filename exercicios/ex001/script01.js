function carregar() {
let msg = document.getElementById("msg")
let img = document.getElementById("imagem")
let data = new Date()
let hora = data.getHours()
msg.innerHTML = `<strong>Agora são ${hora} horas</strong>`

    if (hora >= 0 && hora <= 12) {
    // BOM DIA
    img.src = "imagens/manhascale.jpg"
    document.body.style.background = "#e2cd9f"
    } else if (hora >= 13 && hora <= 19) {
    // BOA TARDE
    img.src = "imagens/tardescale.jpg"
    document.body.style.background = "#b9846f"
    } else {
    // BOA NOITE
    img.src = "imagens/noitescale.jpg"
    document.body.style.background = "#515154"
    }
}