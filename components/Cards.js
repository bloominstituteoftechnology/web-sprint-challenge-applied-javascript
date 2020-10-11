// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.

const url = "https://lambda-times-api.herokuapp.com/articles";

axios
  .get(url)
  .then(({ data }) => {
    console.log(data);
    Object.values(data.articles).forEach((topic) => cardCreator(topic));
    click();
  })
  .catch((err) => console.log(err));

const cards = document.querySelector(".cards-container");

function cardCreator(data) {
  data.forEach((article) => {
    // Creating elements
    const div = document.createElement("div");
    div.classList.add("card");
    var headline = document.createElement("div");
    headline.classList.add("headline");
    const author = document.createElement("div");
    author.classList.add("author");
    const imageHolder = document.createElement("div");
    imageHolder.classList.add("img-container");
    var img = document.createElement("img");
    var name = document.createElement("span");

    // Setting Values for elements
    headline.textContent = article.headline;
    img.src = article.authorPhoto;
    name.textContent = article.authorName;

    // Creating the DOM Structure
    cards.appendChild(div);
    div.appendChild(headline);
    div.appendChild(author);
    author.appendChild(imageHolder);
    imageHolder.appendChild(img);
    author.appendChild(name);

    return cards;
  });

  return;
}

// Adding event listener
// click = function () {
//   let clickMe = document.getElementsByClassName("author");
//   console.log(clickMe.author);
//   clickMe.addEventListener("click", (e) => {
//     console.log(author);
//     e.stopPropigation();
//   });
// };

// Did not work
