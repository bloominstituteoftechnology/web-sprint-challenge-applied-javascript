

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
  let headline = article.headline;
  let authorPhoto = article.authorPhoto;
  let authorName = article.authorName;

  let cardMain = document.createElement("div");
  cardMain.classList.add("card");
  cardMain.addEventListener("click", () => {
    console.log(headline);
  });

  let cardHeadline = document.createElement("div");
  cardHeadline.classList.add("headline");
  cardHeadline.textContent = headline;
  cardMain.appendChild(cardHeadline);

  let cardAuthor = document.createElement("div");
  cardAuthor.classList.add("author");
  cardMain.appendChild(cardAuthor);

  let cardImgContainer = document.createElement("div");
  cardImgContainer.classList.add("img-container");
  cardAuthor.appendChild(cardImgContainer);

  let cardImg = document.createElement("img");
  cardImg.src = authorPhoto;
  cardImgContainer.appendChild(cardImg);

  const cardSpan = document.createElement("span");
  cardSpan.textContent = `By ${authorName}`;
  cardAuthor.appendChild(cardSpan);

return cardMain;

}
import axios from 'axios';
const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5001/api/articles` (test it with console.log!!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //

axios.get("http://localhost:5001/api/articles")
.then(resp => {
  let newArray = [resp.data.articles];
  newArray.forEach(FirstElement => {
    FirstElement.forEach(SecondElement => {
      document.querySelector(selector).appendChild(Card(SecondElement));
    })
  })
  })
.catch(err => {
  console.log(err);
})
}


export { Card, cardAppender }


