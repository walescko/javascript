function limparCampos(){
    document.getElementById("inNome").value = ""
    document.getElementById("rbMasculino").checked = false
    document.getElementById("rbFeminino").checked = false
    document.getElementById("inAltura").value = ""
    document.getElementById("outResposta").textContent = ""

    document.getElementById("inNome").focus()
}

let btLimpar = document.getElementById("btLimpar")
btLimpar.addEventListener("click", limparCampos)