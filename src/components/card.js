import axios from 'axios'

const {default: axios} = require("axios");

const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //

  let firstDiv = document.createElement("div");
  firstDiv.classList = "card";
  let secondDiv = document.createElement("div");
  secondDiv.classList = "headline";
  secondDiv.textContent = article.headline;
  firstDiv.appendChild(secondDiv);
  let thridDiv = document.createElement("div");
  thridDiv.classList = "author";
  firstDiv.appendChild(thirdDiv);
  let fourthDiv = document.createElement("div");
  fourthDiv.classList = "img-container";
  thirdDiv.appendChild(fourthDiv);
  let img = document.createElement("img");
  img.src = article.authorPhoto;
  fourthDiv.appendChild(img);
  let by = document.createElement("span");
  by.textContent = `By: ${article.authorName}`;
  thirdDiv.appendChild(by);
  // event listener for click events
  firstDiv.addEventListener("click", function(secondDiv) {
    console.log(secondDiv);
  })
  }
  return firstDiv;
}

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `https://lambda-times-api.herokuapp.com/articles`
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
axios.get("https://lambda-times-api.herokuapp.com/articles");
.then(resp => {
  let cardElement = document.querySelector("selector");
  let rec = response.data;
  rec.forEach(e => {
    cardElement.appendChild(Card(e));
  })
});
.catch(err => {
  console.log(err);
});
.then(() => {
  console.log("Success");
});
}

export { Card, cardAppender }
