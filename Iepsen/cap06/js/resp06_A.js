let mensagemCriptografada = "";

function criptografar(){
    let inMensagem = document.getElementById("inMensagem");
    let outCriptografia = document.getElementById("outCriptografia");


    let mensagem = inMensagem.value;
    let tamanho = mensagem.length;

    
    let criptoPar = [];
    let criptoImpar = [];
        
    for (let i = 0 ; i <= tamanho ; i = i+2){
        if ( i % 2 == 0 ){
            criptoPar[i] = mensagem.charAt(i);
        } 
    }

    for (let i = 0 ; i <= tamanho ; i = 2*i+1){
        if ( i % 2 != 0 ){
            criptoImpar[i] = mensagem.charAt(i);
        } 
    }

    for (let i = 0; i < tamanho/2; i++){
        if (i % 2 == 0){
        mensagemCriptografada = mensagemCriptografada + criptoPar[i];
    }


    for (let i = 0; i < tamanho/2; i++){
        if (i % 2 != 0){
        mensagemCriptografada = mensagemCriptografada + criptoImpar[i];
    }

    outCriptografia.textContent = "Mensagem a criptografar: " + mensagemCriptografada;
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
let btLimpar = document.getElementById("btLimpar");
btLimpar.addEventListener("click", limparDados);