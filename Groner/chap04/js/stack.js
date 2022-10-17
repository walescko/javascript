class Stack01{
    constructor() {
        this._count = 0;
        this._items = {};
    }

    push(element){
        this._items[this._count] = element;
        this._count++;
    }
    size(){
        return this._count;
    }
    isEmpty(){
        return this._count === 0;
    }
    pop(){
        if(this.isEmpty()){
            return undefined;
        }
        this._count--;
        const result = this._items[this._count];
        delete this._items[this._count];
        return result;
    }

    peek(){
        if(this.isEmpty()){
            return undefined;
        }
        return this._items[this._count-1];
    }
    clear(){
        this._items = {};
        this._count = 0;
    }
    toString(){
        if(this.isEmpty()){
            return '';
        }
        let objString = '${this.items[0]}';
        for (let i = 1; i<= this._count; i++){
            objString = '${objString},${this.items[i]}';
        }
        return objString;
    }
}

function stackCreate(){
    const stack = new Stack01();
    stack.push(5);
    stack.push(9);
    console.log(stack);
}

let btStackCreate = document.getElementById("btStackCreate");
btStackCreate.addEventListener("click", stackCreate);