let mensagemCriptografada = "";
let inMensagem = document.getElementById("inMensagem");
let criptoImpar = "";
let criptoPar = "";

function criptografar(){
    let outCriptografia = document.getElementById("outCriptografia");

    let mensagem = inMensagem.value;
    let tamanho = mensagem.length;

    for (let i = 0 ; i <= tamanho ; i++){
        if ( i % 2 != 0 ){
            criptoPar = criptoPar + mensagem.charAt(i);
        } else {
            criptoImpar = criptoImpar + mensagem.charAt(i);
        } 
    }

    mensagemCriptografada = criptoPar + criptoImpar;
    
    outCriptografia.textContent = "Mensagem a criptografada: " + criptoPar + criptoImpar;
}

function descriptografar(){
    let inDescriptografar = document.getElementById("inDescriptografar");

}

let btCriptografar = document.getElementById("btCriptografar");
let btDescriptografar = document.getElementById("btDescriptografar");
btCriptografar.addEventListener("click", criptografar)
btDescriptografar.addEventListener("click", descriptografar);

function limparDados(){
    location.reload();
}
let btLimpar = document.getElementById("btLimpar");
btLimpar.addEventListener("click", limparDados);