let numbers05 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
function reverseOrder(){
    numbers05.reverse();
    console.log(numbers05);
}

function sortOrderString(){
    reverseOrder();
    numbers05.sort();
    console.log(numbers05);
}

function sortOrderCompare(){
    reverseOrder();
    numbers05.sort((a,b) => a - b );
    console.log(numbers05)
}

let btReserve = document.getElementById("btReverse");
btReserve.addEventListener("click", reverseOrder);
let btSortString = document.getElementById("btSortString");
btSortString.addEventListener("click", sortOrderString);
let btSortCompare = document.getElementById("btSortCompare");
btSortCompare.addEventListener("click", sortOrderCompare);