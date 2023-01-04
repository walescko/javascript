import {Compare, defaultCompare, swap} from "./util";
import {createNonSortedArray} from "./createNonSortedArray";

function bubbleSortBest(array, compareFn = defaultCompare){
    const{length} = array;
    for (let i = 0; i < length; i++){
        for (let j = 0; j < length-1-i; j++){
            if (compareFn(array[j], array[j+1]) === Compare.BIGGER_THAN){
                swap(array, j, j+1);
            }
        }
    }
    return array;
}

let array = createNonSortedArray(5);
console.log(array.join());
array = bubbleSortBest(array);
console.log(array.join());