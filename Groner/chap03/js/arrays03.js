let matrix333 = [];

for (let i = 0; i < 3; i++){
    matrix333[i] = [];
    for(let j = 0; j < 3; j++){
        matrix333[i][j] = [];
        for(let k = 0; k < 3; k++){
            matrix333[i][j][k] = i + j + k;
        }
    }
}

function printArray3D(matrix){
    for (let i=0; i<matrix.length; i++){
        for(let j=0; j < matrix[i].length; j++) {
            for (let k = 0; k < matrix[i][j].length; k++){
                    console.log(matrix[i][j][k]);
            }
        }
    }
}

function printMatrix3D(){
    printArray3D(matrix333);
}

let btArray3D = document.getElementById("btArray3D");
btArray3D.addEventListener("click", printMatrix3D);