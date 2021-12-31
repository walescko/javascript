function repetirFruta(){

    let inFruta = document.getElementById("inFruta");
    let inNumero = document.getElementById("inNumero");
    let outFrutas = document.getElementById("outFrutas");

    let fruta = inFruta.value;
    let numero = Number(inNumero.value);

    outFrutas.textContent = "Teste da " + fruta + " " + numero;
}

let btRepetir = document.getElementById("btRepetir");
btRepetir.addEventListener("click", repetirFruta);