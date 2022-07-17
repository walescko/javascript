function Book(title, pages, isbn){
    this.title = title;
    this.pages = pages;
    this.isbn = isbn;
}

let book = new Book('title', 'pag', 'isbn');

function exitData() {
    console.log(book.title);
    book.title = 'new title';
    console.log(book.title);
}

let btObject2 = document.getElementById("btObject2");
btObject2.addEventListener("click", exitData);

