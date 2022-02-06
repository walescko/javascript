function trocarClube(){
    let imgClube = document.getElementById("imgClube");
    let divTitulo = document.getElementById("divTitulo");

    let clube;

    if (rbBrasil.checked){
        clube = "Brasil";
    }else if (rbCaxias.checked){
        clube = "Caxias";
    } else if (rbFarroupilha.checked){
        clube = "Farroupilha";
    } else if (rbGremio.checked){
        clube = "Gremio";
    } else if (rbJuventude.checked){
        clube = "Juventude";
    } else if (rbPelotas.checked){
        clube = "Pelotas";
    } else {
        clube = "Sao Paulo";
    }

    if (clube != "Sao Paulo"){ 
        divTitulo.className = "row cores" + clube;
    } else {
        divTitulo.className = "row coresSaoPaulo";
    }

    imgClube.src = "img/" + clube.toLowerCase() + ".png";
    imgClube.className = "exibe";
    imgClube.alt = "Símbolo do " + clube;

    localStorage.setItem("clube", clube);
}

let rbBrasil = document.getElementById("rbBrasil");
let rbCaxias = document.getElementById("rbCaxias"); 
let rbFarroupilha = document.getElementById("rbFarroupilha");
let rbGremio = document.getElementById("rbGremio");
let rbJuventude = document.getElementById("rbJuventude");
let rbPelotas = document.getElementById("rbPelotas");
let rbSaoPaulo = document.getElementById("rbSaoPaulo");

rbBrasil.addEventListener("change", trocarClube);
rbCaxias.addEventListener("change", trocarClube);
rbFarroupilha.addEventListener("change",trocarClube);
rbGremio.addEventListener("change", trocarClube);
rbJuventude.addEventListener("change", trocarClube);
rbPelotas.addEventListener("change", trocarClube);
rbSaoPaulo.addEventListener("change", trocarClube);

function verificarClube(){
    if (localStorage.getItem("clube")){

        let clube = localStorage.getItem("clube");

        if (clube == "Brasil"){
            rbBrasil.checked = true;
        } else if (clube == "Caxias"){
            rbCaxias.checked = true;
        } else if (clube == "Farroupilha"){
            rbFarroupilha.checked = true;
        } else if (clube == "Gremio"){
            rbGremio.checked = true; 
        } else if (clube == "Juventude"){
            rbJuventude.checked = true;
        } else if (clube == "Pelotas"){
            rbPelotas = true;
        } else {
            rbSaoPaulo.checked = true;
        }

        trocarClube();
    }
}

verificarClube();
