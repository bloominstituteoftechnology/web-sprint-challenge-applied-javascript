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

  import axios from "axios";

  const Card = (article) => {
    const cardHolder = document.createElement('div');
    const headLine = document.createElement('div');
    const author = document.createElement('div');
    const imgHolder = document.createElement('div');
    const img = document.createElement('img');
    const closure = document.createElement('span');
  
    cardHolder.classList.add('card');
    headLine.classList.add('headline');
    author.classList.add('author');
    imgHolder.classList.add('img-container');
    img.src = article.authorPhoto;
  
    cardHolder.appendChild(headLine);
    cardHolder.appendChild(author);
    author.appendChild(imgHolder);
    imgHolder.appendChild(img);
    author.appendChild(closure);
    
    headLine.textContent = article.headline;
    closure.textContent = `By ${article.authorName}`
  
    cardHolder.addEventListener('click', (event) => {
      console.log(article.headline)
    })
    return cardHolder;
  
  }
  
    // TASK 6
    // ---------------------
    // Implement this function that takes a css selector as its only argument.
    // It should obtain articles from this endpoint: `https://lambda-times-api.herokuapp.com/articles`
    // However, the articles do not come organized in a single, neat array. Inspect the response closely!
    // Create a card from each and every article object in the response, using the Card component.
    // Append each card to the element in the DOM that matches the selector passed to the function.
    //
  
  const cardAppender = (selector) => {
    axios
    .get("https://lambda-times-api.herokuapp.com/articles")
    .then((response) => {
      const javascript = response.data.articles.javascript;
      const bootstrap = response.data.articles.bootstrap;
      const technology = response.data.articles.technology;
      const node = response.data.articles.node;
      const jquery = response.data.articles.jquery;
      
      const newSelector = document.querySelector(selector);
      
        javascript.forEach((item) => {
          const newCard = Card(item);
          newSelector.append(newCard);
        })
  
        bootstrap.forEach((item) => {
          const newCard = Card(item);
          newSelector.append(newCard);
        })
  
        technology.forEach((item) => {
        const newCard = Card(item);
        newSelector.append(newCard);
  })
  
        jquery.forEach((item) => {
          const newCard = Card(item);
          newSelector.append(newCard);
        })
  
      node.forEach((item) => {
        const newCard = Card(item);
        newSelector.append(newCard);
      })
  
      
    })
  }
  
  export { Card, cardAppender }