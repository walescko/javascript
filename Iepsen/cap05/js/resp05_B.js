let numeros = []

function adicionarNumeros(){

    let inNumero = document.getElementById("inNumero");

    let numero = Number(inNumero.value);

    numeros.push(numero);

    listarNumeros();
}

function listarNumeros(){

    if (numeros.length == 0){
        alert("Não há números registrados!");
        return;
    }

    let listarNumeros = numeros[0];

    for (let i = 1; i < numeros.length; i++){
        listarNumeros += ", " + numeros[i];
    }

    document.getElementById("outLista").textContent = "Número Digitados: " + listarNumeros;
}

function limparDados(){
    location.reload();
}

let btAdicionar = document.getElementById("btAdicionar");
let btVerificar = document.getElementById("btVerificar");
let btLimpar = document.getElementById("btLimpar");

btAdicionar.addEventListener("click", adicionarNumeros);
btVerificar.addEventListener("click", verificarOrdem);
btLimpar.addEventListener("click", limparDados);