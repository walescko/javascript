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

let btFromEvens = document.getElementById("btFromEvens");
let brFromOdds = document.getElementById("btFromOdds");
btFromEvens.addEventListener("click", fromEvensMethod);
brFromOdds.addEventListener("click", fromOddsMethod);