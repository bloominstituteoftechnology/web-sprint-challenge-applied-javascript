// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles

function getHerokuArticles() {
  let herokuPromise = axios.get('https://lambda-times-api.herokuapp.com/articles');
  return herokuPromise;
}

// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.

console.log(getHerokuArticles());  // review the data

// data:
// articles: {javascript: Array(4), bootstrap: Array(3), technology: Array(3), jquery: Array(3), node: Array(2)}


// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//

function createNewCard (articleObject) {

    // create element
    let card = document.createElement('div');
    let headline = document.createElement('div');
    let author = document.createElement('div');
    let imgContainer = document.createElement('div');
    let img = document.createElement('img');
    let byAuthor = document.createElement('span');
  
    // assign class
    card.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imgContainer.classList.add('img-container')
  
    // assign content
    headline.textContent = articleObject.headline;
    img.src = articleObject.authorPhoto;
    byAuthor.textContent = articleObject.authorName;

    // assign listening event to card, click
    card.addEventListener('click', () => {
      console.log(headline)
    });
 
    //  append to heirarchy 
    card.appendChild(headline);
    card.appendChild(author);
    author.appendChild(imgContainer);
    author.appendChild(byAuthor);
    imgContainer.appendChild(img);
  
    // append to html
    let cardsContainer = document.querySelector('.cards-container');
    cardsContainer.appendChild(card);

};

// Use your function to create a card for each of the articles, and append each card to the DOM.

/*
object

  data:

    articles:

      bootstrap:  [3 article objects]
      javascript
      technology
      jquery
      node.js

*/
let promise = getHerokuArticles();

promise.then(({data: {articles: articles}}) => { // object destructuring   {objectProperty: assignedToVar}

    console.log("Articles object with 5 properties: ", articles);

    // These are 5 arrays
    let bootstrap = articles.bootstrap;
    let javascript = articles.javascript;
    let jquery = articles.jquery;
    let node = articles.node;
    let tecnnology = articles.technology;

    // bootstrap.forEach(article => {})

    bootstrap.forEach(e => {
      createNewCard(e);
    });
    javascript.forEach(e => {
      createNewCard(e);
    });
    jquery.forEach(e => {
      createNewCard(e);
    });
    node.forEach(e => {
      createNewCard(e);
    });
    tecnnology.forEach(e => {
      createNewCard(e);
    });

}).catch((articles) => {

  console.log("Promise call unsuccessful.");

});  // end of the promise code