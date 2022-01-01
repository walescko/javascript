var pacientes = [];

function adiconarPaciente(){

    let inPaciente = document.getElementById("inPaciente");
    let outLista = document.getElementById("outLista");

    let nomePaciente = inPaciente.value;

    if (nomePaciente == ""){
        alert("informe o nome do paciente!");
        inPaciente.focus();
        return;
    }

    pacientes.push(nomePaciente);
    let lista = "";

    for (i = 0; i < pacientes.length; i++){
        lista += (i+1) + ". " + pacientes[i] + "\n";
    }

    outLista.textContent = lista;

    inPaciente.value = "";
    inPaciente.focus();
}

function adicionarPacienteUrgente(){

    let inPaciente = document.getElementById("inPaciente");
    let outLista = document.getElementById("outLista");

    let nomePaciente = inPaciente.value;

    if (nomePaciente == ""){
        alert("informe o nome do paciente!");
        inPaciente.focus();
        return;
    }

    pacientes.unshift(nomePaciente);
    let lista = "";

    for (i = 0; i < pacientes.length; i++){
        lista += (i+1) + ". " + pacientes[i] + "\n";
    }
    
    outLista.textContent = lista;

    inPaciente.value = "";
    inPaciente.focus();
}

function atenderPaciente(){
    if (pacientes.length == 0){
        alert("Não há pacientes na espera.");
        inPaciente.focus();
        return;
    }

    let outAtendimento = document.getElementById("outAtendimento");
    let outLista = document.getElementById("outLista");

    let atender = pacientes.shift();
    outAtendimento.textContent = atender;

    var lista = "";

    for (i = 0; i < pacientes.length; i++){
        lista += (i + 1) + ". " + pacientes[i] + "\n";
    }

    outLista.textContent = lista;
}


let btAdicionar = document.getElementById("btAdicionar");
let btUrgencia = document.getElementById("btUrgente");
let btAtender = document.getElementById("btAtender");

btAdicionar.addEventListener("click", adiconarPaciente);
btUrgencia.addEventListener("click", adicionarPacienteUrgente);
btAtender.addEventListener("click", atenderPaciente);

