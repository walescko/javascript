function gerarEmail(){
    let inFuncionario = document.getElementById("inFuncionario");
    let outEmail = document.getElementById("outEmail");

    let funcionario = inFuncionario.value;

    if (funcionario == "" || funcionario.indexOf(" ") == -1){
        alert("infrome o nome completo do funcionario.");
        inFuncionario.focus();
        return;
    }

    let partes = funcionario.split(" ");
    let email = "";
    let tamanho = partes.length;

    for (let i = 0; i < tamanho-1; i++){
        email += partes[i].charAt(0);
    }

    email += partes[tamanho-1] + "@empresa.com.br";

    outEmail.textContent = "E-mail: " + email.toLowerCase();

}

let btGerar = document.getElementById("btGerar");
btGerar.addEventListener("click", gerarEmail);


function limparDados(){
    location.reload();
}
let btLimpar = document.getElementById("btLimpar");
btLimpar.addEventListener("click", limparDados);