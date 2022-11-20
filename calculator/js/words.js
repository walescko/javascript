function word() {
    let inWord = document.getElementById("inWord");
    let word = inWord.value;
    let wordArray = [];
    wordArray = word.split("");
    if (wordArray.length == 0) {
        alert("Não foi digitado nenhum valor.");
        clearData();
    } else if (wordArray[0] === ' '){
        alert("O primeiro caracter não pode ser espaço!");
        clearData();
    } else {
        console.log(word);
        console.log(wordArray);
        console.log(wordArray.length);
        console.log(typeof wordArray);
    }
}

let btWord = document.getElementById("btWord");
btWord.addEventListener("click", word);