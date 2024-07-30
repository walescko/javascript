function calcularMedia(){

    let inNome = document.getElementById("inNome")
    let inNota01 = document.getElementById("inNota01")
    let inNota02 = document.getElementById("inNota02")

    let outSituacao = document.getElementById("outSituacao")
    let outMedia = document.getElementById("outMedia")

    let nome = inNome.value 
    let nota01 = Number(inNota01.value)
    let nota02 = Number(inNota02.value)

    let media = (nota01 + nota02)/2
    
    outMedia.textContent = "Média das notas: " + media.toFixed(2)

    if (media >= 7) {
        outSituacao.textContent = "Parabéns " + nome + "! Você foi aprovado(a)"
        outSituacao.style.color = "blue"
    } else if (media >= 4) {
        outSituacao.textContent = "Atenção " + nome + "! Você está em exame!"
        outSituacao.style.color = "orange"

    } else {
        outSituacao.textContent = "Ops " + nome + "... Você foi repovado"
        outSituacao.style.color = "red"
    }
}

let btResultado = document.getElementById("btResultado")
btResultado.addEventListener("click", calcularMedia)