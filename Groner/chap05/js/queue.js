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
        return this.count = this.lowerCount;
    }

    clear(){
        this.items = {}
        this.count = 0;
        this.lowerCount= 0;
    }

    toString(){
        if(this.isEmpty()){
            return ''
        }
        let objString = `${this.items[this.lowestCount]}`;
        for(let i = this.lowerCount+1; i< this.count; i++){
            objString = `${objString},${this.items[i]}`
        }
        return objString;
    }
}
function queueCreate(){

}

let btQueueCreate = document.getElementById("btQueueCreate");
btQueueCreate.addEventListener("click", queueCreate)