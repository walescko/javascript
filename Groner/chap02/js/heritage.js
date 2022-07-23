class ITBook extends Book{
    constructor(title, pages, isbn, technology) {
        super(title, pages, isbn);
        this.technology = technology;
    }
    printTechnology(){
        console.log(this.technology);
    }
}

let jsBook = new ITBook('Learning JS Algorithms', '200', "12345678", 'Javascript');
function exitData() {
    console.log(jsBook.title);
    // console.log(jsBook.printTechnology());
    jsBook.printTechnology();
}

let btObject02 = document.getElementById('btObject02');
btObject02.addEventListener("click", exitData);