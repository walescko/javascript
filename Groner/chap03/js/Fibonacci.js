function FibonacciSerie(){
    const fibonacci = [];
    fibonacci[1] = 1;
    fibonacci[2] = 2;

    for (let i=3; i<20; i++){
        fibonacci[i] = fibonacci[i-1] + fibonacci[i-2];
    }
    for (let i=1; i<fibonacci.length; i++){
        console.log(fibonacci[i]);
    }
}

let btFibonacci = document.getElementById("btFibonacci");
btFibonacci.addEventListener("click", FibonacciSerie);