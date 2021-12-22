function CalcularValorPagar(){
    var inPrecoUso = document.getElementById("inPrecoUso");
    var inTempoDeUso = document.getElementById("inTempoDeUso");
    var outTempoDeUso = document.getElementById("outTempoDeUso");
    var outValor = document.getElementById("outValor");
    
    var preco = Number(inPrecoUso.value);
    var tempo = Number(inTempoDeUso.value);
    var valor = preco * (Math.ceil(tempo/15));

    outTempoDeUso.textContent = "Tempo de uso " + tempo + " min.";
    outValor= "Valor a ser pago R$ " + valor.toFixed(2);

}

var btValor = document.getElementById("btValor");
btValor.addEventListener("click", CalcularValorPagar);