import Axios from "axios";

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

// const articleCard = document.querySelector('.cards-container')

axios.get('https://lambda-times-api.herokuapp.com/articles')
 .then((res) => {
    console.log(res.data.articles)
    Object.values(res.data.articles).forEach((topic) => {
        topic.forEach(res => {
            document.querySelector('div.cards-container').appendChild(cardMaker(res))
        })
    })
})

function Header() {}
    const newCard = document.createElement('div')
    const newHeadline = document.createElement('div')
    const newAuthor = document.createElement('div')
    const newImgContainer = document.querySelector('div')
    const newImg = document.querySelector('img')
    const span = document.querySelector('span')

    newCard.classList.add('card')
    newHeadline.classList.add('headline')
    newAuthor.classList.add('author')
    newImgContainer.classList.add('img-container')

    newHeadline.textContent = article.headline
    newImg.src = article.authorPhoto
    span.textContent = article.authorName

    newCard.appendChild(newHeadline)
    newCard.appendChild(newAuthor)
    newAuthor.appendChild(newImgContainer)
    newImgContainer.appendChild(newImg)
    newAuthor.appendChild(span)

    return articleCard;
};

const headerContainer = document.querySelector('div.header-container')
headerContainer.appendChild(Header())