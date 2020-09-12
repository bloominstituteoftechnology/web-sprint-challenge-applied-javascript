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
import axios from 'axios'

function articleMaker(article){
    let div1 = document.createElement('div');
    div1.classList.add('card');
    let div2 = document.createElement('div');
    div2.classList.add('headline');
    div2.textContent = article.headline;
    div1.appendChild(div2);
    let div3 = document.createElement('div');
    div3.classList.add('author');
    div1.appendChild(div3);
    let div4 = document.createElement('div');
    div4.classList.add('img-container');
    div3.appendChild(div4);
    let img = document.createElement('img');
    img.setAttribute('src', article.authorPhoto);
    div4.appendChild(img);
    let span = document.createElement('span');
    span.textContent = 'By ' + article.authorName;
    div3.appendChild(span);
    div1.addEventListener('click', (event)=> console.log(article.headline));
    return div1;
}

let cards = document.querySelector('.cards-container');

axios.get('https://lambda-times-api.herokuapp.com/articles')
    .then(
        function(r){
            console.log(r.data.articles);
            Object.keys(r.data.articles).forEach( element =>{
                r.data.articles[element].forEach( a => {
                    console.log(a);
                    console.log(cards);
                    console.log(articleMaker(a));
                    cards.appendChild(articleMaker(a));
                })
            })
        }
    )