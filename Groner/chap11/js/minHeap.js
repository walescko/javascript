import {defaultCompare} from "../../chap10/js/util";

export class MinHeap{
    constructor(compareFn = defaultCompare) {
        this.compareFn = compareFn;
        this.heap = [];
    }
}