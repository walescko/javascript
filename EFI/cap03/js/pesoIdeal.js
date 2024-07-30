function calcularPeso (){
    let inNome = document.getElementById("inNome")
    let rbMasculino = document.getElementById("rbMasculino")
    let rbFeminino = document.getElementById("rbFeminino")
    let inAltura = document.getElementById("inAltura")
    let outResposta = document.getElementById("outResposta")

    let nome = inNome.value 
    let masculino = rbMasculino.checked 
    let feminino = rbFeminino.checked
    let altura = Number(inAltura.value)
    let peso = 0

    
    if (nome == "" || (masculino == false && feminino == false)) {
        alert("Por favor, informe o nome e selecione o sexo...")
        inNome.focus()
        return
    }

    if (altura == 0 || isNaN(altura)){
        alert("Por favor, informe a altura corretamente...")
        inAltura.focus();
        return
    }


    if (masculino) {
        peso = 22 * Math.pow(altura, 2);
    } else {
        peso = 21 * Math.pow(altura, 2)
    }

    outResposta.textContent = nome + ": seu peso ideal é " + peso.toFixed(3) + " kg."
}

let btResultado = document.getElementById("btCalcular")
btResultado.addEventListener("click", calcularPeso)