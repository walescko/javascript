function estimativaChinchilas(){
    let inNumeroChinchilas = document.getElementById("inNumeroChinchilas");
    let inNumeroAnos = document.getElementById("inNumeroAnos");
    let outEstimativaChinchilas = document.getElementById("outEstimativaChinchilas");

    let numeroChinchilas = Number(inNumeroChinchilas.value);
    let numeroAnos = Number(inNumeroAnos.value);

    // outEstimativaChinchilas = "";

    if (numeroChinchilas == "" || isNaN(numeroChinchilas) || numeroChinchilas < 2 || numeroAnos == "" || isNaN(numeroAnos)){
        alert("Número inválido!");
        inNumeroChinchilas.focus();
        return;
    }
    
    let estimativaChinchilas = numeroChinchilas;
    let saida = "";

    for (var i = 1; i <= numeroAnos; i++){
        saida = "\n"+ saida + i + "º ano: " + estimativaChinchilas + " Chinchilas.";
        estimativaChinchilas =  estimativaChinchilas*3;
    }

    outEstimativaChinchilas.textContent = saida;

}

let btPrevisao = document.getElementById("btPrevisao");
btPrevisao.addEventListener("click", estimativaChinchilas);