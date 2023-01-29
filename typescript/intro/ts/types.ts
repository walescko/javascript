//boolean (true/false)
let isOpen: boolean;
isOpen = true;

//string ('foo', "foo", `foo`)
let message001 = "foo";
let message002 = 'foo2';
let message003 = `foo ${isOpen}`;

//number 
let number01 = 20; //int
let number02 = 13.5; //float
let number03 = 0xff0; //hexadecimal

//array - deve-se informar o tipo de variável que é armazenado no array
//string[] numbem[]
let items01: number[];
items01 = [1, 2, 3];
//não pode usar outro tipo de variavel como:
// items01 = ["a", "b", "c"];
let item02: Array<number>;
item02 = [4, 5, 6];

//tuples - tupla
let title: [number, string];
title = [89, "A volta dos que não foram"];

//enum - enumeração
enum Colors{
    white = "#FFF",
    black = "#000",
}

//any - any type, NOT RECOMENDED
let thing: any;
thing = [2, 3]
//void - void return
function logger():void{
    console.log("foo");
}
// null/undefined, NÃO USAR COMO TIPO PRIMITIVO
let variable1 : string | undefined;

// never - Nunca dá retorno
function error(): never{
    throw new Error("error");
}

//object - tudo aquilo que não é das anteriores
let cart: object
cart = {key: "foo"}
