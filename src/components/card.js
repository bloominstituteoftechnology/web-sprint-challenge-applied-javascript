
import axios from 'axios'


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
  const card = document.createElement('div');
  

  let i;
  for(i = 0; i < article.length; i++){
    const headline = document.createElement('div');
    const authorContainer = document.createElement('div');
    const imgContainer = document.createElement('div');
    const authorPhoto = document.createElement('img');
    const authorName = document.createElement('span');

    //
    card.classList.add('card');
    headline.classList.add('headline');
    authorContainer.classList.add('author');
    imgContainer.classList.add('img-container');

    //
    card.appendChild(headline);
    card.appendChild(authorContainer);
    authorContainer.appendChild(imgContainer);
    authorContainer.appendChild(authorName);
    imgContainer.appendChild(authorPhoto);


    //
    authorPhoto.src = article[i].authorPhoto;
    headline.textContent = article[i].headline;
    authorName.textContent = `By ${article[i].authorName}`;


    
  
  }
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

const articlelink = `https://lambda-times-api.herokuapp.com/articles`

axios.get(articlelink)
  .then(res => {console.log("success")
  const articleArray = res.data;

  const bootStrap = Array.from(articleArray.articles.bootstrap);
  const javaScript = Array.from(articleArray.articles.javascript);

  const jQuery = Array.from(articleArray.articles.jquery);

  const node = Array.from(articleArray.articles.node);
  const technology = Array.from(articleArray.articles.technology);

  const cardholder=  document.querySelector(selector);

  cardholder.appendChild(Card(javaScript));
  cardholder.appendChild(Card(jQuery));

  cardholder.appendChild(Card(node));

  cardholder.appendChild(Card(technology));
  cardholder.appendChild(Card(bootStrap));
  })
   .catch(error => {
     console.log(error)
   })
  }

export { Card, cardAppender }
