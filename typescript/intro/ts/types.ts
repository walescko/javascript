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
