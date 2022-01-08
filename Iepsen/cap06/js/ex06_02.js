function montarDica(){
    let inFruta = document.getElementById("inFruta");
    let outDica = document.getElementById("outDica");

    let fruta = inFruta.value;

    if (fruta == ""){
        alert("Informe o nome da Fruta!");
        inFruta.focus();
        return;
    }

    let resposta = fruta.charAt(0);
    let estrelas = "*";
    let tamanho = fruta.length;

    for (let i = 1; i < tamanho; i++){
        if (fruta.charAt(i) == fruta.charAt(0)){
            resposta += fruta.charAt(0);
        } else {
            resposta += "_";
        }
        estrelas += "*";
    }

    outDica.textContent = resposta;
    inFruta.value = estrelas;
}

let brMontar = document.getElementById("btMontar");
btMontar.addEventListener("click", montarDica);