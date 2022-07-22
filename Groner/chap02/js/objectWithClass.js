class Book{
    constructor(title, pages, isbn) {
        this.title = title;
        this.pages = pages;
        this.isbn = isbn;
    }
    printIsbn(){
        console.log(this.isbn);
    }
}

function exitData() {
    let book = new Book('title', 'pag', 'isbn');
    console.log(book.title);
    book.title = 'new title';
    console.log(book.title);
}

let btObjetc01 = document.getElementById("btObject01");
btObjetc01.addEventListener('click', exitData)