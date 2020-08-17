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
const myCards = document.querySelector('.cards-container');

axios
    .get('https://lambda-times-backend.herokuapp.com/articles')
    .then(response => {
        console.log(response);
        const cardArray = response.data.articles;

        const one = cardArray.javascript;
        const two = cardArray.bootstrap;
        const three = cardArray.jquery;
        const four = cardArray.node;
        const five = cardArray.technology;

        const allCards = one.concat(two, three, four, five);
        console.log(allCards);

        allCards.forEach(authorCard => {
            const newCard = newArticles(authorCard);
            myCards.appendChild(newCard);
        })

    })
    .catch(error => {
        console.log('Response is not recieved', error);
    })

function newArticles(obj) {
    // creating elements
    const cards = document.createElement('div');
    const cardsHeadline = document.createElement('div');
    const author = document.createElement('div');
    const imageContainer = document.createElement('div');
    const img = document.createElement('img');
    const authorsName = document.createElement('spane');

    // adding classes
    cards.classList.add('card');
    cardsHeadline.classList.add('headlin');
    author.classList.add('author');
    imageContainer.classList.add('img-container');

    // appending to the 
    cards.appendChild(cardsHeadline);
    cards.appendChild(author);
    author.appendChild(imageContainer);
    imageContainer.appendChild(img);
    author.appendChild(authorsName);

    // adding contents to the elements we created
    cardsHeadline.textContent = obj.headline;
    img.src = obj.authorPhoto;
    authorsName.textContent = `By: ${obj.authorName}`;

    return cards;
}