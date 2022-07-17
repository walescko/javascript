function exitData() {
    let params = [3, 4, 5];
    console.log(sum(...params));
}

let btScattering = document.getElementById('btScattering');
btScattering.addEventListener("click", exitData)