import {defaultToString} from "./util.js";
import LinkedList from "../../chap06/js/linkedList.js";
import {ValuePair} from "./valuePair.js";
import {HashTable} from "./hashTable.js";

class HashTableSeparateChaining{
    constructor(toStrFn = defaultToString) {
        this.toStrFn = toStrFn;
        this.table = {};
    }
    //the same code of hashTable.js
    loseloseHashCode(key){
        if(typeof key === "number"){
            return key;
        }
        const tableKey = this.toStrFn(key);
        let hash = 0;
        for (let i = 0; i < tableKey.length; i++){
            hash += tableKey.charCodeAt(i);
        }
        return hash % 37;
    }
    hashCode(key){
        return this.loseloseHashCode(key);
    }
    put(key, value){
        if(key != null && value != null){
            const position = this.hashCode(key);
            if (this.table[position] == null){
                this.table[position] = new LinkedList();
            }
            this.table[position].push(new ValuePair(key,value));
            return true;
        }
        return false
    }
    get(key){
        const position = this.hashCode(key);
        const linkedList = this.table[position];
        if (linkedList != null && !linkedList.isEmpty()){
            let current = linkedList.getHead();
            while (current != null){
                if(current.element.key === key){
                    return current.element.value;
                }
                current = current.next;
            }
        }
        return undefined;
    }
    remove(key){
        const position = this.hashCode(key);
        const linkedList = this.table[position];
        if(linkedList != null && !linkedList.isEmpty()) {
            let current = linkedList.getHead();
            while (current != null) {
                if (current.element.key === key) {
                    linkedList.remove(current.element);
                    if (linkedList.isEmpty()) {
                        delete this.table[position];
                    }
                    return true;
                }
                current = current.next;
            }
        }
        return false;
        }
}

function HashCollision() {
    const hash = new HashTableSeparateChaining();
    hash.put('Ygritte', 'ygritte@email.com');
    hash.put('Jonathan', 'jonathan@email.com');
    hash.put('Jamie', 'jamie@email.com');
    hash.put('Jack', 'jack@email.com');
    hash.put('Jasmine', 'jasmine@email.com');
    hash.put('Jake', 'jake@email.com');
    hash.put('Nathan', 'nathan@email.com');
    hash.put('Athelstan', 'athelstan@email.com');
    hash.put('Sue', 'sue@email.com');
    hash.put('Aethelwulf', 'aethelwulf@email.com');
    hash.put('Sargeras', 'sargeras@email.com');

    console.log(hash.hashCode("Sue"));
    console.log(hash.hashCode("Aethelwulf"));

}

let btHashCollision = document.getElementById("btHashCollision");
btHashCollision.addEventListener("click", HashCollision);