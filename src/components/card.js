import axios from "axios";

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

  const divCard = document.createElement("div");
  const divHeadline = document.createElement("div");
  const divAuthor = document.createElement("div");
  const divContainer = document.createElement("div");
  const newImage = document.createElement("img");
  const newSpan = document.createElement("span");
  
  divHeadline.textContent.add(`${article.headline}`);
  newSpan.textContent.add(`By ${article.authorName}`);
  newImage.setAttribute("src", `${article.authorPhoto}`);
  
  divCard.appendChild(divHeadline);
  divCard.appendChild(divAuthor);
  divAuthor.appendChild(divContainer);
  divAuthor.appendChild(newSpan);
  divContainer.appendChild(newImage);
  
  divCard.addEventListener("click", (event) => {
    console.log(event.target.divHeadline)
  })

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

  axios
  .get("https://lambda-times-api.herokuapp.com/articles")
  .then((res) => {
    const artObj = res.data
    const newCards = document.querySelector(selector);
    artObjad => {
      const newArray = item.map((newItem) => {
        return Card(newItem)
      });
    return newCards.appendChild(newArray);
    })
  })
  .catch((error) => {
    console.log(error)
  })

}

export { Card, cardAppender }
