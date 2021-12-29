var numeroDeContas = 0;
var valorTotal = 0;
var resposta = "";

function registrarConta(){

    var inDescricao = document.getElementById("inDescricao");
    var inValor = document.getElementById("inValor");
    var outListaContas = document.getElementById("outListaContas");
    var outTotal = document.getElementById("outTotal");

    var descricao = inDescricao.value;
    var valor = Number(inValor.value);

    if (descricao == "" ||valor ==0 || isNaN(valor)){
        alert("Informe os dados corretamente.");
        inDescricao.focus();
        return;
    }

    numeroDeContas++;
    valorTotal = valorTotal + valor;

    resposta = resposta + descricao + " - R$ " + valor.toFixed(2) + "\n";

    outListaContas.textContent = resposta + "------------------------";
    outTotal.textContent = numeroDeContas + " Conta(s) - Total R$ " + valorTotal.toFixed(2);

    inDescricao.value = "";
    inValor.value = "";
    inDescricao.focus();
    
}

var btRegistrar = document.getElementById("btRegistrar");
btRegistrar.addEventListener("click", registrarConta);