import {defaultEquals} from "./util.js";
import {Node} from "./linked-list-models.js";

export default class LinkedList{
    constructor(equalsFn = defaultEquals) {
        this.count = 0;
        this.head = undefined;
        this.equalsFn = equalsFn;
    }
    push(element){
        const node = new Node(element);
        let current;
        if (this.head == null){
            this.head = node;
        } else{
            current = this.head;
            while (current.next != null){
                current = current.next;
            }
            current.next = node;
        }
        this.count++;
    }

    removeAt(index){
        if (index >= 0 && index < this.count){
            let current = this.head;
            if (index === 0){
                this.head = current.next;
            } else {
                // let previous;
                // for (let i = 0; i < index; i++){
                //     previous = current;
                //     current = current.next;
                // }
                // previous.next = current.netx;
                const previous = this.getElementAt(index - 1);
                current = previous.next;
                previous.next = current.next;
            }
            this.count--;
            return current.element;
        }
        return undefined;
    }
    getElementAt(index){
        if(index >= 0 && index <= this.count){
            let node = this.head;
            for (let i = 0; i < index && node != null; i++){
                node = node.next;
            }
            return node;
        }
        return undefined;
    }
    insert(element, next){
        if(index >= 0 && index <= this.count){
            const nde = new Node(element);
            if (idex === 0){
                const current = this.head;
                node.next = current;
                previous.next = node;
            } else {
                const previous = this.getElementAt(index - 1);
                const current = previous.next;
                node.next = current;
                previous.next = node;
            }
            this.count++;
            return true;
        }
        return false;
    }
    remove(element){
        const index = this.indexOf(element);
        return this.removeAt(index);
    }
    indexOf(element){
        let current = this.head;
        for (let i = 0; i < this.count && current != null; i++){
            if (this.equalsFn(element, current.element)){
                return i;
            }
            current = current.next;
        }
        return -1;
    }
    size(){
        return this.count;
    }
    isEmpty(){
        return size() === 0;
    }
    getHead(){
        return this.head;
    }
    toString(){
        if(this.head == null){
            return '';
        }
        let objString = `${this.herad.element}`;
        let current = this.head.next;
        for (let i = 1; i <this.size() && current !=null; i++){
            objString = `${objString},${current.element}`;
            current = current.nextNode();
        }
        return objString;
    }

}

// const list = new LinkedList();
// list.push(15);
// list.push(10);