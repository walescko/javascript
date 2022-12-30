import {Compare, defaultCompare, swap} from "./util";


function  selectionSort(array, compareFn = defaultCompare()){
    const {length} = array;
    let indexMin;
    for(let i = 0; i < length; i++){
        for (let j = 0; j < length; j++){
            if (compareFnarray([indexMin], array[j]) === Compare.BIGGER_THAN){
                indexMin = j;
            }
        }
        if (i !== indexMin){
            swap(array, i, indexMin)
        }
    }
        return array;
};