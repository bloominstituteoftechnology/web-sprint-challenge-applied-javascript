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
//! create elements  
const card = document.createElement('card');
const headline = document.createElement('div');
const author = document.createElement('div');
const imgContainer = document.createElement('div');
const img = document.createElement('img');
const span = document.createElement('span');
//! add classes to elements
card.classList.add('card');
headline.classList.add('headline');
author.classList.add('author');
imgContainer.classList.add('img-container');
//! add link to image
img.src = article.authorPhoto;
//! add text content
headline.textContent = article.headline;
span.textContent = `By ${article.authorName}`;
//! create hierarchy
card.appendChild(headline);
card.appendChild(author);
author.appendChild(imgContainer);
imgContainer.appendChild(img);
author.appendChild(span);
//! create eventListener 
card.addEventListener('click', () => {
 console.log(headline);
})
//! return 
return card;
}


const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `https://lambda-times-api.herokuapp.com/articles`
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  
  axios
  .get('https://lambda-times-api.herokuapp.com/articles')
  .then(res => {
    const select = document.querySelector(selector);
    //! receive an object with 5 arrays inside
    const arrayArticles = res.data.articles;
    // console.log(arrayArticles); //!check array
    //! create small arrays from the object
    const javascript = arrayArticles.javascript;
    // console.log(javascript) //! check small array
    const bootstrap = arrayArticles.bootstrap;
    const technology = arrayArticles.technology;
    const jquery = arrayArticles.jquery;
    const node = arrayArticles.node;
    //! add cards to the page
    javascript.forEach(item =>{
      select.appendChild(Card(item))
    })
    bootstrap.forEach(item =>{
      select.appendChild(Card(item))
    })
    technology.forEach(item =>{
      select.appendChild(Card(item))
    })
    jquery.forEach(item =>{
      select.appendChild(Card(item))
    })
    node.forEach(item =>{
      select.appendChild(Card(item))
    })
  })
  .catch(err =>{
    console.log(err);
  })
}

export { Card, cardAppender }
