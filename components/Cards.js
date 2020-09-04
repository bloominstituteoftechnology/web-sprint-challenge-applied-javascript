import axios from "axios";

const entryPoint2 = document.querySelector(".cards-container");

// axios
//   .get("https://lambda-times-api.herokuapp.com/articles")
//   .then((content) => {
//     console.log("content", content.data);
//     content.data.forEach(function (contentObj) {
axios
  .get("https://lambda-times-api.herokuapp.com/articles")
  .then((authCards) => {
    const entry2 = authCards.data;
    console.log(entry2);
    cardMaker(entry2);
  })
  .catch((error) => {
    debugger;
  });
//     });
//   })
//   .catch((error) => {
//     debugger;
//   });
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

function cardMaker(cardObj) {
  const cards = document.createElement("div");
  cards.classList.add("cards-container");
  const card = document.createElement("div");
  card.classList.add("card");
  const headline = document.createElement("div");
  headline.classList.add("headline");
  const author = document.createElement("div");
  author.classList.add("author");
  const image = document.createElement("img");
  image.classList.add("img");
  const span = document.createElement("span");
  span.classList.add("span");

  span.textContent = `Name:${cardObj.articles.bootstrap.authorName}`;
  image.src = cardObj.authorPhoto;
  headline.textContent = `Headline:${cardObj.headline}`;

  entryPoint2.append(card);
  card.appendChild(headline);
  card.appendChild(author);
  author.appendChild(image);
  author.appendChild(span);

  return card;
}

// const newCard = cardMaker(cards - container[0]);
const cards = document.querySelector(".cards-container");

data.forEach((cardsObj) => {
  const divCards = cardMaker(cardsObj);
  cards.appendChild(divCards);
});
