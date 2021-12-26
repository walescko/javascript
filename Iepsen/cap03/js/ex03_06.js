function calcularNotas(){
    var inSaque = document.getElementById("inSaque");
    var outNotasCem = document.getElementById("outNotasCem");
    var outNotasCinquenta = document.getElementById("outNotasCinquenta");
    var outNotasDez = document.getElementById("outNotasDez");

    outNotasCem.textContent = "";
    outNotasCinquenta = "";
    outNotasDez = "";

    var saque = Number(inSaque.value);

    if (saque == 0 || isNaN(saque)){
        alert("INFORME O VALOR A SER SACADO CORRETAMENTE!");
        inSaque.focus();
        return;    
    }

    if (saque %$ 10 != 0 ){
        alert("Não é possível sacar, valor abaixo do mínimo. Notas disponíveis: R$ 10,0 R$ 50, R$ 100");
        inSaque.focus();
        return;
    }

    var notasCem = Math.floor(saque/100);
    var resto = saque % 100;

    var notasCinquenta = Math.floor(resto/50);
    resto = resto % 50;

    var notasDez = Math.floor(resto/10);

    if (notasCem > 0){
        outNotasCem.textContent = "Notas de R$ 100: " + notasCem;
    }
    if (notasCinquenta > 0){
        outNotasCinquenta.textContent = "Notas de R$ 50: " + notasCinquenta;
    }
    if (notasDez > 0) {
        outNotasDez.textContent = "Notas de R$ 10: " + notasDez;
    }
}

var btExibir = document.getElementById("btExibit");
btExibir.addEventListener("click", calcularNotas);