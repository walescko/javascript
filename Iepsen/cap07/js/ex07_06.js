let itens = []
let inPizza = document.getElementById("inPizza");
let inBebida = document.getElementById("inBebida");

function trocarItem(){
    
    if (rbPizza.checked){
        inBebida.className = "oculta";
        inPizza.className = "exibe";
    } else {
        inPizza.className = "oculta";
        inBebida.className = "exibe";
    }
}

let rbPizza = document.getElementById("rbPizza");
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
    if (tecla.keyCode == 13){
        adicionarItem();
    }
});


function adicionarItem(){
    // let inPizza = document.getElementById("inPizza");
    // let inBebida = document.getElementById("inBebida");
    let outPedido = document.getElementById("outPedido");
    let produto = "";

    if (rbPizza.checked){
        let numero = inPizza.selectedIndex;
        produto = inPizza.options[numero].text;
    } else {
        let numero = inBebida.selectedIndex;
        produto = inBebida.options[numero].text;
    }

    let detalhes = inDetalhes.value;
    itens.push(produto + " (" + detalhes + ")");
    outPedido.textContent = itens.join("\n");
    limparCampos();
}

let btAdicionar = document.getElementById("btAdicionar");
btAdicionar.addEventListener("click", adicionarItem);

function limparCampos(){
    rbPizza.checked = true;
    inBebida.className = "oculta";
    inPizza.className = "exibe";
    inPizza.selectedIndex = 0;
    inDetalhes.value = "";
    rbPizza.focus();
}

// function limparDados(){
//     location.reload();
// }
// let btLimpar = document.getElementById("btLimpar");
// btLimpar.addEventListener("click", limparDados);