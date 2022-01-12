let inValorQuadratico = document.getElementById("inValorQuadratico");
let inValorLinear = document.getElementById("inValorLinear");
let inValorIndependente = document.getElementById("inValorIndependente");
let outEquacao = document.getElementById("outEquacao");
let outResolucao = document.getElementById("outResolucao");
let outVertice = document.getElementById("outVertice");
let outEixoY = document.getElementById("outEixoY");

function equacao(){
    let a = Number(inValorQuadratico.value);
    let b = Number(inValorLinear.value);
    let c = Number(inValorIndependente.value);
    outEquacao.textContent = a +"x² + " + b + "x + " + c;  
}

function raizes(){

    let a = Number(inValorQuadratico.value);
    let b = Number(inValorLinear.value);
    let c = Number(inValorIndependente.value);

    let discrimintante = Math.pow(b,2) - 4*a*c;

  
    
    if (discrimintante < 0) {
        outResolucao.textContent = "Não há raízes reais";
    } else if (discrimintante == 0){
        let raiz = -b/(2*a);        
        outResolucao.textContent = "Raiz da Equação é x = " + raiz;
    } else {
        let raiz1 = (- b + Math.sqrt(discrimintante))/(2*a);
        let raiz2 = (- b - Math.sqrt(discrimintante))/(2*a);
        outResolucao.textContent = "As raízes da equação são X1 = " + raiz1 + " e X2 = " + raiz2;
    }
}

function vertice(){
    let a = Number(inValorQuadratico.value);
    let b = Number(inValorLinear.value);
    let c = Number(inValorIndependente.value);
      
    let vertice = -b/(2*a);
    let y = a*Math.pow(vertice,2)+b*vertice+c;        
    


    outVertice.textContent = "O vértice da Equação é X = " + vertice + " e Y = " + y;
}

function eixoY(){
    let c = Number(inValorIndependente.value);
        
 

    if (c == 0){
        outEixoY.textContent = "A equação cruza o eixo Y na origem";
    } else {
        outEixoY.textContent = "A equação cruza o eixo Y em " + c;
    }
}

function propriedades(){
    equacao();
    raizes();
    vertice();
    eixoY();

}

let btRaizes = document.getElementById("btRaizes");
let btVertice = document.getElementById("btVertice");
let btEixoY = document.getElementById("btEixoY");
let btAll = document.getElementById("btAll");
btRaizes.addEventListener("click", raizes);
btVertice.addEventListener("click", vertice);
btEixoY.addEventListener("click", eixoY);
btAll.addEventListener("click", propriedades)

function limparDados(){
    location.reload();
}
let btLimpar = document.getElementById("btLimpar");
btLimpar.addEventListener("click", limparDados);