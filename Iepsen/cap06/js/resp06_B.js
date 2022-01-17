function gerarReferencia(){
    let inNome = document.getElementById("inNome");
    let outCitacao = document.getElementById("outCitacao");

    let nome = inNome.value;
    
    if(nome == "" || nome.indexOf(" ") == -1){
        alert("Digite o nome do autor!");
        inNome.focus();
        return;
    }

    let partes = nome.split(" ");
    let citacao = "";

    let tamanho = partes.length;

    for (let i = 0; i < tamanho-1; i++){
        citacao += partes[i].charAt(0) + ". ";
    }

    citacao = partes[tamanho-1] + ", " + citacao;

    outCitacao.textContent = citacao;
}

let btCitacao = document.getElementById("btCitacao");
btCitacao.addEventListener("click", gerarReferencia);

function limparDados(){
    location.reload();
}
let btLimpar = document.getElementById("btLimpar");
btLimpar.addEventListener("click", limparDados);