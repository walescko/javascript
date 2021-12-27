function paquimetro(){

    var inValorPago = document.getElementById("inValorPago");
    var outResposta = document.getElementById("outResposta");


    var valorPago = Number(inValorPago.value);

    if (valorPago < 1.00) {
        outResposta.textContent = "Saldo Insuficiente, valor minimo de R$ 1,00.";
    }

    // outResposta.textContent = "Saldo Insuficiente, valor " + valorPago +", minimo R$ 1.00";
}

var btExibir = document.getElementById("btExibir");
btExibir.addEventListener("click", paquimetro);