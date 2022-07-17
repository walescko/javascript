let circleAreaES5 = function circleArea(r){
    const PI = 3.14;
    let area = PI*r*r;
    return area;
}

function exitData(){
    console.log(circleAreaES5(2));

    }

let btArrowFunction = document.getElementById("btArrowFunction");
btArrowFunction.addEventListener("click", exitData);