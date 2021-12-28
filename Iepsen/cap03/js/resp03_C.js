function paquimetro(){

    var inValorPago = document.getElementById("inValorPago");
    var outResposta = document.getElementById("outResposta");
    var outTroco = document.getElementById("outTroco");

    var valorPago = Number(inValorPago.value);
    var troco;

    if (valorPago < 1.00) {
        outResposta.textContent = "Saldo Insuficiente, valor minimo de R$ 1,00.";
        outTroco.textContent = "";
    }

    if (valorPago >= 1.00 && valorPago < 1.75){
        troco = valorPago - 1;
        outResposta.textContent = "Tempo: 30 minutos.";
    } else if (valorPago >= 1.75 && valorPago < 3.00){
        troco = valorPago - 1.75;
        outResposta.textContent = "Tempo: 60 minutos";
    } else if (valorPago >= 3.00) {
        troco = valorPago - 3;
        outResposta.textContent = "Tempo: 120 minutos - tempo máximo";
    }

    if (troco != 0 ){
        outTroco.textContent = "Troco R$ " + troco.toFixed(2);
    }
       
}

var btExibir = document.getElementById("btExibir");
btExibir.addEventListener("click", paquimetro);