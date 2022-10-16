let names = ["Ana", "ana", "jonh", "Jonh"];

function nameOrderASCII(){
    console.log(names.sort());
}

function nameOrderLC(){
    names = ["Ana", "ana", "jonh", "Jonh"];
    console.log(names.sort((a,b) =>{
        if(a.toLowerCase() < b.toLowerCase()){
            return -1;
        }
        if (a.toLowerCase() > b.toLowerCase()){
            return 1;
        }
        return 0;
    }));
}

let btNameOrderASCII = document.getElementById("btNameOrderASCII");
btNameOrderASCII.addEventListener("click", nameOrderASCII);
let btNameOrderLC = document.getElementById("btNameOrderLC");
btNameOrderLC.addEventListener("click",nameOrderLC);