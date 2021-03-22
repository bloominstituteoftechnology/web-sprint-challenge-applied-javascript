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
    //     <div class="im g-container">
    //     </div>
    //     <span>By { authorName }</span>
    //   </div>
    // </div>
    // 

    let newCard = document.createElement('div');
    newCard.classList.add('card');

    let newHeadline = document.createElement('div');
    newHeadline.classList.add('headline');
    newHeadline.textContent = article.headline;
    newCard.appendChild(newHeadline);

    let newAuthor = document.createElement("div");
    newAuthor.classList.add("author");
    newCard.appendChild(newAuthor);

    let newAuthorImgDiv = document.createElement("div");
    newAuthorImgDiv.classList.add('img-container');
    newAuthorImgDiv.src = article.authorPhoto;
    newAuthor.appendChild(newAuthorImgDiv);

    let newAuthorName = document.createElement('span');
    newAuthorName.textContent = `By ${article.authorName}`;
    newAuthor.appendChild(newAuthorName);

    let authorImg = document.createElement('img');
    authorImg.src = article.authorPhoto;
    newAuthorImgDiv.appendChild(authorImg);
    return newCard;
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


    axios.get('https://lambda-times-api.herokuapp.com/articles')
        .then(response => {
            for (let i in response.data.articles.bootstrap) {
                const newArticle = Card(response.data.articles.bootstrap[i]);
                let cardContainer = document.querySelector(selector);
                cardContainer.appendChild(newArticle);
            }
            for (let j in response.data.articles.jquery) {
                const newArticle = Card(response.data.articles.jquery[j]);
                let cardContainer = document.querySelector(selector);
                cardContainer.appendChild(newArticle);
            }
            for (let k in response.data.articles.javascript) {
                const newArticle = Card(response.data.articles.javascript[k]);
                let cardContainer = document.querySelector(selector);
                cardContainer.appendChild(newArticle);
            }
            for (let l in response.data.articles.technology) {
                const newArticle = Card(response.data.articles.technology[l]);
                let cardContainer = document.querySelector(selector);
                cardContainer.appendChild(newArticle);
            }
            for (let m in response.data.articles.node) {
                const newArticle = Card(response.data.articles.node[m]);
                let cardContainer = document.querySelector(selector);
                cardContainer.appendChild(newArticle);
            }
        })


    .catch(error => console.log(error));
};

export { Card, cardAppender }