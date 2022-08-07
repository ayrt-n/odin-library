// Get Elements
let myLibrary = [];
let libraryTable = document.getElementById("library");
let newBookButton = document.getElementById("new-book-button");
let newBookForm = document.getElementById("book-form");
let addBookButton = document.getElementById("add-book-button")

// Event Listeners
newBookButton.addEventListener("click", toggleBookForm);
addBookButton.addEventListener("click", submitNewBook);

// Book constructor function 
function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read ? "Yes" : "No"
}

// Add a book to myLibrary
function addBookToLibrary(title, author, pages, read) {
  let book = new Book(title, author, pages, read);
  myLibrary.push(book);
}

// Fill table with some seed data for testing
addBookToLibrary("Catcher and the Raisin", "Bobby Dumpins", 230, 0)
addBookToLibrary("Clockwork Doorhinge", "Amy Pancakes", 700, 1)

// Display library in library table
function displayLibrary() {
  myLibrary.forEach(addBookToTable)
}

// Add new book to table and library
function submitNewBook() {
  const form_elements = newBookForm.elements;

  let title = form_elements["title"].value;
  let author = form_elements["author"].value;
  let pages = form_elements["pages"].value;
  let read = form_elements["read"].value;

  addBookToLibrary(title, author, pages, read);
  addBookToTable(myLibrary[myLibrary.length - 1]);

  newBookForm.reset()
}

// Build row in library table
function addBookToTable(book) {
  let row = libraryTable.insertRow();
  row.insertCell(0).innerHTML = book.title
  row.insertCell(1).innerHTML = book.author
  row.insertCell(2).innerHTML = book.pages
  row.insertCell(3).innerHTML = book.read
  row.insertCell(4).innerHTML = ''
  row.insertCell(5).innerHTML = "Toggle Read"
  row.insertCell(6).innerHTML = "Delete"
}

// Toggle display of new book form
function toggleBookForm() {
  newBookForm.classList.toggle("is-active")
}

displayLibrary();
