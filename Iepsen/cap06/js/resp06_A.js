let inMensagem = document.getElementById("inMensagem");

function criptografar(){
    let mensagem = inMensagem.value;
    let tamanho = mensagem.length;

    if (mensagem == ""){
        alert("Faltou a mensagem!\nDigitar a Mensagem!");
        inMensagem.focus();
        return;
    }
    
    let criptoImpar = "";
    let criptoPar = "";

    for (let i = 0 ; i <= tamanho ; i++){
        if ( i % 2 != 0 ){
            criptoPar += mensagem.charAt(i);
        } else {
            criptoImpar += mensagem.charAt(i);
        } 
    }
       
    document.getElementById("outCriptografia").textContent = "Mensagem a criptografada: " + criptoPar+criptoImpar;
    
}

function descriptografar(){
    let mensagem = inMensagem.value;
    let tamanho = mensagem.length;
    let mensagemDescriptografada = "";

    if (mensagem == ""){
        alert("Faltou a mensagem a ser criptografada!\nDigitar a Mensagem!");
        inMensagem.focus();
        return
    }

    let metade = Math.floor(tamanho/2);

    if (tamanho % 2 == 0){
        for (let i = metade; i < tamanho; i++){
            mensagemDescriptografada += mensagem.charAt(i);
            mensagemDescriptografada += mensagem.charAt(i - metade);
        }
    } else {
        for (let i = metade; i < tamanho-1 ; i++){
            mensagemDescriptografada += mensagem.charAt(i);
            mensagemDescriptografada += mensagem.charAt(i - metade);
            }
            mensagemDescriptografada += mensagem.charAt(i);
        }
            
    document.getElementById("outCriptografia").textContent = "A Mensagem original é: " + mensagemDescriptografada;
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