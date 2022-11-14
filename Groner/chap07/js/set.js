class Set{
    constructor() {
        this.items ={}
    }

    has(element){//verifica se o elemento está no conjunto
        return Object.prototype.hasOwnProperty(this.items, element)
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
}

function SetFunction(){
    const set = new Set();
    set.add(1);
    set.add(2);
    set.add(3);
    set.add("Juao");
    console.log(set);
    console.log(set.size());
    set.add("Filho du Truvão");
    console.log(set.sizeLegacy());
}

let  btSet = document.getElementById("btSet");
btSet.addEventListener("click", SetFunction);