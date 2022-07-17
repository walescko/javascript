const book ={
    name: 'Learning Javascript DataStructures and Algorithms'
};

function templeteWithN(){
    console.log('You are reading ' + book.name + '.,\n and this a new line\n and so is this.');
}
function  templeteWithoutN(){
    console.log(`You are reading ${book.name}.,
        and this is a new line
    and so is this. `);
}

let btTemplete01 = document.getElementById('btTemplete01');
btTemplete01.addEventListener("click", templeteWithN);
let btTemplete02 = document.getElementById("btTemplete02");
btTemplete02.addEventListener("click", templeteWithoutN);
