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

function InsertUnshift(){ //metodo unshift - inseri no inicio do vetor

    console.log("Antes da inserção unshift: ");
    Numbers();

    console.log("Após a inserção unshift:")
    numbers.unshift(-2);
    Numbers();
    numbers.unshift(-3, -4);
    Numbers();
}

function Numbers(){
    for(let i = 0; i<numbers.length; i++) {
        console.log(numbers[i]);
    }
}

let btNumbers = document.getElementById("btNumbers");
btNumbers.addEventListener("click", Numbers);
let btInsertPush = document.getElementById("btInsertPush");
btInsertPush.addEventListener("click", Inserts);
let btInsertFirst = document.getElementById("btInsertFirst");
btInsertFirst.addEventListener("click", InsertFirst);