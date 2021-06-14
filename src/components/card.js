import axios from 'axios';

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

  const cardBody = document.createElement('div')
  const headLine = document.createElement('div')
  const authorDiv = document.createElement('div')
  const imgContainer = document.createElement('div')
  const authorPhoto = document.createElement('img')
  const authorName = document.createElement('span')

  cardBody.classList.add('card')
  headLine.classList.add('headline')
  authorDiv.classList.add('author')
  imgContainer.classList.add('img-container')

  cardBody.appendChild(headLine)
  cardBody.appendChild(authorDiv)
  cardBody.appendChild(imgContainer)
  cardBody.appendChild(authorPhoto)
  cardBody.appendChild(authorName)

  headLine.textContent = article.headline
  authorPhoto.src = article.authorPhoto
  authorName.textContent = article.authorName

  cardBody.addEventListener('click', () => console.log(article.headline))

  return cardBody; 

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

  const selectedElem = document.querySelector(selector)
  axios.get('https://lambda-times-api.herokuapp.com/articles')
  .then(res => {
    const bootstrap = res.data.articles.bootstrap
    bootstrap.forEach(element => {
      selectedElem.appendChild(Card(element))
    }) 
    const js = res.data.articles.javascript
    js.forEach(element => {
      selectedElem.appendChild(Card(element))
  })
  const tech = res.data.articles.technology
    tech.forEach(element => {
      selectedElem.appendChild(Card(element))
  })
  const jq = res.data.articles.jquery
    jq.forEach(element => {
      selectedElem.appendChild(Card(element))
  })
  const node = res.data.articles.node
    node.forEach(element => {
      selectedElem.appendChild(Card(element))
  })
})
.catch(err => {
  console.log(err)
})
}

export { Card, cardAppender }
