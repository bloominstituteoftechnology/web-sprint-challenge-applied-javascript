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

axios.get("https://lambda-times-api.herokuapp.com/articles")
    .then(res => {
        console.log(res.data)
        for(const category in res.data.articles) {
            console.log(category)
            cardiB(res.data.articles[category])
        }
    })
    .catch(err => {
        console.log(err)
    })

function cardiB(articles) {
    console.log(articles)
    const articleContainer = document.getElementsByClassName('cards-container')[0]
    articles.forEach(element => {
        const articleHtml = cardiC(element)
        console.log(articleHtml)
        articleContainer.appendChild(articleHtml)
    });
}
function cardiC(article) {
    const articleDiv = document.createElement('div')
    articleDiv.classList.add('card')
    const articleHtml = `<div class="headline">${article.headline}</div>
        <div class="author">
        <div class="img-container">
        <img src="${article.authorPhoto}" />
        </div>
        <span>By ${article.authorName}</span>
        </div>`
    articleDiv.innerHTML = articleHtml;
    articleDiv.addEventListener('click', event => {
        console.log(article.headline)
    })
    return articleDiv
}