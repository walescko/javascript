let clubes = [];

function cadastrarClube(){

    let inClube = document.getElementById("inClube");

    let clube = inClube.value;

    if (clube == ""){
        alert("Informe o nome do Clube!");
        inClube.focus();
        return;
    }

    clubes.push(clube);

    inClube.value = "";
    inClube.focus();

    listarClubes();
}

function listarClubes(){
    if (clubes.length == 0){
        alert("Não há clubes cadastrados!");
        return;
    }

    let listaClubes = "";

    for (let i = 0; i < clubes.length; i++){
        listaClubes += (i+1) + ". " + clubes[i] + "\n";
    }

    document.getElementById("outLista").textContent = "Clubes Cadastrados:\n" + listaClubes;
}

function ordenarAlfabetica(){
    if (clubes.length == 0){
        alert("Não há Clubes cadastrados");
        return;
    }

    let copiaClubes = clubes.slice();

    copiaClubes.sort(function(a,b){
            let x = a.toUpperCase(),
                y = b.toUpperCase();
                return x==y ? 0 : x > y ? 1 : -1;});

    let listaAlfabetica = "";

    for (let i = 0; i < clubes.length; i++){
        listaAlfabetica += copiaClubes[i] + "\n";
    }

    document.getElementById("outLista").textContent = "Lista por ordem Alfabética:\n" + listaAlfabetica;

}

function montarJogos(){

    document.getElementById("outLista").textContent = "Partidas Eliminatórias";
}

let btAdicionar = document.getElementById("btAdicionar");
let btListar = document.getElementById("btListar");
let btOrdemAlfabetica = document.getElementById("btOrdemAlfabetica");
let btMontarJogos = document.getElementById("btJogos");

btAdicionar.addEventListener("click", cadastrarClube);
btListar.addEventListener("click", listarClubes);
btOrdemAlfabetica.addEventListener("click", ordenarAlfabetica);
btMontarJogos.addEventListener("click", montarJogos);