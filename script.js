let myLibrary = [];
const addBookButton = document.querySelector(".addBookButton");
const addBookForm = document.querySelector(".addBookForm");

function Book(title, author, pages, hasRead, id) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.hasRead = hasRead;
  this.id = id;
}

const libraryModule = {
  nextId: 0,
  addBookToLibrary: function (titleInput, authorInput, pagesInput, hasRead) {
    const book = new Book(
      titleInput,
      authorInput,
      pagesInput,
      hasRead,
      this.nextId
    );
    myLibrary.push(book);
    this.nextId++;
  },
};

Book.prototype.info = function () {
  return `${this.title} by ${this.author}, ${this.pages} pages, ${
    this.hasRead ? "read" : "not read yet"
  }`;
};

Book.prototype.returnId = function () {
  return this.id;
};

Book.prototype.changeReadStatus = function () {
  this.hasRead = !this.hasRead;
  displayBooks();
};

function addBookFiller() {
  libraryModule.addBookToLibrary("Bliss", "Klsr", "100", true);
  libraryModule.addBookToLibrary("How To Fight", "Eartheater", "250", true);
  libraryModule.addBookToLibrary("Somehow", "Tom Odell", "329", false);
}

function displayBooks() {
  const library = document.querySelector(".library");
  library.innerHTML = "";

  myLibrary.forEach(function (book) {
    const bookCard = document.createElement("div");
    const removeBookButton = document.createElement("button");
    const changeReadStatus = document.createElement("button");
    const bookId = book.id;

    bookCard.classList.add("card");
    bookCard.setAttribute("id", bookId);
    bookCard.innerHTML = book.info();
    bookCard.innerHTML += `. ID: ${bookId}`;

    changeReadStatus.addEventListener("click", () => {
      book.changeReadStatus();
    });
    changeReadStatus.innerHTML = "Change read status";

    removeBookButton.addEventListener("click", () => {
      myLibrary = myLibrary.filter((item) => item.id !== bookId);
      library.removeChild(bookCard);
    });
    removeBookButton.innerHTML = "Remove book";

    bookCard.appendChild(changeReadStatus);
    bookCard.appendChild(removeBookButton);
    library.appendChild(bookCard);
  });
}

addBookButton.addEventListener("click", () => {
  addBookForm.classList.contains("hidden")
    ? addBookForm.classList.remove("hidden")
    : addBookForm.classList.add("hidden");

  // displayBooks();
});

addBookForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const titleInput = addBookForm.title.value;
  const authorInput = addBookForm.author.value;
  const pagesInput = addBookForm.pages.value;
  const hasRead = addBookForm.hasRead.checked;
  libraryModule.addBookToLibrary(titleInput, authorInput, pagesInput, hasRead);
  displayBooks();
});

//
//
//

// addBookToLibrary();
addBookFiller();
displayBooks();
