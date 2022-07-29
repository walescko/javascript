class Person{
    constructor(name) {
        this.name = name;
    }
    get name(){
        return this._name; //gambiarra javascript ES2015
    }
    set name(value){
        this._name = value;
    }
}
function exitData(){
    
    let lotrChar = new Person('Batman');
    console.log('Getters and Setters');
    console.log(lotrChar.name);
    lotrChar.name = 'Comissario Gordon';
    console.log(lotrChar.name);
    lotrChar._name = 'Cat Woman';
    console.log(lotrChar.name);

}

let btObject03 = document.getElementById('btObject03');
btObject03.addEventListener('click', exitData);