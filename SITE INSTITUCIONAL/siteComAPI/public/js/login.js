function entrar() {
    

    var formulario = new URLSearchParams(new FormData(document.getElementById("form_login")));

    console.log("FORM LOGIN: ", formulario.get("login"));
    console.log("FORM SENHA: ", formulario.get("senha"));

    fetch("/usuarios/autenticar", {
        method: "POST",
        body: formulario
    }).then(function (resposta) {
        console.log("ESTOU NO THEN DO entrar()!")

        if (resposta.ok) {
            console.log(resposta);

            resposta.json().then(json => {
                console.log(json);
                console.log(JSON.stringify(json));

                sessionStorage.LOGIN_USUARIO = json.login;
                sessionStorage.NOME_USUARIO = json.nomeEmpresa;
                sessionStorage.ID_USUARIO = json.idEmpresa;

                setTimeout(function () {
                    window.location = "/index.html";
                }, 1000);
            });

        } else {

            console.log("Erro de login!");

            resposta.text().then(texto => {
                console.error(texto);
                // limparFormulario();
                
            });
        }

    }).catch(function (erro) {
        console.log(erro);
    })

    return false;
}

function validarSessao() {
    

    var login = sessionStorage.LOGIN_USUARIO;
    var nomeEmpresa = sessionStorage.NOME_USUARIO;
    var idUsuario =  sessionStorage.ID_USUARIO;
  
    var h1Titulo = document.getElementById("h1_titulo");

    if (login != null && nomeEmpresa != null) {
        // window.alert(`Seja bem-vindo, ${nome}!`);
        h1Titulo.innerHTML = `${login}`;

        
    } else {
        window.location = "login.html";
    }
}

function sair() {
    
    sessionStorage.clear();
    
    window.location = "login.html";  
}