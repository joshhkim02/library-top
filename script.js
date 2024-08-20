    const myLibrary = [];
    const main = document.querySelector('.main');
    
function Book(author, title, pages, isRead) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.isRead = isRead;
}

function addBookToLibrary(book) {
    return myLibrary.push(book);
}

function displayLibrary(library) {
    for (const book of library) {
        const createBook = document.createElement('div');
        createBook.classList.add('card');
        createBook.textContent = `${book.title} ${book.author} ${book.pages} ${book.isRead}`;
        main.appendChild(createBook);
    }
}


const book1 = new Book('Harry Potter', 'Spells', 93, 'yes');
const book2 = new Book('Gandalf', 'Hobbits', 183, 'no');
const book3 = new Book('Legolas', 'Bows', 132, 'yes');
const book4 = new Book('Harry Potter', 'Spells', 93, 'yes');
const book5 = new Book('Gandalf', 'Hobbits', 183, 'no');
const book6 = new Book('Legolas', 'Bows', 132, 'yes');

addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);
addBookToLibrary(book4);
addBookToLibrary(book5);
addBookToLibrary(book6);


console.log(myLibrary);

displayLibrary(myLibrary);