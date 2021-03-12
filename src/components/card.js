import axios from "axios"

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



  let card = document.createElement('div');
  let hline = document.createElement('div');
  let auth = document.createElement('div');
  let imgContainer = document.createElement('div');
  let authPhoto = document.createElement('img');
  let authName = document.createElement('span');

  card.classList.add('card');
  hline.classList.add('headline');
  auth.classList.add('author');
  imgContainer.classList.add('img-container');
  
  

  card.appendChild(hline);
  card.appendChild(auth);
  auth.appendChild(imgContainer);
  imgContainer.appendChild(authPhoto);
  auth.appendChild(authName);
  console.log(card);

  // imgContainer.appendChild(authPhoto);
  // auth.appendChild(authName);

  hline.textContent = article.headline;
  authPhoto.setAttribute('src', article.authorPhoto);
  authName.textContent = article.authorName;

  // card.addEventListener('click', function(){
  //   console.log(article.headline);
  // });
  console.log(card);
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
  //

  axios
    .get(`https://lambda-times-api.herokuapp.com/articles`)
    .then((res) => {
      // console.log(res);
      const articles = res.data.articles;
      const cardsContainer = document.querySelector('.cards-container');
      // console.log(cardsContainer);

      for(let key in articles){
        const card = articles[key];
        // console.log(articles[key]);

        card.forEach(function(singleArticle){
          console.log(singleArticle);
          const singleCard = Card(singleArticle);
          cardsContainer.appendChild(singleCard);
        });
      }
      // console.log(articles);



      // Card(articles['javascript']);
      // cardsContainer.appendChild(articles);
      // for(let key in articles){
      //   const card = Card(key);
      //   console.log(card);
      // }

      // console.log(articles.javascript);

      
    })
    .catch((err) => {
      console.log(err);
    })

}

export { Card, cardAppender }
