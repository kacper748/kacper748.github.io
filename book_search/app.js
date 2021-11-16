const BASE_URL = "https://openlibrary.org";
const URL_ENDING = ".json";
const COVERS_URL = "https://covers.openlibrary.org/b/isbn/";
const COVERS_ENDING = "-M.jpg";
const QUERY = "https://openlibrary.org/search.json?q=";
const LANGUAGE = "&language=eng";

const searchField = document.getElementById("search");

$("#submit").on("click", search);

function search() {
  $("#load").css("visibility", "visible");
  main.innerHTML = '';
  var searchValues = searchField.value.split(" ").join("+");
  fetch(QUERY + searchValues)
  .then(response => response.json())
  .then(data => {

    for (let i = 0; i < 20; i++) {
      showBooks(data.docs[i].seed[0], data.docs[i].author_name[0]);
    }
    
  });
}

function showBooks(bookID, author) { 
  var completeUrl = BASE_URL + bookID + URL_ENDING;
  fetch(completeUrl)
  .then(response => response.json())
  .then(data => {
    displayBooks(data, author);
    $("#load").css("visibility", "hidden");
  });
}

function displayBooks(data, author) {

  console.log(data)

  const title = data.title;
  const authorName = author;

  if (typeof data.description === 'undefined') {
    var description = "No description available";
  }
  else {
    if (typeof data.description === 'string') {
      var description = data.description;
    }
    else {
      var description = data.description.value;
    }
  }
  
  var isbn = data.isbn_13;

  if (typeof isbn === 'undefined') {
    isbn = data.isbn_10;
    var cover_link = "..\\book_search\\images\\blank.png";
  }
  else {
    var cover_link = COVERS_URL + isbn + COVERS_ENDING;
  }

  const bookElement = document.createElement('div');
  bookElement.classList.add('book');
  bookElement.innerHTML = `
    <img id="${isbn}" src="${cover_link}" alt="${title}"/>

    <div class="book-info">
        <h3>${title}</h3>
        <h4>${authorName}</h4>
    </div>

    <div class="description">
        ${description}
    </div>
  `;

  main.appendChild(bookElement);
}
