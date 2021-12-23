function CalcularPromocao(){
    var inProduto = document.getElementById("inProduto");
    var inPreco = document.getElementById("inPreco");
    var outProduto = document.getElementById("outProduto");
    var outDesconto = document.getElementById("outDesconto");

    var produto = inProduto.value;
    var preco = Number(inPreco.value);
    var desconto = preco*0.5;
    var promocao = (preco*3-desconto);

    outProduto.textContent = produto + " - Promoção: Leve 3 por R$ " + promocao.toFixed(2);
    outDesconto.textContent = "O 3º produto custa apenas " + desconto.toFixed(2);

}

var btPromocao = document.getElementById("btPromocao");
btPromocao.addEventListener("click", CalcularPromocao);