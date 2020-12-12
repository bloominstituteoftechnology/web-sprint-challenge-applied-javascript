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

// 1. get data from url
// 2. create an article from the data
// 3. add the article to the DOM


// ARTICLE OBJECT
// {
//     "id": "01447579-7037-4093-82f2-e988eea7c0fc",
//     "headline": "ES8: The Next Step in the Evolution of Javascript and What it Means For Your Projects",
//     "authorPhoto": "https://tk-assets.lambdaschool.com/08d1372e-e393-47f1-ac44-fcb7d0baf0e2_sir.jpg",
//     "authorName": "SIR RUFF'N'STUFF"
// }

function createArticleComponent (articleObject) {
    const { id, headline, authorPhoto, authorName } = articleObject;

    // Container for the thing we're creating
    const articleDiv = document.createElement('div');
    articleDiv.classList.add('card');

    // Create headline and add
    const headlineDiv = document.createElement('div');
    headlineDiv.classList.add('headline');
    headlineDiv.textContent = headline;

    articleDiv.appendChild(headlineDiv);

    // ~ Create author
    const authorDiv = document.createElement('div');
    authorDiv.classList.add('author');
    // ~ Create author's image container & image
    const imageContainerDiv = document.createElement('div');
    const image = document.createElement('img');

    imageContainerDiv.classList.add('img-container');
    image.src = authorPhoto;
    imageContainerDiv.appendChild(image);

    authorDiv.appendChild(imageContainerDiv);
    
    // ~ Create author's name span
    const authorsNameSpan = document.createElement('span');
    authorsNameSpan.textContent = authorName;

    authorDiv.appendChild(authorsNameSpan);

    // Add our completed author div to the articleDiv
    articleDiv.appendChild(authorDiv);

    return articleDiv;
}

axios.get(`https://lambda-times-api.herokuapp.com/articles`)
.then(sucessResult =>{
    const articlesByTopic = sucessResult.data.articles;
    const topics = Object.keys(articlesByTopic);

    topics.forEach(topic => {
        const articles = articlesByTopic[topic];

        articles.forEach(article => {
            const articleComponent = createArticleComponent(article);
            const cardsContainer = document.querySelector('div.cards-container');
            
            cardsContainer.appendChild(articleComponent);
        });
    });
});
