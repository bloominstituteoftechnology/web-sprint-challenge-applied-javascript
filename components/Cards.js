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

import axios from 'axios'
    let topics = document.querySelector('div.cards-container')

function makeCard (object) {
    const cardDiv = document.createElement('div')
    const cardHeadline = document.createElement('div')
    const cardAuthor = document.createElement('div')
    const imgContainer = document.createElement('div')
    const img = document.createElement('img')
    const span = document.createElement('span')


    cardDiv.classList.add('card')
    cardHeadline.classList.add('headline')
    cardAuthor.classList.add('author')
    imgContainer.classList.add('img-container')

    cardHeadline.innerText = object.headline;
    img.src = object.authorPhoto;
    span.textContent = "By " + object.authorName;




    cardDiv.append(cardHeadline)
    cardDiv.append(imgContainer)
    cardAuthor.append(img)
    cardAuthor.append(span)
    cardDiv.append(cardAuthor)

    topics.append(cardDiv)
}


axios.get('https://lambda-times-api.herokuapp.com/articles')
.then(function (response) {
    response.data.articles.bootstrap.forEach(element => {
       makeCard(element)
    })
  })
  .catch(function (error) {
    console.log(error);
  });


  const headline = document.querySelector('div.headline')

  console.log(headline)

  headline.addEventListener('click', function () {
            console.log(headline)
  })
