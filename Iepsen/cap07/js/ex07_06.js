let itens = []

function trocarItem(){
    let inPizza = document.getElementById("inPizza");
    let inBebida = document.getElementById("inBebida");

    if (rbPizza.checked){
        inBebida.className = "oculta";
        inPizza.className = "exibe";
    } else {
        inPizza.className = "oculta";
        inBebida.className = "exibe";
    }
}

let rbPizza = document.getElementById("rbBebida");
let rbBebida = document.getElementById("rbBebida");
rbPizza.addEventListener("change", trocarItem);
rbBebida.addEventListener("change", trocarItem);


function mostrarNumeroSabores(){
    if (rbPizza.checked){
        let pizza = inPizza.value;
        let numero = (pizza == "media") ? 2 : (pizza == "grande") ? 3 : 4;
        inDetalhes.placeholder = "Até " + numero + " sabores";
    }
}

let inDetalhes = document.getElementById("inDetalhes");
inDetalhes.addEventListener("focus", mostrarNumeroSabores);

inDetalhes.addEventListener("blur", function(){
    inDetalhes.placeholder = "";
});

inDetalhes.addEventListener("keypress", function(tecla){
    if (tecla.key == 13){
        adicionarItem();
    }
});


function adicionarItem(){
    let inPizza = document.getElementById("inPizza");
    let inBebida = document.getElementById("inBebida");
    let outPedido = document.getElementById("outPedido");

    if (rbPizza.checked){
        let numero = inPizza.selectedIndex;
        let produto = inPizza.options[numero].text;
    } else {
        let numero = inBebida.selectedIndex;
        let produto = inBebida.options[numero].text;
    }

    let detalhes = inDetalhes.value;
    itens.push(produto + " (" + detalhes + ")");
    outPedido.textContent = itens.join("\n");
    limparDados();
}

let btAdicionar = document.getElementById("btAdicionar");
brAdicionar.addEventListener("click", adicionarItem);


function limparDados(){
    location.reload();
}
let btLimpar = document.getElementById("btLimpar");
btLimpar.addEventListener("click", limparDados);