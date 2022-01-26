function mostrarDados(){
    let inModelo = document.getElementById("inModelo");
    let inAno = document.getElementById("inAno");
    let inPreco = document.getElementById("inPreco");
    let outClassificar = document.getElementById("outClassificar");
    let outPrecoVenda = document.getElementById("outPrecoVenda");

    let modelo = inModelo.value;
    let ano = Number(inAno.value);
    let preco = Number(inPreco.value);

    if (modelo == "" || ano == 0 || preco == 0 || isNaN(ano) || isNaN(preco)){
        alert("Informe corretamente os dados do veículo!");
        inModelo.focus();
        return;
    }

    let classificacao = classificarVeiculo(ano);
    let precoVenda = calcularVenda(preco, classificacao);

    outClassificar.textContent = modelo + " - " + classificacao;
    outPrecoVenda.textContent = "Preço de Venda R$ " + precoVenda.toFixed(2);
}

function classificarVeiculo(ano){
    let anoAtual = new Date().getFullYear();
    let classificar;

    if (ano == anoAtual){
        classificar = "Novo";
    } else if (ano == anoAtual - 1 || ano == anoAtual - 2){
        classificar = "Seminovo";
    } else {
        classificar = "Usado";
    }

    return classificar;
}

function calcularVenda(valor, status){
    let prVenda = (status == "Novo") ? valor * 1.08 : valor * 1.10;
    return prVenda;
}



let btCalucular = document.getElementById("btCalcular");
btCalucular.addEventListener("click", mostrarDados);

function limparDados(){
    location.reload();
}
let btLimpar = document.getElementById("btLimpar");
btLimpar.addEventListener("click", limparDados);