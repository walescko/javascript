let numbers = [0,1,2,3,4,5,6,7,8,9,10];

function Inserts(){ //metodo push - insere no final do vetor
    console.log("Antes da inserção push:");
    Numbers();
    numbers.push(11);
    numbers.push(12,13);
    console.log("Após inserção push:");
    Numbers();

}

function InsertFirst(){
    console.log("Antes de descolar os elementos:");
    Numbers();

    Array.prototype.insertFirstPosition = function (value){
        for(let i = this.length; i>=0; i--){
            this[i] = this[i-1];
        }
        this[0]=value;
    };
    numbers.insertFirstPosition(-1);

    console.log("Após o deslocamento e inserção no inicio:")
    Numbers();

}

function InsertUnshift01() { //metodo unshift - inseri no inicio do vetor 1 elemento

    console.log("Antes da inserção unshift: ");
    Numbers();

    numbers.unshift(-2);
    console.log("Após a inserção unshift:")
    Numbers();
}

function InsertUnshift02() { //metodo unshift - inseri no inicio do vetor 2 elemento
    console.log("Antes da inserção unshift: ");
    Numbers();

    numbers.unshift(-4, -3);
    console.log("Após a inserção unshift:")
    Numbers();
}

function RemoveShift(){
    console.log("Antes da remoção shift: ");
    Numbers();

    numbers.shift();

    console.log("Após a remoção shift:");
    Numbers();
}

function RemovePop(){//remove elemento do final do array
    console.log("Antes da remoção pop: ");
    Numbers();

    numbers.pop();

    console.log("Após a remoção pop:");
    Numbers();

}

function RemoveSplice(){
    console.log("Antes da remoção splice: ");
    NumbersPosition();

    numbers.splice(5,3);//remove três elementos a partir da posição 5

    console.log("Após a remoção splice:");
    NumbersPosition();

}

function Numbers(){
    for(let i = 0; i<numbers.length; i++) {
        console.log(numbers[i]);
    }
    console.log("Comprimento do array: ", numbers.length);
}
function NumbersPosition(){ //mostra a posição do número
    for(let i = 0; i<numbers.length; i++) {
        console.log("Elemento %s: %s", i, numbers[i]);
    }
    console.log("Comprimento do array: ", numbers.length);
}


let btNumbers = document.getElementById("btNumbers");
btNumbers.addEventListener("click", Numbers);
let btInsertPush = document.getElementById("btInsertPush");
btInsertPush.addEventListener("click", Inserts);
let btInsertFirst = document.getElementById("btInsertFirst");
btInsertFirst.addEventListener("click", InsertFirst);
let btUnShift01 = document.getElementById("btUnShift1");
btUnShift01.addEventListener("click", InsertUnshift01);
let btUnShift02 = document.getElementById("btUnShift2");
btUnShift02.addEventListener("click", InsertUnshift02);
let btShift = document.getElementById("btShift");
btShift.addEventListener("click", RemoveShift);
let btPop = document.getElementById("btPop");
btPop.addEventListener("click", RemovePop);
let btSpliceRemove = document.getElementById("btSpliceRemove");
btSpliceRemove.addEventListener("click", RemoveSplice);