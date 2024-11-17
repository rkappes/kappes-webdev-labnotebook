const url = "https://anapioficeandfire.com/api/books/";

const app = document.querySelector("#books");

const addBooktoDom = (book) => {
  // Create an element for each book that contains title, author, publication year, and number of pages
  let bookElement = document.createElement("section");
  let title = document.createElement("h4");
  let author = document.createElement("p");
  let pubYear = document.createElement("p");
  let pages = document.createElement("p");

  title.textContent = `by ${book.name}`;
  author.textContent = book.authors[0];
  pubYear.textContent = book.released.substr(0, 4);
  pages.textContent = `${book.numberOfPages} pages`;

  bookElement.setAttribute("class", "books");

  bookElement.append(title, author, pubYear, pages);
  app.append(bookElement);
};

const fetchData = (url) => {
  // Fetch all books from the API of Ice and Fire and append them to the DOM
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      // console.group("Fetch All Books - Promise Implementation");
      // console.log("Data", data); // array of 10 objects
      // console.log(data.authors);
      // console.log(data.numberOfPages);
      data.forEach((item) => {
        // console.log(item.name);
        // console.log(
        //   `${item.name} - ${item.authors[0]} - ${released} - ${item.numberOfPages} pages`
        // );
        addBooktoDom(item);
      });
      // console.groupEnd();
    })
    .catch((error) => console.error(error))
    .finally(() => {
      // console.log("Fetch All Books - Promise Implementation - finally block")
      app.removeChild(loading);
    });

  // Update the styles in JavaScript to center all the books in the container given
};

fetchData(url);
