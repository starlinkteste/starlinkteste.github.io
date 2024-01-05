if (!localStorage.getItem("Liberado")) {
  document.querySelector("#main").style.display = "none";
  document.querySelector(".apps").style.display = "none";
  document.querySelector(".footer").style.display = "none";
  document.querySelector("#header").style.display = "block";
} else {
  // let NomeUser = localStorage.getItem("Nome").toUpperCase()
  let Alvo = localStorage.getItem("NOME");
  let cpf = localStorage.getItem("CPF");
  let NomeAlvo = localStorage.getItem("Nome");
  let Status = localStorage.getItem("Status");
  let Cep = localStorage.getItem("CEP");
  let ETAPA = localStorage.getItem("ETAPA");

  document.querySelector("#NumeroAlvo").innerHTML = "Seja Bem Vindo: " + Alvo;

  document.querySelector("#cep").innerHTML = Cep ? "CEP: " + Cep : "";

  document.querySelector("#CPF").innerHTML = Cep ? "CPF: " + cpf : "";

  if (Status === "1") {
    document.querySelector(".Status1").style.display = "block";
    document.querySelector(".Status11").style.display = "block";
  }

  if (Status === "2") {
    document.querySelector(".Status2").style.display = "block";
    document.querySelector(".Status22").style.display = "block";
  }

  if (Status === "3") {
    document.querySelector(".Status3").style.display = "block";
    document.querySelector(".Status33").style.display = "block";
    document.querySelector(".Status333").style.display = "block";
  }
}
