import axios from "axios";

// axios
//   .get("https://lambda-times-api.herokuapp.com/articles")
//   .then((content) => {
//     console.log("content", content.data);
//     content.data.forEach(function (contentObj) {
const entry2 = document.querySelector(".cards-container");

axios
  .get("https://lambda-times-backend.herokuapp.com/articles")
  .then((cont) => {
    console.log(cont);
    const cardList = cont.data.articles;

    const bs = cardList.bootstrap;
    const js = cardList.javascript;
    const jq = cardList.jquery;
    const node = cardList.node;
    const tech = cardList.technology;

    const allCards = bs.concat(js, jq, node, tech);
    console.log(allCards);

    allCards.forEach((authorCard) => {
      const newCard = cardMaker(authorCard);
      entry2.appendChild(newCard);
    });
  })
  .catch((error) => {
    console.log("Content is not recieved", error);
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
  // creating elements
  const cards = document.createElement("div");
  cards.classList.add("card");
  const headline = document.createElement("div");
  headline.classList.add("headline");
  const author = document.createElement("div");
  author.classList.add("author");
  const imageContainer = document.createElement("div");
  imageContainer.classList.add("img-container");
  const image = document.createElement("img");
  image.classList.add("img");
  const authorsName = document.createElement("span");

  cards.appendChild(headline);
  cards.appendChild(author);
  author.appendChild(imageContainer);
  imageContainer.appendChild(image);
  author.appendChild(authorsName);

  image.src = cardObj.authorPhoto;
  headline.textContent = cardObj.headline;
  console.log(image);
  authorsName.textContent = `Author: ${cardObj.authorName}`;
  return cards;
}

// const newCard = cardMaker(cards - container[0]);
// const cards = document.querySelector(".cards-container");

// data.forEach((cardsObj) => {
//   const divCards = cardMaker(cardsObj);
//   cards.appendChild(divCards);
// });
