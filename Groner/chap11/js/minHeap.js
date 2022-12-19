import {Compare, defaultCompare} from "../../chap10/js/util";

export class MinHeap{
    constructor(compareFn = defaultCompare) {
        this.compareFn = compareFn;
        this.heap = [];
    }
    getLeftIndex(index){
        return 2*index+1;
    }
    getRightIndex(index){
        return 2*index+2;
    }
    getParentIndex(index){
        if (index === 0) {
            return undefined;
        }
        return Math.floor((index-1)/2);
    }

    insert(value){
        if(value != null){
            this.heap.push(value);
            this.siftUp(this.heap.length -1);
            return true;
        }
        return false;
    }
    siftUp(index){
        let parent = this.getParentIndex(index);
        while (
            index > 0 && this.compareFn(this.heap[parent]), this.heap[index] > Compare.BIGGER_THAN
            ){
            swap(this.heap, parent, index);
            index = parent;
            parent = this.getParentIndex(index);
        }
    }

    size(){
        return this.heap.length;
    }
    isEmpty(){
        return this.size()===0;
    }
    findMinimum(){
        return this.isEmpty() ? undefined : this.heap[0];
    }
    
}
function swap(array, a ,b){
    const temp = array[a];
    array[a] = array[b];
    array[b] = temp;
    // const swap = (array, a ,b) => [array[a], array[b] = array[b],array[a]]; //EMASCRIPT 2015
}

function minHeapTest(){
    const heap = new MinHeap();
    heap.insert(2);
    heap.insert(3);
    heap.insert(4);
    heap.insert(5);
    heap.insert(1);

    console.log("Heap size: ", heap.size());
    console.log("Heap is empty: ", heap.isEmpty());
    console.log("Heap min value: ", heap.findMinimum());
}

function heapTestExtract(){//para testar função sift down
    heap = new MinHeap();
    for (let i = 1; i < 10; i++){
        heap.insert(i);
    }
    console.log("Extract minimum: ", heap.extract());
}

let btMinHeap = document.getElementById("btMinHeapTest");
btMinHeap.addEventListener("click",minHeapTest);
let btMinHeapExtract = document.getElementById("btMinHeapExtract");
btMinHeapExtract.addEventListener("click", heapTestExtract);