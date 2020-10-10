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


const cardsContainer = document.querySelector('.cards-container');

axios.get('https://lambda-times-api.herokuapp.com/articles')
    .then( res => {

        for (let key in res.data.articles){
            res.data.articles[key].forEach( article => {
                cardMaker(article);
            })
        }
    })
    .catch( err => {
        console.log(err, "error");
    })


const cardMaker = (article => {

    const card = document.createElement('div');
    card.classList.add('card');

    const headline = document.createElement('div');
    headline.classList.add('headline');
    headline.textContent = article.headline;
    card.appendChild(headline);

    const author = document.createElement('div');
    author.classList.add('author');
    card.appendChild(author);

    const imgContainer = document.createElement('div');
    imgContainer.classList.add('img-container');
    author.appendChild(imgContainer);

    const img = document.createElement('img');
    img.src = article.authorPhoto;
    imgContainer.appendChild(img);

    const authorName = document.createElement('span');
    authorName.textContent = article.authorName;
    author.appendChild(authorName);

    cardsContainer.appendChild(card);

    card.addEventListener("click", () => {
        console.log(article.headline);
    })
    return card;
})