function fibonacciSerie(){
    let inTerm = document.getElementById("inTermNumber");
    let maxTerm  = Number(inTerm.value);

    const fibonacci = [];

    fibonacci[1] = 1;
    fibonacci[2] = 2;

    for (let i=3; i<=maxTerm; i++){
        fibonacci[i] = fibonacci[i-1] + fibonacci[i-2];
    }

    console.log("Série de Fibonacci");
    for (let i=1; i<fibonacci.length; i++){
        console.log(fibonacci[i]);
    }

}

let btFibonacciSerie = document.getElementById("btFibonacciSerie");
btFibonacciSerie.addEventListener("click", fibonacciSerie);