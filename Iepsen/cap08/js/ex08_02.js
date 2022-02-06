function trocarClube(){

    let imgClube = document.getElementById("imgClube");
    let divTitulo = document.getElementById("divTitulo");

    let clubes = ["Brasil", "Caxias", "Farroupilha", "Gremio", "Juventude", "Pelotas", "SaoPaulo"];
    let selecao = 0;

    for (let i = 0; i < 8; i++){
        if (inputsRadio[i].checked){
            selecao = i;
            break;
        }
    }
    if (selecao <= 6){
        divTitulo.className = "row cores" + clubes[selecao];
        imgClube.src = "img/" + clubes[selecao].toLowerCase() + ".png";
        imgClube.className = "exibe";
        imgClube.alt = "Símbolo do " + clubes[selecao];
        localStorage.setItem("clube", clubes[selecao]);
    } else {
        divTitulo.className = "row";
        imgClube.className = "oculta";
        imgClube.alt = "";
        localStorage.removeItem("clube");
    }
}

let inputsRadio = document.getElementsByTagName("input");
for (let i = 0; i < inputsRadio.length; i++){
    inputsRadio[i].addEventListener("change", trocarClube);
}

function verificarClube(){

    if (localStorage.getItem("clube")){
        let clube = localStorage.getItem("clube");

        if(clube == "Brasil"){
            inputsRadio[0].checked = true;
        } else if (clube == "Caxias"){
            inputsRadio[1].checked = true;
        } else if (clube == "Faroupilha"){
            inputsRadio[2].checked = true;
        } else if (clube == "Gremio"){
            inputsRadio[3].checked = true;
        } else if (clube == "Juventude"){
            inputsRadio[4].checked = true;
        } else if (clube == "Pelotas"){
            inputsRadio[5].checked = true;
        } else {
            inputsRadio[6].checked = true;
        }
        trocarClube();
    }
}
verificarClube();