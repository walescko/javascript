//boolean (true/false)
var isOpen;
isOpen = true;
//string ('foo', "foo", `foo`)
var message001 = "foo";
var message002 = 'foo2';
var message003 = "foo ".concat(isOpen);
//number 
var number01 = 20; //int
var number02 = 13.5; //float
var number03 = 0xff0; //hexadecimal
//array - deve-se informar o tipo de variável que é armazenado no array
//string[] numbem[]
var items01;
items01 = [1, 2, 3];
//não pode usar outro tipo de variavel como:
// items01 = ["a", "b", "c"];
var item02;
item02 = [4, 5, 6];
//tuples - tupla
var title;
title = [89, "A volta dos que não foram"];
//enum - enumeração
var Colors;
(function (Colors) {
    Colors["white"] = "#FFF";
    Colors["black"] = "#000";
})(Colors || (Colors = {}));
