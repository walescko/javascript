let myVariable = 'global';
myOtherVariable = 'global';

function myFunction(){
    let myVariable = 'local';
    return myVariable;
}

function myOtherFunction(){
    myOtherVariable = 'local';
    return myOtherVariable;
}
console.log(myVariable);
document.write(myVariable + '<br>');
console.log(myFunction());
document.write(myFunction() + '<br>');
console.log(myOtherVariable);
document.write(myOtherVariable + '<br>');
console.log(myOtherFunction());
document.write(myOtherFunction() + '<br>');
console.log(myOtherVariable);
document.write(myOtherVariable + '<br>');