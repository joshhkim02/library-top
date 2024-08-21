const myLibrary = [];

const main = document.querySelector('.main');
const dialog = document.querySelector('dialog');
const addButton = document.querySelector('.btn-add');
const closeButton = document.querySelector('.btn-close');
const submitButton = document.querySelector('.btn-submit');

const titleInput = document.querySelector('#book_title');
const authorInput = document.querySelector('#author_name');
const pagesInput = document.querySelector('#num_pages');
const readInput = document.querySelector('#is_read');

function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

function resetInput() {
    titleInput.value = "";
    authorInput.value = "";
    pagesInput.value = "";
    readInput.value = "";
}

function addBookToLibrary(book) {
    return myLibrary.push(book);
}

function displayLibrary(library) {
    for (const book of library) {
        const createBook = document.createElement('div');
        createBook.classList.add('card');
        createBook.textContent = `Title: ${book.title}
                                  Author: ${book.author}
                                  Pages: ${book.pages}
                                  Has read: ${book.isRead}`;
        main.appendChild(createBook);
    }
}

submitButton.addEventListener('click', (event) => {
    // Get user input
    let title = titleInput.value;
    let author = authorInput.value;
    let pages = pagesInput.value;
    let read =  readInput.value;

    // Create and add new book to DOM tree
    let newBook = new Book(title, author, pages, read);
    addBookToLibrary(newBook);
    const createBook = document.createElement('div');
    createBook.classList.add('card');
    createBook.textContent = `Title: ${newBook.title}
                              Author: ${newBook.author}
                              Pages: ${newBook.pages}
                              Has read: ${newBook.isRead}`;
    main.appendChild(createBook);

    // Reset input values in form 
    resetInput();

    // Prevent trying to send data to server and close the dialog box
    event.preventDefault();
    dialog.close();
});

addButton.addEventListener('click', () => {
    dialog.showModal();
})

closeButton.addEventListener('click', () => {
    dialog.close();
    resetInput();
})

const book1 = new Book('Fahrenheit 451', 'Ray Bradbury', 192, 'Yes');
const book2 = new Book('Flowers for Algernon', 'Daniel Keyes', 311, 'Yes');
const book3 = new Book('The Great Gatsby', 'F. Scott Fitzgerald', 208, 'No');

addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);

displayLibrary(myLibrary);