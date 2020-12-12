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

import axios from "axios";

const articleCard = (headline, authorPhoto, authorName) => {
  const card = document.createElement("div");
  const head = document.createElement("div");
  const author = document.createElement("div");
  const imgCont = document.createElement("div");
  const authPhoto = document.createElement("img");
  const authName = document.createElement("span");

  card.append(head, author);
  author.append(imgCont, authName);
  imgCont.appendChild(authPhoto);

  card.classList.add("card");
  head.classList.add("headline");
  author.classList.add("author");
  imgCont.classList.add("img-container");

  headLine.textContent = data.articles.headline;
  authPhoto.src = data.articles.authorPhoto.url;
  authName.textContent = data.articles.authorName;

  card.addEventListener("click", () => {
    card.classList.toggle("card");
    console.log("card", card);
  });

  return card;
};

const articleMaker = document.querySelector(".cards-container");
const nodeList = document.querySelectorAll(".articles");
const articleArr = Array.from(nodeList);

console.log(articleArr);

// articleMaker.appendChild(articleCard);

// articleMaker.appendChild(articleArr);

console.log(articleMaker);

// axios
//   .get(`https://lambda-times-api.herokuapp.com/articles`)
//   .then((success) => {
//     success.data.articles.headline.forEach((articles) => {
//       const newHeadline = articleCard(
//         data.articles.headline
//         // articles.authorPhoto,
//         // articles.authorName
//       );
//       articleMaker.appendChild(newHeadline);
//     });
//   })
//   .catch((err) => {
//     console.log("err", err);
//   });
