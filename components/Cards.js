
axios.get('https://lambda-times-api.herokuapp.com/articles')
.then(res => {
   console.log(res.data.articles)
   const bigObject = res.data.articles 
   
   const articleKeys = Object.keys(bigObject)
   articleKeys.forEach(key => {
     console.log(key)
     const array = res.data.articles[key]
     array.forEach(item => {
     const newCard = cardMaker(item)
     articleParent.append(newCard)
     })
   })    
   //Event Listener if click on card, console.log headline
   const theCards = document.querySelectorAll('.card')
   theCards.forEach(elem => { 
    elem.addEventListener('click', (event) => {
      console.log(event.target.textContent)
    })
})
})
.catch(drama => {
  // handle the drama
  console.log(drama)
})

//const oneCard = querySelector
//oneCard.addEventListener('click', (event) => {
//    console.log(event.target)
//})
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
// Use your function to create a card for each of the articles, and append ///each card to the DOM.
