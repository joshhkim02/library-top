const myLibrary = [];

const main = document.querySelector('.main');
const dialog = document.querySelector('dialog');
const addButton = document.querySelector('.btn-add');
const closeButton = document.querySelector('.btn-close');
const submitButton = document.querySelector('.btn-submit');

// Form selectors
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

    // Create container to hold buttons
    const bookContainer = document.createElement('div');
    bookContainer.classList.add('book-btn-container');
    createBook.appendChild(bookContainer);

    // Add delete and read buttons
    const deleteBookBtn = document.createElement('button');
    const readBookBtn = document.createElement('button');

    deleteBookBtn.classList.add('delete-book');
    readBookBtn.classList.add('read-book');

    deleteBookBtn.textContent = 'Remove';
    readBookBtn.textContent = 'Finished';

    bookContainer.appendChild(deleteBookBtn);
    bookContainer.appendChild(readBookBtn);

    // Reset input values in form 
    resetInput();

    // Prevent trying to send data to server and close the dialog box
    event.preventDefault();
    dialog.close();
});

addButton.addEventListener('click', () => {
    dialog.showModal();
});

closeButton.addEventListener('click', () => {
    dialog.close();
    resetInput();
});