function gerarCracha(){
    let inNome = document.getElementById("inNome");
    let outCracha = document.getElementById("outCracha");

    let nome = inNome.value;

    if (nome == "" || nome.indexOf(" ") == -1){
        alert("Informe o nome completo do participante.");
        inNome.focus();
        return;
    }

    let primeiroEspaco = nome.indexOf(" ");
    let ultimoEspaco = nome.lastIndexOf(" ");

    let cracha = nome.substr(0, primeiroEspaco) + nome.substr(ultimoEspaco);

    outCracha.textContent = "Crachá: " + cracha;
}

function limparDados(){
    location.reload();
}

let btGerar = document.getElementById("btGerar");
let btLimpar = document.getElementById("btLimpar");
btGerar.addEventListener("click", gerarCracha);
btGerar.addEventListener("click", limparDados);
