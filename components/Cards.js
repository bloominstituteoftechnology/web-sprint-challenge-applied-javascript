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
const cardsContainer = document.querySelector('.cards-container')

axios
.get('https://lambda-times-api.herokuapp.com/articles')
.then(response => {
    Object.keys(response.data.articles).forEach(topic => {
        response.data.articles[topic].forEach(item => {
            cardsContainer.appendChild(articleCardMaker(item));
        });
    });
})
.catch(err => {
    console.log('OOPS', err)
});


function articleCardMaker(artObj){
    const card = document.createElement('div');
    const artHeadline = document.createElement('div');
    const author = document.createElement('div');
    const imgContainer = document.createElement('div');
    const image = document.createElement('img');
    const authName = document.createElement('span');

    card.classList.add('card');
    artHeadline.classList.add('headline');
    author.classList.add('author');
    imgContainer.classList.add('img-container');
    
    artHeadline.textContent = artObj.headline;
    authName.textContent = `By ${artObj.authorName}`;
    image.src = artObj.authorPhoto

    card.appendChild(artHeadline);
    card.appendChild(author);

    author.appendChild(imgContainer);
    author.appendChild(authName);

    imgContainer.appendChild(image);

    card.addEventListener('click', event => console.log (artObj.headline))

    return card
}

