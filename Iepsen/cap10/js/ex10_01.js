const CAVALOS = ["Marujo", "Tordilho", "Belga", "Twister", "Jade", "Lucky"];
let apostas = [];

function adicionarAposta(){
    let inValor = document.getElementById("inValor");
    let outApostas = document.getElementById("outApostas");
    let cavalo = Number(inCavalo.value);
    let valor = Number(inValor.value);

    if(isNaN(cavalo) || isNaN(valor) || valor == 0 || !validarCavalo(cavalo)){
        alert("Aposta Inválida");
        inCavalo.focus();
        return;
    }

    apostas.push({cavalo: cavalo, valor:valor});
    let lista = "Apostas Realizadas\n----------------------------------\n";

    for(let i = 0); i < apostas.length;i++){
        lista += "Nº " + apostas[i].cavalo + " " + obterCavalo(apostas[i].cavalo);
        lista += " - R$ " + apostas[i].valor.toFixed(2) + "\n";
    }

    outApostas.textContent = lista;

    inCavalo.value = "";
    inValor.value = "";
    inCavalo.focus();
}

let btApostar = document.getElementById("btApostar");
btApostar.addEventListener("click", adicionarAposta);

function validarCavalo(numero){
    let tamanho = CAVALOS.length;

    if(num>= 1 && num <=tamanho){
        return true;
    } else {
        return false;
    }
}

function mostrarCavalo(){
    let outCavalo =document.getElementById("outCavalo");

    if (inCavalo.value == "") {
        outCavalo.textContent = "";
        return;
    }

    let cavalo = Number(inCavalo.value);

    if (isNaN(cavalo) || !validarCavalo(cavalo)){
        outCavalo.textContent = "Número do Cavalo Inválido";
        return;
    }

    let nomeCavalo = obterCavalo(cavalo);
    let numeroApostas = contarApostas(cavalo);
    let total = totalizarApostas(cavalo);

    outCavalo.textContent = nomeCavalo + " (Apostas: " + numeroApostas;
    outCavalo.textContent += " - R$ " + total.toFixed(2) + ")";
}

let inCavalo = document.getElementById("inCavalo");
inCavalo.addEventListener("blur", mostrarCavalo);



