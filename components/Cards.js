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

function CardCreate(headline, img, name) {
    
    const newCard = document.createElement('div')
    const cardHead = document.createElement('div')
    const authorContainer = document.createElement('div')
    const imgContainer = document.createElement('div')
    const authorName = document.createElement('span')
    const authorImg = document.createElement('img')

    newCard.appendChild(cardHead)
    newCard.appendChild(authorContainer)
    authorContainer.appendChild(imgContainer)
    authorContainer.appendChild(authorName)
    imgContainer.appendChild(authorImg)

    newCard.classList.add('card')
    cardHead.classList.add('headline')
    authorContainer.classList.add('author')
    imgContainer.classList.add('img-container')

    cardHead.textContent = headline
    authorName.textContent = name
    authorImg.src = img

    newCard.addEventListener('click', (e) => {
        console.log(cardHead, e.target)
    });

    return newCard
}

const cardContainer = document.querySelector('.cards-container')

axios
    .get('https://lambda-times-api.herokuapp.com/articles')
    .then((res) => {
        console.log('This is each card informoration', res)
        res.data.articles.bootstrap.forEach((data) => {
            cardContainer.append(CardCreate(data.headline, data.authorPhoto, data.authorName))
        });
        res.data.articles.javascript.forEach((data) => {
            cardContainer.append(CardCreate(data.headline, data.authorPhoto, data.authorName))
        });
        res.data.articles.jquery.forEach((data) => {
            cardContainer.append(CardCreate(data.headline, data.authorPhoto, data.authorName))
        });
        res.data.articles.node.forEach((data) => {
            cardContainer.append(CardCreate(data.headline, data.authorPhoto, data.authorName))
        });
        res.data.articles.technology.forEach((data) => {
            cardContainer.append(CardCreate(data.headline, data.authorPhoto, data.authorName))
        });
    })
    .catch((error) => {
        console.log('Found an error.', error)
    })