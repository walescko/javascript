function adicionarFilme(){
    let inTitulo = document.getElementById("inTitulo");
    let inGenero = document.getElementById("inGenero");

    let titulo = inTitulo.value;
    let genero = inGenero.value;

    if(titulo = "" || genero == ""){
        alert("Informe corretamente os ddos!");
        inTitulo.focus();
        return;
    }

    let tbFilmes = document.getElementById("tbFilmes");

    inserirLinha(tbFilmes, titulo, genero);
    gravarFilme(titulo, genero);

    inTitulo.value = "";
    inGenero.value = "";
    inTitulo.focus();
}

let btAdicionar = document.getElementById("btAdicionar");
btAdicionar.addEventListener("click", adicionarFilme);

function inserirLinha(tabela, titulo, genero){
    let linha = tabela.insertRow(-1);
    let col1 = linha.insertCell(0);
    let col2 = linha.insertCell(1);
    let col3 = linha.insertCell(2);

    col1.textContent = titulo;
    col2.textContent = genero;
    col3.innerHTML = "<input type='checkbox'>";
}

