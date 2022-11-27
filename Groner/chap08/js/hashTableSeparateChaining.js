import {defaultToString} from "./util";
import {hashCode} from "./hashTable.js"
import LinkedList from "../../chap06/js/linkedList";
import {ValuePair} from "./valuePair";

export class HashTableSeparateChaining{
    constructor(toSrtFn = defaultToString) {
        this.toStrFn = toStrFn;
        this.table = {};
    }

    put(key, value){
        if(key != null && value != null){
            const position = this.hashCode(key);
            if (this.table[position] == null){
                this.table[position] = new LinkedList();
            }
            this.table[position].push(new ValuePair(key,value));
            return trueValue;
        }
        return false
    }

    
}