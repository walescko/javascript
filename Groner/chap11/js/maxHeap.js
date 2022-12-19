import {MinHeap} from "./minHeap.js";
import {Compare, defaultCompare} from "./util.js";

export class MaxHeap extends MinHeap{
    constructor(compareFn = defaultCompare) {
        super(compareFn);
        this.compareFn = reverseCompare(compareFn);
    }
}

function reverseCompare(compareFn){//this function have in util.js
    return (a,b) => compareFn(b, a);
}

function heapSort(array, compareFn = defaultCompare){
    let heapSize = array.length;
    buildMaxHeap(array, compareFn).compareFn;
    while (heapSize >1){
        swap(array, 0, --heapSize);
        heapify(array, 0, heapSize, compareFn);
    }
    return array;
}

function buildMaxHeap(array, compareFn){
    for (let i = Math.floor(array.length/2); i >= 0; i -= 1){
        heapify(array, i, array.length, compareFn);
    }
    return array;
}



function maxHeapTest(){
    const maxHeap = new MaxHeap();
    maxHeap.insert(2);
    maxHeap.insert(3);
    maxHeap.insert(4);
    maxHeap.insert(5);
    maxHeap.insert(1);
    console.log("Heap size: ", maxHeap.size());
    console.log("Heap min value: ", maxHeap.findMinimum());
}

let btMaxHeapTest = document.getElementById("btMaxHeapTest");
btMaxHeapTest.addEventListener("click", maxHeapTest);
