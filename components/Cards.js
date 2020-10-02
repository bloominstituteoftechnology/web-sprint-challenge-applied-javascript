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

const containerCards = document.querySelector('.cards-container')

axios.get('https://lambda-times-api.herokuapp.com/articles')
    .then(response =>
    {
        console.log(response.data.articles)
        for (const articleTopic in response.data.articles) {
            response.data.articles[articleTopic].forEach(article =>
            {
                containerCards.append(makeArticle(article))

            })
        }
    })




function makeArticle(articles)
const card = document.createElement('div')
const headline = document.createElement('div')
const author = document.createElement('div')
const imgcontainer = document.createElement('div')
const img = document.createElement('img')
const authorsname = document.createElement('span')

card.classList.add('card')
headline.classList.add('headline')
author.classList.add('author')
imgcontainer.classList.add('img-container')

