let movie = 'Batman Begins'
//var movie = 'Lord of Rings'
function starWarsFan(){
    const movie = 'Star Wars';
    return movie;
}

function dcFan(){
    movie = 'The Legue - Origin';
    return movie;
}

function blizzardFan(){
    const isFan = true;
    let phrase = 'Warcraft';
    console.log('Before if: ' + phrase);

    if(isFan){
        let phrase = 'initial text';
        phrase = 'For the Horde!';
        console.log('Inside if: ' + phrase);
    }

    pharse = 'For the Alliance!';
    console.log('After if: ' + phrase);
}
function exitData(){
    console.log(movie);
    console.log(starWarsFan());
    console.log(dcFan());
    console.log(movie);
    blizzardFan();
}

let btEscopo = document.getElementById('btEscopo');
btEscopo.addEventListener('click', exitData);