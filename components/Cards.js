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
console.log(axios.get(`https://lambda-times-backend.herokuapp.com/articles`))


function cards(card){

    const myCard = document.createElement('div')
    myCard.className = 'card'


    const myHeadline = document.createElement('div')
    myHeadline.className = 'headline'
    myHeadline.textContent = card.headline

    const myAutor = document.createElement('div')
    myAutor.className = 'autor'
   

    const myImgContainer = document.createElement('div')
    myImgContainer.className = "img-container"
    
     
    const myImg = document.createElement('img')
    myImg.src = card.authorPhoto

    const myAutorName = document.createElement('span')
    myAutorName.textContent = `By ${card.authorName}`

myImgContainer.append(myImg)
myCard.append(myHeadline, myAutor)

myAutor.append(myImgContainer, myAutorName)

myCard.addEventListener('click', () => console.log(card.headline))

return myCard
}


const dfsdf = document.querySelector('.cards-container')
axios.get(`https://lambda-times-backend.herokuapp.com/articles`)
.then(function(arrOne){
arrOne.data.articles.bootstrap.forEach(article => dfsdf.appendChild(cards(article)))
arrOne.data.articles.javascript.forEach(article => dfsdf.appendChild(cards(article)))
arrOne.data.articles.jquery.forEach(article => dfsdf.appendChild(cards(article)))
arrOne.data.articles.node.forEach(article => dfsdf.appendChild(cards(article)))
arrOne.data.articles.technology.forEach(article => dfsdf.appendChild(cards(article)))

})
