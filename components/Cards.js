import axios from 'axios';



    console.log('started')
    axios.get(`https://lambda-times-api.herokuapp.com/articles`)
    .then( response => {
        console.log(response.data, "hello")
    })
   .catch (error => {
        console.log(error);
    })


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
function Cards(object) {
    const card = document.createElement('div')
    card.classList.add('card')

    const headline = document.createElement('div')
    headline.classList.add('headline')
    headline.textContent = {}
    card.appendChild(headline)

    const author = document.createElement('div')
    author.classList.add('author')
    card.appendChild(author)

    const imgContainer = document.createElement('div')
    imgContainer.classList.add('img-container')
    card.appendChild(imgContainer)

    const img = document.createElement('img')
    img.textContent = {}
    imgContainer.appendChild(img)

    const authorName = document.createElement('span')
    authorName.textContent = `By `
    card.appendChild(authorName)

    headline.addEventListener('click', () => {
        console.log()
    })

    return card
}