let numbers = [0,1,2,3,4,5,6,7,8,9,10];

function Inserts(){
    for(let i = 0; i<numbers.length; i++) {
        console.log(numbers[i]);
    }
}

function InsertFirst(){

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