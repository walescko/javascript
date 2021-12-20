function valorPagarBuffet(){

    var inPrecoQuilo = document.getElementById("inPrecoQuilo");
    var inQuantidadeCliente = document.getElementById("inQuantidadeCliente");
    var outValorPagar = document.getElementById("outValorPagar");

    var precoQuilo = Number(inPrecoQuilo.value);
    var quantidadeCliente = Number(inQuantidadeCliente.value);

    var valorPagar = (precoQuilo/1000)*quantidadeCliente;

    outValorPagar.textContent = "Valor a pagar: R$ " + valorPagar.toFixed(2);    
}

var btValorPagar = document.getElementById("btValorPagar");
btValorPagar.addEventListener("click", valorPagarBuffet);
