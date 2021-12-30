function verificarPrimo(){

    var inNumero = document.getElementById("inNumero");
    var outResposta = document.getElementById("outResposta");

    var numero = Number(inNumero.value);

    if (numero == 0 || isNaN(numero)){
        alert("Digite um número válido!!!!!");
        inNumero.focus();
        return;
    }
  
    // var temDivisor = 0;

    // for (var i = 2; i <= numero/2 ; i++){
    //     if(numero % i == 0){
    //         temDivisor = 1;
    //         break;
    //     }
    // }

    // if (numero > 1 && !temDivisor){
    //     outResposta.textContent = numero + " é primo!";
    // } else {
    //     outResposta.textContent = numero + " não é primo!";
    // }

    var numDivisores = 0;
    
    for (var i = 1; i <= numero; i++){
        if (numero % i == 0){
            numDivisores++;
        }
    }
   

    if (numDivisores != 2){
        outResposta.textContent = numero + " Não é primo!";
    } else {
        outResposta.textContent = numero + " É primo!";
    }
}

var btTestar = document.getElementById("btTestar");
btTestar.addEventListener("click", verificarPrimo);