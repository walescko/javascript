function whileFunction(){
    let num = 2;
    let i = 0;
    while (i < 10){
        console.log(num +' * ' + (i+1) + " = " + (num*(i+1)));
        i++;
    }
}

let btWhile = document.getElementById("btWhile");
btWhile.addEventListener("click", whileFunction);