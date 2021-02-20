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
    
    const articleCard = document.createElement('div');
    articleCard.classList.add('card');
    
    const headline = document.createElement('div');
    headline.classList.add('headline');
    headline.textContent = undefined
    
    const author = document.createElement('div');
    author.classList.add('author');
    
    const imageContainer = document.createElement('div');
    imageContainer.classList.add('img-container');
    
    const image = document.createElement('img');
    image.src = null;
        
    const articleBy = document.createElement('span');
    articleBy.textContent = undefined;
    
    articleCard.appendChild(headline);
    articleCard.appendChild(author);
    author.appendChild(imageContainer);
    imageContainer.appendChild(image);
    author.appendChild(articleBy);
    
    return articleCard
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

    const element = document.querySelector(selector);
    console.log(element)
    axios.get('https://lambda-times-api.herokuapp.com/articles')
        .then(({data}) => {
        const newTab = Tabs(data);
        element.appendChild(newTab)
    })
        .catch(err => console.log(err));
}

export { Card, cardAppender }
