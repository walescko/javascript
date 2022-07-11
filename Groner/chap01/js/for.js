function forFunction(){
    let num = 4;

    for(let i = 0; i <10; i++){
        console.log(num +' * ' + (i+1) + " = " + (num*(i+1)));
    }
}

let btFor = document.getElementById("btFor");
btFor.addEventListener("click", forFunction);