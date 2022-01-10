function verSenha(){
    let inSenha = document.getElementById("inSenha");
    let outResposta = document.getElementById("outResposta");

    let senha = inSenha.value;

    let erros = [];

    if (senha.length < 8 || senha.length > 15){
        erros.push("ter entre 8 e 15 caracteres");
    }
    if (senha.match(/[0-9]/g)==null){
        erros.push("ter pelo meno 1 número");
    }
    if (!senha.match(/[a-z]/g)) {
        erros.push("ter pelo meno 1 letra minuscula");
    }
    if(!senha.match(/[A-Z]/g) || senha.match(/[A-Z]/g).length == 1){
        erros.push("pelo menos, ter duas letras maiúsculas");
    }
    if(!senha.match(/[\W|_]/g)){
        erros.push("possuir pelo menos 1 caracter especial");
    }

    if (erros.length == 0){
        outResposta.textContent = "Senha Válida";
    } else {
        outResposta.textContent = "Erro. A senha deve " + erros.join(", ");
    }
}

let btVerificar = document.getElementById("btVerificar");
btVerificar.addEventListener("click", verSenha);

function limparDados(){
    location.reload();
}
let btLimpar = document.getElementById("btLimpar");
btLimpar.addEventListener("click", limparDados);