function discrimintante(){
    let inValorQuadratico = document.getElementById("inValorQuadratico");
    let inValorLinear = document.getElementById("inValorLinear");
    let inValorIndependente = document.getElementById("inValorIndependente");
    let outResolucao = document.getElementById("outResolucao");

    let valorQuadratico = Number(inValorQuadratico.value);
    let valorLinear = Number(inValorLinear.value);
    let valorIndependente = Number(inValorIndependente.value);

    let discrimintante = Math.pow(valorLinear,2) - 4*valorQuadratico*valorIndependente;
    
    if (discrimintante < 0) {
        outResolucao.textContent = "Não há raízes reais";
    } else if (discrimintante == 0){
        let raiz = valorLinear/(2*valorQuadratico);        
        outResolucao.textContent = "Raiz da Equação é x = " + raiz;
    } else {
        let raiz1 = (-valorLinear + Math.sqrt(discrimintante))/(2*valorQuadratico);
        let raiz2 = (-valorLinear - Math.sqrt(discrimintante))/(2*valorQuadratico);
        outResolucao.textContent = "As raízes da equação são X1 = " + raiz1 + " e X2 = " + raiz2;
    }
}


let btRaizes = document.getElementById("btRaizes");
btRaizes.addEventListener("click", discrimintante);

function limparDados(){
    location.reload();
}
let btLimpar = document.getElementById("btLimpar");
btLimpar.addEventListener("click", limparDados);