import axios from "axios";
import { articles } from "../mocks/data";

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

  const nodeList = [];

  for (let topics in article) {
    let el = article[topics];
    el.forEach((element) => {
      const classCard = document.createElement("div");
      const classHeadline = document.createElement("div");
      const classAuthor = document.createElement("div");
      const classImageContainer = document.createElement("div");
      const span = document.createElement("span");
      const image = document.createElement("img");

      classCard.textContent = element.headline;
      span.textContent = element.authorName;
      image.src = element.authorPhoto;

      classCard.classList.add("card");
      classHeadline.classList.add("headline");
      classAuthor.classList.add("author");
      classImageContainer.classList.add("img-container");

      classImageContainer.appendChild(image);
      classAuthor.appendChild(classImageContainer);
      classAuthor.appendChild(span);
      classHeadline.appendChild(classAuthor);
      classCard.appendChild(classHeadline);

      nodeList.push(classCard);
    });
  }
  return nodeList;
};

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `https://lambda-times-api.herokuapp.com/articles`
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
  console.log(selector);
  axios
    .get("https://lambda-times-api.herokuapp.com/articles")
    .then((res) => {
      console.log(res.data.articles);
      Card(res.data.articles).forEach((card) => {
        document.querySelector(selector).append(card);
      });
    })
    .catch((err) => console.log(err));
};

export { Card, cardAppender };
