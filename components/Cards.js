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

axios.get('https://lambda-times-api.herokuapp.com/articles')
.then(res => {
    console.log(res)
    const artObj = res.data.articles;
    const articles = Object.values(artObj);
    console.log(articles)
    articles.forEach(e => {
    const cards = Articles(articles);
    const cardHolder = document.querySelector('.cards-container');
    cardHolder.appendChild(cards);
    })
})
.catch(err => console.log(err));

function Articles(articles) {
    const card = document.createElement('div');
    const headline = document.createElement('div');
    const author = document.createElement('div');
    const imgCon = document.createElement('div');
    const img = document.createElement('img');
    const name = document.createElement('span');

    card.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imgCon.classList.add('img-container');
    
    for(let i = 0; i < articles.length; i++){
    const subjects = articles[i]
    subjects.forEach(e => {
    img.src = subjects.authorPhoto;
    name.textContent = subjects.authorName;
    })
    }
    card.appendChild(img)
    
    return card;
}