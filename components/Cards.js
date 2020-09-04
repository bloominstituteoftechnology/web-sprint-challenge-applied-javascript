
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

import axios from "axios"

const cards = document.querySelector('.cards-container')

  axios.get("https://lambda-times-api.herokuapp.com/articles")
  .then(stuff =>{
    stuff.data.articles.forEach(element => {
      const card = document.createElement('div')
      card.classList.add('cards-container')
      card.textContent = element
      cards.appendChild(cardMaker(stuff.data))
    })
  })
  .catch(err => {
    console.log(err)
  })




function cardMaker(data) {

  let {authorName, authorPhoto, headline, id} = data

  const card = document.createElement('div')
  card.classList.add('card')

  const title = document.createElement('div')
  title.classList.add('headline')
  title.textContent = `${headline}`

  const person = document.createElement('div')
  person.classList.add('author')
  
  const image = document.createElement('div')
  image.classList.add('img-container')
  image.src = authorPhoto

  const div = document.createElement('div')
  const spanThing = document.createElement('span')
  spanThing.textContent = `By ${authorName}`

  // setting class names, attributes and text
  
  card.appendChild(title)
  card.appendChild(person)
  card.appendChild(image)
  card.appendChild(spanThing)

  card.addEventListener('click', (event) =>{
    console.log(`${headline}`)
  });
 
  return card;
}

