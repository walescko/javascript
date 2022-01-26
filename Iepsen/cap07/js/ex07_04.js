let btExibir = document.getElementById("btExibir");

btExibir.addEventListener("click", function(){
    let inPreco = document.getElementById("inPreco");
    let outParcelas = document.getElementById("outParcelas");

    let preco = Number(inPreco.value);

    let lista = "";

    for (let i = 1; i <= 10; i++){
        lista += i + 'x de R$ ' + (preco/i).toFixed(2) + '\n';
    }

    outParcelas.textContent = 'Opções de Pagamento:\n\n' + lista;
});

function limparDados(){
    location.reload();
}
let btLimpar = document.getElementById("btLimpar");
btLimpar.addEventListener("click", limparDados);