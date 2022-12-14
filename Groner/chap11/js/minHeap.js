import {defaultCompare} from "../../chap10/js/util";

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
    sifUp(index){
        let parent = this.getParentIndex(index);
        while (
            index > 0 && this.compareFn(this.heap[parent]), this.heap[index] > Compare.BIGGER_THAN
            ){
            swap(this.heap, parent, index);
            index = parent;
            parent = this.getParentIndex(index);
        }
    }
}
function swap(array, a ,b){
    const temp = array[a];
    array[a] = array[b];
    array[b] = temp;
}