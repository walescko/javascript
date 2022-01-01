function verificarNumeroPerfeito(){

    let inNumero = document.getElementById("inNumero");
    let outResposta = document.getElementById("outResposta");
    let outNumeroPerfeito = document.getElementById("outNumeroPerfeito");

    let numero = Number(inNumero.value);
    let soma = 1;
    let divisor = 1;

    for (let i = 2; i <= numero/2; i++){
        if (numero % i == 0){
            soma = soma + i;
            divisor = divisor + ", " + i ;
        }
    }

    outResposta.textContent = ("Os divisores do número " + numero + 
                " são " + divisor + " e "+ numero + " (Soma: "+ soma + ")");

    if (soma == numero ){
        outNumeroPerfeito.textContent = "O número " + numero + " é um número perfeito";
    } else {
        outNumeroPerfeito.textContent = "O número " + numero + " não é um número perfeito";
    }
}

let btVerificar = document.getElementById("btVerificar");
btVerificar.addEventListener("click", verificarNumeroPerfeito);