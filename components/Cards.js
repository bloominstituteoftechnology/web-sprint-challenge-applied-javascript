// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
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
// Use your function to create a card for each of the articles, and append each card to the DOM.

//run querySelector on cards-container
const cardContainer = document.querySelector('.cards-container');

//use axios to get object from api, run forEach on object, then forEach on each topic to get all articles
axios
    .get('https://lambda-times-api.herokuapp.com/articles')
    .then(response => {
        Object.keys(response.data.articles).forEach(topic => {
            response.data.articles[topic].forEach(article => {
                cardContainer.appendChild(newArticle(article));
            });
        });
    });

//new article function to construct each article
function newArticle(article){
    //create card div
    const card = document.createElement('div');
    card.classList.add('card');

    //create headline div
    const headline = document.createElement('div');
    headline.classList.add('headline');
    headline.textContent = article.headline;
    card.appendChild(headline);

    //create author div
    const author = document.createElement('div');
    author.classList.add('author');
    card.appendChild(author);

    //create image-container div
    const imgContainer = document.createElement('div');
    imgContainer.classList.add('img-container');
    author.appendChild(imgContainer);

    //create author image
    const authorImage = document.createElement('img');
    authorImage.setAttribute('src', article.authorPhoto);
    imgContainer.appendChild(authorImage);

    //create authors name span
    const authorName = document.createElement('span');
    authorName.textContent = `By ${article.authorName}`;
    author.appendChild(authorName);

    //create event listener to log title to console
    card.addEventListener('click', () => console.log(article.headline));

    return card;
}