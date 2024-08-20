const myLibrary = [];

function Book(author, title, pages, isRead) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.isRead = isRead;
}

function addBookToLibrary(book) {
    return myLibrary.push(book);
}

const book1 = new Book('hi', 'hi', 93, 'yes');
const book2 = new Book('hi', 'hi', 93, 'yes');
const book3 = new Book('hi', 'hi', 93, 'yes');

addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);


console.log(myLibrary);