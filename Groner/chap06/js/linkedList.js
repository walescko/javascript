import {defaultEquals} from '../util';
import {Node} from "./models/linked-list-models";
export default class LinkedList{
    this.count = 0;
    this.head = undefined;
    this.equalsFn = equalsFn;
}

export function defaultEquals(a, b){
    return a === b;
}

export class Node {
    constructor(element) {
        this.element;
        this.next = undefined;
    }
}
