import axios from "axios";
const Card = (article) => {


  

  let coolCard = document.createElement('div');
      // coolCard.textContent = article["headline"]
    coolCard.setAttribute('class', 'card');

  let headDiv = document.createElement('div');
      headDiv.textContent = article["headline"];
      headDiv.setAttribute('class', 'headline');
      coolCard.appendChild(headDiv);

   let authorDiv = document.createElement('div');
      authorDiv.setAttribute('class', 'author');
      coolCard.appendChild(authorDiv);
      
    let imgDiv = document.createElement('div');
      imgDiv.setAttribute('class', 'img-container');
      authorDiv.appendChild(imgDiv);

  let imgCard = document.createElement('img');
    imgCard.src = article['authorPhoto'];
    imgDiv.appendChild(imgCard);
   

  let span = document.createElement('span');
      span.textContent = article['authorName'];
      authorDiv.appendChild(span);

   coolCard.addEventListener('click', function(){
     console.log(headDiv.textContent);
   })   
   return coolCard;

  
  
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

// TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //

const cardAppender = (selector) => {
  let cardSelector = document.querySelector(selector);
  axios.get('http://localhost:5000/api/articles')
  .then(res => {
    console.log(res.data);

  })
  .catch(err => {

  })

  // let tabSelector = document.querySelector(selector);
  // axios.get('http://localhost:5000/api/topics')
  // .then(resp => {
  //   console.log(resp.data);
  //   let topics = resp.data.topics;
  //   console.log(topics); 
  //   tabSelector.appendChild(Tabs(topics));
  // })
  // .catch(err => {
  //   console.error(err);
  // })



}

export { Card, cardAppender }
