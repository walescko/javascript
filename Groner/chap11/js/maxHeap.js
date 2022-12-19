import {MinHeap} from "./minHeap.js";
import {defaultCompare} from "./util.js";

export class MaxHeap extends MinHeap{
    constructor(compareFn = defaultCompare) {
        super(compareFn);
        this.compareFn = reverseCompare(compareFn);
    }
}

function reverseCompare(compareFn){//this function have in util.js
    return (a,b) => compareFn(b, a);
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