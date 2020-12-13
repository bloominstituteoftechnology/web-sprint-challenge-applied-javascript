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


const { default: Axios } = require("axios")

Axios.
    get('https://lambda-times-api.herokuapp.com/articles')
    .then( (x) => {
        const articlesDom = x.data.articles

        articlesDom.forEach(x => {

    })


function cardBuilder(obj) {
    const cardDiv = document.createElement('div')
    const headlineDiv = document.createElement('div')
    const authorDiv = document.createElement('div')
    const imgDiv = document.createElement('div')
    const image = document.createElement('img')
    const authorSpan = document.createElement('span')

    //append elements

    cardDiv.appendChild(headlineDiv)
    cardDiv.appendChild(authorDiv)
    authorDiv.appendChild(imgDiv)
    imgDiv.appendChild(image)
    authorDiv.appendChild(authorSpan)

    //class names
    cardDiv.classList.add('card')
    headlineDiv.classList.add('headline')
    authorDiv.classList.add('author')
    imgDiv.classList.add('img-container')


    //text/img content
    headlineDiv.textContent = obj.headline
    authorSpan.textContent = obj.authorName 
    img.src = obj.authorPhoto  