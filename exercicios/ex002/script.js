function verificar() {
  let data = new Date();
  let ano = data.getFullYear();
  let fano = document.getElementById("txtano");
  let res = document.getElementById("res");

  if (fano.value.length == 0 || Number(fano.value) > ano || Number(fano.value) < 1915) {
    alert("[ERRO] Verifique os dados e digite novamente!");
  } else {
    let fsex = document.getElementsByName("radsex");
    let idade = ano - Number(fano.value);
    let genero = "";
    let img = document.createElement("img");
    img.setAttribute("id", "foto");
    if (fsex[0].checked) {
        if (idade >= 0 && idade < 10) {
        // bebe
        genero = "uma criança";
        img.setAttribute("src", "imagens/babyboy.jpg");
      } else if (idade >= 10 && idade < 18) {
        // ado
        genero = "um adolescente"
        img.setAttribute("src", "imagens/adogarcon.jpg");
      } else if (idade >= 18 && idade < 50) {
        // homem
        genero = "um homem"
        img.setAttribute("src", "imagens/homme.jpg");
      } else {
        // idoso
        genero = "um idoso"
        img.setAttribute("src", "imagens/vieilhomme.jpg");
      }
    } else if (fsex[1].checked) {
      if (idade >= 0 && idade < 10) {
        // bebe
        genero = "uma criança"
        img.setAttribute("src", "imagens/babygirl.jpg");
      } else if (idade >= 10 && idade < 18) {
        // ado
        genero = "uma adolescente"
        img.setAttribute("src", "imagens/adofille.jpg");
      } else if (idade >= 18 && idade < 50) {
        // mulher
        genero = "uma mulher"
        img.setAttribute("src", "imagens/femme.jpg");
      } else {
        // idoso
        genero = "uma idosa"
        img.setAttribute("src", "imagens/dame.jpg");
      }
    }
    res.style.textAlign = "center";
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
    res.appendChild(img);
  }
}
