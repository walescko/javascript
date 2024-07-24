function converterDuracao(){
    let inTitulo = document.getElementById("inTitulo");
    let inDuracao = document.getElementById("inDuracao");
    let outTitulo = document.getElementById("outTitulo");
    let inResposta = document.getElementById("outResposta");

    let titulo = inTitulo.value;
    let duracao = inDuracao.value;

    let horas = Math.floor(duracao/60);
    let minutos = duracao % 60;

    outTitulo.textContent = titulo;
    outResposta.textContent = horas + " hora(s) e " + minutos + " minuto(s)";

}

let btConverter = document.getElementById("btConverter");
btConverter.addEventListener("click", converterDuracao);