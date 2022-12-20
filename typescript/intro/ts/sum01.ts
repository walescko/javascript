const number01 = document.getElementById("number1") as HTMLInputElement;
const number02 = document.getElementById("number2") as HTMLInputElement;
const button = document.getElementById("button")!;

function sum(a:number, b:number){
    return a + b;
}

button.addEventListener("click", function () {
    console.log(sum(Number(number01.value), Number(number02.value)));
});