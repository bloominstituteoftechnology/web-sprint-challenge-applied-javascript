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

  head.textContent = headline;
  authPhoto.src = authorPhoto;
  authName.textContent = authorName;

  card.addEventListener("click", () => {
    card.classList.toggle("card");
    console.log("card", card);
  });

  return card;
};

// articleMaker.appendChild(articleCard);

// articleMaker.appendChild(articleArr);

// console.log(articleMaker);

// axios
//   .get(`https://lambda-times-api.herokuapp.com/articles`)
//   .then((success) => {
//     const nodeList = document.querySelectorAll(".articles");
//     const articleArr = Array.from(nodeList);

//     success.articles.forEach((articles) => {
//       const newArticle = articleCard(
//         articleArr(articles.headline, articles.authorPhoto, articles.authorName)
//       );
//       articleMaker.appendChild(newArticle);
//     });
//   })
//   .catch((err) => {
//     console.log("err", err);
//   });

// axios
//   .get(`https://lambda-times-api.herokuapp.com/articles/headline`)
//   .then((success) => {
//     success.data.articles.headline.forEach((headline) => {
//       const articleHead = articleCard(headline);
//       articleMaker.appendChild(articleHead);
//     });
//   });

// axios
//   .get(`https://lambda-times-api.herokuapp.com/articles/${headline}`)
//   .then((head) => {
//     let articleHead = document.querySelector(".cards-container");
//     articleHead.appendChild(articleCard(head));
//   });

const articleMaker = document.querySelector(".cards-container");

axios
  .get(`https://lambda-times-api.herokuapp.com/articles`)
  .then((success) => {
    let articleHead = articleCard(
      success.data.articles.headline,
      success.data.articles.authorPhoto,
      success.data.articles.authorName
    );
    articleMaker.appendChild(articleHead);
  })
  .catch((err) => {
    console.log("err", err);
  });
