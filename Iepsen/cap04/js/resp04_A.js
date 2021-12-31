function repetirFruta(){
    let inFruta = document.getElementById("inFruta");
    let inNumero = document.getElementById("inNumero");
    let outFrutas = document.getElementById("outFrutas");

    let fruta = inFruta.value;
    let numero = Number(inNumero.value);

    if (fruta == ""){ //tenho que adicionar a validação de apenas letras
        alert("Fruta inválida.");
        inFruta.focus();
        return;
    }
    
    if (numero == 0 || isNaN(numero)){
        alert("Número inválido.");
        inNumero.focus();
        return;
    }

    var frutas = fruta;

    for (var i = 2; i <= numero; i++){
            frutas = frutas + " * " + fruta;
    }

    outFrutas.textContent = frutas;
}

let btRepetir = document.getElementById("btRepetir");
btRepetir.addEventListener("click", repetirFruta);