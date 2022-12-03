import axios from 'axios';

const Card = (article) => {

  const newCard = document.createElement('div');
  const divHeadline = document.createElement('div');
  const divAuthor = document.createElement('div');
  const divImageContainer = document.createElement('div');
  const image = document.createElement('img');
  const name = document.createElement('span');
  

  newCard.classList.add('card');
  divHeadline.classList.add('headline');
  divAuthor.classList.add('author');
  divImageContainer.classList.add('img-container');
  
  divHeadline.textContent = article.headline;
  image.src = article.authorPhoto;
  name.textContent = `By ${article.authorName}`;

  newCard.appendChild(divHeadline);
  newCard.appendChild(divAuthor);
  divAuthor.appendChild(divImageContainer);
  divImageContainer.appendChild(image);
  divAuthor.appendChild(name);

newCard.addEventListener('click', () => {
  console.log(article.headline);
})
  return newCard

}


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




  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5001/api/articles` (test it with console.log!!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
  const cardAppender = (selector) => {
const selected =document.querySelector(selector)
  axios.get(`http://localhost:5001/api/articles`)
  .then((resp) => {
  const bootstrap = resp.data.articles.bootstrap
  bootstrap.forEach(elem => {
    selected.appendChild(Card(elem))
  })
  const javascript = resp.data.articles.javascript
  javascript.forEach(elem => {
    selected.appendChild(Card(elem))
  })
  const technology = resp.data.articles.technology
  technology.forEach(elem => {
    selected.appendChild(Card(elem))
  })
  const jquery = resp.data.articles.jquery
  jquery.forEach(elem => {
    selected.appendChild(Card(elem))
  })
  const node= resp.data.articles.node
  node.forEach(elem => {
    selected.appendChild(Card(elem))
  })
})
  .catch((err) => {
    console.log(err);
  })
}

export { Card, cardAppender }
