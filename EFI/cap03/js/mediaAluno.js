function calcularMedia(){
// o git não atualiza.

    let inNome = document.getElementById("inNome")
    let inNota01 = document.getElementById("inNota01")
    let inNota02 = document.getElementById("inNota02")

    let outSituacao = document.getElementById("outSituacao")
    let outMedia = document.getElementById("outMedia")

    let nome = inNome.value 
    let nota01 = inNota01.value
    let nota02 = inNota02.value

    let media = (nota01 + nota02)/2

    if (media >= 7) {
        outSituacao.textContent = "Parabéns " + nome + "! Você foi aprovado(a)"
        outSituacao.style.color = "blue"
    } else {
        outSituacao.textContent = "Ops " + nome + "... Você foi repovado"
        outSituacao.style.color = "red"
    }
}

let btResultado = document.getElementById("btResultado")
btResultado.addEventListener("click", calcularMedia)