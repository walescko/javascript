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

    for(let i = 0; i < apostas.length;i++){
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

    if(numero >= 1 && numero <= tamanho){
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

function obterCavalo(numero){
    let posicao = numero-1;
    return CAVALOS[posicao];
}

function contarApostas(numeroCavalo){
    let contador = 0;
    for (let i=0; i < apostas.length; i++){
        if (apostas[i].cavalo == numeroCavalo){
            contador++;
        }
    }
    return contador;
}

function totalizarApostas(numeroCavalo){
    let total = 0;
    for (let i = 0; i < apostas.length; i++){
        if(apostas[i].cavalo == numeroCavalo){
            total = total + apostas[i].valor;
        }
    }
    return total;
}

inCavalo.addEventListener("focus", function(){
    inCavalo.value = "";
    document.getElementById("outCavalo").textContent = "";
});

function ganhadorPareo(){
    let ganhador = Number(prompt("Nº Cavalo Ganhador: "));

    if(isNaN(ganhador) || !validarCavalo(ganhador)){
        alert("Cavalo Inválido");
        return;
    }

    let outApostas = document.getElementById("outApostas");

    let resumo = "Resultado Final no Páreo\n"
    resumo += "----------------------\n"
    resumo += "Nº Total de Apostas: " + apostas.length + "\n";
    resumo += "Total Geral R$ " + totalizarGeral().toFixed(2) + "\n\n";
    resumo += "Ganhador Nº " + ganhador + " - " + obterCavalo(ganhador) + "\n";
    resumo += "-----------------------\n";
    resumo += "Nº de Apostas: " + contarApostas(ganhador) + "\n";
    resumo += "Total Apostado R$ " + totalizarApostas(ganhador).toFixed(2);

    outApostas.textContent = resumo;
    
    btApostar.disabled = true;
    btGanhador.disabled = true;
    btNovo.focus();
}

let btGanhador = document.getElementById("btGanhador");
btGanhador.addEventListener("click", ganhadorPareo);

function totalizarGeral(){
    let total = 0;
    for (let i = 0; i < apostas.length; i++){
        total = total + apostas[i].valor;
    }
    return total;
}

let btNovo = document.getElementById("btNovo");
btNovo.addEventListener("click", function(){
    location.reload();
});