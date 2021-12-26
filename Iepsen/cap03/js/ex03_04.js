function calcularFuso(){

    var inHoraBrasil = document.getElementById("inHoraBrasil");
    var outHoraFranca = document.getElementById("outHoraFranca");

    var horaBrasil = Number(inHoraBrasil.value);

    if(inHoraBrasil.value == "" || isNaN(horaBrasil)){
        alert("Informe a hora no Brasil corretamente.");
        inHoraBrasil.focus();
        return;
    }

    var horaFranca = horaBrasil + 5;

    if(horaFranca > 24){
        horaFranca = horaFranca - 24;
    }

    outHoraFranca.textContent = "Hora na Franca: " + horaFranca.toFixed(0) +" h";
}

var btExibir = document.getElementById("btExibir");
btExibir.addEventListener("click", calcularFuso);