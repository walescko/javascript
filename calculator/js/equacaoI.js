let inValorLinear = document.getElementById("inValorLinear");
let inValorIndependente = document.getElementById("inValorIndependente");
let outEquacao = document.getElementById("outEquacao");
let outResolucao = document.getElementById("outResolucao");
let outEixoY = document.getElementById("outEixoY");

function equacao(){
    let a = Number(inValorLinear.value);
    let b = Number(inValorIndependente.value);
    outEquacao.textContent = a +"x + " + b;
}

function raizes(){
    let a = Number(inValorLinear.value);
    let b = Number(inValorIndependente.value);

    equacao();

    let raiz = -b/a;

    outResolucao.textContent = "Raiz da Equação é x = " + raiz;
}

function eixoY(){
    let b = Number(inValorIndependente.value);
        
    equacao();

    if (b == 0){
        outEixoY.textContent = "A equação cruza o eixo Y na origem";
    } else {
        outEixoY.textContent = "A equação cruza o eixo Y em " + b;
    }
}

function propriedades(){
    equacao();
    raizes();
    eixoY();

}

let btRaizes = document.getElementById("btRaizes");
let btEixoY = document.getElementById("btEixoY");
let btAll = document.getElementById("btAll");
btRaizes.addEventListener("click", raizes);
btEixoY.addEventListener("click", eixoY);
btAll.addEventListener("click", propriedades)

function limparDados(){
    location.reload();
}
let btLimpar = document.getElementById("btLimpar");
btLimpar.addEventListener("click", limparDados);