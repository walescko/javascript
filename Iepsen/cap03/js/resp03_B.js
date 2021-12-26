function verificarVelocidade(){

    var inVelocidadePermitida = document.getElementById("inVelocidadePermitida");
    var inVelocidadeDoVeiculo = document.getElementById("inVelocidadeDoVeiculo");
    var outResposta = document.getElementById("outResposta");

    var velocidadePermitida = Number(inVelocidadePermitida.value);
    var velocidadeDoVeiculo = Number(inVelocidadeDoVeiculo.value);
    
    if (velocidadePermitida <= 0 || isNaN(velocidadePermitida)){
        alert("Valor inválido - informe a velocidade permitida na via!");
        inVelocidadePermitida.focus();
        return;
    }

    if (velocidadeDoVeiculo <= 0 || isNaN(velocidadeDoVeiculo)){
        alert("Valor inválido - informe a velocidade do Veículo!");
        inVelocidadePermitida.focus();
        return;
    }

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