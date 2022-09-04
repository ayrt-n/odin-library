// Get Elements
let myLibrary = [];
const libraryTable = document.getElementById("library");
const newBookButton = document.getElementById("new-book-button");
const newBookForm = document.getElementById("book-form");

// Event Listeners
newBookButton.addEventListener("click", toggleBookForm);
libraryTable.addEventListener("click", function(e) {
  if(e.target && e.target.nodeName == "A") {
    index = e.target.getAttribute("data-index")

    if(e.target.innerHTML == "Delete") {
      deleteBook(index)
    } else {
      let book = myLibrary[index];
      book.toggleRead();
      libraryTable.rows[index].cells[3].innerHTML = book.read
    }
  }
})

// Book class implementation of library
class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read ? "Yes" : "No"
  }

  toggleRead() {
    this.read = this.read == "Yes" ? "No" : "Yes";
  }
}

// // Old constructor function implementation of library
// // Book Constructor Function
// function Book(title, author, pages, read) {
//   this.title = title
//   this.author = author
//   this.pages = pages
//   this.read = read ? "Yes" : "No"
// }

// // Book method to toggle read status
// Book.prototype.toggleRead = function() {
//   this.read = this.read == "Yes" ? "No" : "Yes"
// }

// Add a book to myLibrary
function addBookToLibrary(title, author, pages, read) {
  let book = new Book(title, author, pages, read);
  myLibrary.push(book);
}

// Display library in library table
function displayLibrary() {
  myLibrary.forEach(addBookToTable)
}

// Reload table from library
function reloadLibrary() {
  libraryTable.innerHTML = "";
  displayLibrary();
}

// Add new book to table and library
function submitNewBook() {
  const form_elements = newBookForm.elements;

  let title = form_elements["title"].value;
  let author = form_elements["author"].value;
  let pages = form_elements["pages"].value;
  let read = form_elements["read"].value;

  addBookToLibrary(title, author, pages, read);
  addBookToTable(myLibrary[myLibrary.length - 1], myLibrary.length - 1);

  newBookForm.reset();
}

// Build row in library table
function addBookToTable(book, index) {
  let row = libraryTable.insertRow();
  row.insertCell(0).innerHTML = book.title
  row.insertCell(1).innerHTML = book.author
  row.insertCell(2).innerHTML = book.pages
  row.insertCell(3).innerHTML = book.read
  row.insertCell(4).innerHTML = ""
  row.insertCell(5).innerHTML = `<a class="button is-small" data-index="${index}" id="read-button">Read</a>`
  row.insertCell(6).innerHTML = `<a class="button is-small" data-index="${index}" id="delete-button">Delete</a>`
}

// Delete book from library and table
function deleteBook(index) {
  myLibrary.splice(index, 1);
  reloadLibrary();
}

// Toggle display of new book form
function toggleBookForm() {
  newBookForm.classList.toggle("is-active");
}

// Form Validation
const title = document.getElementById('title');
const titleError = document.querySelector("#title + span.error");
const author = document.getElementById('author');
const authorError = document.querySelector("#author + span.error");
const pages = document.getElementById('pages');
const pagesError = document.querySelector("#pages + span.error");
const read = document.getElementById('read');
const readError = document.getElementById("radio-error");

const resetErrorMessages = () => {
  [titleError, authorError, pagesError, readError].forEach((errorSpan) => {
    errorSpan.innerHTML = '';
  });
};

title.addEventListener('input', (e) => {
  if (title.validity.valid) {
    titleError.innerHTML = '';
  } else {
    titleError.innerHTML = title.validationMessage;
  }
});

author.addEventListener('input', (e) => {
  if (author.validity.valid) {
    authorError.innerHTML = '';
  } else {
    authorError.innerHTML = author.validationMessage;
  }
});

pages.addEventListener('input', (e) => {
  if (pages.validity.valid) {
    pagesError.innerHTML = '';
  } else {
    pagesError.innerHTML = pages.validationMessage;
  }
});

read.addEventListener('input', (e) => {
  if (read.validity.valid) {
    readError.innerHTML = '';
  } else {
    readError.innerHTML = read.validationMessage;
  }
});

newBookForm.addEventListener('submit', (e) => {
  e.preventDefault();
  resetErrorMessages();
  let isValid = 1

  if (!title.validity.valid) {
    titleError.innerHTML = title.validationMessage;
    isValid = 0;
  }
  if (!author.validity.valid) {
    authorError.innerHTML = author.validationMessage;
    isValid = 0;
  }
  if (!pages.validity.valid) {
    pagesError.innerHTML = pages.validationMessage;
    isValid = 0;
  }
  if (!read.validity.valid) {
    readError.innerHTML = read.validationMessage;
    isValid = 0;
  }

  if (isValid) {
    submitNewBook();
  }
});

console.log(newBookForm.validity)

// Testing code
addBookToLibrary("Catcher and the Raisin", "Bobby Dumpins", 230, 0)
addBookToLibrary("Clockwork Doorhinge", "Amy Pancakes", 700, 0)
displayLibrary();