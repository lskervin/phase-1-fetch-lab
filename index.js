fetchBooks = () =>
   fetch("https://anapioficeandfire.com/api/books")
  .then((resp) => resp.json())
  .then((book) => { renderBooks(book)
  // To pass the tests, don't forget to return your fetch!
  
})

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});

// fetch("https://anapioficeandfire.com/api/books")
//   .then((resp) => resp.json())
//   .then((book) => {
//     console.log(book[4].characters[667]);
//     console.log(book[4].name);
//     console.log(book[0].numberOfPages + book[1].numberOfPages + book[2].numberOfPages + book[3].numberOfPages) + book[4].numberOfPages + book[5].numberOfPages + book[6].numberOfPages + book[7].numberOfPages + book[8].numberOfPages + book[9].numberOfPages;
//   })
//   .catch((error) => console.error("Error fetching data:", error));