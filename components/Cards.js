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

const { default: Axios } = require("axios");

const cardContainer = document.querySelector('div.cards-container');

Axios
.get('https://lambda-times-api.herokuapp.com/articles')
.then((resolved) =>{
    const seperateCards = resolved.data.articles;
    const javaScript = seperateCards.javascript;
    const bootStrap = seperateCards.bootstrap;
    const technology = seperateCards.technology;
    const jQuery = seperateCards.jquery;
    const node = seperateCards.node;

    javaScript.forEach((info) =>{
        // console.log(info);
        cardContainer.appendChild(cardCreator(info));
    });

    bootStrap.forEach((info) =>{
        cardContainer.appendChild(cardCreator(info));
    });

    technology.forEach((info) =>{
        cardContainer.appendChild(cardCreator(info));
    });

    jQuery.forEach((info) =>{
        cardContainer.appendChild(cardCreator(info));
    });

    node.forEach((info) =>{
        cardContainer.appendChild(cardCreator(info));
    });
});

function cardCreator(object){
    console.log(object)

    //created elements
    const card = document.createElement('div');
    const headLine = document.createElement('div');
    const author = document.createElement('div')
    const imgContainer = document.createElement('div');
    const image = document.createElement('img');
    const authorName = document.createElement('span');

    //Gave calss name to specific elements
    card.classList.add('card');
    headLine.classList.add('headline');
    author.classList.add('author');
    imgContainer.classList.add('img-container');
    
    //added text content
    headLine.textContent = object.headline
    image.src = object.authorPhoto;
    authorName.textContent = object.authorName

    //created order
    card.appendChild(headLine);
    card.appendChild(author);
    author.appendChild(imgContainer);
    author.appendChild(image);
    card.appendChild(authorName);

    //added event listener
    card.addEventListener('click', () =>{
        console.log(headLine);
    });

    return card;
}

