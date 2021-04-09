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

  //<div class="card">
  let cardDiv = document.createElement('div');
  cardDiv.classList.add('card');

  //<div class="headline">{ headline }</div>
  let headlineDiv = document.createElement('div');
  headlineDiv.classList.add('headline');
  headlineDiv.textContent = article.headline;

  //<div class="author">
  let authorDiv = document.createElement('div');
  authorDiv.classList.add('author');

  //<div class="img-container">
  let imgContainer = document.createElement('div');
  imgContainer.classList.add("img-container")
  authorDiv.appendChild(imgContainer);
  // <img src={ authorPhoto }>
  let img = document.createElement('img');
  img.src(article.authorPhoto);
  imgContainer.appendChild(img);

  //<span>By { authorName }</span>
  let spanAuthorName = document.createElement('span');
  spanAuthorName.textContent = `by ${article.authorName}`;

  cardDiv.addEventListener('click',(event)=>{
    console.log(headlineDiv);
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
}

export { Card, cardAppender }
