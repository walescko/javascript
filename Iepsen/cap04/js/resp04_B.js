function estimativaChinchilas(){
    let inNumeroChinchilas = document.getElementById("inNumeroChinchilas");
    let inNumeroAnos = document.getElementById("inNumeroAnos");
    let outEstimativaChinchilas = document.getElementById("outEstimativaChinchilas");

    let numeroChinchilas = Number(inNumeroChinchilas.value);
    let numeroAnos = Number(inNumeroAnos.value);

    if (numeroChinchilas == "" || isNaN(numeroChinchilas) || numeroChinchilas < 2 || numeroAnos == "" || isNaN(numeroAnos)){
        alert("Número inválido!");
        inNumeroChinchilas.focus();
        return;
    }
    
    let estimativaChinchilas = numeroChinchilas;
    let tempo = numeroAnos;

    // outEstimativaChinchilas.textContent = tempo +"º ano: " + estimativaChinchilas + "Chinchilas";

    for (var i = 1; i <= tempo; i++){
        outEstimativaChinchilas.textContent = i +"º ano: " + estimativaChinchilas + " Chinchilas";
        estimativaChinchilas =  estimativaChinchilas + estimativaChinchilas*2;
    }

}

let btPrevisao = document.getElementById("btPrevisao");
btPrevisao.addEventListener("click", estimativaChinchilas);