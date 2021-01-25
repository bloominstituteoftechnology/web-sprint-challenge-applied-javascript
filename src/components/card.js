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

  // Create Elements
  const newCard = document.createElement('div');
  const newHeadline = document.createElement('div');
  const newAuthor = document.createElement('div');
  const newImgContainer = document.createElement('div');
  const newImg = document.createElement('img');
  const newSpan = document.createElement('span');

  // Add Classes
  newCard.classList.add('card');
  newHeadline.classList.add('headline');
  newAuthor.classList.add('author');
  newImgContainer.classList.add('img-container');

  // Add Content
  newHeadline.textContent = article.headline;
  newImg.src = article.authorPhoto;
  newSpan.textContent = article.authorName;

  // Structure Content
  newCard.appendChild(newHeadline);
  newCard.appendChild(newAuthor);
  newAuthor.appendChild(newImgContainer);
  newImgContainer.appendChild(newImg);
  newAuthor.appendChild(newSpan);

  // Return Result
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
  .then((res) => {
    console.log(res)
    for (const cardCont in res.data.articles) {
      res.data.articles[cardCont].map((article) => {
        document.querySelector(selector).appendChild(Card(article));
      });
    };
    
  });
};

export { Card, cardAppender }
