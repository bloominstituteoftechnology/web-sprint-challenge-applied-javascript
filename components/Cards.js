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
//Parent Div
const cardsContainer =  document.querySelector('.cards-container');
//Cards function
const makeArticle = (article) => {
    //card div
    const card = document.createElement('div');
    card.classList.add('card');
    cardsContainer.appendChild(card);
    //Headline div
    const headline = document.createElement('div');
    headline.classList.add('headline');
    headline.textContent = `${article.headline}`;
    card.appendChild(headline);
    //Author div
    const author = document.createElement('div');
    author.classList.add('author');
    card.appendChild(author);
    //Image container
    const imgContainter = document.createElement('div');
    imgContainter.classList.add('img-container');
    author.appendChild(imgContainter);
    //Image
    const image = document.createElement('img');
    image.src = `${article.authorPhoto}`;
    imgContainter.appendChild(image);
    //Span
    const bottomSpan = document.createElement('span');
    bottomSpan.textContent = `${article.authorName}`;
    author.appendChild(bottomSpan);

    return card;
}

axios.get('https://lambda-times-backend.herokuapp.com/articles')
  .then((response) => {
    const articles = response.data.articles;
    for (const articleGroup in articles) {
      const articleList = articles[articleGroup];
      articleList.map(article => makeArticle(article));
    }
  }); 