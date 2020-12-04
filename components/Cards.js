import axios from 'axios';
// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.


const cardEntryPoint = document.querySelector('.cards-container');

axios.get('https://lambda-times-api.herokuapp.com/articles')
.then((res) =>{
    console.log(res.data.articles)
    const articles = res.data.articles;
    const bootstrap = articles.bootstrap;
    const javascript = articles.javascript;
    const jquery = articles.jquery;
    const node = articles.node;
    const technology = articles.technology;

    bootstrap.forEach((details) =>{
        cardEntryPoint.appendChild(cardMaker(details));
    });
    javascript.forEach((details) =>{
        cardEntryPoint.appendChild(cardMaker(details));
    });
    jquery.forEach((details) =>{
        cardEntryPoint.appendChild(cardMaker(details));
    });
    node.forEach((details) =>{
        cardEntryPoint.appendChild(cardMaker(details));
    });
    technology.forEach((details) =>{
        cardEntryPoint.appendChild(cardMaker(details));
    });

})
.catch((err) =>{
    console.log(err, 'error')
})
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
function cardMaker(article){
    //created Elements
    const card = document.createElement('div');
    const headline = document.createElement('div');
    const author = document.createElement('div');
    const imgContainer = document.createElement('div');
    const image = document.createElement('img');
    const name = document.createElement('span');

    //gave class name
    card.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imgContainer.classList.add('img-container');

    //Set order
    card.appendChild(headline)
    card.appendChild(author);
    author.appendChild(imgContainer);
    imgContainer.appendChild(image);
    author.appendChild(name);

    //Gave text content
    headline.textContent = article.headline;
    image.src = article.authorPhoto;
    name.textContent = article.authorName;

    //added event listener
    card.addEventListener('click', (event) =>{
        console.log(headline.textContent);
    })
    return card;
}


// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.
