
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

    stuff.data.articles.bootstrap.forEach(element => {
        cards.appendChild(cardMaker(element));
    }}
    stuff.data.articles.javascript.forEach(element => {
      cards.appendChild(cardMaker(element));
    }}
    stuff.data.articles.jquery.forEach(element => {
      cards.appendChild(cardMaker(element));
    }}
    stuff.data.articles.node.forEach(element => {
      cards.appendChild(cardMaker(element));
    }}
    stuff.data.articles.technology.forEach(element => {
      cards.appendChild(cardMaker(element));
    }}
  
  });
    .catch(err => {
    console.log(err)
  })




function cardMaker(data) {
  console.log('this works')
  let {authorName, authorPhoto, headline} = data

  const card = document.createElement('div')
  card.classList.add('card')

  const title = document.createElement('div')
  title.classList.add('headline')
  title.textContent = headline

  const person = document.createElement('div')
  person.classList.add('author')
 
  const imageHolder = document.createElement('div')
  imageHolder.classList.add('img-container')

  const image = document.createElement('img')
  image.src = authorPhoto
  
  const span= document.createElement('span')
  span.textContent = `By ${authorName}`
  
  card.append(title)
  card.append(person)
  card.append(imageHolder)
  imageHolder.append(image)
  card.append(span)

  card.addEventListener('click', event =>{
    console.log(headline)
  });
 
  return card;
}
