let inNumero1 = document.getElementById("inNumero1");
let inNumero2 = document.getElementById("inNumero2");
let outResposta = document.getElementById("outResposta");

function somar(){
    let numero1 = Number(inNumero1.value);
    let numero2 = Number(inNumero2.value);
    
    let soma = numero1 + numero2;

    outResposta.textContent = numero1 + " + " + numero2 + " = " + soma;
}

function subtrair(){
    let numero1 = Number(inNumero1.value);
    let numero2 = Number(inNumero2.value);
    
    let resto = numero1 - numero2;
    outResposta.textContent = numero1 + " - " + numero2 + " = " + resto;
}

function multiplicar(){
    let numero1 = Number(inNumero1.value);
    let numero2 = Number(inNumero2.value);
    
    let produto = numero1 * numero2;
    outResposta.textContent = numero1 + " * " + numero2 + " = " + produto;
}

function dividir(){
    let numero1 = Number(inNumero1.value);
    let numero2 = Number(inNumero2.value);
    
    if (numero2 == 0){
        outResposta.textContent = "Não é possível dividir por zero!!!";
    } else {
    let quociente = numero1 / numero2;
    outResposta.textContent = numero1 + " / " + numero2 + " = " + quociente;
    }
}

let btSomar = document.getElementById("btSomar");
let btSubtrair = document.getElementById("btSubtrair");
let btMultiplicar = document.getElementById("btMultiplicar");
let btDividir = document.getElementById("btDividir");
btSomar.addEventListener("click", somar);
btSubtrair.addEventListener("click", subtrair);
btMultiplicar.addEventListener("click", multiplicar);
btDividir.addEventListener("click", dividir);

function limparDados(){
    location.reload();
}
let btLimpar = document.getElementById("btLimpar");
btLimpar.addEventListener("click", limparDados);