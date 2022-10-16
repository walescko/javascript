const friends = [
    {name: 'Jonh', age: 30},
    {name: 'Ana', age: 20},
    {name: 'Chris', age: 25},
];
function friends01(){
    console.log(friends);
}

function comparePerson(a,b){
    if (a.age < b.age){
        return -1;
    }
    if (a.age > b.age){
        return 1;
    }
    return 0;
}

function ageOrder(){
    console.log(friends.sort(comparePerson));
}

let btFriends = document.getElementById('btFriends');
btFriends.addEventListener('click', friends01);
let btAgeOrder = document.getElementById('btAgeOrder');
btAgeOrder.addEventListener('click', ageOrder);


