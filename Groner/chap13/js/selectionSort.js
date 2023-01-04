import {Compare, defaultCompare, swap} from "./util";
import {createNonSortedArray} from "./createNonSortedArray";

function  selectionSort(array, compareFn = defaultCompare()){
    const {length} = array;
    let indexMin;
    for(let i = 0; i < length; i++){
        for (let j = 0; j < length; j++){
            if (compareFn(array[indexMin], array[j]) === Compare.BIGGER_THAN){
                indexMin = j;
            }
        }
        if (i !== indexMin){
            swap(array, i, indexMin)
        }
    }
        return array;
}

let array = createNonSortedArray(5);
console.log(array.join());
array = selectionSort(array);
console.log(array.join());