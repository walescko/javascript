function mostrarPromocao(){
    let inVeiculo = document.getElementById("inVeiculo");
    let inPreco = document.getElementById("inPreco");
    let outVeiculo = document.getElementById("outVeiculo");
    let outEntrada = document.getElementById("outEntrada");
    let outParcela = document.getElementById("outParcela");

    let veiculo = inVeiculo.value;
    let preco = Number(inPreco.value);

    let entrada = preco * 0.50;
    let parcela = (preco * 0.50) / 12;

    outVeiculo.textContent = "Promoção: " + veiculo;
    outEntrada.textContent = "Entrada de R$ " + entrada.toFixed(2);
    outParcela.textContent = "12x de R$ " + parcela.toFixed(2);
}

let btVerPromocao = document.getElementById("btVerPromocao");
btVerPromocao.addEventListener("click", mostrarPromocao);