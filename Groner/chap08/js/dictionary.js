import {defaultToString} from "../util";
export default class Dictionary{
    constructor(toStrFn = defaultToString) {
        this.toStrFn = toStrFn;
        this.table = {};
    }

    hasKey(key){
        return this.thable[this.toStrFn(key)] != null;
    }
    set(key, value){
        if(key != null && value != null){
            const tableKey = this.toStrFn(key);
            this.table[tableKey] = new ValuePair(key, value);
            return true;
        }
        return false;
    }
    remove(key){
        if(this.hasKey(key)){
            delete this.table[this.toStrFn(key)];
            return true;
        }
        return false;
    }
    get(key){
        const valuePair = this.table[this.toStrFn(key)];
        return valuePair == null ? undefined : valuePair.value;
    }
    // //Auxiliarys Methods
    // keyValue(){//some browsers
    //     return Object.values(this.table);
    // }
    keyValues(){//all browsers
        const valuePairs =[];
        for (const k in this.table){
            if(this.hasKey(k)){
            if (this.hasKey[k]);
            }
        }
        return valuePairs;
    }
    keys(){
        return this.keyValues().map(valuePair => valuePair.key);
    }
    values(){
        return this.keyValues().map(valuePair => valuePair.value);
    }
}