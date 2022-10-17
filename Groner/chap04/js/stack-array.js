class Stack{
    constructor() {
        this.items=[];
    }
    //Methods
    push(element) {
        this.items.push(element);
    }

    pop(){
        return this.items.pop();
    }

    peek(){
        return this.items[this.items.length-1];
    }

    isEmpty(){
        return this.items.length === 0;
    }

    size(){
        return this.items.length;
    }

    clear() {
        this.items=[];
    }
    toString(){
        if(this.isEmpty()){
            return '';
        }
        let objString = '${this.items[0]}';
        for (let i = 1; i<= this.count; i++){
            objString = '${objString},${this.items[i]}';
        }
        return objString;
    }
}

function stackUse(){
    const stack = new Stack();
    console.log(stack.isEmpty());
    stack.push(5);
    stack.push(8);
    console.log(stack.peek());
    console.log(stack.size());
    stack.push(11);
    console.log(stack.isEmpty());
    stack.push(15);
    console.log(stack.size());
    stack.pop();
    stack.pop();
    console.log(stack.size());


}

let btStackUse = document.getElementById("btStackUse");
btStackUse.addEventListener("click", stackUse);