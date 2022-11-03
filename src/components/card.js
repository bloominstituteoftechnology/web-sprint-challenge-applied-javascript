import axios from "axios";

const Card = (article) => {

  const cardElem = document.createElement("div");
  const headlineElem = document.createElement('div');
  const authorElem = document.createElement('div');
  const imageContainer = document.createElement('div');
  const authorPhoto = document.createElement('img');
  const authorName = document.createElement('span');

  cardElem.classList.add('card');
  headlineElem.classList.add('headline');
  authorElem.classList.add('author');
  imageContainer.classList.add('img-container');
  
  cardElem.appendChild(headlineElem);
  cardElem.addEventListener('click', () => {
    console.log(headlineElem.textContent)
  })
  cardElem.appendChild(authorElem);
  authorElem.appendChild(imageContainer);
  imageContainer.appendChild(authorPhoto);
  authorElem.appendChild(authorName);

  headlineElem.textContent = article.headline;
  authorPhoto.src = article.authorPhoto;
  authorName.textContent = article.authorName;


  return cardElem;

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
}


const cardAppender = (selector) => {
  const target = document.querySelector(selector);
  axios.get('http://localhost:5001/api/articles')
  .then(info => {
      const current = []
      current.push(info.data.articles.javascript,info.data.articles.bootstrap,info.data.articles.technology,info.data.articles.jquery,info.data.articles.node)

      function sender (arr){
        for(let i = 0;i<arr.length;i++){
          target.appendChild(Card(arr[i]))
        }
      }
      current.forEach(x =>
        sender(x))
  })
    
  

  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5001/api/articles` (test it with console.log!!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
}

export { Card, cardAppender }
