let averageTemp = [];
averageTemp[0] = [75, 72, 74, 79, 82, 81]
averageTemp[1] = [80, 79, 73, 75, 73, 74]

function HelloArrays() {
    alert("Hello Arrays");

}

function printArray2D(matrix){
    for (let i=0; i<matrix.length; i++){
        for(let j=0; j < matrix[i].length; j++){
            console.log(matrix[i][j]);
        }
    }
}

function printMatrix(){
    printArray2D(averageTemp);
}

let btHelloArrays = document.getElementById("btHello");
btHelloArrays.addEventListener("click", HelloArrays);
let btArray2D = document.getElementById("btArray2D");
btArray2D.addEventListener("click", printMatrix);