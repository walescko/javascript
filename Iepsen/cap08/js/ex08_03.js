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



