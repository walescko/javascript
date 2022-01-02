let carros = [];

function adicionarCarros(){
    
    let inModelo = document.getElementById("inModelo");
    let inPreco = document.getElementById("inPreco");
  
    let modelo = inModelo.value;
    let preco = Number(inPreco.value);

    if (modelo == "" || preco == 0 || isNaN(preco)){
        alert("Informe corretamente os dados");
        inModelo.focus();
        return;
    }

    carros.push({modelo: modelo, preco : preco});

    inModelo.value = "";
    inPreco.value = "";
    inModelo.focus();

    listarCarros();
}

function listarCarros(){
    
    if (carros.length == 0){ 
        alert("Não há carros para ser listado!")
        return;
    }

    let lista = "";

    for (let i = 0; i < carros.length; i++){
        lista += carros[i].modelo + " - R$ " + carros[i].preco.toFixed(2) + "\n";
    }

    document.getElementById("outLista").textContent = lista;
}

function filtrarCarros(){
    let maximo = Number(prompt("Qual o valor máximo que o cliente deseja pagar?"));

    if (maximo == 0 || isNaN(maximo)){
        return;
    }

    var lista = "";

    for (let i = 0; i < carros.length; i++){
        if (carros[i].preco <= maximo){
            lista += carros[i].modelo + " - R$ " + carros[i].preco.toFixed(2) + "\n";
        }
    }

    var outLista = document.getElementById("outLista");

    if (lista == ""){
        outLista.textContent = "Não há carros com preço até R$ " + maximo.toFixed(2);
    } else {
        outLista.textContent = "Carros até R$ " + maximo.toFixed(2) + "\n -----------------\n" + lista;
    }
}

let btAdicionar = document.getElementById("btAdicionar");
let btListar = document.getElementById("btListar");
let btFiltrar = document.getElementById("btFiltrar");
 
btAdicionar.addEventListener("click", adicionarCarros);
btListar.addEventListener("click", listarCarros);
btFiltrar.addEventListener("click", filtrarCarros);
