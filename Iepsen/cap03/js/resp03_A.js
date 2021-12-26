function testeParImpar(){

    var inNumero = document.getElementById("inNumero");
    var outResposta = document.getElementById("outResposta");

    var numeroTestado = Number(inNumero.value);
    
    if (numeroTestado % 2 != 0){
        outResposta.textContent = "O número " + numeroTestado + " é Ímpar.";
    } else {
        outResposta.textContent = "O número " + numeroTestado + " é Par.";
    }
    
}

var btExibir = document.getElementById("btExibir");
btExibir.addEventListener("click", testeParImpar);