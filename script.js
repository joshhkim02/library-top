const myLibrary = [];
const main = document.querySelector('.main');
const dialog = document.querySelector('dialog');
const addButton = document.querySelector('.btn-add');
const closeButton = document.querySelector('dialog button');
    
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
        createBook.textContent = `${book.title}
                                  ${book.author}
                                  ${book.pages}
                                  ${book.isRead}`;
        main.appendChild(createBook);
    }
}

addButton.addEventListener('click', () => {
    dialog.showModal();
})

closeButton.addEventListener('click', () => {
    dialog.close();
})

const book1 = new Book('Harry Potter', 'Spells', 93, 'yes');
const book2 = new Book('Gandalf', 'Hobbits', 183, 'no');
const book3 = new Book('Legolas', 'Bows', 132, 'yes');

addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);

console.log(myLibrary);

displayLibrary(myLibrary);