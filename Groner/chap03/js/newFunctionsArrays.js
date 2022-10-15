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

function entriesKeysValues(){
    aEntries = numberss.entries();
    for (const n of aEntries){
        console.log(n);
    }
}
function entriesKeys(){
    aKeys = numberss.keys();
    for (const n of aKeys){
        console.log(n);
    }
}
function entriesValues(){
    aValues = numberss.values();
    for (const n of aValues){
        console.log(n);
    }
}

let btForEach2 = document.getElementById("btForEach2");
btForEach2.addEventListener("click", forEach);
let btIterator = document.getElementById("btIterator");
btIterator.addEventListener("click", iteratorFunction);
let btEntriesKeysValues = document.getElementById("brEntriesKeyValue");
btEntriesKeysValues.addEventListener("click", entriesKeysValues);
let btEntriesKeys = document.getElementById("brEntriesKey");
btEntriesKeys.addEventListener("click", entriesKeys);
let btEntriesValues = document.getElementById("brEntriesValues");
btEntriesValues.addEventListener("click", entriesValues);