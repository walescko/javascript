function objUse(){
    const jsFramework = {
        name: 'Angular'
    };

    console.log(jsFramework.name);

    jsFramework.name = 'React';

    console.log(jsFramework.name);
}

let btObj = document.getElementById('btObj');
btObj.addEventListener("click", objUse);