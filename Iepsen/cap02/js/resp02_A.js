function CalcularPromocao(){
    var inMedicamento = document.getElementById("inMedicamento");
    var inPreco = document.getElementById("inPreco");
    var outMedicamento = document.getElementById("outMedicamento");
    var outPromocao = document.getElementById("outPromocao");

    //var preco = Number(inPreco.value);
    var promocao = Math.floor(inPreco.value*2);
    var outMedicamento = inMedicamento.value;

    outMedicamento.textContent = "Promocao de " + outMedicamento;
    outPromocao.textContent = "Leve 2 por apenas R$ " + promocao.toFixed(2);

}

var btPromocao = document.getElementById("btPromocao");
btPromocao.addEventListener("click", CalcularPromocao);