import axios from "axios"

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

function article(name,photo,title){
    const card = document.createElement('div')
    const headline = document.createElement('div')
    const author = document.createElement('div')
    const imgContainer = document.createElement('div')
    const imgSrc = document.createElement('img')
    const writer = document.createElement('span')

     card.classList.add('card')
    headline.classList.add('headline')
    author.classList.add('author')
    imgContainer.classList.add('img-container')

    headline.textContent = title
    writer.textContent = name
    imgSrc.textContent = photo


    card.appendChild(headline)
    card.appendChild(author)
    author.appendChild(imgContainer)
    imgContainer.appendChild(imgSrc)
    imgContainer.appendChild(writer)

    return card;
}

const parentDiv = document.querySelector('div.cards-container')

const request = axios.get('https://lambda-times-api.herokuapp.com/articles')
.then(data => {
        console.log(data.data.articles);
        

        var bs = data.data.articles.bootstrap;
        bs.forEach(e => {
           const item = article(e.headline, e.authorPhoto, e.authorName);
           parentDiv.appendChild(item);
        });

        var js = data.data.articles.javascript;
        js.forEach(e => {
           const item = article(e.headline, e.authorPhoto, e.authorName);
           parentDiv.appendChild(item);
        });

        var tech = data.data.articles.technology;
        tech.forEach(e => {
           const item = article(e.headline, e.authorPhoto, e.authorName);
           parentDiv.appendChild(item);
        });

        var jq = data.data.articles.jquery;
        jq.forEach(e => {
           const item = article(e.headline, e.authorPhoto, e.authorName);
           parentDiv.appendChild(item);
        });

        var node = data.data.articles.node;
        node.forEach(e => {
           const item = article(e.headline, e.authorPhoto, e.authorName);
           parentDiv.appendChild(item);
        });
})
.catch(err => console.log('ERROR', err));
