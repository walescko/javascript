function restParamaterFunction(x, y, ...a){
    return (x+y)*a.length;
}
function exitData() {
    console.log(restParamaterFunction(1, 2, 'hello', true, 7));
}

let btRest = document.getElementById('btRest');
btRest.addEventListener("click", exitData)