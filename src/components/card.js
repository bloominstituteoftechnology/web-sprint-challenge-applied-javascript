import axios from "axios"
const Card = (article) => {



  const cardWrapper = document.createElement('div')
  const HeadlineDiv = document.createElement('div')
  const authorDiv = document.createElement('div')
  const imageDIv = document.createElement('div')
  const imagetag = document.createElement('img')
  const authorSpan = document.createElement('span')

  cardWrapper.classList.add('card')
  HeadlineDiv.classList.add('headline')
  authorDiv.classList.add('author')
  imageDIv.classList.add('img-container')

  HeadlineDiv.textContent = article.headline
  imagetag.src = article.authorPhoto
  authorSpan.textContent = article.authorName

  cardWrapper.appendChild(HeadlineDiv)
  cardWrapper.appendChild(authorDiv)
  authorDiv.appendChild(imageDIv)
  imageDIv.appendChild(imagetag)
  authorDiv.appendChild(authorSpan)
console.log(cardWrapper)
  return cardWrapper

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
}

const cardAppender = (selector) => {
const URL = 'http://localhost:5001/api/articles/'
axios.get(URL)
.then(res => {
  res.data.articles.javascript.forEach(element => {
    const card = Card(element)
    return document.querySelector(`${selector}`).appendChild(card)
  });
    
  });
  axios.get(URL)
  .then(res => {
    res.data.articles.technology.forEach(element => {
      const card = Card(element)
      return document.querySelector(`${selector}`).appendChild(card)
    })
  })
  axios.get(URL)
  .then(res => {
    res.data.articles.bootstrap.forEach(element => {
      const card = Card(element)
      return document.querySelector(`${selector}`).appendChild(card)
    })
  })
  axios.get(URL)
  .then(res => {
    res.data.articles.jquery.forEach(element => {
      const card = Card(element)
      return document.querySelector(`${selector}`).appendChild(card)
    })
  })
  axios.get(URL)
  .then(res => {
    res.data.articles.node.forEach(element => {
      console.log(res.data.articles)
      const card = Card(element)
      return document.querySelector(`${selector}`).appendChild(card)
    })
  })
  


  //return document.querySelector(`${selector}`).appendChild(Card())
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5001/api/articles` (test it with console.log!!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
}

export { Card, cardAppender }
