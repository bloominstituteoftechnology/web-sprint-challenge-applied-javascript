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

  const cardCreator = (css) => { //try adding textContent here, empty for most?
    const temp = document.createElement('div');
    temp.classList.add(css)
    return temp
  }

  const mainDiv = cardCreator('card');
  const headlineDiv = cardCreator('headline');
  const authorDiv = cardCreator('author');
  const imgDiv = cardCreator('img-container');
  const imgAuthorPhoto = document.createElement('img');
  const spanAuthorName = document.createElement('span');

  headlineDiv.textContent = article.headline;
  spanAuthorName.textContent = `By: ${article.authorName}`;

  imgAuthorPhoto.src = article.authorPhoto; //1

  mainDiv.appendChild(headlineDiv);
  mainDiv.appendChild(authorDiv);
  authorDiv.appendChild(imgDiv);
  authorDiv.appendChild(spanAuthorName);
  imgDiv.appendChild(imgAuthorPhoto);

  mainDiv.addEventListener('click', (e) => {
    console.log(article.headline);
  })
  return mainDiv;
};



const cardAppender = (selector) => {

  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `https://lambda-times-api.herokuapp.com/articles`
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.

  axios.get('https://lambda-times-api.herokuapp.com/articles')
    .then(res => {
      const cssTag = document.querySelector(selector);
      Object.values(res.data.articles).forEach(category => {
        category.forEach(individualCard => {
          cssTag.appendChild(Card(individualCard));
        })
        })
      })
    .catch(err => console.log(err));
}

export { Card, cardAppender }



/*
const cardAppender = (selector) => {

  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `https://lambda-times-api.herokuapp.com/articles`
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  
  const articleURL = 'https://lambda-times-api.herokuapp.com/articles'
  axios.get(URL)
       .then( r => {
         const articleData = r.data.articles;
         
         const cardAppended = document.querySelector(selector);
         cardAppended.appendChild(Card(r.articles))
       });
};

export { Card, cardAppender }




/* Footnotes:
1 alternatively:
  imgAuthorPhoto.setAttribute('src', article.authorPhoto) 
  or
  imgAuthorPhoto.setAttribute('src', `${article.authorPhoto}`)
  




*/





/* failed attempts contaier:

const mainDiv = document.createElement('div');
mainDiv.classList.add('card');
mainDiv.appendChild(headline);
mainDiv.appendChild(author);
mainDiv.addEventListener('click', () => console.log(headline)) //or article.headline or divHeadline.textContent

// document.getElementsByClassName("classname");
// document.getElementsByClassName("card").addEventListener("click", function() {
//   console.log(headline);
// });

const headline = document.createElement('div');
headline.classList.add('headline');
headline.textContent = article.headline;

const author = document.createElement('div');
author.classList.add('author');
author.appendChild(imgContainer);
author.appendChild(authorNameSpan);

const imgContainer = document.createElement('div');
imgContainer.classList.add('img-container');
imgContainer.appendChild(authorIMG);

const authorIMG = document.createElement('img');
authorIMG.setAttribute('src', article.authorPhoto);
//or authorIMG.src = article.authorPhoto ?

const authorNameSpan = document.createElement('span');
authorNameSpan.textContent = article.authorName;

return mainDiv;

//FAILED ATTEMPTS:
//
// I want to make a function that takes the name of a variable 
// yet to be created and creates that variable inside of it's scope. 
// No idea what to google, been through quite a few searches
//
// const divBuilderAndClassAdder = (divName, cssClass) => {
//   const divName = document.createElement('div')
//   divName.classList.add(cssClass);
//   return divName;
// }
// divBuilderAndClassAdder(mainDiv, 'card');

// const divAppender = (divToAppendTo, divIwantToHaveAppended) => {
//   divToAppendTo.appendChild('divIwantToHaveAppended');
//   return
// }


*/