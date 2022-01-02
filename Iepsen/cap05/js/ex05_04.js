let criancas = [];

function adicionarCriancas(){
    let inNome = document.getElementById("inNome");
    let inIdade = document.getElementById("inIdade");

    let nome = inNome.value;
    let idade = Number(inIdade.value);

    if (nome == "" || inIdade.value == "" || isNaN(idade)){
        alert("Informe corretamente os dados!");
        inNome.focus();
        return;
    }

    criancas.push({nome: nome, idade: idade});

    inNome.value = "";
    inIdade.value = "";
    inNome.focus();

    listarCriancas();
    
}

function listarCriancas(){
    if (criancas.length == 0){
        alert("Não há crianças na lista");
        return;
    }

    let lista = "";

    for (let i = 0; i < criancas.length; i++){
        lista += criancas[i].nome + ", " + criancas[i].idade + " anos\n";
    }

    document.getElementById("outLista").textContent = lista;
    
}

function resumirLista(){
    if (criancas.length == 0){
        alert("Não há crianças na lista");
        return;
    }

    let copiaLista = criancas.slice();

    copiaLista.sort(function(a, b) {return a.idade - b.idade});

    let resumoLista = "";

    let auxiliar = copiaLista[0].idade;
    let nomes = [];

    for (let i = 0; i < copiaLista.length; i++){
        if (copiaLista[i].idade == auxiliar){
            nomes.push(copiaLista[i].nome);
        } else {
            resumoLista += auxiliar + " ano(s): " + nomes.length + " criança(s) - ";
            resumoLista += ((nomes.length/copiaLista.length)*100).toFixed(2) + "%\n";
            resumoLista += "(" + nomes.join(", ")+ ")\n\n";

            auxiliar = copiaLista[i].idade;
            nomes = [];
            nomes.push(copiaLista[i].nome);
        }
    }

    resumoLista += auxiliar + " ano(s): " + nomes.length + " criança(s) - ";
    resumoLista += (nomes.length/copiaLista.length*100).toFixed(2) + "%\n";
    resumoLista += "(" + nomes.join(", ")+ ")\n\n";

    document.getElementById("outLista").textContent = resumoLista;

}

let btAdicionar = document.getElementById("btAdicionar");
let btListar = document.getElementById("btListar");
let btResumir = document.getElementById("btResumir");

btAdicionar.addEventListener("click", adicionarCriancas);
btListar.addEventListener("click", listarCriancas);
btResumir.addEventListener("click", resumirLista);