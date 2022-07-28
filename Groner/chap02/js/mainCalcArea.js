import {circleArea, squareArea} from "./modules/calcArea.mjs";

function exitData(){
    console.log('Modulos Test');
    console.log(circleArea(2));
    console.log(squareArea(2));
}

let btModules01 = document.getElementById('btModule01');
btModules01.addEventListener('click', exitData);