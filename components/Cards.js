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

const articleCard = document.querySelector(`.cards-container`)

const newCard = (data) => {
    const card = document.createElement(`div`);
    const headline = document.createElement(`div`);
    const author = document.createElement(`div`);
    const imgContainer = document.createElement(`div`);
    const img = document.createElement(`img`);
    const name = document.createElement(`span`);

    card.classList.add(`card`);
    headline.classList.add(`headline`);
    author.classList.add(`author`);
    imgContainer.classList.add(`img-container`);

    headline.textContent = data.headline;
    img.src = data.authorPhoto;
    name.textContent = `By: ${data.authorName}`;

    card.appendChild(headline);
    card.appendChild(author);
    author.appendChild(imgContainer);
    imgContainer.appendChild(img)
    author.appendChild(name)

    return card;
    
}



axios
.get(`https://lambda-times-api.herokuapp.com/articles`)
.then((res) => {
    res.data.articles.bootstrap.forEach((article) => {
        articleCard.append(newCard(article));
        articleCard.addEventListener(`click`, () => {
            console.log(article.headline)
        });
})
res.data.articles.javascript.forEach((article) => {
    articleCard.append(newCard(article));
    articleCard.addEventListener(`click`, () => {
        console.log(article.headline)
    });
})
res.data.articles.jquery.forEach((article) => {
    articleCard.append(newCard(article));
    articleCard.addEventListener(`click`, () => {
        console.log(article.headline)
    });
})
res.data.articles.node.forEach((article) => {
    articleCard.append(newCard(article));
    articleCard.addEventListener(`click`, () => {
        console.log(article.headline)
    });
})
res.data.articles.technology.forEach((article) => {
    articleCard.append(newCard(article));
    articleCard.addEventListener(`click`, () => {
        console.log(article.headline)
        });
    });
});