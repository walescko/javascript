function fromEvensMethod(){
    let evens = Array.from(numberss, x => (x%2 == 0));
    for (const n of evens){
        console.log(n);
    }
}

function fromOddsMethod(){
    let odds = Array.from(numberss, x => (x%2 != 0));
    for (const n of odds){
        console.log(n);
    }
}

function arraysOf4(){
    let numbers4 = [1, 2, 4 ,5 , 6];
    let numbersCopy = Array.of(...numbers4);
    console.log(numbersCopy);
}

let btFromEvens = document.getElementById("btFromEvens");
btFromEvens.addEventListener("click", fromEvensMethod);
let brFromOdds = document.getElementById("btFromOdds");
brFromOdds.addEventListener("click", fromOddsMethod);
let btArrayOf = document.getElementById("btArrayOf");
btArrayOf.addEventListener("click", arraysOf4);