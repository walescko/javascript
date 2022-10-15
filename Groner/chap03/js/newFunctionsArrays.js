function forEach(){
    for (const n of numberss){
        console.log(n%2 === 0 ? 'even' : 'odd');
    }
}

function iteratorFunction(){
    iterator = numberss[Symbol.iterator]();
    for (const n of iterator){
        console.log(n);
    }
}

let btForEach2 = document.getElementById("btForEach2");
btForEach2.addEventListener("click", forEach);
let btIterator = document.getElementById("btIterator");
btIterator.addEventListener("click", iteratorFunction);