function verificarVelocidade(){

    var inVelocidadePermitida = document.getElementById("inVelocidadePermitida");
    var inVelocidadeDoVeiculo = document.getElementById("inVelocidadeDoVeiculo");
    var outResposta = document.getElementById("outResposta");

    var velocidadePermitida = Number(inVelocidadePermitida.value);
    var velocidadeDoVeiculo = Number(inVelocidadeDoVeiculo.value);
    var taxaVelocidade = 1 + (velocidadeDoVeiculo - velocidadePermitida)/velocidadePermitida;

    
    if (taxaVelocidade <= 1.00) {
        outResposta.textContent = "Sem Multa";
    } if (taxaVelocidade > 1.00 && taxaVelocidade <= 1.20) {
        outResposta.textContent = "Multa Leve";
    } if (taxaVelocidade > 1.20) {
    outResposta.textContent = "Multa Grave";
    }
}

var btExibir = document.getElementById("btExibir");
btExibir.addEventListener("click", verificarVelocidade);