const myLibrary = [];

function Book(title, author, pages, hasRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.hasRead = hasRead;
}

Book.prototype.info = function () {
  return `${this.title} by ${this.author}, ${this.pages} pages, ${
    this.hasRead ? "read" : "not read yet"
  }`;
};

function addBookToLibrary() {
  let titleInput = prompt("Enter book title: ");
  let authorInput = prompt("Enter book author: ");
  let pagesInput = prompt("Enter number of pages: ");
  let hasRead = confirm("Have you read this book yet?");

  const book = new Book(titleInput, authorInput, pagesInput, hasRead);
  myLibrary.push(book);
}

function addBookFiller() {
  const firstBook = new Book("Bliss", "Klsr", "100", true);
  const secondBook = new Book("How To Fight", "Eartheater", "250", true);
  const thirdBook = new Book("Somehow", "Tom Odell", "329", false);

  myLibrary.push(firstBook);
  myLibrary.push(secondBook);
  myLibrary.push(thirdBook);
}

function displayBooks() {
  const library = document.querySelector(".library");
  myLibrary.forEach(function (book) {
    const bookCard = document.createElement("div");
    bookCard.classList.add("card");
    bookCard.innerHTML = book.info();
    library.appendChild(bookCard);
  });
}

//
//
//

// addBookToLibrary();
addBookFiller();
displayBooks();
