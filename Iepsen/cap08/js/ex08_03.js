function incluirAposta(){
    let inNome = document.getElementById("inNome");
    let inPeso = document.getElementById("inPeso");

    let nome = inNome.value;
    let peso = Number(inPeso.value);

    if(nome == "" || peso == 0 || isNaN(peso)){
        alert("Informe nome do apostador e peso da aposta");
        inNome.focus();
        return;
    }

    if (varApostaExiste(peso)){
        alert("Já realizaram essa aposta!\n Informe outro valor!")
        inPeso.focus()
        return;
    }

    if (localStorage.getItem("melanciaNome")){

        let melanciaNome = localStorage.getItem("melanciaNome") + ";" + nome;
        let melanciaPeso = localStorage.getItem("melanciaPEso") + ";" + peso;

        localStorage.setItem("melanciaNome", melanciaNome);
        localStorage.setItem("melanciaPeso", melanciaPeso);
    } else {
        localStorage.setItem("melanciaNome", nome);
        localStorage.setItem("melanciaPeso", peso);
    }

    mostrarApostas();

    inNome.value = "";
    inPeso.value = "";
    inNome.focus();
}

let btApostar = document.getElementById("btApostar");
btApostar.addEventListener("click", incluirAposta);

function verApostaExiste(peso){
    let existe = false;

    if(localStorage.getItem("melanciaPeso")){
        let pesos = localStorage.getItem("melanciaPeso").split(";");

        if(pesos.indexOf(peso.toString())>=0){
            existe = true;
        }
    }
    return existe;
}

function mostrarApostas(){
    let outApostas = document.getElementById("outApostas");

    if(!localStorage.getItem("melanciaNome")){
        outApostas.textContent = "";
        return;
    }

    let nomes = localStorage.getItem("melanciaNome").split(";");
    let pesos = localStorage.getItem("melanciaPeso").split(";");

    let linhas = "";

    for(let i = 0; i < nomes.length; i++){
        linhas += nomes[i] + " - " + pesos[i] + "g \n";
    }
    outApostas.textContent = linhas;
}

mostrarApostas();

function verificarVencedor(){
    if(!localStorage.getItem("melanciaNome")){
        alert("Não há apostas cadastradas!");
        return;
    }

    let pesoCorreto = Number(prompt("Qual o peso correto da melancia?"));
    if(pesoCorreto == 0 || isNaN(pesoCorreto)){
        return;
    }

    let nomes = localStorage.getItem("melanciaNome").split(";");
    let pesos = localStorage.getItem("melanciaPeso").split(";");

    let vencedorNome = nomes[0];
    let vencedorPeso = Number(pesos[0]);

    for (let i; i < nomes.length; i++){
        difVencedor = Math.abs(vencedorPeso - pesoCorreto);
        difAposta = Math.abs(Number(pesos[i]) - pesoCorreto);

        if(difAposta < difVencedor){
            vencedorNome = nomes[i];
            vencedorPeso = Number(pesos[i]);
        }
    }

    let mensagem = "Resultado - Peso Correto: " + pesoCorreto + "g";
    mensagem += "\n--------------------------------------";
    mensagem += "\nVencedor: " + vencedorNome;
    mensagem += "\nAposta: " + vencedorPeso + "g";
    alert(mensagem);
}

let btVencedor = document.getElementById("btVencedor");
btVencedor.addEventListener("click", verificarVencedor);

function limparApostas(){
    if (confirm("Confirma exclusão de todas as apostas?")){
        localStorage.removeItem("melanciaNome");
        localStorage.removeItem("melanciaPeso");
        mostrarApostas();
    }
}
let btLimpar = document.getElementById("btLimpar");
btLimpar.addEventListener("click", limparApostas);