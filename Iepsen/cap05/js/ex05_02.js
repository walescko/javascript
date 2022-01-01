let erros = [];

let sorteado = Math.floor(Math.random()*50) + 1;

const CHANCES = 6;

function apostarNumero(){

    let inNumero = document.getElementById("inNumero");
    let numero = Number(inNumero.value);

    if (numero <= 0 || numero > 50 || isNaN(numero)){
        alert("Informe um número válido.");
        inNumero.focus();
        return;
    }

    let outDica = document.getElementById("outDica");
    let outErros = document.getElementById("outErros");
    let outChances = document.getElementById("outChances");

    if (numero == sorteado){
        alert("Parabéns!!!! Você acertou o número!!!")
        btApostar.disabled = true;
        btJogar.className = "exibe";
        outDica.textContent = "Parabéns! Você adinhou o número: " + sorteado;
    } else {
        if (erros.indexOf(numero) >= 0){
            alert("Você já apostou o número " + numero + ". Tente outro!");
        } else {
            erros.push(numero);
            let numeroErros = erros.length;
            let numeroChances = CHANCES - numeroErros;
            outErros.textContent = numeroErros + " (" + erros.join(", ") + ")";
            outChances.textContent = numeroChances;
            if (numeroChances == 0) {
                alert("Suas chances acabaram!!!");
                btApostar.disabled = true;
                btJogar.className = "exibe";
                outDica.textContent = "GameOver!!! Número sorteado: " + sorteado;
            } else {
                let dica = numero < sorteado ? "maior" : "menor";
                outDica.textContent = "Dica: tente um número " + dica +" que " + numero;
            }
        }
    }

    inNumero.value = "";
    inNumero.focus();

}

function jogarNovamente(){
    location.reload();
}

let btApostar = document.getElementById("btApostar");
let btJogar = document.getElementById("btJogar");
btApostar.addEventListener("click", apostarNumero);
btJogar.addEventListener("click", jogarNovamente);