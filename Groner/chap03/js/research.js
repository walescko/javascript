let numbers06 = [1, 2, 3, 4, 5, 6, 7, 8,
    9, 10, 11, 12, 13, 14, 15];
function researchMethod(){
    console.log(numbers06.indexOf(10));
    console.log(numbers06.indexOf(100));
}

function multipleOf13(element, index, array){
    return (element %13 == 0);
}

function findMethod(){
    console.log(numbers06.find(multipleOf13));
    console.log(numbers06.findIndex(multipleOf13));
}

function includesMethod(){
    console.log(numbers06.includes(15));
    console.log(numbers06.includes(20));
    let numbers07 = [7, 6, 5, 4, 3, 2, 1];
    console.log(numbers07.includes(4,5));
}

function arrayToStringMethod(){
    console.log(numbers06.toString());
    const numbersString = numbers06.join("-");
    console.log(numbersString);
}

function typedArrayClass(){
    let length = 5;
    let int16 = new Int16Array(length);
    let array16 = [];
    array16.length = length;
    for (let i = 0 ; i < length; i++){
        int16[i] = i+1;
    }
    console.log(int16);
}

let btResearch = document.getElementById("btResearch");
let btFind = document.getElementById("btFind");
let btInclude = document.getElementById("btIncludes");
let btArrayToString = document.getElementById("btArrayToString");
let btTypedArray = document.getElementById("btTypedArray");
btResearch.addEventListener("click", researchMethod);
btFind.addEventListener("click", findMethod);
btInclude.addEventListener("click", includesMethod);
btArrayToString.addEventListener("click", arrayToStringMethod);
btTypedArray.addEventListener("click", typedArrayClass);