function limparCampos(){
    //uma primeira forma de limpar dados campo a campo
    
    // document.getElementById("inNome").value = ""
    // document.getElementById("rbMasculino").checked = false
    // document.getElementById("rbFeminino").checked = false
    // document.getElementById("inAltura").value = ""
    // document.getElementById("outResposta").textContent = "" 

    // uma segunda opção de limpar dados com releitura da página
    location.reload()

    // devolvendo a página no ponto desejado independe da forma
    document.getElementById("inNome").focus()

}

let btLimpar = document.getElementById("btLimpar")
btLimpar.addEventListener("click", limparCampos)