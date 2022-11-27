import {defaultToString} from "./util.js";
import {ValuePair} from "./valuePair.js";
import {HashTableSeparateChaining} from "./hashTableSeparateChaining.js";

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

function HashCollision(){
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

    console.log(hash.toString());
}

let btHash = document.getElementById("btHash");
btHash.addEventListener("click", HashTableF);
let btHashCollision = document.getElementById("btHashCollision");
btHashCollision.addEventListener("click", HashCollision);