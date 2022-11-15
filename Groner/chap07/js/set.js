class Set{
    constructor() {
        this.items ={}
    }

    has(element){//verifica se o elemento está no conjunto
        return Object.prototype.hasOwnProperty.call(this.items, element);
    }

    add(element){
        if(!this.has(element)){
            this.items[element] = element;
            return true;
        }
        return false;
    }

    delete(element){
    if(this.has(element)){
        delete this.items[element];
        return true;
    }
    return false;
    }
    clear(){
        this.items = {};
    }
    size(){
        return Object.keys(this.items).length;
    }
    sizeLegacy(){
        let count = 0;
        for (let key in this.items){
            if(this.items.hasOwnProperty(key)){
                count++;
            }
        }
        return count;
    }
    values(){//navegadores modernos
        return Object.values(this.items);
    }
    valuesLegacy(){//todos os navegadores
        let values =[];
        for (let key in this.items){
            if(this.items.hasOwnProperty(key)){
                values.push(key);
            }
        }
        return values;
    }

    union(otherSet){
        const unionSet = new Set();
        this.values().forEach(value => unionSet.add(value));
        otherSet.values().forEach(value => unionSet.add(value));
        return unionSet;
    }

    intersection(otherSet){
        const intersectionSet = new Set();
        const values = this.values();
        for (let i = 0; i < values.length; i++){
            if (otherSet.has(values[i])){
                intersectionSet.add(values[i]);
            }
        }
        return intersectionSet;
    }
}

function SetFunction() {
    const set = new Set();
    set.add(1);
    console.log(set.values());
    console.log(set.has(1));
    console.log(set.size());
    set.add(2);
    console.log(set.values());
    console.log(set.has(2));
    console.log(set.size());
    set.add(3);
    set.delete(1);
    console.log(set.values());
    set.delete(2);
    console.log(set.values());
    set.delete(3);
    console.log(set.size());
    console.log(set.values());
}

function Union() {
    const setA = new Set();
    const setB = new Set();

    setA.add(1);
    setA.add(2);
    setA.add(3);
    console.log("Elementos do conjunto A: ", setA.values());
    console.log("Tamanho do conjunto A: ", setA.size());

    setB.add(3);
    setB.add(4);
    setB.add(5);
    setB.add(6);
    console.log("Elementos do conjunto B: ", setB.values());
    console.log("Tamanho do conjunto B: ", setB.size());

    const unionAB = setA.union(setB);
    console.log("Conjunto União A e B", unionAB.values());
    console.log("Tamanho do conjunto União A e B: ", unionAB.size());
}

function Intersection(){
    const setA = new Set();
    const setB = new Set();

    setA.add(1);
    setA.add(2);
    setA.add(3);
    console.log("Elementos do conjunto A: ", setA.values());
    console.log("Tamanho do conjunto A: ", setA.size());

    setB.add(2);
    setB.add(3);
    setB.add(5);
    setB.add(6);
    console.log("Elementos do conjunto B: ", setB.values());
    console.log("Tamanho do conjunto B: ", setB.size());

    const intersectionAB = setA.intersection(setB);
    console.log("Conjunto Intersecção A e B", intersectionAB.values());
    console.log("Tamanho do conjunto Intersecção A e B: ", intersectionAB.size());

}


let  btSet = document.getElementById("btSet");
btSet.addEventListener("click", SetFunction);
let btUnion = document.getElementById("btUnion");
btUnion.addEventListener("click", Union);
let btIntersection = document.getElementById("btIntersection");
btIntersection.addEventListener("click", Intersection);
