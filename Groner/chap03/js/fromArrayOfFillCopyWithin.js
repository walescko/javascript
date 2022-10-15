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

function fillMethod(){
    let numbersCopy = Array.of(2, 3 , 5, 9 , 11, 33);
    console.log(numbersCopy);
    numbersCopy.fill(0);
    console.log(numbersCopy);
    numbersCopy.fill(2,1);
    console.log(numbersCopy);
    numbersCopy.fill(1,3,5)
    console.log(numbersCopy);
}

function copyWithinMethod(){
    let numbersArray = [1, 2, 3, 4, 5, 6];
    console.log(numbersArray);
    numbersArray.copyWithin(0,3);
    console.log(numbersArray);
    numbersArray = [1, 2, 3, 4, 5, 6];
    numbersArray.copyWithin(1,3,5)
    console.log(numbersArray);

}

let btFromEvens = document.getElementById("btFromEvens");
btFromEvens.addEventListener("click", fromEvensMethod);
let btFromOdds = document.getElementById("btFromOdds");
btFromOdds.addEventListener("click", fromOddsMethod);
let btArrayOf = document.getElementById("btArrayOf");
btArrayOf.addEventListener("click", arraysOf4);
let btFill = document.getElementById("btFill");
btFill.addEventListener("click", fillMethod);
let btWithin = document.getElementById("btCopyWithin");
btWithin.addEventListener("click", copyWithinMethod);
