import axios from "axios";

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

let cardsContainer = document.querySelector('.cards-container');


axios.get('https://lambda-times-backend.herokuapp.com/articles')
        .then(response => {
           console.log(response);
           let articles = response.data.articles;
           for (let topic in articles){
            for(let article in articles[topic]){
                cardsContainer.append(cardCreator(articles[topic][article]));
            }
           }
            
        })
.catch(error=>{
    console.log('error', error);
})

function cardCreator(element) {

    const card = document.createElement('div');
    card.classList.add('card');

    const headLine = document.createElement('div');
    headLine.classList.add('headline');

    const author = document.createElement('div');
    author.classList.add('author');

    const imgContainer = document.createElement('div');
    imgContainer.classList.add('img-container');

    const img =document.createElement('img');
    img.setAttribute("src", element.authorPhoto)

    const authorName = document.createElement('span');
    authorName.textContent = `By ${element.authorName}`;
    headLine.textContent = `${element.headline}`

    card.appendChild(headLine);
    card.appendChild(author);
    author.appendChild(imgContainer);
    imgContainer.appendChild(img);
    author.appendChild(authorName);


    cardsContainer.appendChild(card);

    card.addEventListener('click', () => {
        console.log(element.headline)
    })


    return card;


}