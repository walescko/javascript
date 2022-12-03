function fibonacci(n){
    if (n <= 1) return 0;
    if (n <= 2) return 1;
    return (fibonacci(n- 1) + fibonacci(n - 2));
}

function FibonacciC(){
    let inNumber = document.getElementById("inNumber");
    let n = Number(inNumber.value);
    console.log("O " + n + "º termo da Série de Fibonacci é: " + fibonacci(n));
}

let btFibonacci = document.getElementById("btFibonacci");
btFibonacci.addEventListener("click", FibonacciC);