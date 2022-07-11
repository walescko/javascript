function doWhileFunction(){
    let num = 3;
    let i = 0;
    console.log('do...while loop');
    do{
        console.log(num +' * ' + (i+1) + " = " + (num*(i+1)));
        i++;
    }while (i < 10);
}

let btDoWhile = document.getElementById("btDoWhile");
btDoWhile.addEventListener("click", doWhileFunction);