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
const cards = document.querySelector('.cards-container')
axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then(response =>  {
    const articleNames = Object.keys(response.data.articles)
    articleNames.forEach(singleArticle => response.data.articles[singleArticle].forEach( answer => cards.appendChild(articleCreater(answer))))
})
.catch(() => cards.appendChild(error()))
function articleCreater(article) {
    const card = document.createElement('div')
    card.className = "card"
    const headline = document.createElement('div')
    headline.className = "headline"
    headline.innerText =article.headline
    const author = document.createElement('div')
    author.className = "author"
    const imgContainer = document.createElement('div')
    imgContainer.className = "img-container"
    const image = document.createElement('img')
    image.src = article.authorPhoto
    const authorName = document.createElement('span')
    authorName.innerText = `By ${article.authorName}`
    imgContainer.appendChild(image)
    author.append(imgContainer, authorName)
    headline.appendChild(author)
    card.appendChild(headline)
    return card
}
// Stretch
function error() {
    const err = document.createElement('h1')
    err.innerText = "ERROR:404"
    return err
}