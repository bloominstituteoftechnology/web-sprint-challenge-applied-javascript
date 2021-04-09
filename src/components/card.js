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
  // //

  //<div class="card">
  let cardDiv = document.createElement('div');
  cardDiv.classList.add('card');

  //<div class="headline">{ headline }</div>
  let headlineDiv = document.createElement('div');
  headlineDiv.textContent = article.headline;
  headlineDiv.classList.add('headline');
  cardDiv.appendChild(headlineDiv);

  //<div class="author">
  let authorDiv = document.createElement('div');
  authorDiv.classList.add('author');
  cardDiv.appendChild(authorDiv);

  //<div class="img-container">
  let imgContainer = document.createElement('div');
  imgContainer.classList.add("img-container")
  authorDiv.appendChild(imgContainer);
  // <img src={ authorPhoto }>
  let img = document.createElement('img');
  // debugger
  img.src = article.authorPhoto;
  imgContainer.appendChild(img);

  //<span>By { authorName }</span>
  let spanAuthorName = document.createElement('span');
  spanAuthorName.textContent = `by ${article.authorName}`;
  authorDiv.appendChild(spanAuthorName);

  cardDiv.addEventListener('click',(event)=>{
    console.log(headlineDiv);
  })
  return cardDiv
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
  const parentCard = document.querySelector(selector);

  axios.get('https://lambda-times-api.herokuapp.com/articles').then((res)=>{
    console.log(res)
  
  const bootstrap = res.data.articles.bootstrap;
  bootstrap.forEach(element => {
   parentCard.appendChild(Card(element));
  });
  const jpData = res.data.articles.javascript;
  jpData.forEach((element)=>{
    parentCard.appendChild(Card(element));
  })
  const jquery = res.data.articles.jquery;
  jquery.forEach((element)=>{
    parentCard.appendChild(Card(element));
  })
  const node = res.data.articles.node;
  node.forEach((element)=>{
    parentCard.appendChild(Card(element));
  })
  const technology = res.data.articles.technology;
      technology.forEach(element => {
        parentCard.appendChild(Card(element));
      });
    
  }).catch((err)=>{
    console.log(err);
  })


}

export { Card, cardAppender }
