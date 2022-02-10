function adicionarTarefa(){
    let inTarefa = document.getElementById("inTareda");

    let tarefa = inTarefa.value;

    if (tarefa == ""){
        alert("Informe a tarefa");
        inTarefa.focus();
        return;
    }

    let divQuadro = document.getElementById("divQuadro");
    let h5 = document.createElement("h5");
    let texto = document.createTextNode(tarefa);
    h5.appendChild(texto);
    divQuadro.appendChild(h5);

    inTarefa.value = "";
    inTarefa.focus();
}

let btAdicionar = document.getElementById("btAdicionar");
btAdicionar.addEventListener("click", adicionarTarefa);

function selecionarTarefa(){

    let h5 = document.getElementsByTagName("h5");
    let numH5 = h5.length;

    if(numH5 == 0){
        alert("Não há tarefas para selecionar");
        return;
    }

    let aux = -1;

    for (let i = 0; i < numH5; i++){
        if(h5[i].className == "tarefaSelecionada"){
            h5[i].className = "tarefaNormal";
            aux = i;
            break;
        }
    }

    if (aux == numH5 - 1){
        aux = -1;
    }

    h5[aux + 1].className = "tarefaSelecionada";
}

let btSelecionar = document.getElementById("btSelecionar");
btSelecionar.addEventListener("click", selecionarTarefa);
