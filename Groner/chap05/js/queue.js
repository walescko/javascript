class Queue {
    constructor() {
        this.count = 0;
        this.lowerCount = 0;
        this.items = {}
    }


    enqueue(element) { //Adiciona elementos no final da fila
        this.items[this.count] = element;
        this.count++
    }

    dequeue(){//deleta o elemento no inicio da fila
        if (this.isEmpty()){
            return undefined;
        }
        const result = this.items[this.lowerCount];
        delete this.items[this.lowerCount];
        this.lowerCount++;
        return result;
    }

    peek(){
        if(this.isEmpty()){
            return undefined;
        }
        return this.items[this.lowerCount];
    }
    isEmpty(){
        return this.size() === 0;
    }

    size(){
        return this.count - this.lowerCount;
    }

    clear(){
        this.items = {}
        this.count = 0;
        this.lowerCount= 0;
    }

    toString(){
        if(this.isEmpty()){
            return '';
        }
        let objString = `${this.items[this.lowerCount]}`;
        for(let i = this.lowerCount+1; i< this.count; i++){
            objString = `${objString},${this.items[i]}`;
        }
        return objString;
    }
}

const queue = new Queue();
function queueCreate(){

    console.log(queue.isEmpty());
}

function enqueue(){
    queue.enqueue("Jonh");
    queue.enqueue("Jack");
    console.log(queue.toString());
}

function addElement(){
    queue.enqueue("Camilla");
    console.log(queue.toString());
    console.log(queue.size());
    console.log(queue.isEmpty());
}

function removeElement(){
    queue.dequeue();
    console.log(queue.toString());
    console.log(queue.size());
    queue.dequeue();
    console.log(queue.toString());
    console.log(queue.size());

}

function peek(){
    console.log(queue.peek());
}

let btQueueCreate = document.getElementById("btQueueCreate");
btQueueCreate.addEventListener("click", queueCreate)
let btEnqueue = document.getElementById("btEnqueue");
btEnqueue.addEventListener("click", enqueue)
let btPeek = document.getElementById("btPeek");
btPeek.addEventListener("click", peek);
let btAddElement = document.getElementById("btAddElement");
btAddElement.addEventListener("click", addElement);
let btRemoveElement = document.getElementById("btRemoveElement");
btRemoveElement.addEventListener("click", removeElement);