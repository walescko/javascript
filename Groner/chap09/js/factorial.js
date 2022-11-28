function factorial(n) {
        if (n === 1 || n === 0) {
            return 1;
        }
        return n * factorial(n - 1);
}

function factorialC(){
    let inNumber = document.getElementById("inNumber");
    let n = Number(inNumber.value);
    console.log("Fatorial: " + n + "! = "+ factorial(n));
}

let btFactorial = document.getElementById("btFactorial");
btFactorial.addEventListener("click", factorialC);