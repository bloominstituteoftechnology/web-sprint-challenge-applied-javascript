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

  const cardDiv = document.createElement('div');
  const headlineDiv = document.createElement('div');
  const authorDiv = document.createElement('div');
  const imageContainer = document.createElement('div');
  const authorPhoto = document.createElement('img');
  const authorName = document.createElement('span');

  cardDiv.appendChild(headlineDiv);
  cardDiv.appendChild(authorDiv);
  authorDiv.appendChild(imageContainer);
  imageContainer.appendChild(authorPhoto);
  authorDiv.appendChild(authorName);

  cardDiv.classList.add('card');
  headlineDiv.classList.add('headline');
  authorDiv.classList.add('author');
  imageContainer.classList.add('img-container');

  headlineDiv.textContent = article.headline;
  authorName.textContent = article.authorName;
  authorPhoto.setAttribute("src", article.authorPhoto);

  cardDiv.addEventListener("click", () => {
    cardDiv.classList.toggle(console.log(headlineDiv));
  });

  return cardDiv;
}


const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //

  let response = axios.get(`http://localhost:5000/api/articles`)

  response.then((value) => {

    let list = value.data.articles;

    for(let key in list) { 
      list[key].forEach(element => {
        let test = Card(element);
        let cards = document.querySelector(selector);
        cards.appendChild(test);
      });
    }
  });
}

export { Card, cardAppender }
