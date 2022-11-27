import {defaultToString} from "./util.js";
import {ValuePair} from "./valuePair.js";

export class HashTable{
    constructor(toStrFn = defaultToString) {
        this.toStrFn = toStrFn;
        this.table = {}
    }
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
            this.table[position] = new ValuePair(key, value);
            return true;
        }
        return false;
     }
     get(key){
        const valuePair = this.table[this.hashCode(key)];
        return valuePair == null ? undefined : valuePair.value;
     }
     remove(key){
        const hash = this.hashCode(key);
        const valuePair = this.table[hash];
        if(valuePair != null){
            delete this.table[hash];
            return true
            }
        return false;
     }
    size(){
        return Object.keys(this.table).length;
    }
    isEmpty(){
        return this.size() === 0;
    }

     toString(){
        if (this.isEmpty()){
            return '';
        }
        const keys = Object.keys(this.table);
        let objString = `{${keys[0]} => ${this.table[keys[0]].toString()}}`;
        for (let i = 0; i < keys.length; i++){
            objString = `${objString},{${keys[i]} => ${this.table[keys[i]].toString()}}`
        }
        return objString;

     }


}
function HashTableF(){
    alert("Hi!")
    const hash = new HashTable();
    hash.put("Penny", "penny@email.com");
    hash.put("Schrodinger", "schrodinger@email.com");
    hash.put("Cabrita", "cabrita@email.com");
    hash.put("Penélope", "penelope@email.com");
    hash.put("Caramelo", "caramelo@email.com");

    console.log(hash.hashCode("Penny") + " - Penny");
    console.log(hash.hashCode("Schrodinger") + " - Schordinger");
    console.log(hash.hashCode("Cabrita") + " - Cabrita");
    console.log(hash.hashCode("Penélope") + " - Penélope");
    console.log(hash.hashCode("Caramelo") + " - Caramelo");

    console.log(hash.get("Penny"));
    console.log(hash.get("Digbi"));

    hash.remove("Caramelo");
    console.log(hash.get("Caramelo"));

}

let btHash = document.getElementById("btHash");
btHash.addEventListener("click", HashTableF);
