let numberss = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

function isEven(x){
    console.log(x);
    return (x%2 == 0) ? true : false;
}

function isEven1(x){
    // console.log(x);
    return (x%2 == 0) ? true : false;
}

function everyFunction() {
    numberss.every(isEven);
}

function someFunction() {
    numberss.some(isEven);
}

function forEachFunction(){
    numberss.forEach(x=> console.log(x%2 === 0));
}

function myMapFunction(){
    const myMap = numberss.map(isEven1);
    for(let i = 0; i<=myMap.length; i++){
        console.log(myMap[i]);
    }
}

function filterFunction(){
    const evenNumbers = numberss.filter(isEven1);
    for(let i = 0; i<=evenNumbers.length; i++){
        console.log(evenNumbers[i]);
    }
}

function reduceFunction(){
    let sumNumberss = numberss.reduce((previus, current) => previus + current);
    console.log(sumNumberss);
}

let btEvery = document.getElementById("btEvery");
btEvery.addEventListener("click", everyFunction);
let btSome = document.getElementById("btSome");
btSome.addEventListener("click", someFunction);
let btForEach = document.getElementById("btForEach");
btForEach.addEventListener("click", forEachFunction);
let btMyMap = document.getElementById("btMyMap");
btMyMap.addEventListener("click", myMapFunction);
let btFilter = document.getElementById("btFilter");
btFilter.addEventListener("click", filterFunction);
let btReduce = document.getElementById("btReduce");
btReduce.addEventListener("click", reduceFunction);