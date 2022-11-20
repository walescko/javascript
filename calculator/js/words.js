function word(){
    let inWord = document.getElementById("inWord");
    let word = inWord.value;
    console.log(word);
    let wordArray = [];
    wordArray = word.split("");
    console.log(wordArray);
    console.log(wordArray.length);
    console.log(typeof wordArray);
}


let btWord = document.getElementById("btWord");
btWord.addEventListener("click", word);