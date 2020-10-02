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
axios.get('https://lambda-times-api.herokuapp.com/articles')
    .then(res => {

        const articles = res.data.articles
        console.log(articles)

        const js = res.data.articles.javascript
        const bs = res.data.articles.bootstrap
        const tech = res.data.articles.technology
        const jq = res.data.articles.jquery
        const node = res.data.articles.node
        const articlesArray = [js, bs, tech, jq, node]

        articlesArray.forEach(items => {
            items.forEach(item => {
                entry.append(cardMaker(item))
            })
        })
    })
    .catch(err => console.log(err))

function cardMaker(article) {
    const cardDiv = document.createElement('div')
    cardDiv.className = 'card'

    const headlineDiv = document.createElement('div')
    headlineDiv.className = 'headline'
    headlineDiv.textContent = article.headline

    const authorDiv = document.createElement('div')
    authorDiv.className = 'author'

    const imgDiv = document.createElement('div')
    imgDiv.className = 'img-container'

    const authImg = document.createElement('img')
    authImg.src = article.authorPhoto

    const nameSpan = document.createElement('span')
    nameSpan.textContent = `By: ${article.authorName}`

    cardDiv.append(headlineDiv, authorDiv)

    authorDiv.append(imgDiv, nameSpan)

    imgDiv.append(authImg)

    cardDiv.addEventListener('click', (e) => {
        console.log(headlineDiv.textContent, e.target)
    })

    return cardDiv
}