// Get Elements
let myLibrary = [];
const libraryTable = document.getElementById("library");
const newBookButton = document.getElementById("new-book-button");
const newBookForm = document.getElementById("book-form");
const addBookButton = document.getElementById("add-book-button")

// Event Listeners
newBookButton.addEventListener("click", toggleBookForm);
addBookButton.addEventListener("click", submitNewBook);
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


// Testing code
addBookToLibrary("Catcher and the Raisin", "Bobby Dumpins", 230, 0)
addBookToLibrary("Clockwork Doorhinge", "Amy Pancakes", 700, 0)
displayLibrary();