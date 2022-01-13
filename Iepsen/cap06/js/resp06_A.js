let mensagemCriptografada = "";

function criptografar(){
    let inCriptografar = document.getElementById("inCriptografar")

}

function descriptografar(){
    let inDescriptografar = document.getElementById("inDescriptografar")

}

let btCriptografar = document.getElementById("btCriptografar");
let btDescriptografar = document.getElementById("btDescriptografar");
btCriptografar.addEventListener("click", criptografar)
btDescriptografar.addEventListener("click", descriptografar);

function limparDados(){
    location.reload();
}
let btLimpar = document.getElementById("btNovaConta");
btLimpar.addEventListener("click", limparDados);