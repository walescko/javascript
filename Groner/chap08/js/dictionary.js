import {defaultToString} from "./util.js";
import {ValuePair} from "./valuePair.js"
export default class Dictionary{
    constructor(toStrFn = defaultToString) {
        this.toStrFn = toStrFn;
        this.table = {};
    }

    hasKey(key){
        return this.table[this.toStrFn(key)] != null;
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

    forEach(callBack){
        const valuePairs = this.keyValues();
        for (let i = 0; i < valuePairs.length; i++){
            const result = callBackFn(valuePairs[i].key, valuePairs[i].value);
            if (result === false){
                break;
            }
        }
    }

    size(){
        return Object.keys(this.table).length;
    }
    isEmpty(){
        return this.size() === 0;
    }
    clear(){
        this.table= {};
    }

    toString(){
        if(this.isEmpty()){
            return '';
        }
        const valuePairs = this.keyValues();
        let objString = `${valuePairs[0].toString()}`;
        for(let i = 1; i < valuePairs.length; i++){
            objString = `${objString},${valuePairs[i].toString()}`;
        }
        return objString;
     }
}

function DictionaryF(){
    const dictionary = new Dictionary();
    dictionary.set("Cabrita", "cabrita@email.com");
    dictionary.set("Schordinger", "schrodinger@email.com");
    dictionary.set("Penny", "penny@email.com");
    dictionary.set("Penélope", "penelope@email.com");
    dictionary.set("Outro", "outro@email.com");

    console.log(dictionary.hasKey("Cabrita"));
    console.log(dictionary.size());
    console.log(dictionary.keys());
    console.log(dictionary.values());
    console.log(dictionary.keyValues());
    console.log(dictionary.get("Penny"));

    dictionary.remove("Outro");
    console.log(dictionary.size());
    console.log(dictionary.keys());
    console.log(dictionary.values());
    console.log(dictionary.keyValues());
}
let btDictionary = document.getElementById("btDictionary");
btDictionary.addEventListener("click",  DictionaryF);