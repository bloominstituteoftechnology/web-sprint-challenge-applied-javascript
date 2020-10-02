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


const entry = document.querySelector('.cards-container')

function cardMaker({ article }) {
    const cardDiv = document.createElement('div')
    cardDiv.className = 'card'

    const headlineDiv = document.createElement('div')
    headlineDiv.className = 'headline'

    const authorDiv = document.createElement('div')
    authorDiv.className = 'author'

    const imgDiv = document.createElement('div')
    imgDiv.className = 'img-container'

    const authImg = document.createElement('img')

    const nameSpan = document.createElement('span')

    cardDiv.append(headlineDiv, authorDiv, nameSpan)

    authorDiv.append(imgDiv)

    imgDiv.append(authImg)

    return cardDiv
}


axios.get('https://lambda-times-api.herokuapp.com/articles')
    .then(res => {
        console.log(res.data.articles)
        const js = res.data.articles.javascript
        const bs = Array.from(res.data.articles.bootstrap)
        const tech = Array.from(res.data.articles.technology)
        const jq = Array.from(res.data.articles.jquery)
        const node = Array.from(res.data.articles.node)
        console.log(js)
    })
    .catch(err => console.log(err))