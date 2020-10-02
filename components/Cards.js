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

const { default: Axios } = require("axios");

// Use your function to create a card for each of the articles, and append each card to the DOM.
Axios.get('https://lambda-times-api.herokuapp.com/articles')
.then(elementData => {
let articleData = elementData.data.articles
let jsData = articleData['javascript']
let bootData = articleData['bootstrap']
let techData = articleData['technology']
let jqueryData = articleData['jquery']
let nodeData = articleData['node']

for(let i = 0, len=jsData.length; i<len; i++) {
    articleMaker(jsData[i])
}
for(let i = 0, len=techData.length; i<len; i++) {
    articleMaker(bootData[i])
}
for(let i = 0, len=techData.length; i<len; i++) {
    articleMaker(techData[i])
}
for(let i = 0, len=jqueryData.length; i<len; i++) {
    articleMaker(jqueryData[i])
}
for(let i = 0, len=nodeData.length; i<len; i++) {
    articleMaker(nodeData[i])
}
console.log(articleData)
console.log(jsData)
 })
.catch(err => {
console.log('ERROR!')
})



function articleMaker(artObj) {
    //HTMl INTERACTIOn
    const cardContainer = document.querySelector('.cards-container')
    //Instantiating
    const cardDiv = document.createElement('div');
    const headDiv = document.createElement('div');
    const authorDiv = document.createElement('div')
    const imgDiv = document.createElement('div');
    const img = document.createElement('img');
    const spanName = document.createElement('span');
    //Hierarchy
    cardContainer.append(cardDiv)
    cardDiv.append(headDiv);
    cardDiv.append(authorDiv);
    authorDiv.append(imgDiv);
    cardDiv.append(spanName);
    imgDiv.appendChild(img)
    //ClassList
    cardDiv.classList.add('card');
    headDiv.classList.add('headline');
    authorDiv.classList.add('author');
    imgDiv.classList.add('img-container');
    //TextContnet
    headDiv.textContent = artObj.headline
    img.src = artObj.authorPhoto
    spanName.textContent = artObj.authorName
    //Click Listener
    cardDiv.addEventListener('click', event => {
        console.log(event.target.textContent)
    })
    return cardDiv
}
