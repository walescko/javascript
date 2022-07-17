let circleArea = r =>{
    const PI = 3.14;
    let area = PI*r*r;
    return area;
}

function exitData(){
    console.log(circleArea(2));

    }

let btArrowFunction = document.getElementById("btArrowFunction");
btArrowFunction.addEventListener("click", exitData);