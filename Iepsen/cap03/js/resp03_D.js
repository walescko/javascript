function triangulo(){

    var inLadoA = document.getElementById("inLadoA");
    var inLAdoB = document.getElementById("inLadoB");
    var inLadoC = document.getElementById("inLadoC");
    var outResposta = document.getElementById("outResposta");
    var outTipoTriangulo = document.getElementById("outTipoTriangulo");


    var ladoA = Number(inLadoA.value);
    var ladoB = Number(inLadoB.value);
    var ladoC = Number(inLadoC.value); 

    outResposta.textContent = "Lado A " + ladoA + "; Lado B " + ladoB + "; Lado C" + ladoC + ".";
    outTipoTriangulo.textContent = "Triangulo Teste";

}

function limparCampos(){
    document.getElementById("inLadoA").value = "";
    document.getElementById("inLadoB").value = "";
    document.getElementById("inLadoC").value = "";
    document.getElementById("outResposta").textContent = "";
    document.getElementById("outTipoTriangulo").textContent = "";

    document.getElementById("inLadoA").focus();
    
}

var btExibir = document.getElementById("btExibir");
var btLimpar = document.getElementById("btLimpar");
btExibir.addEventListener("click", triangulo);
btLimpar.addEventListener("click", limparCampos);