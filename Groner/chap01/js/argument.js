function sayHello2(text){
    console.log(text);
}

function sayHello3(){ //Gambiarra aqui
    sayHello2("Hello World 3");
}
let btArgument = document.getElementById("btArgument");
btArgument.addEventListener("click", sayHello3);