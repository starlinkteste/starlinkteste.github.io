
let users = [];







function Logar(event) {

    event.preventDefault();

    let user = document.querySelector(".user").value
    let password = document.querySelector(".password").value
    let passwordErr = document.querySelector(".passwordempty").value

    

    if (user == "") {
        userEmpty = document.querySelector(".userempty").innerHTML = "Insira Seu Usuario"
    }

    if (password == "") {
        passwordErr = document.querySelector(".passwordempty").innerHTML = "Insira Seu Usuario"
    }



    // if (!userData) {
    //     // return alert("Usuário e/ou senha inválidos!");
    //     document.querySelector(".errorUser").style.display = "block";
    // }
    function redirectTime() {

        window.location.href = "./acesso-ao-monitoramento.html"
    }

    fetch("https://api.airtable.com/v0/appMDYUeevpd4uEv4/tblyROApoN0xNjgU2", {

        headers: {
            Authorization: 'Bearer patdww3cGrjiInTN8.07357867d86f0cbd2bb545f71d3d79ded7d2537413ed4db9a409580381a70f26',
        }

    }).then((resp) => {
        return resp.json()
    }).then((data) => {

        alunos = data.records
        alunos.map((aluno) => {
            
         console.log(aluno.fields.USER)
         
         if (password === aluno.fields.SENHA & user === aluno.fields.USER) {
             
             localStorage.setItem("USER", aluno.fields.USER)
             localStorage.setItem("NOME", aluno.fields.NOME)
             localStorage.setItem("SENHA", password)
             localStorage.setItem("CPF", aluno.fields.CPF)
             localStorage.setItem("CEP", aluno.fields.CEP)
             localStorage.setItem("ETAPA", aluno.fields.ETAPA)
             localStorage.setItem("Status", aluno.fields.Status)
             localStorage.setItem("Liberado", "usuario ok")
             redirectTime();

            }
        })
    })
}


function closeAlert() {
    document.querySelector(".errorUser").style.display = "none";
}



function Click() {

    const passwordInput = document.querySelector("#password")
    const eye = document.querySelector("#eye")

    console.log('eye')
    eye.classList.toggle("fa-eye-slash")
    const type = passwordInput.getAttribute("type") === "password" ? "text" : "password"
    passwordInput.setAttribute("type", type)
}