function rechercher() {
  let animal = document.getElementById("txtani").value.toLowerCase();
  let genre = "";
  let res = document.querySelector("div#res");
  let img = document.createElement("img");
  img.setAttribute("id", "photo");

  if (animal === "chien" || animal === "chienne") {
    genre = "chien";
    img.setAttribute("src", "imagens/chien.jpg");
  } else if (animal === "chat" || animal === "chatte") {
    genre = "chat";
    img.setAttribute("src", "imagens/chat.jpg");
  } else if (animal === "koala") {
    genre = "koala";
    img.setAttribute("src", "imagens/koala.jpg");
  } else if (animal === "lapin" || animal === "lapine") {
    genre = "lapin";
    img.setAttribute("src", "imagens/lapin.jpg");
  } else if (animal === "panda") {
    genre = "panda";
    img.setAttribute("src", "imagens/panda.jpg");
  } else if (animal === "poisson") {
    genre = "poisson";
    img.setAttribute("src", "imagens/poisson.jpg");
  } else {
    genre = "[ERROR]"
    img.setAttribute("src", "imagens/error.png")
  }

  res.style.textAlign = "center";
  res.innerHTML = `Voici une photo d'un magnifique <strong>${genre}</strong> !`;
  res.appendChild(img);
}
