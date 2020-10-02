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

const cardsContainer = document.querySelector('.cards-container')

axios.get('https://lambda-times-api.herokuapp.com/articles')
.then(res => {
    res.data.articles.bootstrap.forEach(item => {
        cardsContainer.appendChild(createCard(item))
    })
    res.data.articles.javascript.forEach(item => {
        cardsContainer.appendChild(createCard(item))
    })
    res.data.articles.jquery.forEach(item => {
        cardsContainer.appendChild(createCard(item))
    })
    res.data.articles.node.forEach(item => {
        cardsContainer.appendChild(createCard(item))
    })
    res.data.articles.technology.forEach(item => {
        cardsContainer.appendChild(createCard(item))
    })
})

function createCard(object) {

    const card = document.createElement('div') // Append to cardscontainer
    const headLine = document.createElement('div') // append to card
    const author = document.createElement('div') // append to headline
    const imgContainer = document.createElement('div') // append to author
    const img = document.createElement('img') // append to imageContainer
    const span = document.createElement('span') // append to author

    card.classList.add('card')
    headLine.classList.add('headline')
    author.classList.add('author')
    imgContainer.classList.add('img-container')

    headLine.textContent = object.headline
    img.src = object.authorPhoto
    span.textContent = object.authorName

    cardsContainer.appendChild(card)
    card.appendChild(headLine)
    headLine.appendChild(author)
    author.appendChild(imgContainer)
    imgContainer.appendChild(img)
    author.appendChild(span)

    card.addEventListener('click', () => {
        console.log(headLine)
    })

    return card
}