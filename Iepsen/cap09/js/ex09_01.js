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
