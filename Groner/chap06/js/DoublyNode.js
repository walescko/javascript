import LinkedList, {defaultEquals} from "./linkedList";

class doublyNode extends Node {
    constructor(element, next, prev) {
        super(element, next);
        this.prev = prev;
    }
}

class DoublyLinkedList extends LinkedList{
    constructor(equalsFn = defaultEquals) {
        super(equalsFn);
        this.tail = undefined;
    }
    insert(element, index){
        if (index >= 0 && index <= this.count){
            const node = new DoublyNode(element);
            let current = this.head;
            if (index === 0){
                if (this.head = null){
                    this.head = node;
                    this.all = node;
                } else {
                    node.next = this.head;
                    current.prev = node;
                    this.head = node;
                }
            } else if (index === this.count){
                current = this.tail;
                current.next = node;
                node.prev = current;
                this.tail = node;
            } else {
                const previous = this.getElementAt(index - 1);
                current = previos.next;
                node.next = current;
                previous.next = node;
                current.prev = node;
            }
            this.count++;
            return true;
            }
        return false;
        }
        removeAt(index){
            if (index >= 0 && index < this.count){
                let current = this.head;
                if (index === 0){
                    this.head = current.next;
                    if(this.count === 1){
                        this.tail - undefined;
                    } else {
                        this.head.prev = undefined;
                    }
                } else if (index === this.count - 1){
                    current = this.tail;
                    this.tail = current.prev;
                    this.tail.next = undefined;
                } else {
                    current - this.getElementAt(index);
                    const previous = current.prev;
                    previous.next = current.next;
                    currente.next.prev = previous;
                }
                this.count--;
                return current.element;
            }
            return undefined;
        }
}
