import axios from "axios"

const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
  // Instantiating elements
  const card = document.createElement('div')
  const headline = document.createElement('div')
  const author = document.createElement('div')
  const imageContainer = document.createElement('div')
  const image = document.createElement('img')
  const name = document.createElement('span')
  // Adding classes to elements
  card.classList.add('card')
  headline.classList.add('headline')
  author.classList.add('author')
  imageContainer.classList.add('img-container')
  // Setting up structure of elements
  card.appendChild(headline)
  card.appendChild(author)
  author.appendChild(imageContainer)
  imageContainer.appendChild(image)
  imageContainer.appendChild(name)
  // Adding content
  headline.textContent = article.headline
  image.src = article.authorPhoto
  name.textContent = article.authorName
  // Adding event listener
  card.addEventListener('click', () => {
    console.log(article.headline)
  })
  // Return
  return card
}

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `https://lambda-times-api.herokuapp.com/articles`
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
  const selected = document.querySelector(selector)
  axios
  // .get('https://lambda-times-api.herokuapp.com/articles')
  // .then((res) => {
  //   res.forEach(element => {
  //     let data = res.data.articles
  //     let card = Card(data)
  //     selected.appendChild(card)
  //   });
  // })
  .get('https://lambda-times-api.herokuapp.com/articles')
  .then((res) => {
    let data = res.data.articles.bootstrap[0, 1, 2]
    let card = Card(data)
    selected.appendChild(card)
    console.log(res.data.articles)
  })
}

export { Card, cardAppender }
