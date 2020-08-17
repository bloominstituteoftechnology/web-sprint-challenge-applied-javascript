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
            //    console.log(topics);
            for(let article in articles[topic]){
                cardsContainer.append(cardCreator(articles[topic][article]));
            }
           }
            
        })
.catch(error=>{
    console.log('there is an error', error);
})

function cardCreator(content){
    let card = document.createElement('div');
    card.classList.add('card');

    let headline= document.createElement('div');
    headline.classList.add('headline');
    headline.textContent = content.headline;
    card.appendChild(headline);

    let author = document.createElement('div');
    author.classList.add('author');



    let authorsName= document.createElement('span');
    authorsName.textContent = `By ${content.authorName}`;
    author.appendChild(authorsName);
    card.appendChild(author);


    card.addEventListener('click', () => {
        console.log(content.headline);
    })

    return card;
}