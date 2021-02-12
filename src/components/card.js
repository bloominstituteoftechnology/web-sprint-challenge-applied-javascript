import axios from 'axios';

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

  //iterate over array of objects and return markup
  // const articles_obj = article.forEach((item) => {
    //instantiating elements
    const div_card = document.createElement('div');
    const div_headline = document.createElement('div');
    const div_author = document.createElement('div');
    const div_img = document.createElement('div');
    const img = document.createElement('img');
    const span = document.createElement('span');
  
    //setting class names
    div_card.classList.add('card');
    div_headline.classList.add('headline');
    div_author.classList.add('author');
    div_img.classList.add('img-container');

    //setting text and attributes to elements
    div_headline.textContent = article.headline;
    img.setAttribute('src', article.authorPhoto);
    img.setAttribute('alt', 'Photo of author');
    span.textContent = `By ${article.authorName}`;
    
    //setting element hierarchy
    div_card.appendChild(div_headline);
    div_card.appendChild(div_author);
    div_author.appendChild(div_img);
    div_img.appendChild(img);
    div_author.appendChild(span);
    
    //creating event listener
    div_card.addEventListener('click', (e) => {
      console.log(article.headline);
    });
    return div_card;
  }


  //define HOF that takes in a callback
const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `https://lambda-times-api.herokuapp.com/articles`
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //

  //instantiate axios get request from url
  const url = 'https://lambda-times-api.herokuapp.com/articles';
  axios.get(url)
    .then(res => {
      const array = res.data.articles;
      Object.values(array).forEach((value) => {
        value.forEach(item => {
          const articleCard = Card(item)
          selector.appendChild(articleCard);
        })
      })
    }) 
    .catch(err => {
      console.log(err)
  })
}

//define a selector callback
const elementSelector = (sel) =>{
  const selection = sel;
  return selection;
}

//define selector callback argument
const elSelector =  document.querySelector('.cards-container');

//call cardAppender and pass in the callback
cardAppender(elementSelector(elSelector));

export { Card, cardAppender }
