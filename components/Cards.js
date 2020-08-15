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

const entryCards = document.querySelector('.cards-container');

let info = [];

axios.get(`https://lambda-times-api.herokuapp.com/articles`)
.then((res) => {
    console.log(res.data);
    res.data.articles.bootstrap.forEach((art) => {
        entryCards.append(cards(art));
    });
    res.data.articles.javascript.forEach((art) => {
        entryCards.append(cards(art));
    });
    res.data.articles.jquery.forEach((art) => {
        entryCards.append(cards(art));
    });
    res.data.articles.node.forEach((art) => {
        entryCards.append(cards(art));
    });
    res.data.articles.technology.forEach((art) => {
        entryCards.append(cards(art));
    });
}).catch((err) => {
    console.log(err);
});

console.log(info);

const cards = (art) => {
    const card = document.createElement('div');
    const headline = document.createElement('div');
    const author = document.createElement('div');
    const authorImg = document.createElement('img');
    const authorName = document.createElement('span');

    card.appendChild(headline);
    card.appendChild(author);
    author.appendChild(authorImg);
    author.appendChild(authorName);

    card.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');

    headline.textContent = art.headline;
    authorImg.src = art.authorPhoto;
    authorName.textContent = art.authorName;

    card.addEventListener('click', () => {
        console.log(headline.textContent);
    })

    return card;
}