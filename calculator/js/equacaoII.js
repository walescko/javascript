let inValorQuadratico = document.getElementById("inValorQuadratico");
let inValorLinear = document.getElementById("inValorLinear");
let inValorIndependente = document.getElementById("inValorIndependente");
let outResolucao = document.getElementById("outResolucao");


function discrimintante(){
    let valorQuadratico = Number(inValorQuadratico.value);
    let valorLienar = Number(inValorLinear.value);
    let valorIndependente = Number(inValorIndependente.value);

    let discrimintante = Math.sqrt(Math.pow(valorLienar,2) - 4*valorQuadratico*valorIndependente);

    outResolucao.textContent = "Discriminante = " + discrimintante;
}

let btRaizes = document.getElementById("btRaizes");
btRaizes.addEventListener("click", discrimintante);

function limparDados(){
    location.reload();
}
let btLimpar = document.getElementById("btLimpar");
btLimpar.addEventListener("click", limparDados);