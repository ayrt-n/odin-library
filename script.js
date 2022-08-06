let myLibrary = [];

// Book constructor function 
function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = Boolean(read)
}

// Add a book to myLibrary
function addBookToLibrary(title, author, pages, read) {
  let book = new Book(title, author, pages, read);
  myLibrary.push(book);
}
