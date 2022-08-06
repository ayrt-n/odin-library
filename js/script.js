let myLibrary = [];
let libraryTable = document.getElementById("library")

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

// Build row in library table
function addBookToTable(book) {
  let row = libraryTable.insertRow();
  row.insertCell(0).innerHTML = book.title
  row.insertCell(1).innerHTML = book.author
  row.insertCell(2).innerHTML = book.pages
  row.insertCell(3).innerHTML = book.read
}

displayLibrary();