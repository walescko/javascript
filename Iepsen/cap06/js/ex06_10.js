const taxaMulta = 2/100;
const taxaJuros = 0.33/100;

function calcularMultaJuros(){
    let inDataVencimento = document.getElementById("inDataVencimento");
    let inValor = document.getElementById("inValor");
    let outMulta = document.getElementById("outMulta");
    let outJuros = document.getElementById("outJuros");
    let outTotal = document.getElementById("outTotal");

    let dataVencimento = inDataVencimento.value;
    let valor = Number(inValor.value);

    if (dataVencimento == "" || valor == 0 || isNaN(valor)){
        alert("Dados incorretos! Informe os dados da conta.");
        inDataVencimento.focus();
        return;
    }

    let hoje = new Date();
    let vencimento = new Date();

    let partes = dataVencimento.split("-");
    vencimento.setDate(Number(partes[2]));
    vencimento.setMonth(Number(partes[1])-1);
    vencimento.setFullYear(Number(partes[0]));

    let atraso = hoje - vencimento;

    let multa = 0;
    let juros = 0;

    if (atraso > 0){
        let dias = Math.round(atraso/86400000);
        multa = valor * taxaMulta;
        juros = (valor * taxaJuros) * dias; 
    }

    let total = valor + juros + multa;

    outMulta.value = multa.toFixed(2);
    outJuros.value = juros.toFixed(2);
    outTotal.value = total.toFixed(2);
}

let btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", calcularMultaJuros);

function limparDados(){
    location.reload();
}
let btLimpar = document.getElementById("btNovaConta");
btLimpar.addEventListener("click", limparDados);