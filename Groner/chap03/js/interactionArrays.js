let numberss = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

function isEven(x){
    console.log(x);
    return (x%2 == 0) ? true : false;

}
function everyFunction() {
    numberss.every(isEven);
}

function someFunction() {
    numberss.some(isEven);
}

// function printEvens(){
//     for(let i = 0; i < numberss.length; i++){
//         isEven(numberss[i]);
//     }
// }

let btEvery = document.getElementById("btEvery");
btEvery.addEventListener("click", everyFunction);
let btSome = document.getElementById("btSome");
btSome.addEventListener("click", someFunction);