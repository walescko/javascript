function sayHello2(text){
    console.log(text);
}
function sayHello3(){//Gambiarra
    sayHello2('Teste');
}

let btHello2 = document.getElementById('btArgument');
btHello2 = addEventListener("click", sayHello3);