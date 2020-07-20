// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
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
// import axios from 'axios'



const { default: axios } = require("axios")

const errors = document.querySelector('.errors-container')

const cards = document.querySelector('.cards-container')
const lambdaArticles = 'https://lambda-times-backend.herokuapp.com/articles'


axios.get(lambdaArticles)
.then((response) => {
    const articles = response.data.articles
    for(let object in articles){
        articles[object].forEach(element => {
            cards.appendChild(cardMaker(element))
        });
    }
})
.catch((error) => {
console.log(`something is not right ._.`,error)

errors.appendChild(errorMessages(error))
})


const cardMaker = (object) =>{
    const card = document.createElement('div')
    const headline = document.createElement('div')
    const author = document.createElement('div')
    const imgContainer = document.createElement('div')
    const img = document.createElement('img')
    const authorName = document.createElement('span')
    
    headline.textContent = object.headline
    img.src = object.authorPhoto
    authorName.textContent = object.authorName
    
    card.className = 'card'
    headline.className = 'headline'
    author.className = 'author'
    imgContainer.className = 'img-container'
    
    card.appendChild(headline)
    card.appendChild(author)
    author.appendChild(imgContainer)
    imgContainer.appendChild(img)
    author.appendChild(authorName)

    card.addEventListener('click', () => {
        console.log(obj.headline)
    })

    return card
}

const errorMessages = (errors) => {
    const error = document.createElement('div')
    const status = document.createElement('h3')
    const headers = document.createElement('p')

    status.textContent = `Error ${errors.response.status} ${errors.response.request.statusText}`
    headers.textContent = error.message

    errors.appendChild(status)
    errors.appendChild(headers)

    return errors
} 
