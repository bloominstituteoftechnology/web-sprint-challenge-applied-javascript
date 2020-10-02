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

function cardMaker(artObj){

    const cardBox = document.createElement('div');
    const headerTitle = document.createElement('div');
    const authorBox = document.createElement('div');
    const imgBox = document.createElement('div');
    const imgURL = document.createElement('img');
    const authorNameText = document.createElement('span');

    cardBox.classList.add('card');
    headerTitle.classList.add('headline');
    authorBox.classList.add('author');
    imgBox.classList.add('img-container');

    imgURL.src = `${artObj.authorPhoto}`;

    cardBox.appendChild(headerTitle);
    cardBox.appendChild(authorBox);
    authorBox.appendChild(imgBox)
    imgBox.appendChild(imgURL);
    authorBox.appendChild(authorNameText);

    headerTitle.textContent = `${artObj.headline}`;
    authorNameText.textContent = `"By ", ${artObj.authorName}`;

    cardBox.addEventListener('click', () => {
    console.log(headerTitle);
  })

    return cardBox
}

axios.get('https://lambda-times-api.herokuapp.com/articles')
    .then(res => {
        const data = res.data.articles
        console.log(data)
    })
    .catch(drama => {
        console.log(drama)
    })