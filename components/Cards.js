import axios from "axios";

const entryPoint2 = document.querySelector(".cards-container");

axios
  .get("https://lambda-times-api.herokuapp.com/articles")
  .then((content) => {
    const entry2 = content.data;
    console.log(entry2);
  })
  .catch((error) => {
    debugger;
  });
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
function cardMaker(articleObj) {
  const card = document.createElement("div");
  card.classList.add("card");
  const headline = document.createElement("div");
  headline.classList.add("headline");
  const author = document.createElement("div");
  author.classList.add("author");
  const image = document.createElement("img");
  image.classList.add("img-container");
  const span = document.createElement("span");
  span.classList.add("author");

  image.src = articleObj.author_url;
  return card;
}
