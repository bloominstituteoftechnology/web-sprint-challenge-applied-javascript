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

function Card(article){ //the function that runs logic which creates the html
    const cardContainer = document.createElement('div') //creating the container of the card
    cardContainer.classList.add('card') //adding the container to the html

    const cardHeadline = document.createElement('div') //creating the headline container
    cardHeadline.classList.add('headline') //adding to the html
    cardHeadline.innerHTML = article.headline //taking the text from article object to fill in the headline
    cardContainer.appendChild(cardHeadline) //appending to the card container

    const cardAuthor = document.createElement('div') //card author container
    cardAuthor.classList.add('author') //adding to the html
    cardContainer.appendChild(cardAuthor) //appending to cardcontainer

    const cardImgContainer = document.createElement('div') //container for the image
    cardImgContainer.classList.add('img-container') //adding to the html
    cardAuthor.appendChild(cardImgContainer) //appending to cardAuthor

    const cardImg = document.createElement('img') //creating the img tag
    cardImg.attributes.src = article.authorPhoto //adding the source of the image, feching the image data
    cardImgContainer.appendChild(cardImg) //appending to imgContainer

    const cardSpan = document.createElement('span')
    cardSpan.innerHTML = `By ${article.authorName}` //uses a stringliteral to fill the byline with the author's name value
    cardAuthor.appendChild(cardSpan)

    cardContainer.addEventListener('click', () => { //listens for clicks on the card, prints the title to the console
        console.log(article.headline)
    })
    return cardContainer
}

axios.get('https://lambda-times-api.herokuapp.com/articles') //the promised data
.then(response => {
    const cardContainer = document.querySelector('.cards-container') //selecting the container the cards go into
    const bootstrapArticles = response.data.articles.bootstrap //assigning the bootstrap article array to a new variable, letting us select the specific array within the object
    bootstrapArticles.forEach(article => { //this is where we are iterating over the bootstrap articles within the bootstrap array
        const newCard = Card(article) //creating a new card for the article
        cardContainer.appendChild(newCard) //appending the card to the document
    })                                      //these steps repeat for each one of the articles
    const javascriptArticles = response.data.articles.javascript 
    javascriptArticles.forEach(article => {
        const newCard = Card(article)
        cardContainer.appendChild(newCard)
    })

    const jqueryArticles = response.data.articles.jquery
    jqueryArticles.forEach(article => {
        const newCard = Card(article)
        cardContainer.appendChild(newCard)
    })

    const nodeArticles = response.data.articles.node
    nodeArticles.forEach(article => {
        const newCard = Card(article)
        cardContainer.appendChild(newCard)
    })

    const technologyArticles = response.data.articles.technology   
    technologyArticles.forEach(article => {
        const newCard = Card(article)
        cardContainer.appendChild(newCard)
    })
})

.catch(error =>{ //error handler
    console.log(error)
})