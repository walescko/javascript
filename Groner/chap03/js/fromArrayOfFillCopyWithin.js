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

function copyWithinMethod1() {
    let copyArray = [1, 2, 3, 4, 5, 6];
    console.log(copyArray);
    copyArray.copyWithin(0, 3);
    console.log(copyArray);

}

function copyWithinMethod2(){
    let copyArray = [1, 2, 3, 4, 5, 6];
    console.log(copyArray);
    copyArray.copyWithin(1,3,5)
    console.log(copyArray);

}

let btFromEvens = document.getElementById("btFromEvens");
btFromEvens.addEventListener("click", fromEvensMethod);
let btFromOdds = document.getElementById("btFromOdds");
btFromOdds.addEventListener("click", fromOddsMethod);
let btArrayOf = document.getElementById("btArrayOf");
btArrayOf.addEventListener("click", arraysOf4);
let btFill = document.getElementById("btFill");
btFill.addEventListener("click", fillMethod);
let btWithin1 = document.getElementById("btCopyWithin1");
btWithin1.addEventListener("click", copyWithinMethod1);
let btWithin2 = document.getElementById("btCopyWithin2");
btWithin2.addEventListener("click", copyWithinMethod2);
