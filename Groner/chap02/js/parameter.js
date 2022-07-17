function sum(x= 1, y= 2, z= 3){
    return x + y + z;
}

function exitData(){
    console.log(sum(4,2));
}

let btParameterFunction = document.getElementById('btParameterFunction');
btParameterFunction.addEventListener("click", exitData);