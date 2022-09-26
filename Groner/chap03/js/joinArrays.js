const zero = 0;
const postiveNumbers = [1, 2, 3];
const negatgiveNumbers = [-3, -2, -1];
let numbers = [];

function joinArrays(){
    numbers = negatgiveNumbers.concat(zero, postiveNumbers);
    console.log("modo concat");
    Numbers();
}

function Numbers(){
    for (let i = 0; i < numbers.length; i++)
        console.log(numbers[i]);
}


let btJoinArrays = document.getElementById("btJoinArrays");
btJoinArrays.addEventListener("click", joinArrays);