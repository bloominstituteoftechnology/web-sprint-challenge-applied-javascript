
axios.get('https://lambda-times-api.herokuapp.com/articles')
.then(res => {
   
   
        const array = res.data.articles.bootstrap
        array.forEach(item => {
        const newCard = cardMaker(item)
        articleParent.append(newCard)
        })
        const array2 = res.data.articles.javascript
        array2.forEach(item => {
        const newCard = cardMaker(item)
        articleParent.append(newCard)
        })
        const array3 = res.data.articles.jquery
        array3.forEach(item => {
        const newCard = cardMaker(item)
        articleParent.append(newCard)
        })
        const array4 = res.data.articles.node
        array4.forEach(item => {
        const newCard = cardMaker(item)
        articleParent.append(newCard)
        })
        const array5 = res.data.articles.technology
        array5.forEach(item => {
        const newCard = cardMaker(item)
        articleParent.append(newCard)
        })
})
.catch(drama => {
  // handle the drama
  console.log(drama)
})

//Entry point for articles
const articleParent = document.querySelector('.cards-container')

function cardMaker(object) {
    //Instantiate all elements
    const card = document.createElement('div')
    const headLine = document.createElement('div')
    const author = document.createElement('div')
    const imgContainer = document.createElement('div')
    const image = document.createElement('img')
    const authorName = document.createElement('span')
    //Add classes/text
    card.classList.add('card')
    headLine.classList.add('headline')
    headLine.textContent = object.headline
    author.classList.add('author')
    imgContainer.classList.add('img-container')
    image.setAttribute('src', object.authorPhoto)
    authorName.textContent = `By: ${object.authorName}`
    //Build Hierarchy
    card.appendChild(headLine)
    card.appendChild(author)
    author.appendChild(imgContainer)
    author.appendChild(authorName)
    imgContainer.appendChild(image)
    //Return card
    return card
}

console.log(cardMaker())
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
