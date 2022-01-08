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

let btGerar = document.getElementById("btGerar");
btGerar.addEventListener("click", gerarCracha);