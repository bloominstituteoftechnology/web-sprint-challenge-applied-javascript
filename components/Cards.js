// STEP 3: Create article cards.
// -----------------------

import axios from 'axios'
// console.log(axios)

// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.

const API_CARDS = 'https://lambda-times-api.herokuapp.com/articles'

axios
    .get(API_CARDS)
    .then( (res) => {
        // cardMaker(res.data.articles.bootstrap[0])

        const allArray = Object.entries(res.data.articles)
        // console.log(allArray)

        function showAll(myArray) {
            myArray.forEach(levelOne => {
                // console.log('Nivel 1: ', levelOne)
                levelOne[1].forEach(levelTwo => {
                    // console.warn('Nivel 2: ', levelTwo)
                    cardMaker(levelTwo)
                })
            })
        }
        showAll(allArray)

    })
    .catch( (err) => {
        console.log(err)
    })



const cardMaker = ( { authorName, authorPhoto, headline } ) => {

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

    //Creating HTML tags
    const card = document.createElement("div")
    const cardTitle = document.createElement("div")
    const cardAuthor = document.createElement("div")
    const cardImgContainer = document.createElement("div")
    const cardImg = document.createElement("img")
    const cardBy = document.createElement("span")

    //Setting Styles
    card.classList.add("card")
    cardTitle.classList.add("headline")
    cardAuthor.classList.add("author")
    cardImgContainer.classList.add("img-container")

    //Setting content
    cardTitle.textContent = headline
    cardImg.src = authorPhoto
    cardBy.textContent = authorName

    //Appending
    card.appendChild(cardTitle)
    card.appendChild(cardAuthor)
    cardAuthor.appendChild(cardImgContainer)
    cardImgContainer.appendChild(cardImg)
    cardAuthor.appendChild(cardBy)

    //Appending to main Container
    const cardContainer = document.querySelector("div.cards-container")
    cardContainer.appendChild(card)

    // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
    
    cardTitle.addEventListener('click', () => {
        console.log(cardTitle)
    })

    // Use your function to create a card for each of the articles, and append each card to the DOM.

    return card
}