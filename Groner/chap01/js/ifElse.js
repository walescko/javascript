
function ifElseFunction(){
    let num = 0;
    if (num === 1){
        console.log('num is equal to 1');
    } else {
        console.log('num is not equal to 1, the value of num is ' + num)
    }
}

let btIfElse = document.getElementById("btIfElse");
btIfElse.addEventListener("click", ifElseFunction);

function ternaryFunction(){
    let num = 3;
    console.log('num before ternary is ' + num);
    (num === 1) ? num-- : num++;
    console.log('num after ternary is ' + num);
}

let btTernary = document.getElementById("btTernary");
btTernary.addEventListener("click", ternaryFunction);