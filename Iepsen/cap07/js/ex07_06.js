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


function limparDados(){
    location.reload();
}
let btLimpar = document.getElementById("btLimpar");
btLimpar.addEventListener("click", limparDados);