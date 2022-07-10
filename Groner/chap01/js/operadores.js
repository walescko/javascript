console.log('Operadores em JavaScript');
document.write('Operadores em Java Script <br>' );

let num = 0;
num = num + 2;
num = num * 3;
num = num / 2;

num++;
num--;
num += 1;
num -= 2;
num *= 3;
num /= 2;
num %= 3;

console.log("num == 1: " + (num == 1));
document.write("num == 1: " + (num == 1) + "<br>");
console.log("num === 1: "+ (num === 1));
document.write("num === 1: "+ (num === 1)+ "<br>");
console.log("num != 1: " + (num != 1));
document.write("num != 1: " + (num != 1)+ "<br>");
console.log("num > 1: " + (num > 1));
document.write("num > 1: " + (num > 1)+ "<br>");
console.log("num < 1: " + (num < 1));
document.write("num < 1: " + (num < 1) + "<br>");
console.log("num >= 1: " + (num >= 1));
document.write("num >= 1: " + (num >= 1) + "<br>");
console.log("num <= 1: " + (num <= 1));
document.write("num <= 1: " + (num <= 1) + "<br>")
console.log("true && False: " + (true && false));
document.write("true && False: " + (true && false) + "<br>")
console.log("true || false: " + (true || false));
document.write("true || false: " + (true || false) + "<br>")
console.log("!true: " + (!true));
document.write("!true: " + (!true) + "<br><br>")

console.log("5 & 1: ", (5 & 1));
document.write("5 & 1: ", (5 & 1) + "<br>");
console.log("5 | 1: ", (5 | 1));
document.write("5 | 1: ", (5 | 1) + "<br>");
console.log("~ 5: ", (~5));
document.write("~ 5: ", (~5) + "<br>");
console.log("5 ^ 1: ", (5^1));
document.write("5 ^ 1: ", (5^1) + "<br>");
console.log("5 << 1: ", (5 << 1));
document.write("5 << 1: ", (5 << 1) + "<br>");
console.log("5 >> 1: ", (5 >> 1));
document.write("5 >> 1: ", (5 >> 1) + "<br><br>");

console.log('typeof num:', typeof num);
console.log('typeof Packt:', typeof  'Packt');
console.log('typeof true: ',typeof true);
conslole.log('typeof [1,2,3]:', typeof [1,2,3]);
console.log('typeof {name:Jonh}', typeof {name:'Jonh'});

let myObj = {name: "Jonh", age: 21};
console.log(myObj);
delete myObj.age;
console.log(myObj);

