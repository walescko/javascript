function listarNumeros(){

    var inNumero = document.getElementById("inNumero");
    var outResposta = document.getElementById("outResposta");

    var numero = Number(inNumero.value);

    if (numero == 0 || isNaN(numero)){
        alert("Informe um número inteiro!");
        inNumero.focus();
        return;
    }

    var resposta = "Entre " + numero + " e 1: ";

    for (var i = numero; i > 0 ; i = i - 1){
        resposta = resposta + i + ", ";
    }

    outResposta.textContent = resposta;
}

var btDecrescer = document.getElementById("btDecrescer");
btDecrescer.addEventListener("click", listarNumeros);