var number01 = document.getElementById("number1");
var number02 = document.getElementById("number2");
var button = document.getElementById("button");
function sum(a, b) {
    return a + b;
}
button.addEventListener("click", function () {
    console.log(sum(Number(number01.value), Number(number02.value)));
});
